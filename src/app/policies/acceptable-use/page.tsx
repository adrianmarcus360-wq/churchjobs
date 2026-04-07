import type { Metadata } from "next";

export const metadata: Metadata = { title: "Acceptable Use Policy" };

export default function AcceptableUsePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 not-prose">
        <p className="text-sm text-yellow-800"><strong>DRAFT — PLACEHOLDER FOR LEGAL REVIEW</strong><br />This document is a draft template. It must be reviewed and approved by qualified legal counsel before publication.</p>
      </div>

      <h1>Acceptable Use Policy</h1>
      <p><em>Last updated: [DATE]</em></p>

      <h2>Purpose</h2>
      <p>ChurchJobs is designed for churches and ministry organizations to post legitimate job openings. This policy outlines what is and is not acceptable use of the platform.</p>

      <h2>Permitted Use</h2>
      <ul>
        <li>Posting genuine job openings at churches, ministries, and faith-based organizations</li>
        <li>Searching and applying for church employment opportunities</li>
        <li>Managing your church's hiring through the employer dashboard</li>
      </ul>

      <h2>Prohibited Use</h2>
      <ul>
        <li>Posting fictitious, misleading, or fraudulent job listings</li>
        <li>Posting jobs for organizations that are not churches or ministry-related</li>
        <li>Using the platform to collect personal information for purposes unrelated to hiring</li>
        <li>Scraping, data mining, or automated extraction of listing data</li>
        <li>Harassment, discrimination, or any illegal activity</li>
        <li>Posting content that violates applicable laws or regulations</li>
        <li>Circumventing subscription limits or terms</li>
      </ul>

      <h2>Content Standards</h2>
      <p>Job listings must:</p>
      <ul>
        <li>Describe real, currently open positions</li>
        <li>Include accurate church/organization information</li>
        <li>Comply with applicable employment and anti-discrimination laws</li>
        <li>Include legitimate application instructions</li>
      </ul>

      <h2>Enforcement</h2>
      <p>We review listings and reserve the right to remove content, suspend accounts, or terminate service for violations of this policy. Repeat violations may result in permanent account termination without refund.</p>

      <h2>Reporting</h2>
      <p>To report a policy violation, email <a href="mailto:support@churchjobs.com">support@churchjobs.com</a> with details.</p>
    </div>
  );
}
