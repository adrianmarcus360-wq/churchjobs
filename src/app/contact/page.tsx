import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Get in touch with ChurchJobs. Email-only support — no phone calls, no demos required.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact & Support</h1>
      <p className="text-gray-600 mb-10">
        We keep support simple. Email us and we'll get back to you promptly — usually within one business day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 mb-3">📧 Email Support</h2>
          <p className="text-sm text-gray-600 mb-3">
            For all support questions, billing inquiries, and general feedback.
          </p>
          <a href="mailto:support@churchjobs.com" className="text-blue-900 font-medium hover:underline">
            support@churchjobs.com
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 mb-3">💼 Business Inquiries</h2>
          <p className="text-sm text-gray-600 mb-3">
            For partnerships, press, or business development.
          </p>
          <a href="mailto:hello@churchjobs.com" className="text-blue-900 font-medium hover:underline">
            hello@churchjobs.com
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div className="border border-gray-200 rounded-xl p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="you@church.org" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>General question</option>
              <option>Billing / pricing</option>
              <option>Technical issue</option>
              <option>Feedback</option>
              <option>Business inquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="How can we help?" />
          </div>
          <button type="submit" className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> ChurchJobs is email-only support. We do not offer phone support or require demos. This keeps our costs low so we can pass the savings on to you.
        </p>
      </div>
    </div>
  );
}
