import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl || process.env.NODE_ENV !== 'production') return [];
  return [{ url: siteUrl.replace(/\/$/, ''), changeFrequency: 'monthly', priority: 1 }];
}
