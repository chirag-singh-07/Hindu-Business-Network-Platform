# System Architecture — Proposed

## Stack recommendation
TypeScript modular monolith on Node.js LTS with NestJS REST `/api/v1` and authenticated WebSocket gateway; MongoDB through Mongoose and `@nestjs/mongoose`; Redis for ephemeral presence, rate limits and queues; BullMQ workers; S3-compatible media storage and signed URLs. Next.js/TypeScript for public/member web; separate admin app in existing `admin-panel/`. Flutter/Dart for iOS and Android. Tailwind and accessible Radix/shadcn primitives on web; Flutter widgets on mobile. Docker for repeatable local/CI; managed production data services.

## Logical architecture
Clients → CDN/WAF → REST API / WebSocket → domain modules → MongoDB replica set. Redis supports transient/work queue tasks, never durable business truth. Object storage holds media. Adapters provide payments, email/SMS, push and observability. Admin is a separate access boundary; mobile and web use API DTOs and never connect directly to MongoDB.

## Modules
Identity/access; members/business profiles; membership/billing; directory/search; feed/media; connections; messaging; reputation/reviews; advertising; notifications; moderation/reports; admin/audit; consent/privacy. Modules own policies, DTOs, application services and persistence. Avoid cross-module table writes; use interfaces and transactional outbox.

## Security/reliability
Short-lived access tokens and rotating hashed refresh sessions; secure HttpOnly SameSite browser cookies with CSRF defense; OS secure storage on Flutter mobile; MFA for admins. Check account status, ownership, role, visibility, connection, entitlement and resource state at service boundary. Explicitly project public/private fields. Recheck WebSocket subscriptions/sends. Private media uses short-lived access URLs. Case-scoped audited message review only. Validate uploads and redact logs. Idempotency keys and verified webhooks. MongoDB is the source of truth. Use explicit Mongoose validators, unique/query indexes, bounded document embedding and service-level ownership checks; avoid unbounded arrays and client-supplied Mongo operators. Multi-document transactions require replica-set deployment. Backups, restore drills, metrics, traces, alerts and runbooks are required before launch.

## Unresolved
Hosting/region, gateway, verification, email/SMS vendor, analytics/consent, retention, exact entitlements, and whether admin shares workspace need decisions. See `RISKS_AND_DECISIONS.md`.
