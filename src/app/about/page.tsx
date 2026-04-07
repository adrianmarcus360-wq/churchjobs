import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how ChurchJobs helps churches hire faster with unlimited job postings, flat-fee pricing, and built-in distribution.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">How ChurchJobs Works</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">The problem</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most church job boards charge per post. Need a worship leader? That's $99–$199. Youth pastor too? Another $99–$199. Admin assistant? Same again. If your church is growing and hiring across multiple roles, those per-post fees add up fast — and you're paying them every time a position opens.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Some boards also charge monthly for resume database access, distribution add-ons, or "featured" placement. The costs multiply, and the value doesn't always follow.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our approach</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>One plan. Unlimited jobs.</strong> ChurchJobs charges a single flat monthly or annual subscription. Post as many roles as your church needs — pastor, worship leader, children's ministry director, office administrator, operations manager — all covered under one plan.
        </p>
        <p className="text-gray-600 leading-relaxed">
          No per-post fees. No surprise charges. No upsells for distribution or resume access. Simple.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Built-in distribution</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every job you post gets a dedicated, public job detail page with clean URLs and valid structured data (JSON-LD). This means your listings are structured for Google for Jobs eligibility and broader free distribution where supported — at no extra cost and with no manual syndication required.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          We build for eligibility; whether Google or any other site picks a job up is their decision. But we make sure the door is always open.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Each listing also gets proper social sharing previews (Open Graph and Twitter Card meta tags), an RSS feed entry, and sitemap inclusion — so your jobs can be discovered through organic search, aggregator crawlers, and social channels.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How posting works</h2>
        <ol className="space-y-4">
          {[
            { step: "1", title: "Sign up and choose your plan", desc: "Pick monthly or annual unlimited, or a single 90-day listing if you truly only need one." },
            { step: "2", title: "Post your job", desc: "Enter your church info, role details, location, compensation (optional but encouraged), and how candidates should apply." },
            { step: "3", title: "We publish and distribute", desc: "Your listing goes live on a dedicated page with structured data, sitemap registration, and feed inclusion. Built for free discovery." },
            { step: "4", title: "Manage from your dashboard", desc: "Track all your jobs in one place. Edit, close, or archive listings anytime. Post new roles whenever you need — no extra charge on the unlimited plan." },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Support</h2>
        <p className="text-gray-600 leading-relaxed">
          We keep things simple. Support is email-only — no phone calls, no mandatory demos, no sales pressure. Send us a message and we'll get back to you promptly.
        </p>
      </section>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-3">Ready to simplify your hiring?</h2>
        <p className="text-gray-600 mb-6">One plan. Unlimited jobs. No per-post fees.</p>
        <a href="/employer/post-job" className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors inline-block">
          Start Posting
        </a>
      </div>
    </div>
  );
}
