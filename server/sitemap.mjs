import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define all pages with their priorities and change frequencies
const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.9", changefreq: "monthly" },
  { url: "/services", priority: "0.9", changefreq: "monthly" },
  { url: "/projects", priority: "0.8", changefreq: "weekly" },
  { url: "/achievements", priority: "0.8", changefreq: "monthly" },
  { url: "/team", priority: "0.7", changefreq: "monthly" },
  { url: "/events", priority: "0.8", changefreq: "weekly" },
  { url: "/blog", priority: "0.8", changefreq: "daily" },
  { url: "/contact", priority: "0.9", changefreq: "monthly" },
  { url: "/careers", priority: "0.7", changefreq: "weekly" },
  { url: "/privacy-policy", priority: "0.6", changefreq: "yearly" },
  { url: "/terms-of-use", priority: "0.6", changefreq: "yearly" },
  { url: "/cookie-policy", priority: "0.6", changefreq: "yearly" },
];

// Generate XML sitemap
function generateSitemap(baseUrl = "https://oxygenarabia.com") {
  const currentDate = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  pages.forEach((page) => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += "</urlset>";
  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt(baseUrl = "https://oxygenarabia.com") {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/

# Allow important resources
Allow: /icons/
Allow: /images/
Allow: /assets/
`;
}

// Create sitemap and robots.txt files
function createSEOFiles() {
  const publicDir = join(__dirname, "../public");

  // Generate and write sitemap.xml
  const sitemapContent = generateSitemap();
  writeFileSync(join(publicDir, "sitemap.xml"), sitemapContent);
  console.log("✅ Generated sitemap.xml");

  // Generate and write robots.txt
  const robotsContent = generateRobotsTxt();
  writeFileSync(join(publicDir, "robots.txt"), robotsContent);
  console.log("✅ Generated robots.txt");
}

// Run the generator
createSEOFiles();

export { generateSitemap, generateRobotsTxt };
