// SEO utility functions for dynamic meta tag generation

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image: string;
  type?: string;
  url?: string;
}

export const generateBlogPostSEO = (
  title: string,
  excerpt: string,
  slug: string,
  image?: string
): SEOData => ({
  title: `${title} - Oxygen Arabia ICT Blog`,
  description: excerpt.length > 160 ? `${excerpt.substring(0, 157)}...` : excerpt,
  keywords: `${title.toLowerCase()}, blog, technology, ICT, insights, Oxygen Arabia`,
  image: image || '/images/blogs/blog-1.jpeg',
  type: 'article',
  url: `/blog/${slug}`
});

export const generateProductSEO = (
  productName: string,
  description: string,
  category: string
): SEOData => ({
  title: `${productName} - Oxygen Arabia ICT Products`,
  description: description.length > 160 ? `${description.substring(0, 157)}...` : description,
  keywords: `${productName.toLowerCase()}, ${category.toLowerCase()}, products, technology solutions, ICT`,
  image: `/images/projects/${productName.toLowerCase().replace(/\s+/g, '_')}.png`,
  type: 'product',
  url: `/products/${productName.toLowerCase().replace(/\s+/g, '-')}`
});

export const generateEventSEO = (
  eventTitle: string,
  eventDescription: string,
  eventDate: string
): SEOData => ({
  title: `${eventTitle} - Oxygen Arabia ICT Events`,
  description: `${eventDescription} | Event Date: ${eventDate}`,
  keywords: `${eventTitle.toLowerCase()}, events, technology conference, ICT events, Saudi Arabia`,
  image: '/images/events/Frame_Oxy.jpg',
  type: 'event',
  url: '/events'
});

export const cleanMetaDescription = (text: string, maxLength: number = 160): string => {
  // Remove HTML tags and extra whitespace
  const cleaned = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  return cleaned.length > maxLength ? `${cleaned.substring(0, maxLength - 3)}...` : cleaned;
};

export const generateKeywords = (baseKeywords: string[], additionalTerms: string[] = []): string => {
  const allKeywords = [...baseKeywords, ...additionalTerms, 'Oxygen Arabia ICT', 'Saudi Arabia', 'technology'];
  return [...new Set(allKeywords)].join(', ');
};