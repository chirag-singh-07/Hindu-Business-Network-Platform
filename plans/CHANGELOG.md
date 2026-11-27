# Changelog

## 2026-11-26 — Public landing website
- Added a responsive Next.js public landing page with HBN branding, editorial typography, community and membership content, accessible FAQ disclosures, and clear onboarding status.
- Added deferred GSAP/ScrollTrigger reveals, Animate.css entrance effects, reduced-motion handling, SEO metadata, sitemap and robots routes, image optimization, baseline security headers, and setup documentation.
- Updated the root README and current project status. Fixed the npm-audit finding by moving Sharp to the patched 0.35.5 release line; website dependency audit now reports zero vulnerabilities.
- Next.js compilation and ESLint succeeded. Full build type-checking remains unverified because npm could not complete a clean dependency install and Next.js type declarations are unavailable.

## 2026-11-26 — GitHub project README
- Added root `README.md` with product overview, chosen MongoDB/Flutter stack, backend setup, current implementation limits, documentation links and security principles.

## 2026-11-25 — User-selected database and mobile stack
- Replaced the initial PostgreSQL/Prisma backend scaffold with MongoDB/Mongoose and local replica-set configuration.
- Updated API health check, package manifest/lockfile, environment variables, database/architecture docs, risks and current status.
- Replaced Expo/React Native mobile planning with Flutter/Dart and documented Flutter architecture/tooling.
- Installed MongoDB integration packages. Docker/MongoDB runtime and Flutter SDK remain unverified.
- Backend build and lint pass; production dependency audit reports zero vulnerabilities. Full audit reports 19 moderate dev-tooling advisories; no breaking forced upgrade was applied.

## 2026-11-25 — Backend foundation started
- Added NestJS/TypeScript backend scaffold with configuration validation, API prefix, security headers, CORS, throttling, Swagger and PostgreSQL health route.
- Added Prisma 7/PostgreSQL adapter integration point, schema/config, environment template and local database Compose file.
- Documented ADR-001 and backend-first Phase 01 status/handoff.
- Dependency installation blocked by npm registry DNS failure; Docker unavailable; no build or database verification performed.

## 2026-11-21 — Phase 00 planning baseline
- Audited empty application directories and inspected HBN logo.
- Created initial product, architecture, database/API, feature, client/admin, UI prompt, AI skills, roadmap and checkpoint documents.
- No app source code, dependencies or configuration changed.
