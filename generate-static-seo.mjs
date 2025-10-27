import { writeFileSync, readFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

// Comprehensive SEO data for each page (Arabic-first for Gulf region)
const pages = {
  "index.html": {
    title:
      "أوكسجين العربية لتقنية المعلومات - الشركة الرائدة في حلول تكنولوجيا المعلومات والاتصالات في السعودية والإمارات وقطر | Oxygen Arabia ICT",
    description:
      "شركة أوكسجين العربية لتقنية المعلومات - الرائدة في تقديم حلول تكنولوجيا المعلومات والاتصالات المتكاملة في المملكة العربية السعودية ودولة الإمارات العربية المتحدة ودولة قطر. نقدم خدمات مراكز الاتصال السحابية المتطورة، حلول الذكاء الاصطناعي باللغة العربية، أنظمة السنترال السحابي، التحول الرقمي الشامل، تطوير البرمجيات المخصصة، واستشارات تكنولوجيا المعلومات. خبرة تفوق 13 عاماً في دعم رؤية المملكة 2030 والتحول الرقمي في منطقة الخليج العربي.",
    keywords:
      "شركة أوكسجين العربية, شركة تقنية المعلومات السعودية, شركة مراكز اتصال سحابية, شركة حلول تقنية الإمارات, شركة تقنية قطر, شركة سنترال سحابي, شركة ذكاء اصطناعي عربي, شركة رؤية 2030, شركة التحول الرقمي الخليج, شركات ICT الرياض, شركة حلول سحابية دبي, شركة تطوير برمجيات الدوحة, أوكسجين العربية شركة, Oxygen Arabia company, ICT company Saudi Arabia, cloud contact center company UAE, AI solutions company Qatar, digital transformation company Gulf, technology company Riyadh Dubai Doha, شركات تكنولوجيا المعلومات السعودية, شركات البرمجة الرياض, شركات الذكاء الاصطناعي الخليج",
    image: "/icons/oxygen/Oxygen.png",
    canonical: "https://oxygenarabia.com",
    hreflang: {
      ar: "https://oxygenarabia.com",
      "ar-SA": "https://oxygenarabia.com",
      "ar-AE": "https://oxygenarabia.com",
      "ar-QA": "https://oxygenarabia.com",
      en: "https://oxygenarabia.com/en",
    },
  },
  "about.html": {
    title:
      "عن أوكسجين العربية - شريكك التقني الموثوق في الخليج العربي | About Oxygen Arabia ICT",
    description:
      "تعرف على شركة أوكسجين العربية لتقنية المعلومات - رسالتنا ورؤيتنا وقيمنا الأساسية. نحن شركة سعودية رائدة في مجال تكنولوجيا المعلومات والاتصالات، ملتزمون بدعم رؤية المملكة العربية السعودية 2030 والتحول الرقمي في منطقة الخليج. خبرة تفوق 13 عاماً في تقديم حلول تقنية مبتكرة للشركات والقطاعات الحكومية.",
    keywords:
      "عن أوكسجين العربية, شركة تقنية سعودية, رؤية 2030, حلول تقنية الخليج, شركة ICT الرياض, عن شركة أوكسجين, about oxygen arabia, company profile Saudi Arabia, Vision 2030 technology, ICT company Gulf, Saudi technology company, about our company, mission and vision, قيم الشركة, تاريخ أوكسجين العربية, فريق العمل, خبراء تكنولوجيا المعلومات",
    image: "/images/about-us/about-1.jpeg",
    canonical: "https://oxygenarabia.com/about.html",
    hreflang: {
      ar: "https://oxygenarabia.com/about.html",
      en: "https://oxygenarabia.com/en/about.html",
    },
  },
  "services.html": {
    title:
      "خدماتنا - مراكز اتصال سحابية وحلول ذكية متكاملة | Oxygen Arabia Services",
    description:
      "اكتشف مجموعة خدماتنا الشاملة في مجال تكنولوجيا المعلومات والاتصالات. نقدم حلول مراكز الاتصال السحابية المتطورة، أنظمة الذكاء الاصطناعي باللغة العربية، تطوير البرمجيات المخصصة، حلول التحول الرقمي، استشارات تكنولوجيا المعلومات، وأنظمة الاتصالات الموحدة. خدماتنا تغطي المملكة العربية السعودية، الإمارات العربية المتحدة، قطر، ودول الخليج الأخرى.",
    keywords:
      "مراكز اتصال سحابية, ذكاء اصطناعي عربي, خدمات ICT السعودية, حلول سحابية الإمارات, تطوير برمجيات قطر, cloud contact center Saudi, AI services UAE, ICT solutions Qatar, digital transformation Gulf, خدمات تكنولوجيا المعلومات, حلول الأعمال الرقمية, استشارات تقنية, برمجة تطبيقات, أنظمة اتصالات, تحول رقمي, حلول سحابية, برمجيات مخصصة, دعم تقني, خدمات استشارية",
    image: "/images/services.jpg",
    canonical: "https://oxygenarabia.com/services.html",
    hreflang: {
      ar: "https://oxygenarabia.com/services.html",
      en: "https://oxygenarabia.com/en/services.html",
    },
  },
  "contact.html": {
    title:
      "تواصل معنا - أوكسجين العربية في الرياض ودبي والدوحة | Contact Oxygen Arabia ICT",
    description:
      "تواصل مع فريق أوكسجين العربية لتقنية المعلومات لجميع احتياجاتك التقنية. نحن موجودون في الرياض بالمملكة العربية السعودية، دبي بالإمارات العربية المتحدة، والدوحة بقطر. نقدم استشارات تكنولوجيا المعلومات المجانية، دراسات الجدوى، وحلول تقنية مبتكرة مصممة خصيصاً لعملك. اتصل بنا اليوم لبدء رحلة التحول الرقمي.",
    keywords:
      "تواصل أوكسجين, مكاتب الرياض, استشارات ICT دبي, خدمات تقنية الدوحة, contact oxygen arabia, ICT consultation Riyadh, technology services Dubai, office locations Gulf, اتصل بنا, معلومات التواصل, فروع الشركة, مكاتب الخليج, استشارة مجانية, دعم فني, خدمة العملاء, موظفي المبيعات, مواقع المكاتب, أرقام الهواتف, عناوين البريد الإلكتروني",
    image: "/icons/oxygen/Oxygen.png",
    canonical: "https://oxygenarabia.com/contact.html",
    hreflang: {
      ar: "https://oxygenarabia.com/contact.html",
      en: "https://oxygenarabia.com/en/contact.html",
    },
  },
  "projects.html": {
    title:
      "مشاريعنا - إنجازات أوكسجين العربية في التحول الرقمي | Our Projects - Oxygen Arabia ICT",
    description:
      "استعرض مجموعة مشاريعنا الناجحة في مجال تكنولوجيا المعلومات والاتصالات. مشاريع مراكز الاتصال السحابية، أنظمة الذكاء الاصطناعي، تطبيقات الجوال، والتحول الرقمي للشركات والجهات الحكومية في السعودية والإمارات وقطر. شاهد كيف ساعدنا عملائنا في تحقيق أهدافهم التقنية والنمو في العصر الرقمي.",
    keywords:
      "مشاريع أوكسجين العربية, مشاريع تقنية السعودية, مشاريع ذكاء اصطناعي, مشاريع تحول رقمي, case studies technology, ICT projects Saudi Arabia, digital transformation projects, AI implementation cases, success stories, portfolio, أعمالنا, إنجازات الشركة, دراسات حالة, مشاريع ناجحة, عملاء أوكسجين, تجارب عملية, تطبيقات حقيقية",
    image: "/images/projects/Smart_Center.png",
    canonical: "https://oxygenarabia.com/projects.html",
    hreflang: {
      ar: "https://oxygenarabia.com/projects.html",
      en: "https://oxygenarabia.com/en/projects.html",
    },
  },
  "achievements.html": {
    title:
      "إنجازاتنا وجوائزنا - تميز أوكسجين العربية في قطاع التقنية | Achievements & Awards - Oxygen Arabia ICT",
    description:
      "اكتشف إنجازاتنا وجوائزنا التي تعكس تميز أوكسجين العربية في مجال تكنولوجيا المعلومات والاتصالات. شهادات الاعتماد الدولية، جوائز التميز التقني، شراكات استراتيجية مع كبرى الشركات العالمية، وإسهاماتنا في دفع عجلة التحول الرقمي في المملكة العربية السعودية ودول الخليج.",
    keywords:
      "إنجازات أوكسجين, جوائز تقنية, شهادات اعتماد, awards ICT Saudi, certifications technology, achievements Gulf, جوائز الشركة, تكريمات, شهادات الجودة, شراكات استراتيجية, اعتمادات دولية, تميز تقني, إنجازات قطاع التقنية, سجل حافل, اعتراف بالجودة",
    image: "/images/achievements/award.jpg",
    canonical: "https://oxygenarabia.com/achievements.html",
    hreflang: {
      ar: "https://oxygenarabia.com/achievements.html",
      en: "https://oxygenarabia.com/en/achievements.html",
    },
  },
  "team.html": {
    title:
      "فريقنا - خبراء تكنولوجيا المعلومات في أوكسجين العربية | Our Team - Oxygen Arabia ICT Experts",
    description:
      "تعرف على فريق أوكسجين العربية المكون من نخبة الخبراء والمتخصصين في مجال تكنولوجيا المعلومات والاتصالات. مهندسون، مبرمجون، محللو نظم، مستشارون تقنيون، وخبراء في الذكاء الاصطناعي - جميعهم يعملون معاً لتقديم أفضل الحلول التقنية لعملائنا في السعودية والإمارات وقطر.",
    keywords:
      "فريق أوكسجين العربية, خبراء تقنية, فريق العمل, فريق السعودية, فريق الإمارات, فريق قطر, our team experts, ICT professionals Saudi, technology team Gulf, فريق المبيعات, فريق الدعم الفني, فريق التطوير, الخبراء التقنيين, كوادر الشركة, القيادات الإدارية",
    image: "/images/team/ahmed-taj.jpg",
    canonical: "https://oxygenarabia.com/team.html",
    hreflang: {
      ar: "https://oxygenarabia.com/team.html",
      en: "https://oxygenarabia.com/en/team.html",
    },
  },
  "careers.html": {
    title:
      "الوظائف - انضم إلى فريق أوكسجين العربية | Careers at Oxygen Arabia ICT",
    description:
      "انضم إلى فريق أوكسجين العربية لتقنية المعلومات وكن جزءاً من رحلة التحول الرقمي في المنطقة. نوفر فرص عمل مميزة في الرياض، دبي، والدوحة لمهندسي البرمجيات، مطوري التطبيقات، محللي النظم، مستشاري تكنولوجيا المعلومات، ومحترفي الذكاء الاصطناعي. قدم طلبك الآن وابنِ مستقبلك التقني معنا.",
    keywords:
      "وظائف أوكسجين العربية, توظيف تقنية المعلومات, وظائف برمجة السعودية, وظائف تقنية الإمارات, وظائف قطر, careers ICT Saudi, jobs technology UAE, employment Qatar, فرص عمل, شواغر وظيفية, التوظيف في الشركة, برنامج التدريب, تطوير المهارات, بيئة عمل, مزايا الموظفين, مستقبل مهني",
    image: "/icons/oxygen/Oxygen.png",
    canonical: "https://oxygenarabia.com/careers.html",
    hreflang: {
      ar: "https://oxygenarabia.com/careers.html",
      en: "https://oxygenarabia.com/en/careers.html",
    },
  },
  "privacy-policy.html": {
    title:
      "سياسة الخصوصية - أوكسجين العربية لتقنية المعلومات | Privacy Policy - Oxygen Arabia ICT",
    description:
      "اطلع على سياسة الخصوصية الخاصة بشركة أوكسجين العربية لتقنية المعلومات. نحن ملتزمون بحماية خصوصيتك وأمان بياناتك الشخصية وفقاً لأعلى المعايير الدولية ولوائح حماية البيانات في المملكة العربية السعودية والإمارات وقطر.",
    keywords:
      "سياسة الخصوصية أوكسجين, حماية البيانات, خصوصية المعلومات, privacy policy oxygen arabia, data protection Saudi, GDPR compliance, أمان البيانات, حقوق المستخدم, سرية المعلومات, حماية الخصوصية",
    image: "/icons/oxygen/Oxygen.png",
    canonical: "https://oxygenarabia.com/privacy-policy.html",
    hreflang: {
      ar: "https://oxygenarabia.com/privacy-policy.html",
      en: "https://oxygenarabia.com/en/privacy-policy.html",
    },
  },
  "terms-of-use.html": {
    title:
      "شروط الاستخدام - أوكسجين العربية لتقنية المعلومات | Terms of Use - Oxygen Arabia ICT",
    description:
      "اقرأ شروط وأحكام استخدام خدمات شركة أوكسجين العربية لتقنية المعلومات. تعرف على حقوقك ومسؤولياتك عند استخدام منصاتنا وخدماتنا التقنية في المملكة العربية السعودية والإمارات وقطر.",
    keywords:
      "شروط الاستخدام أوكسجين, أحكام الخدمة, شروط وأحكام, terms of use oxygen arabia, service agreement, user terms Saudi, اتفاقية المستخدم, قوانين الاستخدام, شروط الخدمة, أحكام قانونية",
    image: "/icons/oxygen/Oxygen.png",
    canonical: "https://oxygenarabia.com/terms-of-use.html",
    hreflang: {
      ar: "https://oxygenarabia.com/terms-of-use.html",
      en: "https://oxygenarabia.com/en/terms-of-use.html",
    },
  },
  "cookie-policy.html": {
    title:
      "سياسة ملفات تعريف الارتباط - أوكسجين العربية | Cookie Policy - Oxygen Arabia ICT",
    description:
      "تعرف على كيفية استخدام شركة أوكسجين العربية لتقنية المعلومات لملفات تعريف الارتباط (الكوكيز) والتقنيات المماثلة لتحسين تجربة المستخدم وتحليل استخدام الموقع. إدارة تفضيلاتك وحقوقك في التحكم بملفات تعريف الارتباط.",
    keywords:
      "سياسة الكوكيز أوكسجين, ملفات تعريف الارتباط, cookie policy oxygen arabia, cookies management, تتبع الموقع, تحليلات الويب, إعدادات الخصوصية, ملفات الارتباط, تفضيلات المستخدم",
    image: "/icons/oxygen/Oxygen.png",
    canonical: "https://oxygenarabia.com/cookie-policy.html",
    hreflang: {
      ar: "https://oxygenarabia.com/cookie-policy.html",
      en: "https://oxygenarabia.com/en/cookie-policy.html",
    },
  },
};

function generateSEOHead(pageData, baseUrl = "https://oxygenarabia.com") {
  const hreflangTags = pageData.hreflang
    ? Object.entries(pageData.hreflang)
        .map(
          ([lang, url]) =>
            `<link rel="alternate" hreflang="${lang}" href="${url}" />`
        )
        .join("\n    ")
    : "";

  return `
    <title>${pageData.title}</title>
    <meta name="description" content="${pageData.description}">
    <meta name="keywords" content="${pageData.keywords}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="أوكسجين العربية لتقنية المعلومات - Oxygen Arabia ICT">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${pageData.canonical || baseUrl}">
    
    <!-- Multilingual Hreflang Tags -->
    ${hreflangTags}
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${pageData.title}">
    <meta property="og:description" content="${pageData.description}">
    <meta property="og:image" content="${baseUrl}${pageData.image}">
    <meta property="og:url" content="${pageData.canonical || baseUrl}">
    <meta property="og:site_name" content="أوكسجين العربية لتقنية المعلومات">
    <meta property="og:locale" content="ar_SA">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${pageData.title}">
    <meta name="twitter:description" content="${pageData.description}">
    <meta name="twitter:image" content="${baseUrl}${pageData.image}">
    <meta name="twitter:site" content="@oxygen_arabia">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "${pageData.title.split("|")[0].trim()}",
      "description": "${pageData.description}",
      "url": "${pageData.canonical || baseUrl}",
      "mainEntity": {
        "@type": "Organization",
        "name": "أوكسجين العربية لتقنية المعلومات",
        "url": "https://oxygenarabia.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "أوكسجين العربية لتقنية المعلومات",
        "logo": {
          "@type": "ImageObject",
          "url": "${baseUrl}/icons/oxygen/Oxygen.png"
        }
      },
      "inLanguage": "ar"
    }
    </script>
  `;
}

// Create static pages with comprehensive SEO
function createStaticPages() {
  const distDir = "./Oxygen";

  // Check if distribution directory exists
  if (!existsSync(distDir)) {
    console.error(`❌ Directory ${distDir} does not exist`);
    return;
  }

  const baseTemplate = readFileSync(join(distDir, "index.html"), "utf-8");

  Object.entries(pages).forEach(([filename, pageData]) => {
    let html = baseTemplate;

    // Replace title and add comprehensive SEO meta tags
    const seoHead = generateSEOHead(pageData);

    // Remove existing title and meta tags
    html = html.replace(/<title>.*?<\/title>/, "");
    html = html.replace(/<meta name="description".*?>/, "");
    html = html.replace(/<meta name="keywords".*?>/, "");

    // Insert new SEO head content after the charset meta tag
    const charsetMeta = '<meta charset="UTF-8" />';
    html = html.replace(charsetMeta, charsetMeta + "\n    " + seoHead);

    // Write the file
    writeFileSync(join(distDir, filename), html);
    console.log(`✅ Created ${filename} with comprehensive Arabic SEO`);
  });

  console.log(
    `🎉 Successfully generated ${
      Object.keys(pages).length
    } pages with enhanced Arabic SEO`
  );
}

// Generate sitemap function
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${Object.entries(pages)
    .map(
      ([filename, pageData]) => `
  <url>
    <loc>${pageData.canonical || `https://oxygenarabia.com/${filename}`}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${filename === "index.html" ? "1.0" : "0.8"}</priority>
    ${
      pageData.hreflang
        ? Object.entries(pageData.hreflang)
            .map(
              ([lang, url]) => `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`
            )
            .join("")
        : ""
    }
  </url>`
    )
    .join("")}
</urlset>`;

  const distDir = "./Oxygen";
  writeFileSync(join(distDir, "sitemap.xml"), sitemap);
  console.log("✅ Generated sitemap.xml");
}

// Execute both functions
createStaticPages();
generateSitemap();
