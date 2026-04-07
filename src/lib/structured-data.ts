// JobPosting JSON-LD structured data generator
// Implements schema.org/JobPosting for Google for Jobs eligibility

import { JobPosting } from "./types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://churchjobs.com";
const SITE_NAME = "ChurchJobs";

/**
 * Generate valid JobPosting JSON-LD structured data.
 * Follows Google's guidelines for Google for Jobs eligibility:
 * - All required fields present (title, description, datePosted, hiringOrganization, jobLocation)
 * - validThrough for expiration
 * - Compensation when available
 * - Clean, crawlable URL
 */
export function generateJobPostingJsonLd(job: JobPosting): object {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    hiringOrganization: {
      "@type": "Organization",
      name: job.church.name,
      sameAs: job.church.website || undefined,
      logo: job.church.logoUrl || undefined,
    },
    employmentType: job.employmentType,
    url: `${SITE_URL}/jobs/${job.slug}`,
    identifier: {
      "@type": "PropertyValue",
      name: SITE_NAME,
      value: job.id,
    },
  };

  // Job location — required for non-remote jobs
  if (job.location.remote) {
    jsonLd.jobLocationType = "TELECOMMUTE";
    jsonLd.applicantLocationRequirements = {
      "@type": "Country",
      name: "US",
    };
  } else {
    jsonLd.jobLocation = {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.city,
        addressRegion: job.location.stateCode,
        addressCountry: "US",
      },
    };
  }

  // Compensation — optional but strongly recommended
  if (job.compensationMin || job.compensationMax) {
    const unitText =
      job.compensationType === "YEARLY"
        ? "YEAR"
        : job.compensationType === "MONTHLY"
        ? "MONTH"
        : "HOUR";

    jsonLd.baseSalary = {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        ...(job.compensationMin && job.compensationMax
          ? {
              minValue: job.compensationMin,
              maxValue: job.compensationMax,
            }
          : {
              value: job.compensationMin || job.compensationMax,
            }),
        unitText,
      },
    };
  }

  // Direct apply if application URL is on our platform
  if (job.applicationUrl) {
    jsonLd.directApply = false;
  }

  return jsonLd;
}

/**
 * Generate Open Graph meta tags for social sharing.
 */
export function generateJobOgMeta(job: JobPosting) {
  const url = `${SITE_URL}/jobs/${job.slug}`;
  const title = `${job.title} at ${job.church.name} — ${job.location.city}, ${job.location.stateCode}`;
  const description = `${job.church.name} is hiring a ${job.title} in ${job.location.city}, ${job.location.state}. Apply now on ${SITE_NAME}.`;

  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
    twitterCard: "summary_large_image",
  };
}

/**
 * Generate XML sitemap entries for all live jobs and browse pages.
 */
export function generateSitemapEntries(jobs: JobPosting[]): string {
  const liveJobs = jobs.filter((j) => j.status === "live");

  // Static pages
  const staticPages = [
    { loc: "", priority: "1.0", changefreq: "daily" },
    { loc: "/pricing", priority: "0.8", changefreq: "weekly" },
    { loc: "/jobs", priority: "0.9", changefreq: "daily" },
    { loc: "/about", priority: "0.6", changefreq: "monthly" },
    { loc: "/faq", priority: "0.5", changefreq: "monthly" },
    { loc: "/contact", priority: "0.5", changefreq: "monthly" },
  ];

  // Job detail pages
  const jobPages = liveJobs.map((job) => ({
    loc: `/jobs/${job.slug}`,
    priority: "0.7",
    changefreq: "weekly",
    lastmod: job.updatedAt,
  }));

  // Category browse pages
  const categories = [...new Set(liveJobs.map((j) => j.category))];
  const categoryPages = categories.map((cat) => ({
    loc: `/jobs/${cat}`,
    priority: "0.8",
    changefreq: "daily",
  }));

  // Location browse pages (by state code)
  const stateCodes = [...new Set(liveJobs.map((j) => j.location.stateCode.toLowerCase()))];
  const statePages = stateCodes.map((sc) => ({
    loc: `/jobs/${sc}`,
    priority: "0.8",
    changefreq: "daily",
  }));

  // City browse pages
  const cities = [...new Set(liveJobs.map((j) => `${j.location.city.toLowerCase().replace(/\s+/g, "-")}-${j.location.stateCode.toLowerCase()}`))];
  const cityPages = cities.map((city) => ({
    loc: `/jobs/${city}`,
    priority: "0.7",
    changefreq: "daily",
  }));

  const allEntries = [...staticPages, ...jobPages, ...categoryPages, ...statePages, ...cityPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${
      "lastmod" in entry ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`;

  return xml;
}

/**
 * Generate RSS/Atom feed for job listings.
 */
export function generateJobFeed(jobs: JobPosting[]): string {
  const liveJobs = jobs
    .filter((j) => j.status === "live")
    .sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} — Church Job Listings</title>
    <link>${SITE_URL}</link>
    <description>Latest church job openings — pastors, worship leaders, youth ministry, children's ministry, administrative, and more.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed/jobs.xml" rel="self" type="application/rss+xml" />
${liveJobs
  .map(
    (job) => `    <item>
      <title>${escapeXml(job.title)} at ${escapeXml(job.church.name)}</title>
      <link>${SITE_URL}/jobs/${job.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/jobs/${job.slug}</guid>
      <description>${escapeXml(`${job.church.name} is hiring a ${job.title} in ${job.location.city}, ${job.location.state}.`)}</description>
      <pubDate>${new Date(job.datePosted).toUTCString()}</pubDate>
      <category>${escapeXml(job.category)}</category>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return xml;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
