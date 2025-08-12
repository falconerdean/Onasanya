'use client';

import './globals.css';
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { websiteMetadata } from '@/data/augustadvice';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>{websiteMetadata.title}</title>
        <meta name="description" content={websiteMetadata.description} />
        {websiteMetadata.keywords && (
          <meta name="keywords" content={websiteMetadata.keywords.join(', ')} />
        )}
        {websiteMetadata.author && (
          <meta name="author" content={websiteMetadata.author} />
        )}
        
        {/* Open Graph */}
        <meta property="og:title" content={websiteMetadata.title} />
        <meta property="og:description" content={websiteMetadata.description} />
        {websiteMetadata.ogImage && (
          <meta property="og:image" content={websiteMetadata.ogImage} />
        )}
        {websiteMetadata.ogType && (
          <meta property="og:type" content={websiteMetadata.ogType} />
        )}
        
        {/* Twitter Card */}
        {websiteMetadata.twitterCard && (
          <meta name="twitter:card" content={websiteMetadata.twitterCard} />
        )}
        <meta name="twitter:title" content={websiteMetadata.title} />
        <meta name="twitter:description" content={websiteMetadata.description} />
        {websiteMetadata.ogImage && (
          <meta name="twitter:image" content={websiteMetadata.ogImage} />
        )}
      </head>
      <body>
        <Navigation />
        <main className={isHomePage ? '' : 'main-with-bg'}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}