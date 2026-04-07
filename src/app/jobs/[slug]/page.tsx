import type { Metadata } from "next";
import { getJobBySlug, getLiveJobs, getJobsByChurch } from "@/data/sample-jobs";
import { generateJobPostingJsonLd, generateJobOgMeta } from "@/lib/structured-data";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Job Not Found" };
  const og = generateJobOgMeta(job);
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: og.url,
      siteName: og.siteName,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: og.title, description: og.description },
  };
}

export async function generateStaticParams() {
  return getLiveJobs().map((job) => ({ slug: job.slug }));
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const jsonLd = generateJobPostingJsonLd(job);
  const churchJobs = getJobsByChurch(job.church.slug).filter((j) => j.id !== job.id);
  const relatedJobs = getLiveJobs()
    .filter((j) => j.id !== job.id && j.category === job.category)
    .slice(0, 3);

  return (
    <div>
      {/* JSON-LD Structured Data for Google for Jobs eligibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://churchjobs.com" },
                { "@type": "ListItem", position: 2, name: "Jobs", item: "https://churchjobs.com/jobs" },
                { "@type": "ListItem", position: 3, name: job.title, item: `https://churchjobs.com/jobs/${job.slug}` },
              ],
            }),
          }}
        />

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span className="mx-2">›</span>
          <a href="/jobs" className="hover:text-gray-900">Jobs</a>
          <span className="mx-2">›</span>
          <a href={`/jobs/${job.category}`} className="hover:text-gray-900">
            {job.category.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{job.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
              <p className="text-lg text-gray-600 mt-2">{job.church.name}</p>
              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                  📍 {job.location.city}, {job.location.stateCode}
                  {job.location.remote && " (Remote)"}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                  {job.employmentType.replace("_", " ")}
                </span>
                {(job.compensationMin || job.compensationMax) && (
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                    ${job.compensationMin?.toLocaleString()} – ${job.compensationMax?.toLocaleString()}/yr
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Posted {job.datePosted} • Expires {job.validThrough}
              </p>
            </div>

            {/* Description */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Role</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {job.description}
              </div>
            </section>

            {/* Responsibilities */}
            {job.responsibilities && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Responsibilities
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {job.responsibilities}
                </div>
              </section>
            )}

            {/* Qualifications */}
            {job.qualifications && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Qualifications
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {job.qualifications}
                </div>
              </section>
            )}

            {/* About the church */}
            <section className="mb-8 bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                About {job.church.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {job.church.description}
              </p>
              <p className="text-sm text-gray-500">
                📍 {job.location.city}, {job.location.state}
                {job.church.denomination && ` • ${job.church.denomination}`}
              </p>
              {job.church.website && (
                <a
                  href={job.church.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-900 hover:underline mt-2 inline-block"
                >
                  Visit church website →
                </a>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Apply CTA */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Apply for this position</h3>
                {job.applicationUrl ? (
                  <a
                    href={job.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Apply Now →
                  </a>
                ) : job.applicationEmail ? (
                  <a
                    href={`mailto:${job.applicationEmail}?subject=Application: ${job.title}`}
                    className="block text-center bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Apply via Email →
                  </a>
                ) : null}
                <p className="text-xs text-gray-400 mt-3 text-center">
                  You'll be directed to the church's application process
                </p>
              </div>

              {/* More jobs at this church */}
              {churchJobs.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    More jobs at {job.church.name}
                  </h3>
                  <ul className="space-y-3">
                    {churchJobs.map((cj) => (
                      <li key={cj.id}>
                        <a
                          href={`/jobs/${cj.slug}`}
                          className="text-sm text-blue-900 hover:underline"
                        >
                          {cj.title}
                        </a>
                        <p className="text-xs text-gray-500">{cj.employmentType.replace("_", " ")}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Employer CTA */}
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="font-semibold text-blue-900 text-sm mb-2">
                  Hiring at your church?
                </p>
                <p className="text-xs text-gray-600 mb-3">
                  Post unlimited jobs for one flat fee. No per-post charges. Every listing structured for Google for Jobs eligibility.
                </p>
                <a
                  href="/employer/post-job"
                  className="block text-center text-sm bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                >
                  Post a Job
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related jobs */}
        {relatedJobs.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedJobs.map((rj) => (
                <a
                  key={rj.id}
                  href={`/jobs/${rj.slug}`}
                  className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">{rj.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{rj.church.name}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    📍 {rj.location.city}, {rj.location.stateCode}
                  </p>
                  {(rj.compensationMin || rj.compensationMax) && (
                    <p className="text-sm text-gray-500 mt-1">
                      ${rj.compensationMin?.toLocaleString()} – ${rj.compensationMax?.toLocaleString()}/yr
                    </p>
                  )}
                </a>
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="/jobs" className="text-blue-900 font-semibold hover:underline">
                Browse all jobs →
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
