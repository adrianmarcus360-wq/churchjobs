import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ChurchJobs — pricing, distribution, posting, cancellation, and more.",
};

const faqs = [
  {
    category: "Pricing & Plans",
    items: [
      {
        q: "What does 'unlimited' actually mean?",
        a: "Post as many jobs as you need while your subscription is active. No caps, no per-post fees, no hidden charges. Whether you're hiring for one role or twenty, it's all covered under your plan.",
      },
      {
        q: "How much does ChurchJobs cost?",
        a: "The Unlimited Monthly plan is $99/month. The Unlimited Annual plan is $499/year (saving over $689 vs. monthly). We also offer a single 90-day listing for $299 if you truly only need one posting.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Monthly subscribers can cancel at any time. Your jobs stay live through the end of your billing period. Annual plans run the full 12 months. No long-term contracts, no cancellation fees.",
      },
      {
        q: "Is there a setup fee?",
        a: "No. No setup fees, no onboarding charges, no required demos. Sign up, post jobs, done.",
      },
      {
        q: "Why not just use a free job board?",
        a: "Free boards often lack church-specific categories, structured data for Google for Jobs eligibility, and dedicated job pages. Your listings compete with thousands of unrelated jobs. ChurchJobs is purpose-built for ministry hiring.",
      },
    ],
  },
  {
    category: "Posting & Managing Jobs",
    items: [
      {
        q: "How do I post a job?",
        a: "Sign up, fill in your church info and role details, choose your plan, and publish. The whole process takes a few minutes.",
      },
      {
        q: "Can I edit a job after posting?",
        a: "Yes. You can edit, close, or archive any listing from your employer dashboard at any time.",
      },
      {
        q: "What happens when a job expires?",
        a: "On the unlimited plan, jobs stay live as long as your subscription is active — you control when to close them. Single 90-day listings expire after 90 days. Expired jobs are removed from search and the sitemap, with proper 410 handling.",
      },
      {
        q: "Can I post jobs for multiple campuses?",
        a: "Yes. Post as many jobs as you need across any number of locations. Each gets its own dedicated page.",
      },
    ],
  },
  {
    category: "Distribution & Visibility",
    items: [
      {
        q: "What does 'structured for Google for Jobs eligibility' mean?",
        a: "Every job listing includes valid JobPosting structured data (JSON-LD) following Google's guidelines. This makes your listing eligible to appear in Google's job search experience. We build for eligibility — whether Google or any other site picks a job up is their decision, but we make sure the technical requirements are met.",
      },
      {
        q: "Do you guarantee placement on Google for Jobs?",
        a: "No — and you should be cautious of anyone who does. Google decides what appears in their job search results. What we guarantee is that every listing meets Google's technical requirements for eligibility: valid structured data, clean crawlable URLs, proper sitemap inclusion, and correct expiration handling.",
      },
      {
        q: "Will my jobs appear on Indeed or other job sites?",
        a: "We structure your listings with standard job feeds and structured data that aggregators can crawl. Whether Indeed, ZipRecruiter, or others choose to include your listings is their decision. We don't charge for paid syndication — distribution is through technical compliance and free channels.",
      },
      {
        q: "Do I need to do anything extra for distribution?",
        a: "No. Distribution is automatic and built into every listing. No extra fees, no manual syndication, no add-on packages. Post once, and the architecture handles the rest.",
      },
    ],
  },
  {
    category: "Support & Account",
    items: [
      {
        q: "How do I get support?",
        a: "Email us. We provide email-only support — no phone support, no required demos, no sales calls. We aim to respond within one business day.",
      },
      {
        q: "Do I need to schedule a demo?",
        a: "No. ChurchJobs is fully self-serve. Sign up, post jobs, and manage everything from your dashboard. No demo required.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. We follow industry-standard security practices for data storage and transmission. See our Privacy Policy for details.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-600 mb-10">
        Everything you need to know about ChurchJobs. Can't find what you're looking for?{" "}
        <a href="/contact" className="text-blue-900 hover:underline">
          Contact us
        </a>
        .
      </p>

      <div className="space-y-12">
        {faqs.map((section) => (
          <section key={section.category}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              {section.category}
            </h2>
            <div className="space-y-6">
              {section.items.map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
