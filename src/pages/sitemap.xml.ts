import type { APIRoute } from 'astro';
import { getReviews } from '../lib/reviews';

const pages = ['/', '/reviews.html', '/publications.html', '/projects.html', '/talks.html', '/popular-science.html', '/collabs.html', '/lab.html'];

export const GET: APIRoute = async ({ site }) => {
  const today = new Date().toISOString().slice(0, 10);
  const reviews = await getReviews();
  const urls = [
    ...pages.map((p) => ({ loc: new URL(p, site).href, lastmod: today })),
    ...reviews.map((r) => ({
      loc: new URL(`/reviews/${r.id}.html`, site).href,
      lastmod: (r.data.updated ?? r.data.date).toISOString().slice(0, 10),
    })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
