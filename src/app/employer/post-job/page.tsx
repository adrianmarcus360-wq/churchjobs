import type { Metadata } from "next";
import { JOB_CATEGORIES, PRICING_PLANS, US_STATES } from "@/lib/types";

export const metadata: Metadata = {
  title: "Post a Job",
  description: "Post your church job listing in minutes. Unlimited postings with one subscription.",
};

export default function PostJobPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a Church Job</h1>
      <p className="text-gray-600 mb-10">
        Fill in the details below and your listing will be live within 24 hours after review.
      </p>

      <form className="space-y-8">
        {/* Church Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Church Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Church / Organization Name *</label>
              <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Grace Community Church" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Church Website</label>
              <input type="url" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="https://yourchurch.org" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Denomination (optional)</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Baptist, Non-denominational, PCA" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brief Church Description</label>
              <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="A few sentences about your church — helps candidates understand your community" />
            </div>
          </div>
        </section>

        {/* Role Details */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Role Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
              <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Worship Leader, Youth Pastor, Church Administrator" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ministry Area / Department *</label>
              <select required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select a category</option>
                {JOB_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type *</label>
              <select required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="FULL_TIME">Full Time</option>
                <option value="PART_TIME">Part Time</option>
                <option value="CONTRACT">Contract</option>
                <option value="TEMPORARY">Temporary</option>
                <option value="INTERN">Intern</option>
              </select>
            </div>
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Location
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remote" className="rounded border-gray-300 text-blue-900 focus:ring-blue-500" />
              <label htmlFor="remote" className="text-sm text-gray-700">This is a remote position</label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Dallas" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                <select required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select state</option>
                  {US_STATES.map((s) => (
                    <option key={s.code} value={s.code}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Compensation <span className="text-sm font-normal text-gray-500">(optional but encouraged)</span>
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Listings with salary information get significantly more qualified applicants.
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum</label>
                <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 45000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Maximum</label>
                <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 65000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pay Period</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="YEARLY">Per Year</option>
                  <option value="MONTHLY">Per Month</option>
                  <option value="HOURLY">Per Hour</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Job Description
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea rows={8} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the role, your church's culture, what a typical week looks like, and what you're looking for in a candidate..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Responsibilities</label>
              <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="List the primary responsibilities of this role..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications</label>
              <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Required and preferred qualifications..." />
            </div>
          </div>
        </section>

        {/* Application Method */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            How to Apply
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Application URL</label>
              <input type="url" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="https://yourchurch.org/apply" />
              <p className="text-xs text-gray-400 mt-1">Link to your application form or careers page</p>
            </div>
            <div className="text-center text-sm text-gray-500">— or —</div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Application Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="jobs@yourchurch.org" />
              <p className="text-xs text-gray-400 mt-1">Candidates will email their application to this address</p>
            </div>
          </div>
        </section>

        {/* Plan Selection */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Choose Your Plan
          </h2>
          <div className="space-y-3">
            {PRICING_PLANS.map((plan) => (
              <label key={plan.id} className={`block border rounded-lg p-4 cursor-pointer hover:border-blue-300 transition-colors ${plan.highlighted ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="plan" value={plan.id} defaultChecked={plan.highlighted} className="text-blue-900 focus:ring-blue-500" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{plan.name}</span>
                      {plan.highlighted && <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-0.5 rounded">BEST VALUE</span>}
                    </div>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-900">${plan.price}</span>
                    <span className="text-sm text-gray-500">/{plan.interval === "monthly" ? "mo" : plan.interval === "annual" ? "yr" : "once"}</span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Submit */}
        <div className="border-t border-gray-200 pt-6">
          <button type="submit" className="w-full bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors text-lg">
            Submit Job for Review
          </button>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Your listing will be reviewed and published within 24 hours. Payment is processed after review.
          </p>
        </div>
      </form>
    </div>
  );
}
