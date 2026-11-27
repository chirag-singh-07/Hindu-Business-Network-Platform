# HBN Public Landing Website

The public landing page for Hindu Business Network, built with Next.js App Router, TypeScript, GSAP ScrollTrigger, and a small Animate.css entrance treatment. The page uses the approved HBN logo and warm ivory, saffron, and wine brand palette. It describes the planned product without implying that member registration or paid subscriptions are live.

## Requirements

- Node.js 24.15 or newer on Node 24.x
- npm 11 or newer

## Local development

```powershell
cd website
npm install
npm run dev
```

Open `http://localhost:3000`. Useful commands are `npm run lint`, `npm run typecheck`, and `npm run build`; `npm start` serves a production build.

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin in production, for example `https://example.com`. This enables canonical metadata, the sitemap, and organization structured data. Do not put secrets in `NEXT_PUBLIC_*` variables; Next.js exposes them to browsers. The landing page does not currently collect user data or call the backend.

## Performance and accessibility

The page is server-rendered, uses Next Image for the logo, stays with local system font stacks to avoid external font requests, and defers GSAP/ScrollTrigger loading until after the first render. GSAP only animates elements as they enter view and respects reduced-motion preferences. Semantic landmarks, skip navigation, visible keyboard focus, responsive layouts, native disclosure controls, and reduced-motion CSS are included.

## Security and deployment

`next.config.ts` sets baseline response headers and a restrictive Content Security Policy suitable for this page's current same-origin assets. Review and adjust policy sources deliberately if analytics, a CDN, remote images, or external embeds are added. Deploy behind HTTPS, set `NEXT_PUBLIC_SITE_URL`, and use the hosting provider's secret management for any future server-only credentials. Keep Next.js and dependencies updated and review advisories before releases.

Account onboarding and the member application are not implemented by this public landing site. The authenticated product will use the NestJS API and MongoDB; mobile clients are planned in Flutter.
