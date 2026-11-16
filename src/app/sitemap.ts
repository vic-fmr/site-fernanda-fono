import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.meta.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...siteConfig.navLinks
      .filter((link) => link.href.startsWith('/'))
      .filter((link) => link.href !== '/')
      .map((link) => ({
        url: `${baseUrl}${link.href}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
  ];
}
