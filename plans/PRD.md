# Hindu Business Network — Product Requirements (Draft)
Version 0.1 | Planning baseline | 2026-11-21

## Vision and product
A trusted digital business network for Hindu business owners, entrepreneurs, professionals, traders, manufacturers, service providers and organizations. Provide a shared backend, Flutter/Dart member mobile app, member website, public landing site, admin panel, messaging, subscriptions, reputation and advertising.

## Roles and membership
Visitor: public landing pages and intentionally public content. Free member: account/profile, directory, public profiles/posts, posts and interactions, connections, public ranking/badges, approved ads; no private chat initiation and only explicitly public contact fields. Premium: all free capabilities plus configurable entitlements for messaging, eligible contact details, advanced discovery, visibility/customization and analytics. Admin staff use separately scoped roles. Every premium check is enforced by backend services on every client; front-end gates only explain the restriction.

## Functional domains
Identity/session lifecycle; business profiles and field-level privacy; directory/search; feed/media/comments; connection state machine; versioned membership, payments and refunds; one-to-one chat; reviews/points/rankings/badges; ad campaign lifecycle; notifications; moderation; admin/audit; consent, export and deletion.

## Critical journeys
Visitor registers and verifies contact. Member completes business profile and visibility preferences, discovers peers, requests a connection. Free member sees a clear contextual premium gate before restricted operation. Premium members exchange authorized messages and reconcile after reconnect. Advertiser drafts, reviews terms/cost, pays through server-verified gateway, submits creative for review and sees reasoned status/performance. Staff process only role-authorized queues.

## Non-functional bar
Secure by default; API-level authorization; safe field projection; rate limiting; idempotent payments and writes; durable message storage; backups and restore drills; observable errors; accessible keyboard/screen-reader web and scalable native text; responsive design; localization-ready India-first dates/currency/time; consent-aware analytics; defined personal-data retention/deletion. Never invent analytics.

## Initial success measures
Define consented event semantics before measuring profile activation, verified businesses, useful accepted connections, retention, premium conversion/renewal, chat reliability, ad results, report resolution, abuse and privacy incidents.

## Initial exclusions
Marketplace transactions, events, groups, referrals, AI recommendations, voice messages, advanced ad targeting, multilingual UI and large-scale analytics. Keep extension points but defer implementation.

Each feature requires policy, API contract, permissions, data lifecycle, error/empty/loading states, accessibility, abuse mitigations, test coverage and checkpoint before completion.

