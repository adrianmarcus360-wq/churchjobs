import type { Metadata } from "next";
import { JOB_CATEGORIES, PRICING_PLANS, US_STATES } from "@/lib/types";

export const metadata: Metadata = {
  title: "Post a Job",
  description: "Post your church job listing in minutes. Unlimited postings with one subscription.",
};

export default function PostJobPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Post a Church Job
        </h1>
        <p className="text-slate-600 mt-2">
          Your listing will be live within 24 hours after review.
        </p>
      </div>

      {/* 3-Step Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-center">
          {[
            { num: "1", label: "Church & Role Details" },
            { num: "2", label: "Choose Your Plan" },
            { num: "3", label: "Review & Publish" },
          ].map((step, idx) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  idx === 0
                    ? "bg-teal-700 text-white"
                    : "bg-slate-100 text-slate-400"
                }`}>
                  {step.num}
                </div>
                <span className={`text-xs mt-2 font-medium ${
                  idx === 0 ? "text-teal-700" : "text-slate-400"
                }`}>
                  {step.label}
                </span>
              </div>
              {idx < 2 && (
                <div className="w-16 sm:w-24 h-px bg-slate-200 mx-3 -mt-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      <form className="space-y-10">
        {/* Church Information */}
        <section className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Church Information</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Church / Organization Name *</label>
              <input type="text" required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="e.g., Grace Community Church" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Church Website</label>
              <input type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="https://yourchurch.org" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Denomination (optional)</label>
              <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="e.g., Baptist, Non-denominational, PCA" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Brief Church Description</label>
              <textarea rows={3} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="A few sentences about your church — helps candidates understand your community" />
            </div>
          </div>
        </section>

        {/* Role Details */}
        <section className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Role Details</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Job Title *</label>
              <input type="text" required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="e.g., Worship Leader, Youth Pastor" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Ministry Area *</label>
                <select required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white">
                  <option value="">Select a category</option>
                  {JOB_CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Employment Type *</label>
                <select required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white">
                  <option value="FULL_TIME">Full Time</option>
                  <option value="PART_TIME">Part Time</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="TEMPORARY">Temporary</option>
                  <option value="INTERN">Intern</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Location</h2>
          <div className="space-y-5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" id="remote" className="rounded border-slate-300 text-teal-700 focus:ring-teal-500 w-4 h-4" />
              <span className="text-sm text-slate-700">This is a remote position</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">City *</label>
                <input type="text" required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="e.g., Dallas" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">State *</label>
                <select required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white">
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
        <section className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-1">Compensation</h2>
          <p className="text-sm text-slate-500 mb-6">Optional but encouraged — listings with salary get more qualified applicants.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Minimum</label>
              <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="e.g., 45000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Maximum</label>
              <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="e.g., 65000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Pay Period</label>
              <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white">
                <option value="YEARLY">Per Year</option>
                <option value="MONTHLY">Per Month</option>
                <option value="HOURLY">Per Hour</option>
              </select>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Job Description</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Description *</label>
              <textarea rows={8} required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="Describe the role, your church's culture, what a typical week looks like, and what you're looking for..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Key Responsibilities</label>
              <textarea rows={5} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="List the primary responsibilities of this role..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Qualifications</label>
              <textarea rows={5} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="Required and preferred qualifications..." />
            </div>
          </div>
        </section>

        {/* Application Method */}
        <section className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">How to Apply</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Application URL</label>
              <input type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="https://yourchurch.org/apply" />
              <p className="text-xs text-slate-400 mt-1.5">Link to your application form or careers page</p>
            </div>
            <div className="text-center text-sm text-slate-400 py-1">— or —</div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Application Email</label>
              <input type="email" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="jobs@yourchurch.org" />
              <p className="text-xs text-slate-400 mt-1.5">Candidates will email their application to this address</p>
            </div>
          </div>
        </section>

        {/* Plan Selection */}
        <section className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Choose Your Plan</h2>
          <div className="space-y-3">
            {PRICING_PLANS.map((plan) => (
              <label
                key={plan.id}
                className={`block border-2 rounded-xl p-5 cursor-pointer transition-all ${
                  plan.highlighted
                    ? "border-teal-500 bg-teal-50/50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    defaultChecked={plan.highlighted}
                    className="text-teal-700 focus:ring-teal-500 w-4 h-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900">{plan.name}</span>
                      {plan.highlighted && (
                        <span className="bg-amber-400 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full">
                          BEST VALUE
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mt-0.5">{plan.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-extrabold text-teal-700">${plan.price}</span>
                    <span className="text-sm text-slate-500">
                      /{plan.interval === "monthly" ? "mo" : plan.interval === "annual" ? "yr" : "once"}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-teal-700 text-white font-semibold py-4 px-6 rounded-xl hover:bg-teal-800 transition-colors text-base shadow-sm"
          >
            Submit Job for Review
          </button>
          <p className="text-xs text-slate-400 mt-3 text-center">
            Your listing will be reviewed and published within 24 hours. Payment is processed after review.
          </p>
        </div>
      </form>
    </div>
  );
}
