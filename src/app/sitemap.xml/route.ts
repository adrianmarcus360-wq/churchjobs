export const dynamic = "force-static";
import { getLiveJobs } from "@/data/sample-jobs";
import { generateSitemapEntries } from "@/lib/structured-data";

export async function GET() {
  const jobs = getLiveJobs();
  const xml = generateSitemapEntries(jobs);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
