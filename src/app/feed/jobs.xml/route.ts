import { getLiveJobs } from "@/data/sample-jobs";
import { generateJobFeed } from "@/lib/structured-data";

export async function GET() {
  const jobs = getLiveJobs();
  const xml = generateJobFeed(jobs);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, max-age=1800, s-maxage=1800",
    },
  });
}
