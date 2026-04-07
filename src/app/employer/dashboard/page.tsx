import type { Metadata } from "next";
import { sampleJobs } from "@/data/sample-jobs";

export const metadata: Metadata = {
  title: "Employer Dashboard",
  description: "Manage your church job listings.",
};

export default function EmployerDashboardPage() {
  // Simulated employer view — showing all jobs as if they belong to the logged-in church
  const jobs = sampleJobs;
  const statusColors: Record<string, string> = {
    live: "bg-green-100 text-green-800",
    draft: "bg-gray-100 text-gray-600",
    pending_review: "bg-yellow-100 text-yellow-800",
    expired: "bg-red-100 text-red-800",
    filled: "bg-blue-100 text-blue-800",
    archived: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Jobs</h1>
          <p className="text-sm text-gray-600 mt-1">
            Unlimited Plan — {jobs.filter((j) => j.status === "live").length} active listings
          </p>
        </div>
        <a
          href="/employer/post-job"
          className="bg-blue-900 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          + Post New Job
        </a>
      </div>

      {/* Plan info banner */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-900">Unlimited Annual Plan</p>
          <p className="text-xs text-gray-600">Post as many jobs as you need — no per-post fees. Your plan renews Jan 15, 2027.</p>
        </div>
        <a href="/pricing" className="text-sm text-blue-900 font-medium hover:underline">
          Manage plan
        </a>
      </div>

      {/* Job listing table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Job Title</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Posted</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Expires</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <a href={`/jobs/${job.slug}`} className="font-medium text-gray-900 hover:text-blue-900">
                    {job.title}
                  </a>
                  <p className="text-xs text-gray-500">{job.church.name}</p>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {job.location.city}, {job.location.stateCode}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[job.status] || "bg-gray-100 text-gray-600"}`}>
                    {job.status.replace("_", " ").toUpperCase()}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">{job.datePosted}</td>
                <td className="py-3 px-4 text-gray-500">{job.validThrough}</td>
                <td className="py-3 px-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <button className="text-xs text-blue-900 hover:underline">Edit</button>
                    <button className="text-xs text-gray-500 hover:underline">Close</button>
                    <button className="text-xs text-gray-500 hover:underline">Archive</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {[
          { label: "Active Jobs", value: jobs.filter((j) => j.status === "live").length, color: "text-green-600" },
          { label: "Pending Review", value: 0, color: "text-yellow-600" },
          { label: "Expired", value: 0, color: "text-red-600" },
          { label: "Total Posted", value: jobs.length, color: "text-blue-900" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-gray-50 rounded-lg p-4 text-center">
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="text-xs text-gray-600 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
