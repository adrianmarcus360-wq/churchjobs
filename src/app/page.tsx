import { PRICING_PLANS, JOB_CATEGORIES } from "@/lib/types";
import { getLiveJobs } from "@/data/sample-jobs";

export default function HomePage() {
  const liveJobs = getLiveJobs();
  const jobCount = liveJobs.length;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
            Church hiring without per-post fees.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Post unlimited church jobs with one simple subscription. Faster
            hiring for pastors, worship leaders, student ministry, children's
            ministry, operations, admin, and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/employer/post-job"
              className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors text-lg"
            >
              Start Posting
            </a>
            <a
              href="/pricing"
              className="border-2 border-blue-900 text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            Why churches choose ChurchJobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "♾️",
                title: "Unlimited Job Postings",
                desc: "One plan covers every role you need to fill. No per-post fees, no surprise charges, no limits.",
              },
              {
                icon: "🔍",
                title: "Structured for Free Discovery",
                desc: "Every listing is built with valid structured data for Google for Jobs eligibility and broader free distribution where supported.",
              },
              {
                icon: "⛪",
                title: "Built for Churches",
                desc: "Categories, filters, and language designed for ministry roles — not generic hiring noise.",
              },
              {
                icon: "✉️",
                title: "Simple & Self-Serve",
                desc: "Post jobs in minutes. Email-only support. No demos, no sales calls, no complexity.",
              },
            ].map((prop) => (
              <div key={prop.title} className="text-center p-6">
                <div className="text-4xl mb-4">{prop.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{prop.title}</h3>
                <p className="text-sm text-gray-600">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            One plan. Unlimited jobs.
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Stop paying per post every time a role opens up. One flat fee covers
            everything.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl p-6 ${
                  plan.highlighted
                    ? "bg-blue-900 text-white ring-2 ring-blue-900 scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                    BEST VALUE
                  </span>
                )}
                <h3 className={`font-bold text-lg ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className={`mt-2 text-3xl font-bold ${plan.highlighted ? "text-white" : "text-blue-900"}`}>
                  ${plan.price}
                  <span className={`text-sm font-normal ${plan.highlighted ? "text-blue-200" : "text-gray-500"}`}>
                    /{plan.interval === "monthly" ? "mo" : plan.interval === "annual" ? "yr" : "one-time"}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-blue-200" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <a
                  href="/employer/post-job"
                  className={`mt-4 block text-center font-semibold py-2 px-4 rounded-lg transition-colors ${
                    plan.highlighted
                      ? "bg-white text-blue-900 hover:bg-blue-50"
                      : "bg-blue-900 text-white hover:bg-blue-800"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <a href="/pricing" className="inline-block mt-6 text-blue-900 font-medium hover:underline">
            View full pricing details →
          </a>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Latest church job openings
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {jobCount} active positions across the country
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {liveJobs.slice(0, 6).map((job) => (
              <a
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="block border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {job.church.name} • {job.location.city}, {job.location.stateCode}
                    </p>
                  </div>
                  <span className="text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded font-medium">
                    {job.employmentType.replace("_", " ")}
                  </span>
                </div>
                {(job.compensationMin || job.compensationMax) && (
                  <p className="text-sm text-gray-500 mt-2">
                    ${job.compensationMin?.toLocaleString()} – ${job.compensationMax?.toLocaleString()}/yr
                  </p>
                )}
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/jobs"
              className="text-blue-900 font-semibold hover:underline"
            >
              Browse all jobs →
            </a>
          </div>
        </div>
      </section>

      {/* CTA for Churches */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Hiring? Post unlimited jobs for one flat fee.
          </h2>
          <p className="text-blue-200 mb-8">
            No per-post charges. No complexity. Every listing structured for
            Google for Jobs eligibility and wider free distribution.
          </p>
          <a
            href="/employer/post-job"
            className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg inline-block"
          >
            Start Posting Today
          </a>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Browse by ministry area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {JOB_CATEGORIES.map((cat) => (
              <a
                key={cat.value}
                href={`/jobs/${cat.value}`}
                className="border border-gray-200 rounded-lg p-4 text-center text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-900 transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
