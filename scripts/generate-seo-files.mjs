import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const defaultSiteUrl = "https://cntripaimap.online";
const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || defaultSiteUrl).replace(
  /\/+$/,
  "",
);

const destinationIds = [
  "beijing",
  "shanghai",
  "xian",
  "chengdu",
  "guilin",
  "hangzhou",
  "hongkong",
  "zhangjiajie",
];

const itineraryIds = [
  "classic-14-days",
  "nature-guilin-zhangjiajie",
  "silk-road-adventure",
  "guangzhou-culinary-capital",
];

const cuisineIds = [
  "sichuan",
  "shandong",
  "cantonese",
  "jiangsu",
  "fujian",
  "zhejiang",
  "hunan",
  "anhui",
];

const foodIds = [
  "peking-duck",
  "xiaolongbao",
  "sichuan-hot-pot",
  "guilin-rice-noodles",
  "roujiamo",
  "biang-biang-noodles",
  "dongpo-pork",
  "dim-sum",
  "sanxiaguo",
];

const guideIds = ["g1", "g2", "g3"];

const staticPaths = ["/", "/destinations", "/itineraries", "/cuisines", "/guides"];

const routePaths = [
  ...staticPaths,
  ...destinationIds.map((id) => `/destination/${id}`),
  ...itineraryIds.map((id) => `/itinerary/${id}`),
  ...cuisineIds.map((id) => `/cuisine/${id}`),
  ...foodIds.map((id) => `/food/${id}`),
  ...guideIds.map((id) => `/guide/${id}`),
];

const today = new Date().toISOString().slice(0, 10);
const publicDir = path.resolve("public");

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routePaths
  .map(
    (routePath) => `  <url>
    <loc>${escapeXml(`${siteUrl}${routePath}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${routePath === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${routePath === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await mkdir(publicDir, { recursive: true });
await writeFile(path.join(publicDir, "sitemap.xml"), sitemap);
await writeFile(path.join(publicDir, "robots.txt"), robots);

console.log(`Generated SEO files for ${siteUrl}`);
