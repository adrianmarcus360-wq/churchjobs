import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ChurchJobs — Church Hiring Without Per-Post Fees",
    template: "%s | ChurchJobs",
  },
  description:
    "Post unlimited church jobs with one simple subscription. Faster hiring for pastors, worship leaders, youth ministry, children's ministry, operations, admin, and more.",
  openGraph: {
    title: "ChurchJobs — Church Hiring Without Per-Post Fees",
    description:
      "Post unlimited church jobs with one simple subscription. Structured for Google for Jobs eligibility and broader free discovery.",
    siteName: "ChurchJobs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChurchJobs — Church Hiring Without Per-Post Fees",
    description:
      "Post unlimited church jobs with one simple subscription. Structured for Google for Jobs eligibility and broader free discovery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-900">ChurchJobs</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/jobs" className="text-sm text-gray-600 hover:text-gray-900">
                Browse Jobs
              </a>
              <a href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                How It Works
              </a>
              <a href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
                FAQ
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/employer/dashboard"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Sign In
              </a>
              <a
                href="/employer/post-job"
                className="bg-blue-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Post a Job
              </a>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-blue-900 mb-3">ChurchJobs</h3>
                <p className="text-sm text-gray-600">
                  Church hiring without per-post fees. One plan, unlimited roles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">For Churches</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/pricing" className="hover:text-gray-900">Pricing</a></li>
                  <li><a href="/employer/post-job" className="hover:text-gray-900">Post a Job</a></li>
                  <li><a href="/employer/dashboard" className="hover:text-gray-900">Employer Dashboard</a></li>
                  <li><a href="/about" className="hover:text-gray-900">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">For Candidates</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/jobs" className="hover:text-gray-900">Browse All Jobs</a></li>
                  <li><a href="/jobs/pastor" className="hover:text-gray-900">Pastor Jobs</a></li>
                  <li><a href="/jobs/worship-leader" className="hover:text-gray-900">Worship Leader Jobs</a></li>
                  <li><a href="/jobs/youth-ministry" className="hover:text-gray-900">Youth Ministry Jobs</a></li>
                  <li><a href="/jobs/childrens-ministry" className="hover:text-gray-900">Children's Ministry Jobs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/about" className="hover:text-gray-900">About</a></li>
                  <li><a href="/contact" className="hover:text-gray-900">Contact / Support</a></li>
                  <li><a href="/faq" className="hover:text-gray-900">FAQ</a></li>
                  <li><a href="/policies/terms" className="hover:text-gray-900">Terms of Use</a></li>
                  <li><a href="/policies/privacy" className="hover:text-gray-900">Privacy Policy</a></li>
                  <li><a href="/policies/acceptable-use" className="hover:text-gray-900">Acceptable Use</a></li>
                  <li><a href="/feed/jobs.xml" className="hover:text-gray-900">RSS Feed</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} ChurchJobs. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
