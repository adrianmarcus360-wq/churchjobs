import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — For Churches",
  description: "Learn how ChurchJobs helps churches hire faster with unlimited job postings, flat-fee pricing, and built-in distribution.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How ChurchJobs Works
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            One flat fee, unlimited postings, and every listing structured for
            broader free discovery. Here&apos;s the full picture.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The problem</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Most church job boards charge per post. Need a worship leader? That&apos;s $99–$199. Youth pastor too? Another $99–$199. Admin assistant? Same again. If your church is growing and hiring across multiple roles, those per-post fees add up fast — and you&apos;re paying them every time a position opens.
            </p>
            <p>
              Some boards also charge monthly for resume database access, distribution add-ons, or &quot;featured&quot; placement. The costs multiply, and the value doesn&apos;t always follow.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our approach</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">One plan. Unlimited jobs.</strong> ChurchJobs charges a single flat monthly or annual subscription. Post as many roles as your church needs — all covered under one plan.
            </p>
            <p>
              No per-post fees. No surprise charges. No upsells for distribution or resume access. Simple.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Built-in distribution</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Every job you post gets a dedicated page with valid structured data (JSON-LD). This means your listings are structured for Google for Jobs eligibility and broader free distribution where supported — at no extra cost.
            </p>
            <p>
              We build for eligibility; whether Google or any other site picks a job up is their decision. But we make sure the door is always open.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-8">How posting works</h2>
          <div className="space-y-6">
            {[
              { num: "1", title: "Sign up and choose your plan", desc: "Pick monthly or annual unlimited, or a single 90-day listing if you truly only need one." },
              { num: "2", title: "Post your job", desc: "Enter your church info, role details, location, compensation, and how candidates should apply." },
              { num: "3", title: "We publish and distribute", desc: "Your listing goes live on a dedicated page with structured data, sitemap registration, and feed inclusion." },
              { num: "4", title: "Manage from your dashboard", desc: "Track all your jobs in one place. Edit, close, or archive listings anytime. Post new roles whenever you need." },
            ].map((item) => (
              <div key={item.num} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Support</h2>
          <p className="text-slate-600 leading-relaxed">
            We keep things simple. Support is email-only — no phone calls, no mandatory demos, no sales pressure. Send us a message and we&apos;ll get back to you promptly.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl p-8 sm:p-10 text-center border border-teal-100">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Ready to simplify your hiring?</h2>
          <p className="text-slate-600 mb-6">One plan. Unlimited jobs. No per-post fees.</p>
          <a
            href="/employer/post-job"
            className="bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-800 transition-colors inline-block"
          >
            Start Posting
          </a>
        </div>
      </div>
    </div>
  );
}
