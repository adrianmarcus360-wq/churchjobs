import type { Metadata } from "next";
import { sampleJobs } from "@/data/sample-jobs";

export const metadata: Metadata = {
  title: "Employer Dashboard",
  description: "Manage your church job listings.",
};

export default function EmployerDashboardPage() {
  const jobs = sampleJobs;
  const statusStyles: Record<string, string> = {
    live: "bg-emerald-50 text-emerald-700 border-emerald-200",
    draft: "bg-slate-50 text-slate-500 border-slate-200",
    pending_review: "bg-amber-50 text-amber-700 border-amber-200",
    expired: "bg-red-50 text-red-700 border-red-200",
    filled: "bg-blue-50 text-blue-700 border-blue-200",
    archived: "bg-slate-50 text-slate-400 border-slate-200",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">My Jobs</h1>
          <p className="text-sm text-slate-500 mt-1">
            Unlimited Plan — {jobs.filter((j) => j.status === "live").length} active listings
          </p>
        </div>
        <a href="/employer/post-job" className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm shadow-sm">
          + Post New Job
        </a>
      </div>

      {/* Plan banner */}
      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-teal-900">Unlimited Annual Plan</p>
          <p className="text-xs text-slate-600 mt-0.5">Post as many jobs as you need. Your plan renews Jan 15, 2027.</p>
        </div>
        <a href="/pricing" className="text-sm text-teal-700 font-medium hover:text-teal-800">Manage plan</a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Jobs", value: jobs.filter((j) => j.status === "live").length, color: "text-emerald-600" },
          { label: "Pending Review", value: 0, color: "text-amber-600" },
          { label: "Expired", value: 0, color: "text-red-500" },
          { label: "Total Posted", value: jobs.length, color: "text-teal-700" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl border border-slate-200 card-shadow p-5 text-center">
            <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
            <p className="text-xs text-slate-500 mt-1 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl card-shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Job Title</th>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Location</th>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Status</th>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Posted</th>
              <th className="text-right py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-slate-50/50">
                <td className="py-4 px-5">
                  <a href={`/jobs/${job.slug}`} className="font-medium text-slate-900 hover:text-teal-700">
                    {job.title}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">{job.church.name}</p>
                </td>
                <td className="py-4 px-5 text-slate-500">{job.location.city}, {job.location.stateCode}</td>
                <td className="py-4 px-5">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[job.status] || "bg-slate-50 text-slate-500 border-slate-200"}`}>
                    {job.status.replace("_", " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
                  </span>
                </td>
                <td className="py-4 px-5 text-slate-400 text-xs">{job.datePosted}</td>
                <td className="py-4 px-5 text-right">
                  <div className="flex gap-3 justify-end">
                    <button className="text-xs text-teal-700 hover:text-teal-800 font-medium">Edit</button>
                    <button className="text-xs text-slate-400 hover:text-slate-600 font-medium">Close</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
