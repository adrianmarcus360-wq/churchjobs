import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Get in touch with ChurchJobs. Email-only support — no phone calls, no demos required.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Support
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Email us and we&apos;ll get back to you promptly — usually within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 card-shadow p-6">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">📧</span>
            </div>
            <h2 className="font-bold text-slate-900 mb-2">Email Support</h2>
            <p className="text-sm text-slate-600 mb-3">For all support questions, billing inquiries, and general feedback.</p>
            <a href="mailto:support@churchjobs.com" className="text-teal-700 font-medium hover:text-teal-800 text-sm">
              support@churchjobs.com
            </a>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 card-shadow p-6">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">💼</span>
            </div>
            <h2 className="font-bold text-slate-900 mb-2">Business Inquiries</h2>
            <p className="text-sm text-slate-600 mb-3">For partnerships, press, or business development.</p>
            <a href="mailto:hello@churchjobs.com" className="text-teal-700 font-medium hover:text-teal-800 text-sm">
              hello@churchjobs.com
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 card-shadow p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Send us a message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input type="email" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white" placeholder="you@church.org" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
              <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white">
                <option>General question</option>
                <option>Billing / pricing</option>
                <option>Technical issue</option>
                <option>Feedback</option>
                <option>Business inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
              <textarea rows={5} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white" placeholder="How can we help?" />
            </div>
            <button type="submit" className="bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-800 transition-colors text-sm">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> ChurchJobs is email-only support. We do not offer phone support or require demos. This keeps our costs low so we can pass the savings on to you.
          </p>
        </div>
      </div>
    </div>
  );
}
