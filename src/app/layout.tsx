import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteConfig } from '@/data/site-config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: siteConfig.professional.name }],
  metadataBase: new URL(siteConfig.meta.siteUrl),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.siteUrl,
    siteName: siteConfig.professional.treatmentTitle,
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: siteConfig.professional.treatmentTitle,
    description: siteConfig.meta.description,
    medicalSpecialty: 'Speech-Language Pathology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.neighborhoodAndCity,
      addressCountry: 'BR',
    },
    telephone: siteConfig.contact.phoneDisplay,
    priceRange: '$$',
  };

  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#fcfcfb] text-stone-900 antialiased selection:bg-teal-200 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
