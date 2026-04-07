import { PRICING_PLANS, JOB_CATEGORIES } from "@/lib/types";
import { getLiveJobs } from "@/data/sample-jobs";

const CATEGORY_ICONS: Record<string, string> = {
  "pastor": "🙏",
  "executive-pastor": "📋",
  "worship-leader": "🎵",
  "youth-ministry": "🎯",
  "student-ministry": "📚",
  "childrens-ministry": "🧸",
  "administrative": "🏢",
  "operations": "⚙️",
  "communications": "🎨",
  "missions": "🌍",
  "discipleship": "📖",
  "other": "✦",
};

export default function HomePage() {
  const liveJobs = getLiveJobs();
  const jobCount = liveJobs.length;

  return (
    <div>
      {/* Hero + Search */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-slate-50 to-white" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Church hiring without
              <br />
              <span className="text-teal-700">per-post fees.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Post unlimited church jobs on one flat-fee plan. Built for ministry
              roles and structured for broader free discovery across the web.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl">
            <div className="bg-white rounded-2xl search-shadow p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="flex-1 text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                />
              </div>
              <div className="hidden sm:block w-px bg-slate-200 my-2" />
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  className="flex-1 text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                />
              </div>
              <a
                href="/jobs"
                className="bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-800 transition-colors text-sm text-center"
              >
                Search Jobs
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              {jobCount} open positions •{" "}
              <a href="/jobs" className="text-teal-700 hover:underline font-medium">
                Browse all jobs →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* For Churches / For Candidates Split */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 card-shadow hover:card-shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">⛪</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">For Churches</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Post unlimited ministry roles for one flat monthly or annual fee.
                No per-post charges, no surprises. Every listing structured for
                Google for Jobs eligibility and broader free discovery.
              </p>
              <a
                href="/employer/post-job"
                className="inline-flex items-center gap-2 bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-800 transition-colors text-sm"
              >
                Post a Job
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 card-shadow hover:card-shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🔍</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">For Candidates</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Browse church job openings across the country — pastors, worship
                leaders, youth ministry, children&apos;s ministry, operations, admin,
                and more. Free to search, always.
              </p>
              <a
                href="/jobs"
                className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm"
              >
                Browse Jobs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Ministry Area */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Browse by ministry area
            </h2>
            <p className="mt-3 text-slate-600">
              Find church roles in the area that matches your calling
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {JOB_CATEGORIES.filter(cat => cat.value !== "other").map((cat) => {
              const count = liveJobs.filter((j) => j.category === cat.value).length;
              return (
                <a
                  key={cat.value}
                  href={`/jobs`}
                  className="group bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-200 rounded-xl p-5 transition-all"
                >
                  <div className="text-2xl mb-3">{CATEGORY_ICONS[cat.value] || "✦"}</div>
                  <h3 className="font-semibold text-sm text-slate-900 group-hover:text-teal-800">
                    {cat.label}
                  </h3>
                  {count > 0 && (
                    <p className="text-xs text-slate-500 mt-1">{count} open {count === 1 ? "role" : "roles"}</p>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Latest church job openings
              </h2>
              <p className="mt-2 text-slate-600">
                {jobCount} active positions across the country
              </p>
            </div>
            <a
              href="/jobs"
              className="hidden sm:inline-flex text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              View all jobs →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {liveJobs.slice(0, 6).map((job) => {
              const daysAgo = Math.max(1, Math.floor(
                (Date.now() - new Date(job.datePosted).getTime()) / (1000 * 60 * 60 * 24)
              ));
              return (
                <a
                  key={job.id}
                  href={`/jobs/${job.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-teal-300 hover:card-shadow-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Church logo placeholder */}
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-slate-400">
                        {job.church.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-0.5">
                        {job.church.name}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="badge bg-slate-100 text-slate-700">
                          📍 {job.location.city}, {job.location.stateCode}
                        </span>
                        <span className="badge bg-teal-50 text-teal-800">
                          {job.employmentType.replace("_", " ")}
                        </span>
                        {(job.compensationMin || job.compensationMax) && (
                          <span className="badge bg-slate-100 text-slate-700">
                            ${job.compensationMin?.toLocaleString()} – ${job.compensationMax?.toLocaleString()}/yr
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-3">
                        Posted {daysAgo} {daysAgo === 1 ? "day" : "days"} ago
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <a
              href="/jobs"
              className="text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              View all jobs →
            </a>
          </div>
        </div>
      </section>

      {/* Why Churches Switch */}
      <section className="py-16 sm:py-20 bg-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Why churches switch to ChurchJobs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "♾️",
                title: "Flat-Fee Unlimited",
                desc: "One plan covers every role. No per-post fees, no surprise charges, no limits.",
              },
              {
                icon: "🔍",
                title: "Structured for Discovery",
                desc: "Every listing built with valid structured data for Google for Jobs eligibility and broader free distribution.",
              },
              {
                icon: "⛪",
                title: "Built for Ministry",
                desc: "Categories, filters, and language designed for church roles — not generic hiring noise.",
              },
              {
                icon: "✉️",
                title: "Simple & Self-Serve",
                desc: "Post jobs in minutes. Email-only support. No demos, no sales calls, no complexity.",
              },
            ].map((prop) => (
              <div key={prop.title} className="bg-teal-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">{prop.icon}</div>
                <h3 className="font-semibold text-white mb-2">{prop.title}</h3>
                <p className="text-sm text-teal-100 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              One plan. Unlimited jobs.
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              If your church posts more than one job a year, unlimited usually
              costs less than traditional per-post boards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 relative ${
                  plan.highlighted
                    ? "bg-teal-800 text-white ring-2 ring-teal-700 scale-[1.03]"
                    : "bg-white border border-slate-200 card-shadow"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      BEST VALUE
                    </span>
                  </div>
                )}
                <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${plan.highlighted ? "text-teal-200" : "text-slate-500"}`}>
                  {plan.id === "unlimited-monthly" && "For flexible hiring"}
                  {plan.id === "unlimited-annual" && "For churches that hire often"}
                  {plan.id === "single-post" && "For one role only"}
                </p>
                <h3 className={`font-bold text-lg ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <div className={`mt-3 text-3xl font-extrabold ${plan.highlighted ? "text-white" : "text-teal-700"}`}>
                  ${plan.price}
                  <span className={`text-sm font-medium ${plan.highlighted ? "text-teal-200" : "text-slate-500"}`}>
                    /{plan.interval === "monthly" ? "mo" : plan.interval === "annual" ? "yr" : "one-time"}
                  </span>
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${plan.highlighted ? "text-teal-100" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <a
                  href="/employer/post-job"
                  className={`mt-6 block text-center font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm ${
                    plan.highlighted
                      ? "bg-white text-teal-800 hover:bg-teal-50"
                      : "bg-teal-700 text-white hover:bg-teal-800"
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/pricing" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              View full pricing details →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Common questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What does 'unlimited' actually mean?",
                a: "Post as many jobs as you need while your subscription is active. No caps, no per-post fees, no hidden charges.",
              },
              {
                q: "Do you guarantee placement on Google for Jobs?",
                a: "No — and be cautious of anyone who does. We guarantee every listing meets Google's technical requirements for eligibility.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Monthly subscribers cancel anytime. Annual plans run the full 12 months. No contracts, no cancellation fees.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-slate-100 pb-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/faq" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              See all FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to simplify your church hiring?
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              No per-post charges. No complexity. Every listing structured for
              Google for Jobs eligibility and wider free distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/employer/post-job"
                className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors text-base"
              >
                Start Posting Today
              </a>
              <a
                href="/pricing"
                className="border border-slate-600 text-slate-300 font-semibold px-8 py-3 rounded-xl hover:bg-slate-700/50 transition-colors text-base"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
