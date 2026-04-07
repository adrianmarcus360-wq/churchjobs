import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 not-prose">
        <p className="text-sm text-yellow-800"><strong>DRAFT — PLACEHOLDER FOR LEGAL REVIEW</strong><br />This document is a draft template. It must be reviewed and approved by qualified legal counsel before publication.</p>
      </div>

      <h1>Privacy Policy</h1>
      <p><em>Last updated: [DATE]</em></p>

      <h2>1. Information We Collect</h2>
      <p><strong>Account Information:</strong> When you create an account, we collect your name, email address, church/organization name, and billing information.</p>
      <p><strong>Job Listing Data:</strong> Information you provide in job postings, including role details, location, compensation, and application instructions.</p>
      <p><strong>Usage Data:</strong> We collect standard web analytics data including pages visited, browser type, IP address, and referring URLs.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To process payments and manage subscriptions</li>
        <li>To publish and distribute job listings as described in our Terms</li>
        <li>To communicate with you about your account and support requests</li>
        <li>To improve our Service</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do not sell your personal information. Job listing content is published publicly by design. We may share information with payment processors, hosting providers, and analytics services as necessary to operate the Service.</p>

      <h2>4. Data Retention</h2>
      <p>We retain account data while your account is active. Job listings are retained for archival purposes after expiration but removed from public search and sitemap. You may request account deletion at any time.</p>

      <h2>5. Cookies</h2>
      <p>We use cookies for session management, analytics, and user preferences. You can control cookies through your browser settings.</p>

      <h2>6. Security</h2>
      <p>We implement industry-standard security measures to protect your data, including encrypted transmission (TLS) and secure storage.</p>

      <h2>7. Your Rights</h2>
      <p>You may access, correct, or delete your personal information at any time by contacting us. We will respond to requests within 30 days.</p>

      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. We will notify account holders of material changes via email.</p>

      <h2>9. Contact</h2>
      <p>Privacy questions? Email <a href="mailto:support@churchjobs.com">support@churchjobs.com</a>.</p>
    </div>
  );
}
