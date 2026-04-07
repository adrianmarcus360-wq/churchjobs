import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 not-prose">
        <p className="text-sm text-yellow-800"><strong>DRAFT — PLACEHOLDER FOR LEGAL REVIEW</strong><br />This document is a draft template. It must be reviewed and approved by qualified legal counsel before publication.</p>
      </div>

      <h1>Terms of Use</h1>
      <p><em>Last updated: [DATE]</em></p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using ChurchJobs ("the Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the Service.</p>

      <h2>2. Description of Service</h2>
      <p>ChurchJobs is an online job board platform designed for churches and ministry organizations to post job listings and for candidates to discover church employment opportunities.</p>

      <h2>3. Accounts</h2>
      <p>To post jobs, you must create an account with accurate, current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

      <h2>4. Subscription Plans</h2>
      <p>ChurchJobs offers subscription plans (monthly and annual) and one-time listing options. Prices are listed on our Pricing page and may be updated with reasonable notice. Subscriptions auto-renew unless cancelled before the renewal date.</p>

      <h2>5. Cancellation & Refunds</h2>
      <p>Monthly subscriptions may be cancelled at any time; access continues through the end of the billing period. Annual subscriptions run for the full 12-month term. Refund requests will be considered on a case-by-case basis.</p>

      <h2>6. Content Guidelines</h2>
      <p>All job listings must be for legitimate church or ministry positions. We reserve the right to review, edit, or remove any listing that violates our Acceptable Use Policy or these Terms.</p>

      <h2>7. Distribution & Visibility</h2>
      <p>We structure job listings with valid structured data and make them available for indexing and distribution. We do not guarantee placement on any third-party platform, including Google for Jobs, Indeed, or any other job aggregator.</p>

      <h2>8. Limitation of Liability</h2>
      <p>ChurchJobs is provided "as is." We are not responsible for hiring outcomes, candidate quality, or third-party platform decisions regarding indexing or display of job listings. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.</p>

      <h2>9. Modifications</h2>
      <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>

      <h2>10. Contact</h2>
      <p>Questions about these Terms? Email us at <a href="mailto:support@churchjobs.com">support@churchjobs.com</a>.</p>
    </div>
  );
}
