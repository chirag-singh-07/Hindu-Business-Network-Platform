import type { Metadata, Viewport } from 'next';
import 'animate.css/source/_base.css';
import 'animate.css/source/fading_entrances/fadeIn.css';
import './globals.css';
import MotionReveal from '@/components/MotionReveal';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: 'Hindu Business Network — Business grows stronger together',
    template: '%s | Hindu Business Network',
  },
  description:
    'A trusted business network for Hindu entrepreneurs, professionals, traders, manufacturers, and service providers to discover one another and build lasting relationships.',
  applicationName: 'Hindu Business Network',
  category: 'business',
  ...(metadataBase ? { alternates: { canonical: '/' } } : {}),
  openGraph: {
    type: 'website',
    siteName: 'Hindu Business Network',
    title: 'Business grows stronger together',
    description: 'A trusted place for Hindu businesses to discover one another and build lasting relationships.',
    images: [{ url: '/hbn-logo.jpg', width: 640, height: 640, alt: 'Hindu Business Network emblem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hindu Business Network',
    description: 'Business grows stronger together.',
    images: ['/hbn-logo.jpg'],
  },
  icons: { icon: '/favicon.svg', apple: '/hbn-logo.jpg' },
  robots: { index: process.env.NODE_ENV === 'production', follow: process.env.NODE_ENV === 'production' },
};

export const viewport: Viewport = {
  themeColor: '#f7f2e9',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <MotionReveal />
      </body>
    </html>
  );
}
