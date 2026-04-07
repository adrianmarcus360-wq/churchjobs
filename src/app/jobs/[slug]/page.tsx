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
    openGraph: { title: og.title, description: og.description, url: og.url, siteName: og.siteName, type: "website" },
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

  const daysAgo = Math.max(1, Math.floor(
    (Date.now() - new Date(job.datePosted).getTime()) / (1000 * 60 * 60 * 24)
  ));

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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

      {/* Above-the-fold header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-teal-700">Home</a>
            <span className="text-slate-300">›</span>
            <a href="/jobs" className="hover:text-teal-700">Jobs</a>
            <span className="text-slate-300">›</span>
            <span className="text-slate-700 font-medium truncate">{job.title}</span>
          </nav>

          <div className="flex items-start gap-5">
            {/* Church logo placeholder */}
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold text-slate-400">{job.church.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{job.title}</h1>
              <p className="text-lg text-slate-600 mt-1">{job.church.name}</p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="badge bg-slate-100 text-slate-700">
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location.city}, {job.location.stateCode}
                  {job.location.remote && " (Remote)"}
                </span>
                <span className="badge bg-teal-50 text-teal-800">
                  {job.employmentType.replace("_", " ")}
                </span>
                {(job.compensationMin || job.compensationMax) && (
                  <span className="badge bg-slate-100 text-slate-700">
                    ${job.compensationMin?.toLocaleString()} – ${job.compensationMax?.toLocaleString()}/yr
                  </span>
                )}
                <span className="text-xs text-slate-400">
                  Posted {daysAgo} {daysAgo === 1 ? "day" : "days"} ago
                </span>
              </div>
            </div>
            {/* Apply button (desktop) */}
            <div className="hidden lg:block shrink-0">
              {job.applicationUrl ? (
                <a
                  href={job.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-800 transition-colors text-sm"
                >
                  Apply Now →
                </a>
              ) : job.applicationEmail ? (
                <a
                  href={`mailto:${job.applicationEmail}?subject=Application: ${job.title}`}
                  className="bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-800 transition-colors text-sm"
                >
                  Apply via Email →
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Apply */}
            <div className="lg:hidden mb-8">
              {job.applicationUrl ? (
                <a
                  href={job.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-teal-700 text-white font-semibold py-3.5 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Apply Now →
                </a>
              ) : job.applicationEmail ? (
                <a
                  href={`mailto:${job.applicationEmail}?subject=Application: ${job.title}`}
                  className="block text-center bg-teal-700 text-white font-semibold py-3.5 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Apply via Email →
                </a>
              ) : null}
            </div>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About the Role</h2>
              <div className="text-slate-700 leading-[1.8] whitespace-pre-line text-[0.95rem]">
                {job.description}
              </div>
            </section>

            {job.responsibilities && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Responsibilities</h2>
                <div className="text-slate-700 leading-[1.8] whitespace-pre-line text-[0.95rem]">
                  {job.responsibilities}
                </div>
              </section>
            )}

            {job.qualifications && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Qualifications</h2>
                <div className="text-slate-700 leading-[1.8] whitespace-pre-line text-[0.95rem]">
                  {job.qualifications}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Key Facts Card */}
              <div className="bg-white rounded-2xl border border-slate-200 card-shadow p-6">
                <h3 className="font-bold text-slate-900 mb-4">Key Details</h3>
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Location</dt>
                    <dd className="font-medium text-slate-900">{job.location.city}, {job.location.stateCode}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Type</dt>
                    <dd className="font-medium text-slate-900">{job.employmentType.replace("_", " ")}</dd>
                  </div>
                  {(job.compensationMin || job.compensationMax) && (
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Salary</dt>
                      <dd className="font-medium text-slate-900">
                        ${job.compensationMin?.toLocaleString()} – ${job.compensationMax?.toLocaleString()}/yr
                      </dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Posted</dt>
                    <dd className="font-medium text-slate-900">{job.datePosted}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Expires</dt>
                    <dd className="font-medium text-slate-900">{job.validThrough}</dd>
                  </div>
                </dl>
              </div>

              {/* Church Info Card */}
              <div className="bg-white rounded-2xl border border-slate-200 card-shadow p-6">
                <h3 className="font-bold text-slate-900 mb-3">About {job.church.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{job.church.description}</p>
                <div className="space-y-1.5 text-sm text-slate-500">
                  <p>📍 {job.location.city}, {job.location.state}</p>
                  {job.church.denomination && <p>⛪ {job.church.denomination}</p>}
                </div>
                {job.church.website && (
                  <a
                    href={job.church.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-teal-700 hover:text-teal-800 font-medium mt-3"
                  >
                    Visit church website
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              {/* More jobs at church */}
              {churchJobs.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 card-shadow p-6">
                  <h3 className="font-bold text-slate-900 mb-3">
                    More jobs at {job.church.name}
                  </h3>
                  <ul className="space-y-3">
                    {churchJobs.map((cj) => (
                      <li key={cj.id}>
                        <a href={`/jobs/${cj.slug}`} className="text-sm text-teal-700 hover:text-teal-800 font-medium">
                          {cj.title}
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5">{cj.employmentType.replace("_", " ")}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Employer CTA */}
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <p className="font-bold text-teal-900 text-sm mb-2">Hiring at your church?</p>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Post unlimited jobs for one flat fee. Every listing structured for Google for Jobs eligibility.
                </p>
                <a
                  href="/employer/post-job"
                  className="block text-center text-sm font-semibold bg-teal-700 text-white py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Post a Job
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Jobs */}
        {relatedJobs.length > 0 && (
          <section className="mt-16 pt-10 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedJobs.map((rj) => (
                <a
                  key={rj.id}
                  href={`/jobs/${rj.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-teal-300 hover:card-shadow-hover transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-slate-400">{rj.church.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-slate-900 group-hover:text-teal-700 transition-colors">
                        {rj.title}
                      </h3>
                      <p className="text-xs text-slate-500">{rj.church.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>📍 {rj.location.city}, {rj.location.stateCode}</span>
                    {(rj.compensationMin || rj.compensationMax) && (
                      <span>${rj.compensationMin?.toLocaleString()} – ${rj.compensationMax?.toLocaleString()}/yr</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/jobs" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
                Browse all jobs →
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
