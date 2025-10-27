import { Helmet } from "react-helmet-async";

interface OrganizationSchema {
  name: string;
  alternateName?: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    "@type": "PostalAddress";
    addressCountry: string;
    addressRegion?: string;
    addressLocality?: string;
  };
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    availableLanguage: string[];
  };
  sameAs?: string[];
  foundingDate?: string;
  industry?: string;
  numberOfEmployees?: string;
}

interface StructuredDataProps {
  type: "organization" | "service" | "product" | "article" | "event";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseContext = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case "organization":
        return {
          ...baseContext,
          "@type": "Organization",
          ...data,
        };

      case "service":
        return {
          ...baseContext,
          "@type": "Service",
          ...data,
          provider: {
            "@type": "Organization",
            name: "Oxygen Arabia ICT",
            url: "https://oxygenarabia.com",
          },
        };

      case "product":
        return {
          ...baseContext,
          "@type": "Product",
          ...data,
          manufacturer: {
            "@type": "Organization",
            name: "Oxygen Arabia ICT",
            url: "https://oxygenarabia.com",
          },
        };

      case "article":
        return {
          ...baseContext,
          "@type": "Article",
          ...data,
          publisher: {
            "@type": "Organization",
            name: "Oxygen Arabia ICT",
            logo: {
              "@type": "ImageObject",
              url: "https://oxygenarabia.com/icons/oxygen/Oxygen.png",
            },
          },
        };

      case "event":
        return {
          ...baseContext,
          "@type": "Event",
          ...data,
          organizer: {
            "@type": "Organization",
            name: "Oxygen Arabia ICT",
            url: "https://oxygenarabia.com",
          },
        };

      default:
        return baseContext;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema(), null, 2)}
      </script>
    </Helmet>
  );
}

// Predefined schemas for common use cases
export const OxygenOrganizationSchema: OrganizationSchema = {
  name: "Oxygen Arabia ICT",
  alternateName: "Oxygen Technology Co., Ltd.",
  url: "https://oxygenarabia.com",
  logo: "https://oxygenarabia.com/icons/oxygen/Oxygen.png",
  description:
    "Leading ICT solutions provider in Saudi Arabia, specializing in digital transformation, cloud services, and innovative technology solutions.",
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
  foundingDate: "2020",
  industry: "Information Technology",
  numberOfEmployees: "50-100",
};
