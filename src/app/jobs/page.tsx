import type { Metadata } from "next";
import { getLiveJobs } from "@/data/sample-jobs";
import { JOB_CATEGORIES, US_STATES } from "@/lib/types";

export const metadata: Metadata = {
  title: "Browse Church Jobs",
  description:
    "Search church job openings — pastors, worship leaders, youth ministry, children's ministry, administrative, operations, and more.",
};

export default function BrowseJobsPage() {
  const jobs = getLiveJobs();

  return (
    <div>
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Church Job Openings
          </h1>
          {/* Search Bar */}
          <div className="bg-slate-50 rounded-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-3xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Job title or keyword" className="flex-1 text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent" />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input type="text" placeholder="City, state, or remote" className="flex-1 text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent" />
            </div>
            <button className="bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results context + sort */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">{jobs.length} jobs</span> found
          </p>
          <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-600 bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            <option>Newest first</option>
            <option>Oldest first</option>
            <option>Salary: High to Low</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-20 space-y-8">
              {/* Ministry Area */}
              <div>
                <h3 className="font-semibold text-sm text-slate-900 mb-3">Ministry Area</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="rounded border-slate-300 text-teal-700 focus:ring-teal-500 w-4 h-4" defaultChecked />
                    <span className="text-sm text-slate-700 group-hover:text-teal-700">All Roles</span>
                    <span className="text-xs text-slate-400 ml-auto">{jobs.length}</span>
                  </label>
                  {JOB_CATEGORIES.map((cat) => {
                    const count = jobs.filter((j) => j.category === cat.value).length;
                    if (count === 0) return null;
                    return (
                      <label key={cat.value} className="flex items-center gap-2.5 cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-teal-700 focus:ring-teal-500 w-4 h-4" />
                        <span className="text-sm text-slate-600 group-hover:text-teal-700">{cat.label}</span>
                        <span className="text-xs text-slate-400 ml-auto">{count}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-semibold text-sm text-slate-900 mb-3">Location</h3>
                <div className="space-y-2">
                  {(() => {
                    const states = [...new Set(jobs.map((j) => j.location.stateCode))].sort();
                    return states.map((sc) => {
                      const stateName = US_STATES.find((s) => s.code === sc)?.name || sc;
                      const count = jobs.filter((j) => j.location.stateCode === sc).length;
                      return (
                        <label key={sc} className="flex items-center gap-2.5 cursor-pointer group">
                          <input type="checkbox" className="rounded border-slate-300 text-teal-700 focus:ring-teal-500 w-4 h-4" />
                          <span className="text-sm text-slate-600 group-hover:text-teal-700">{stateName}</span>
                          <span className="text-xs text-slate-400 ml-auto">{count}</span>
                        </label>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Employment Type */}
              <div>
                <h3 className="font-semibold text-sm text-slate-900 mb-3">Employment Type</h3>
                <div className="space-y-2">
                  {["FULL_TIME", "PART_TIME", "CONTRACT"].map((type) => {
                    const count = jobs.filter((j) => j.employmentType === type).length;
                    if (count === 0) return null;
                    const label = type.replace("_", " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
                    return (
                      <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-teal-700 focus:ring-teal-500 w-4 h-4" />
                        <span className="text-sm text-slate-600 group-hover:text-teal-700">{label}</span>
                        <span className="text-xs text-slate-400 ml-auto">{count}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Employer CTA */}
              <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                <p className="font-semibold text-teal-900 text-sm mb-2">Hiring at your church?</p>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Post unlimited jobs for one flat fee. No per-post charges.
                </p>
                <a
                  href="/employer/post-job"
                  className="block text-center text-xs font-semibold bg-teal-700 text-white py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Post a Job
                </a>
              </div>
            </div>
          </aside>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="space-y-3">
              {jobs.map((job) => {
                const daysAgo = Math.max(1, Math.floor(
                  (Date.now() - new Date(job.datePosted).getTime()) / (1000 * 60 * 60 * 24)
                ));
                return (
                  <a
                    key={job.id}
                    href={`/jobs/${job.slug}`}
                    className="group block bg-white rounded-xl border border-slate-200 p-5 sm:p-6 hover:border-teal-300 hover:card-shadow-hover transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Logo placeholder */}
                      <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-base font-bold text-slate-400">
                          {job.church.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h2 className="font-semibold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                              {job.title}
                            </h2>
                            <p className="text-sm text-slate-600 mt-0.5">
                              {job.church.name}
                            </p>
                          </div>
                          <span className="badge bg-teal-50 text-teal-800 shrink-0">
                            {job.employmentType.replace("_", " ")}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location.city}, {job.location.stateCode}
                          </span>
                          {(job.compensationMin || job.compensationMax) && (
                            <span>
                              ${job.compensationMin?.toLocaleString()} – ${job.compensationMax?.toLocaleString()}/yr
                            </span>
                          )}
                          <span className="text-slate-400">{daysAgo}d ago</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-3 line-clamp-2 leading-relaxed">
                          {job.description.slice(0, 180)}...
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
