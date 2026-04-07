import type { Metadata } from "next";
import { PRICING_PLANS } from "@/lib/types";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One plan, unlimited church job postings. $99/month or save 50%+ with annual billing. No per-post fees.",
};

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          One plan. Unlimited jobs.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Stop paying per post every time a role opens up. One flat fee covers
          every position your church needs to fill.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-8 ${
              plan.highlighted
                ? "bg-blue-900 text-white ring-2 ring-blue-900 relative"
                : "bg-white border border-gray-200"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE — Save $689+/yr
                </span>
              </div>
            )}
            <h2
              className={`text-xl font-bold ${
                plan.highlighted ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.name}
            </h2>
            <div
              className={`mt-4 text-4xl font-bold ${
                plan.highlighted ? "text-white" : "text-blue-900"
              }`}
            >
              ${plan.price}
              <span
                className={`text-base font-normal ${
                  plan.highlighted ? "text-blue-200" : "text-gray-500"
                }`}
              >
                /
                {plan.interval === "monthly"
                  ? "month"
                  : plan.interval === "annual"
                  ? "year"
                  : "one-time"}
              </span>
            </div>
            {plan.interval === "annual" && (
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-blue-200" : "text-gray-500"
                }`}
              >
                That's ~$41.58/month
              </p>
            )}
            <p
              className={`mt-3 text-sm ${
                plan.highlighted ? "text-blue-200" : "text-gray-600"
              }`}
            >
              {plan.description}
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start text-sm ${
                    plan.highlighted ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  <span
                    className={`mr-2 ${
                      plan.highlighted ? "text-yellow-400" : "text-green-500"
                    }`}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="/employer/post-job"
              className={`mt-8 block text-center font-semibold py-3 px-6 rounded-lg transition-colors ${
                plan.highlighted
                  ? "bg-white text-blue-900 hover:bg-blue-50"
                  : "bg-blue-900 text-white hover:bg-blue-800"
              }`}
            >
              {plan.interval === "one-time" ? "Buy Single Listing" : "Get Started"}
            </a>
          </div>
        ))}
      </div>

      {/* Comparison with incumbents */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          How we compare
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-900">ChurchJobs</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-500">Typical Church Job Board</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Unlimited postings", "✓ Included", "$99–199 per post"],
                ["Monthly cost for 3 jobs", "$99 flat", "$297–597+"],
                ["Monthly cost for 10 jobs", "$99 flat", "$990–1,990+"],
                ["Google for Jobs eligibility", "✓ Built in", "Varies"],
                ["Dedicated job pages", "✓ Clean, SEO-optimized", "Sometimes"],
                ["Resume database upsell", "Not needed", "$50–150/mo extra"],
                ["Long-term contracts", "None — cancel anytime", "Often required"],
                ["Support model", "Email (fast, simple)", "Phone/email/demos"],
              ].map(([feature, ours, theirs]) => (
                <tr key={feature}>
                  <td className="py-3 px-4 text-gray-700">{feature}</td>
                  <td className="py-3 px-4 text-center font-medium text-blue-900">{ours}</td>
                  <td className="py-3 px-4 text-center text-gray-500">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ excerpt */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
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
            <div key={q} className="border-b border-gray-100 pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">{q}</h4>
              <p className="text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/faq" className="text-blue-900 font-medium hover:underline">
            See all FAQs →
          </a>
        </div>
      </div>
    </div>
  );
}
