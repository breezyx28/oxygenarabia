import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
}

const seoData: Record<string, SEOProps> = {
  "/": {
    title: "Oxygen Arabia ICT - Leading Technology Solutions Provider",
    description:
      "Oxygen Technology Co., Ltd., a leading company in information technology and telecommunications services (ICT) Industry in Saudi Arabia.",
    keywords:
      "ICT, technology, Saudi Arabia, telecommunications, software development, digital transformation",
    image: "/icons/oxygen/Oxygen.png",
    type: "website",
  },
  "/about": {
    title: "About Us - Oxygen Arabia ICT",
    description:
      "Learn about Oxygen Arabia ICT, our mission, vision, and commitment to Saudi Vision 2030. Leading ICT solutions provider.",
    keywords: "about oxygen, company profile, Saudi Vision 2030, ICT company",
    image: "/images/about-us/about-1.jpeg",
    type: "website",
  },
  "/services": {
    title: "Our Services - Oxygen Arabia ICT",
    description:
      "Comprehensive ICT services including software development, cloud solutions, digital transformation, and telecommunications.",
    keywords:
      "ICT services, software development, cloud solutions, digital transformation",
    image: "/images/services.jpg",
    type: "website",
  },
  "/projects": {
    title: "Our Projects - Oxygen Arabia ICT",
    description:
      "Explore our successful ICT projects and digital solutions that drive innovation and growth.",
    keywords:
      "ICT projects, digital solutions, software projects, technology portfolio",
    image: "/images/projects/Smart_Center.png",
    type: "website",
  },
  "/achievements": {
    title: "Achievements - Oxygen Arabia ICT",
    description:
      "Discover our awards, certifications, and achievements in the ICT industry.",
    keywords: "achievements, awards, certifications, ICT excellence",
    image: "/images/achievements/award.jpg",
    type: "website",
  },
  "/team": {
    title: "Our Team - Oxygen Arabia ICT",
    description:
      "Meet our expert team of ICT professionals driving innovation and excellence.",
    keywords: "team, experts, ICT professionals, leadership",
    image: "/images/team/ahmed-taj.jpg",
    type: "website",
  },
  "/contact": {
    title: "Contact Us - Oxygen Arabia ICT",
    description:
      "Get in touch with Oxygen Arabia ICT for your technology needs. Contact information and office locations.",
    keywords: "contact, office locations, get in touch, ICT consultation",
    image: "/icons/oxygen/Oxygen.png",
    type: "website",
  },
  "/events": {
    title: "Events - Oxygen Arabia ICT",
    description:
      "Stay updated with our latest events, conferences, and technology showcases.",
    keywords: "events, conferences, technology showcases, ICT events",
    image: "/images/events/Frame_Oxy.jpg",
    type: "website",
  },
  "/blog": {
    title: "Blog - Oxygen Arabia ICT",
    description:
      "Read our latest insights on technology trends, ICT innovations, and industry updates.",
    keywords: "blog, technology trends, ICT insights, industry news",
    image: "/images/blogs/blog-1.jpeg",
    type: "website",
  },
  "/careers": {
    title: "Careers - Oxygen Arabia ICT",
    description:
      "Join our team at Oxygen Arabia ICT. Explore career opportunities in the ICT industry.",
    keywords: "careers, jobs, ICT careers, technology jobs, Saudi Arabia jobs",
    image: "/icons/oxygen/Oxygen.png",
    type: "website",
  },
};

export default function SEOHead({
  title,
  description,
  keywords,
  image,
  type = "website",
  noIndex = false,
}: SEOProps) {
  const location = useLocation();
  const path = location.pathname;

  // Get SEO data for current page or use provided props
  const pageSEO = seoData[path] || seoData["/"];
  const finalTitle = title || pageSEO.title;
  const finalDescription = description || pageSEO.description;
  const finalKeywords = keywords || pageSEO.keywords;
  const finalImage = image || pageSEO.image;
  const finalType = type || pageSEO.type;

  const baseUrl = "https://oxygenarabia.com";
  const canonicalUrl = `${baseUrl}${path === "/" ? "" : path}`;
  const fullImageUrl = finalImage?.startsWith("http")
    ? finalImage
    : `${baseUrl}${finalImage}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oxygen Arabia ICT",
    alternateName: "Oxygen Technology Co., Ltd.",
    url: baseUrl,
    logo: `${baseUrl}/icons/oxygen/Oxygen.png`,
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

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="author" content="Oxygen Arabia ICT" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={finalType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Oxygen Arabia ICT" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_SA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@oxygen_arabia" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="Oxygen Arabia ICT" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preload critical resources */}
      <link rel="preload" href="/icons/oxygen/Oxygen.png" as="image" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
}
