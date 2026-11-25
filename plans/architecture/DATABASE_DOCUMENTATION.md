# Database Documentation — MongoDB Logical Model

MongoDB is the system of record. Use Mongoose schemas with explicit collection names, validators, timestamps, projections and reviewed indexes. This is a logical collection model, not a fixed implementation.

## Collections
- `users`: normalized email/phone, credentials/provider refs, status and timestamps; unique sparse indexes for optional normalized identities.
- `auth_sessions`: user ID, hashed refresh token, device metadata and expiry/revocation; TTL index only where retention policy permits.
- `roles` / `user_roles`: server-managed staff permission assignments.
- `member_profiles`: user ID, name, photo, bio, location, field visibility and verification state.
- `business_profiles`: owner ID, name/logo, category/industry, description, products/services, location, permitted contacts, optional GSTIN, experience and social links. Embed only bounded settings/social links; isolate gallery/documents.
- `business_media`, `business_documents`: object key, classification, processing state and owner.
- `membership_plans`: versioned features, price/currency/interval/state; `subscriptions`: user, plan snapshot, state, dates and provider reference.
- `payment_orders`, `payment_transactions`, `payment_webhook_events`, `refunds`: provider references, unique event IDs, amount/currency/state and audit metadata; never store payment secrets/card data.
- `connections`: canonical member pair, requester, state and timestamps; unique pair index prevents duplicates.
- `posts`, `post_media`, `comments`, `post_reactions`, `comment_reactions`, `saved_posts`, `content_reports`: cursor indexes; do not embed unbounded comments/reactions in a post.
- `conversations`, `messages`, `message_receipts`, `member_blocks`: separate unbounded messages; index by conversation/time and unique client message ID per sender.
- `reviews`, `points_rules`, `points_ledger`, `badges`, `badge_rules`, `member_badges`: append-only/deduplicated ledger and versioned award history.
- `ad_campaigns`, `ad_creatives`, `ad_reviews`, `ad_events`, `ad_billing`: explicit transitions and deduplicated events; high-volume events remain separate or are aggregated by policy.
- `notifications`, `notification_preferences`, `device_tokens`, `consents`, `privacy_requests`, `data_exports`, `deletion_jobs`, `audit_events`, `moderation_cases`, `outbox_events`.

## Integrity and data shape
ObjectIds are internal references; API DTOs expose stable string IDs and never raw Mongo documents. MongoDB has no relational foreign keys, so services/jobs enforce ownership, existence and deletion behavior. Add unique indexes for normalized identity, connection pair, provider event ID, ledger idempotency source and per-sender message ID. Version schema changes and backfills. Embed bounded data that shares parent access/lifecycle; keep independently paginated or unbounded data in separate collections.

## Transactions, indexes and retention
Use transactions only for multi-document invariants and only on replica-set deployments. External payment side effects still require idempotency and reconciliation. Local Compose starts a single-node replica set. Index discovery queries for supported filters/sorts, feeds by visibility/cursor, connections by pair/state, messages by conversation/time, subscriptions by user/state/end, campaigns by state/schedule, and audit by actor/time. Do not TTL records that need legal/audit retention. Define privacy retention, deletion/anonymization, backup, restore and change-stream resume policy before production.
