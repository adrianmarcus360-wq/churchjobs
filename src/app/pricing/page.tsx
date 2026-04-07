import type { Metadata } from "next";
import { PRICING_PLANS } from "@/lib/types";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One plan, unlimited church job postings. $99/month or save 50%+ with annual billing. No per-post fees.",
};

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          One plan. Unlimited jobs.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          If your church posts more than one job a year, unlimited usually costs
          less than traditional per-post boards.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-8 relative ${
              plan.highlighted
                ? "bg-teal-800 text-white ring-2 ring-teal-700"
                : "bg-white border border-slate-200 card-shadow"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                  BEST VALUE — Save $689+/yr
                </span>
              </div>
            )}
            <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${plan.highlighted ? "text-teal-200" : "text-slate-500"}`}>
              {plan.id === "unlimited-monthly" && "For flexible month-to-month hiring"}
              {plan.id === "unlimited-annual" && "For churches that hire more than once a year"}
              {plan.id === "single-post" && "For churches truly filling one role"}
            </p>
            <h2 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
              {plan.name}
            </h2>
            <div className={`mt-4 text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-teal-700"}`}>
              ${plan.price}
              <span className={`text-base font-medium ${plan.highlighted ? "text-teal-200" : "text-slate-500"}`}>
                /{plan.interval === "monthly" ? "month" : plan.interval === "annual" ? "year" : "one-time"}
              </span>
            </div>
            {plan.interval === "annual" && (
              <p className={`mt-1 text-sm ${plan.highlighted ? "text-teal-200" : "text-slate-500"}`}>
                That&apos;s ~$41.58/month
              </p>
            )}
            <p className={`mt-3 text-sm leading-relaxed ${plan.highlighted ? "text-teal-100" : "text-slate-600"}`}>
              {plan.id === "unlimited-monthly"
                ? "Unlimited jobs, cancel anytime. Best for churches with flexible hiring needs."
                : plan.id === "unlimited-annual"
                ? "Same unlimited access — lock in your rate and save over 50%."
                : "One job listing, live for 90 days. Only if you truly need just one posting."}
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start text-sm ${plan.highlighted ? "text-teal-100" : "text-slate-600"}`}
                >
                  <span className={`mr-2.5 mt-0.5 ${plan.highlighted ? "text-amber-400" : "text-teal-600"}`}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="/employer/post-job"
              className={`mt-8 block text-center font-semibold py-3 px-6 rounded-xl transition-colors ${
                plan.highlighted
                  ? "bg-white text-teal-800 hover:bg-teal-50"
                  : "bg-teal-700 text-white hover:bg-teal-800"
              }`}
            >
              {plan.interval === "one-time" ? "Buy Single Listing" : "Choose Plan"}
            </a>
          </div>
        ))}
      </div>

      {/* Comparison Box */}
      <div className="bg-white rounded-2xl border border-slate-200 card-shadow p-8 sm:p-10 mb-20">
        <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
          How we compare to per-post boards
        </h3>
        <p className="text-sm text-slate-500 text-center mb-8">
          Most church job boards charge $99–$199 per listing. Here&apos;s the math.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-900">Scenario</th>
                <th className="text-center py-3 px-4 font-bold text-teal-700">ChurchJobs</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-500">Typical Per-Post Board</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["1 job per year", "$99/mo or $499/yr", "$99–199"],
                ["3 jobs per year", "$99/mo or $499/yr", "$297–597"],
                ["5 jobs per year", "$99/mo or $499/yr", "$495–995"],
                ["10 jobs per year", "$99/mo or $499/yr", "$990–1,990"],
                ["Google for Jobs structured data", "✓ Built in", "Varies"],
                ["Resume database upsell", "Not needed", "$50–150/mo extra"],
                ["Contracts", "None — cancel anytime", "Often required"],
              ].map(([feature, ours, theirs]) => (
                <tr key={feature}>
                  <td className="py-3 px-4 text-slate-700 font-medium">{feature}</td>
                  <td className="py-3 px-4 text-center font-semibold text-teal-700">{ours}</td>
                  <td className="py-3 px-4 text-center text-slate-500">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">
          Common pricing questions
        </h3>
        <div className="space-y-6">
          {[
            {
              q: "What does 'unlimited' actually mean?",
              a: "Post as many jobs as you need while your subscription is active. No caps, no per-post fees, no hidden charges. One pastor role, five youth ministry positions, ten admin jobs — all covered.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Monthly subscribers can cancel at any time. Your jobs stay live through the end of your billing period. Annual plans run the full 12 months.",
            },
            {
              q: "What happens when a job listing expires?",
              a: "Listings on the unlimited plan stay live as long as your subscription is active. You can close or archive a job at any time. Single 90-day listings expire after 90 days.",
            },
            {
              q: "Is there a setup fee or long-term contract?",
              a: "No. You sign up, post jobs, and manage everything through your dashboard. No contracts, no setup fees, no required demos.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-slate-100 pb-5">
              <h4 className="font-semibold text-slate-900 mb-2">{q}</h4>
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
    </div>
  );
}
