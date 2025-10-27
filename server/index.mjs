import express from "express";
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Determine if running from built directory or development
const isBuilt = existsSync(join(__dirname, "../index.html"));
const staticDir = isBuilt ? join(__dirname, "..") : join(__dirname, "../dist");
const indexPath = isBuilt
  ? join(__dirname, "../index.html")
  : join(__dirname, "../dist/index.html");

// Serve static files with correct MIME types
app.use(
  express.static(staticDir, {
    setHeaders: (res, path) => {
      if (path.endsWith(".js") || path.endsWith(".mjs")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

// SEO data for different pages (Arabic-first for Gulf region)
const seoData = {
  "/": {
    title:
      "أوكسجين العربية لتقنية المعلومات - حلول تقنية رائدة في السعودية والإمارات وقطر | Oxygen Arabia ICT",
    description:
      "شركة أوكسجين للتكنولوجيا، الشركة الرائدة في تقنية المعلومات والاتصالات في المملكة العربية السعودية والإمارات وقطر. نقدم حلول سحابية ذكية ومراكز اتصال متطورة. Oxygen Technology Co., leading ICT solutions in Saudi Arabia, UAE, Qatar.",
    keywords:
      "تقنية المعلومات السعودية, مراكز اتصال سحابية, حلول تقنية الإمارات, شركة تقنية قطر, سنترال سحابي, ذكاء اصطناعي عربي, ICT Saudi Arabia, cloud contact center UAE, technology solutions Qatar, digital transformation Gulf",
    image: "/icons/oxygen/Oxygen.png",
    type: "website",
  },
  "/about": {
    title:
      "عن أوكسجين العربية - شريكك التقني في الخليج | About Oxygen Arabia ICT",
    description:
      "تعرف على أوكسجين العربية، رسالتنا ورؤيتنا والتزامنا برؤية السعودية 2030. شركة رائدة في حلول تقنية المعلومات بخبرة +13 عام في المنطقة. Learn about Oxygen Arabia ICT, our mission, vision, and commitment to Saudi Vision 2030.",
    keywords:
      "عن أوكسجين, شركة تقنية سعودية, رؤية 2030, حلول تقنية الخليج, شركة ICT الرياض, about oxygen arabia, company profile Saudi Arabia, Vision 2030 technology, ICT company Gulf",
    image: "/images/about-us/about-1.jpeg",
    type: "website",
  },
  "/services": {
    title: "خدماتنا - مراكز اتصال سحابية وحلول ذكية | Oxygen Arabia Services",
    description:
      "خدمات ICT شاملة تشمل مراكز اتصال سحابية، ذكاء اصطناعي بالعربية، تطوير برمجيات، وحلول رقمية متطورة في السعودية والإمارات وقطر. Comprehensive ICT services including cloud contact centers, AI solutions, software development.",
    keywords:
      "مراكز اتصال سحابية, ذكاء اصطناعي عربي, خدمات ICT السعودية, حلول سحابية الإمارات, تطوير برمجيات قطر, cloud contact center Saudi, AI services UAE, ICT solutions Qatar, digital transformation Gulf",
    image: "/images/services.jpg",
    type: "website",
  },
  "/projects": {
    title: "مشاريعنا - نجاحات تقنية في الخليج | Oxygen Arabia Projects",
    description:
      "استكشف مشاريعنا الناجحة في ICT والحلول الرقمية التي تقود الابتكار والنمو في السعودية والإمارات وقطر. مشاريع متطورة في الصحة والضيافة والتعليم. Explore our successful ICT projects and digital solutions.",
    keywords:
      "مشاريع ICT السعودية, حلول رقمية الإمارات, مشاريع تقنية قطر, محفظة أعمال, ICT projects Saudi Arabia, digital solutions UAE, technology portfolio Qatar, innovation Gulf",
    image: "/images/projects/Smart_Center.png",
    type: "website",
  },
  "/achievements": {
    title: "إنجازاتنا - جوائز وشهادات تقنية | Oxygen Arabia Achievements",
    description:
      "اكتشف جوائزنا وشهاداتنا وإنجازاتنا في صناعة ICT. معترف بها كواحدة من أفضل 50 مبتكر تعليمي في أفريقيا. تميز في الحلول التقنية. Discover our awards, certifications, and achievements in the ICT industry.",
    keywords:
      "إنجازات أوكسجين, جوائز تقنية, شهادات ICT, تميز تقني, achievements oxygen arabia, technology awards, ICT certifications, excellence recognition",
    image: "/images/achievements/award.jpg",
    type: "website",
  },
  "/team": {
    title: "فريقنا - خبراء تقنية المعلومات في الخليج | Oxygen Arabia Team",
    description:
      "تعرف على فريقنا الخبير من متخصصي ICT الذين يقودون الابتكار والتميز في المنطقة. قيادة تقنية متميزة في السعودية والإمارات وقطر. Meet our expert team of ICT professionals driving innovation and excellence.",
    keywords:
      "فريق أوكسجين, خبراء ICT, متخصصين تقنية, قيادة تقنية, oxygen team, ICT experts, technology professionals, leadership Gulf",
    image: "/images/team/ahmed-taj.jpg",
    type: "website",
  },
  "/contact": {
    title:
      "تواصل معنا - أوكسجين العربية في الرياض ودبي والدوحة | Contact Oxygen Arabia",
    description:
      "تواصل مع أوكسجين العربية لاحتياجاتك التقنية. فريق خبراء في الرياض ودبي والدوحة لاستشارات ICT وحلول تقنية مبتكرة. Get in touch with Oxygen Arabia ICT for technology consultation in Riyadh, Dubai, Doha.",
    keywords:
      "تواصل أوكسجين, مكاتب الرياض, استشارات ICT دبي, خدمات تقنية الدوحة, contact oxygen arabia, ICT consultation Riyadh, technology services Dubai, office locations Gulf",
    image: "/icons/oxygen/Oxygen.png",
    type: "website",
  },
  "/events": {
    title: "فعالياتنا - مؤتمرات وعروض تقنية في الخليج | Oxygen Arabia Events",
    description:
      "ابق محدثاً مع أحدث فعالياتنا ومؤتمراتنا وعروضنا التقنية في السعودية والإمارات وقطر. فعاليات تقنية وفرص تواصل مهنية. Stay updated with our latest events, conferences, and technology showcases.",
    keywords:
      "فعاليات أوكسجين, مؤتمرات تقنية, عروض تقنية, فعاليات ICT, oxygen events, technology conferences, tech showcases, ICT events Gulf",
    image: "/images/events/Frame_Oxy.jpg",
    type: "website",
  },
  "/blog": {
    title: "مدونتنا - رؤى تقنية واتجاهات ICT في الخليج | Oxygen Arabia Blog",
    description:
      "اقرأ أحدث رؤانا حول اتجاهات التكنولوجيا وابتكارات ICT وتحديثات الصناعة في المنطقة. مقالات تقنية ونصائح عملية للتحول الرقمي. Read our latest insights on technology trends, ICT innovations, and industry updates.",
    keywords:
      "مدونة أوكسجين, اتجاهات تقنية, رؤى ICT, أخبار صناعة, oxygen blog, technology trends, ICT insights, industry news Gulf",
    image: "/images/blogs/blog-1.jpeg",
    type: "website",
  },
  "/careers": {
    title: "الوظائف - انضم لفريق أوكسجين في الخليج | Oxygen Arabia Careers",
    description:
      "انضم لفريقنا في أوكسجين العربية. استكشف فرص عمل مثيرة في صناعة ICT في الرياض ودبي والدوحة. وظائف تقنية وفرص تطوير مهني. Join our team at Oxygen Arabia ICT. Explore career opportunities in the ICT industry.",
    keywords:
      "وظائف أوكسجين, فرص عمل ICT, وظائف تقنية السعودية, عمل في الإمارات, careers oxygen arabia, ICT jobs Saudi Arabia, technology jobs UAE, jobs Qatar",
    image: "/icons/oxygen/Oxygen.png",
    type: "website",
  },
};

// Generate structured data
function generateStructuredData(path) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oxygen Arabia ICT",
    alternateName: "Oxygen Technology Co., Ltd.",
    url: "https://oxygenarabia.com",
    logo: "https://oxygenarabia.com/icons/oxygen/Oxygen.png",
    description: "Leading ICT solutions provider in Saudi Arabia",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "Riyadh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [
      "https://linkedin.com/company/oxygen-arabia",
      "https://twitter.com/oxygen_arabia",
    ],
  };

  if (path === "/") {
    return {
      ...baseData,
      "@type": "TechCompany",
      foundingDate: "2020",
      industry: "Information Technology",
      numberOfEmployees: "50-100",
      keywords:
        "ICT, Software Development, Digital Transformation, Saudi Vision 2030",
    };
  }

  return baseData;
}

// Generate meta tags
function generateMetaTags(path, baseUrl = "https://oxygenarabia.com") {
  const data = seoData[path] || seoData["/"];
  const canonicalUrl = `${baseUrl}${path === "/" ? "" : path}`;

  return `
    <title>${data.title}</title>
    <meta name="description" content="${data.description}">
    <meta name="keywords" content="${data.keywords}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Oxygen Arabia ICT">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph -->
    <meta property="og:type" content="${data.type}">
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.description}">
    <meta property="og:image" content="${baseUrl}${data.image}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:site_name" content="Oxygen Arabia ICT">
    <meta property="og:locale" content="en_US">
    <meta property="og:locale:alternate" content="ar_SA">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${data.title}">
    <meta name="twitter:description" content="${data.description}">
    <meta name="twitter:image" content="${baseUrl}${data.image}">
    <meta name="twitter:site" content="@oxygen_arabia">
    
    <!-- Additional SEO -->
    <meta name="theme-color" content="#1e40af">
    <meta name="msapplication-TileColor" content="#1e40af">
    <meta name="application-name" content="Oxygen Arabia ICT">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(generateStructuredData(path), null, 2)}
    </script>
  `;
}

// Handle all routes
app.get("*", (req, res) => {
  try {
    if (!existsSync(indexPath)) {
      return res
        .status(404)
        .send("Build files not found. Please run: npm run build");
    }

    let html = readFileSync(indexPath, "utf-8");

    // Extract the path
    const path = req.path === "/" ? "/" : req.path.replace(/\/$/, "");

    // Generate and inject meta tags
    const metaTags = generateMetaTags(path);

    // Replace the existing meta tags in head
    html = html.replace(/<title>.*?<\/title>/, metaTags);

    // Add preload hints for critical resources
    const preloadHints = `
      <link rel="preload" href="/icons/oxygen/Oxygen.png" as="image">
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cairo:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" as="style">
      <link rel="dns-prefetch" href="//fonts.googleapis.com">
      <link rel="dns-prefetch" href="//fonts.gstatic.com">
    `;

    html = html.replace("</head>", `${preloadHints}</head>`);

    res.send(html);
  } catch (error) {
    console.error("Error serving page:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving from: ${staticDir}`);
  console.log(`📄 Index file: ${indexPath}`);
});
