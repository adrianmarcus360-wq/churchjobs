export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://churchjobs.com/sitemap.xml

# Job feed
# RSS: https://churchjobs.com/feed/jobs.xml
`;

  return new Response(robotsTxt, {
    headers: { "Content-Type": "text/plain" },
  });
}
