import type { Metadata } from "next";
import { sampleJobs } from "@/data/sample-jobs";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Internal admin panel for reviewing and managing job listings.",
};

export default function AdminPage() {
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
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-red-800 font-semibold">🔒 Internal Admin Panel — Owner Access Only</p>
        <p className="text-xs text-red-700 mt-1">Review, approve, and manage all job listings on the platform.</p>
      </div>

      <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Job Review Queue</h1>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        {[
          { label: "Pending", value: 0, bg: "bg-amber-50 text-amber-700 border-amber-100" },
          { label: "Live", value: jobs.filter((j) => j.status === "live").length, bg: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { label: "Draft", value: 0, bg: "bg-slate-50 text-slate-500 border-slate-200" },
          { label: "Expired", value: 0, bg: "bg-red-50 text-red-600 border-red-100" },
          { label: "Total", value: jobs.length, bg: "bg-teal-50 text-teal-700 border-teal-100" },
        ].map(({ label, value, bg }) => (
          <div key={label} className={`rounded-xl p-4 text-center border ${bg}`}>
            <p className="text-2xl font-extrabold">{value}</p>
            <p className="text-xs mt-1 font-medium">{label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl card-shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Job</th>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Church</th>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Location</th>
              <th className="text-left py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Status</th>
              <th className="text-right py-3.5 px-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-slate-50/50">
                <td className="py-4 px-5">
                  <a href={`/jobs/${job.slug}`} className="font-medium text-slate-900 hover:text-teal-700" target="_blank">{job.title}</a>
                  <p className="text-xs text-slate-400 mt-0.5">{job.category.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}</p>
                </td>
                <td className="py-4 px-5 text-slate-500">{job.church.name}</td>
                <td className="py-4 px-5 text-slate-500">{job.location.city}, {job.location.stateCode}</td>
                <td className="py-4 px-5">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[job.status]}`}>
                    {job.status.replace("_", " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
                  </span>
                </td>
                <td className="py-4 px-5 text-right">
                  <div className="flex gap-2 justify-end">
                    <button className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 font-medium">Approve</button>
                    <button className="text-xs bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 font-medium">Reject</button>
                    <button className="text-xs text-slate-400 hover:text-slate-600 font-medium">Archive</button>
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
