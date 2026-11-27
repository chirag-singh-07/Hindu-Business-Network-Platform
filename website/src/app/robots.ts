import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const production = process.env.NODE_ENV === 'production';
  return {
    rules: production ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    ...(production && process.env.NEXT_PUBLIC_SITE_URL
      ? { sitemap: `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')}/sitemap.xml` }
      : {}),
  };
}
