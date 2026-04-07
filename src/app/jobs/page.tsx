import type { Metadata } from "next";
import { getLiveJobs } from "@/data/sample-jobs";
import { JOB_CATEGORIES, US_STATES } from "@/lib/types";

export const metadata: Metadata = {
  title: "Browse Church Jobs",
  description:
    "Search church job openings — pastors, worship leaders, youth ministry, children's ministry, administrative, operations, and more. Filter by role, location, and employment type.",
};

export default function BrowseJobsPage() {
  const jobs = getLiveJobs();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-gray-900">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-900">Jobs</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Church Job Openings
      </h1>
      <p className="text-gray-600 mb-8">
        {jobs.length} open positions at churches across the country
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-20 space-y-6">
            {/* Category filter */}
            <div>
              <h3 className="font-semibold text-sm text-gray-900 mb-3">Ministry Area</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/jobs" className="text-sm text-blue-900 font-medium hover:underline">
                    All Roles ({jobs.length})
                  </a>
                </li>
                {JOB_CATEGORIES.map((cat) => {
                  const count = jobs.filter((j) => j.category === cat.value).length;
                  if (count === 0) return null;
                  return (
                    <li key={cat.value}>
                      <a
                        href={`/jobs/${cat.value}`}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        {cat.label} ({count})
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Location filter */}
            <div>
              <h3 className="font-semibold text-sm text-gray-900 mb-3">Location</h3>
              <ul className="space-y-1">
                {(() => {
                  const states = [...new Set(jobs.map((j) => j.location.stateCode))].sort();
                  return states.map((sc) => {
                    const stateName = US_STATES.find((s) => s.code === sc)?.name || sc;
                    const count = jobs.filter((j) => j.location.stateCode === sc).length;
                    return (
                      <li key={sc}>
                        <a
                          href={`/jobs/${sc.toLowerCase()}`}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {stateName} ({count})
                        </a>
                      </li>
                    );
                  });
                })()}
              </ul>
            </div>

            {/* Employment type */}
            <div>
              <h3 className="font-semibold text-sm text-gray-900 mb-3">Employment Type</h3>
              <ul className="space-y-1">
                {["FULL_TIME", "PART_TIME"].map((type) => {
                  const count = jobs.filter((j) => j.employmentType === type).length;
                  if (count === 0) return null;
                  return (
                    <li key={type}>
                      <span className="text-sm text-gray-600">
                        {type.replace("_", " ").replace(/\b\w/g, (c: string) => c.toUpperCase())} ({count})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA for employers */}
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-900 mb-2">Hiring?</p>
              <p className="text-xs text-gray-600 mb-3">
                Post unlimited jobs for one flat fee. No per-post charges.
              </p>
              <a
                href="/employer/post-job"
                className="block text-center text-xs bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
              >
                Post a Job
              </a>
            </div>
          </div>
        </aside>

        {/* Job listings */}
        <div className="flex-1">
          <div className="space-y-4">
            {jobs.map((job) => (
              <a
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="block border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-gray-900 text-lg">
                      {job.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {job.church.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      📍 {job.location.city}, {job.location.stateCode}
                      {job.location.remote && " (Remote)"}
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded font-medium">
                      {job.employmentType.replace("_", " ")}
                    </span>
                    {(job.compensationMin || job.compensationMax) && (
                      <p className="text-sm text-gray-500 mt-2">
                        ${job.compensationMin?.toLocaleString()} – $
                        {job.compensationMax?.toLocaleString()}/yr
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {job.description.slice(0, 200)}...
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Posted {job.datePosted}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
