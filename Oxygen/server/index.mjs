import express from 'express';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Determine if running from built directory or development
const isBuilt = existsSync(join(__dirname, '../index.html'));
const staticDir = isBuilt ? join(__dirname, '..') : join(__dirname, '../dist');
const indexPath = isBuilt ? join(__dirname, '../index.html') : join(__dirname, '../dist/index.html');

// Serve static files with correct MIME types
app.use(express.static(staticDir, {
  setHeaders: (res, path) => {
    if (path.endsWith('.js') || path.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// SEO data for different pages
const seoData = {
  '/': {
    title: 'Oxygen Arabia ICT - Leading Technology Solutions Provider',
    description: 'Oxygen Technology Co., Ltd., a leading company in information technology and telecommunications services (ICT) Industry in Saudi Arabia.',
    keywords: 'ICT, technology, Saudi Arabia, telecommunications, software development, digital transformation',
    image: '/icons/oxygen/Oxygen.png',
    type: 'website'
  },
  '/about': {
    title: 'About Us - Oxygen Arabia ICT',
    description: 'Learn about Oxygen Arabia ICT, our mission, vision, and commitment to Saudi Vision 2030. Leading ICT solutions provider.',
    keywords: 'about oxygen, company profile, Saudi Vision 2030, ICT company',
    image: '/images/about-us/about-1.jpeg',
    type: 'website'
  },
  '/services': {
    title: 'Our Services - Oxygen Arabia ICT',
    description: 'Comprehensive ICT services including software development, cloud solutions, digital transformation, and telecommunications.',
    keywords: 'ICT services, software development, cloud solutions, digital transformation',
    image: '/images/services.jpg',
    type: 'website'
  },
  '/projects': {
    title: 'Our Projects - Oxygen Arabia ICT',
    description: 'Explore our successful ICT projects and digital solutions that drive innovation and growth.',
    keywords: 'ICT projects, digital solutions, software projects, technology portfolio',
    image: '/images/projects/Smart_Center.png',
    type: 'website'
  },
  '/achievements': {
    title: 'Achievements - Oxygen Arabia ICT',
    description: 'Discover our awards, certifications, and achievements in the ICT industry.',
    keywords: 'achievements, awards, certifications, ICT excellence',
    image: '/images/achievements/award.jpg',
    type: 'website'
  },
  '/team': {
    title: 'Our Team - Oxygen Arabia ICT',
    description: 'Meet our expert team of ICT professionals driving innovation and excellence.',
    keywords: 'team, experts, ICT professionals, leadership',
    image: '/images/team/ahmed-taj.jpg',
    type: 'website'
  },
  '/contact': {
    title: 'Contact Us - Oxygen Arabia ICT',
    description: 'Get in touch with Oxygen Arabia ICT for your technology needs. Contact information and office locations.',
    keywords: 'contact, office locations, get in touch, ICT consultation',
    image: '/icons/oxygen/Oxygen.png',
    type: 'website'
  },
  '/events': {
    title: 'Events - Oxygen Arabia ICT',
    description: 'Stay updated with our latest events, conferences, and technology showcases.',
    keywords: 'events, conferences, technology showcases, ICT events',
    image: '/images/events/Frame_Oxy.jpg',
    type: 'website'
  },
  '/blog': {
    title: 'Blog - Oxygen Arabia ICT',
    description: 'Read our latest insights on technology trends, ICT innovations, and industry updates.',
    keywords: 'blog, technology trends, ICT insights, industry news',
    image: '/images/blogs/blog-1.jpeg',
    type: 'website'
  },
  '/careers': {
    title: 'Careers - Oxygen Arabia ICT',
    description: 'Join our team at Oxygen Arabia ICT. Explore career opportunities in the ICT industry.',
    keywords: 'careers, jobs, ICT careers, technology jobs, Saudi Arabia jobs',
    image: '/icons/oxygen/Oxygen.png',
    type: 'website'
  }
};

// Generate structured data
function generateStructuredData(path) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Oxygen Arabia ICT",
    "alternateName": "Oxygen Technology Co., Ltd.",
    "url": "https://oxygen-arabia.com",
    "logo": "https://oxygen-arabia.com/icons/oxygen/Oxygen.png",
    "description": "Leading ICT solutions provider in Saudi Arabia",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Riyadh"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://linkedin.com/company/oxygen-arabia",
      "https://twitter.com/oxygen_arabia"
    ]
  };

  if (path === '/') {
    return {
      ...baseData,
      "@type": "TechCompany",
      "foundingDate": "2020",
      "industry": "Information Technology",
      "numberOfEmployees": "50-100",
      "keywords": "ICT, Software Development, Digital Transformation, Saudi Vision 2030"
    };
  }

  return baseData;
}

// Generate meta tags
function generateMetaTags(path, baseUrl = 'https://oxygen-arabia.com') {
  const data = seoData[path] || seoData['/'];
  const canonicalUrl = `${baseUrl}${path === '/' ? '' : path}`;
  
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
app.get('*', (req, res) => {
  try {
    if (!existsSync(indexPath)) {
      return res.status(404).send('Build files not found. Please run: npm run build');
    }

    let html = readFileSync(indexPath, 'utf-8');
    
    // Extract the path
    const path = req.path === '/' ? '/' : req.path.replace(/\/$/, '');
    
    // Generate and inject meta tags
    const metaTags = generateMetaTags(path);
    
    // Replace the existing meta tags in head
    html = html.replace(
      /<title>.*?<\/title>/,
      metaTags
    );
    
    // Add preload hints for critical resources
    const preloadHints = `
      <link rel="preload" href="/icons/oxygen/Oxygen.png" as="image">
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cairo:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" as="style">
      <link rel="dns-prefetch" href="//fonts.googleapis.com">
      <link rel="dns-prefetch" href="//fonts.gstatic.com">
    `;
    
    html = html.replace('</head>', `${preloadHints}</head>`);
    
    res.send(html);
  } catch (error) {
    console.error('Error serving page:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving from: ${staticDir}`);
  console.log(`📄 Index file: ${indexPath}`);
});