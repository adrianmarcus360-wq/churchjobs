import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ChurchJobs — Church Hiring Without Per-Post Fees",
    template: "%s | ChurchJobs",
  },
  description:
    "Post unlimited church jobs with one flat-fee plan. Built for ministry roles and structured for broader free discovery across the web.",
  openGraph: {
    title: "ChurchJobs — Church Hiring Without Per-Post Fees",
    description:
      "Post unlimited church jobs with one flat-fee plan. Structured for Google for Jobs eligibility and broader free discovery.",
    siteName: "ChurchJobs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChurchJobs — Church Hiring Without Per-Post Fees",
    description:
      "Post unlimited church jobs with one flat-fee plan. Structured for Google for Jobs eligibility and broader free discovery.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CJ</span>
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                ChurchJobs
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="/jobs"
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                Find Jobs
              </a>
              <a
                href="/about"
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                For Churches
              </a>
              <a
                href="/pricing"
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                Pricing
              </a>
              <a
                href="/faq"
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                How It Works
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/employer/dashboard"
                className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                Sign In
              </a>
              <a
                href="/employer/post-job"
                className="bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-800 transition-colors shadow-sm"
              >
                Post a Job
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CJ</span>
                  </div>
                  <span className="text-base font-bold text-white tracking-tight">
                    ChurchJobs
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Church hiring without per-post fees. One plan, unlimited roles,
                  structured for broader free discovery.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-white mb-4 tracking-wide uppercase">
                  For Churches
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
                  </li>
                  <li>
                    <a href="/employer/post-job" className="text-slate-400 hover:text-white transition-colors">Post a Job</a>
                  </li>
                  <li>
                    <a href="/employer/dashboard" className="text-slate-400 hover:text-white transition-colors">Employer Dashboard</a>
                  </li>
                  <li>
                    <a href="/about" className="text-slate-400 hover:text-white transition-colors">How It Works</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-white mb-4 tracking-wide uppercase">
                  For Candidates
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/jobs" className="text-slate-400 hover:text-white transition-colors">Browse All Jobs</a>
                  </li>
                  <li>
                    <a href="/jobs" className="text-slate-400 hover:text-white transition-colors">Pastor Jobs</a>
                  </li>
                  <li>
                    <a href="/jobs" className="text-slate-400 hover:text-white transition-colors">Worship Leader Jobs</a>
                  </li>
                  <li>
                    <a href="/jobs" className="text-slate-400 hover:text-white transition-colors">Youth Ministry Jobs</a>
                  </li>
                  <li>
                    <a href="/jobs" className="text-slate-400 hover:text-white transition-colors">Children&apos;s Ministry Jobs</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-white mb-4 tracking-wide uppercase">
                  Company
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/about" className="text-slate-400 hover:text-white transition-colors">About</a>
                  </li>
                  <li>
                    <a href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
                  </li>
                  <li>
                    <a href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a>
                  </li>
                  <li>
                    <a href="/policies/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/policies/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/feed/jobs.xml" className="text-slate-400 hover:text-white transition-colors">RSS Feed</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} ChurchJobs. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
