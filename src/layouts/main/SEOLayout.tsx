import { ReactNode } from 'react';
import SEOHead from '@/components/seo/SEOHead';

interface SEOLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
}

export default function SEOLayout({
  children,
  title,
  description,
  keywords,
  image,
  type,
  noIndex
}: SEOLayoutProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        type={type}
        noIndex={noIndex}
      />
      {children}
    </>
  );
}