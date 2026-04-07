import type { Metadata } from "next";
import { sampleJobs } from "@/data/sample-jobs";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Internal admin panel for reviewing and managing job listings.",
};

export default function AdminPage() {
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
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-red-800 font-semibold">🔒 Internal Admin Panel — Owner Access Only</p>
        <p className="text-xs text-red-700 mt-1">This panel is for reviewing, approving, and managing all job listings on the platform.</p>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Job Review Queue</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        {[
          { label: "Pending Review", value: 0, color: "bg-yellow-50 text-yellow-800" },
          { label: "Live", value: jobs.filter((j) => j.status === "live").length, color: "bg-green-50 text-green-800" },
          { label: "Draft", value: 0, color: "bg-gray-50 text-gray-600" },
          { label: "Expired", value: 0, color: "bg-red-50 text-red-800" },
          { label: "Total All-Time", value: jobs.length, color: "bg-blue-50 text-blue-900" },
        ].map(({ label, value, color }) => (
          <div key={label} className={`rounded-lg p-4 text-center ${color}`}>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Review table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Job Title</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Church</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Submitted</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <a href={`/jobs/${job.slug}`} className="font-medium text-gray-900 hover:text-blue-900" target="_blank">
                    {job.title}
                  </a>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  <a href={job.church.website || "#"} target="_blank" className="hover:underline">
                    {job.church.name}
                  </a>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {job.location.city}, {job.location.stateCode}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {job.category.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}>
                    {job.status.replace("_", " ").toUpperCase()}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">{job.datePosted}</td>
                <td className="py-3 px-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <button className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Approve</button>
                    <button className="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Reject</button>
                    <button className="text-xs text-gray-500 hover:underline">Mark Filled</button>
                    <button className="text-xs text-gray-500 hover:underline">Extend</button>
                    <button className="text-xs text-gray-500 hover:underline">Expire</button>
                    <button className="text-xs text-gray-500 hover:underline">Archive</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Admin notes */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h2 className="font-semibold text-gray-900 mb-3">Admin Workflow Notes</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• <strong>Pending Review</strong>: New submissions appear here. Review for content quality, legitimacy, and policy compliance.</li>
          <li>• <strong>Approve</strong>: Publishes the job to the public site with full structured data and sitemap inclusion.</li>
          <li>• <strong>Reject</strong>: Sends the listing back with feedback. The church can edit and resubmit.</li>
          <li>• <strong>Mark Filled</strong>: Keeps the listing in records but removes from public search. Updates structured data expiration.</li>
          <li>• <strong>Extend</strong>: Resets the validThrough date for another 90-day period.</li>
          <li>• <strong>Expire</strong>: Manually expires a listing. Returns proper 410 status, removes from sitemap.</li>
          <li>• <strong>Archive</strong>: Moves to long-term storage. Not visible to anyone except in admin archives.</li>
        </ul>
      </div>
    </div>
  );
}
