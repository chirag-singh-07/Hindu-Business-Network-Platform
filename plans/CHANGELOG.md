# Changelog

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
