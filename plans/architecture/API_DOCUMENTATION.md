# API Documentation — Initial Contract
Base `/api/v1`; JSON, OpenAPI, stable error code/message/request ID, cursor pagination. Request/response DTOs are separate from Mongoose documents. Never return raw Mongo documents or allow client-supplied query operators.

Modules/routes: auth register/login/refresh/logout/verify; `GET/PATCH /me`; member and business profile read/edit; directory/filter/recommendations; posts/comments/reactions/saves/reports; connection request/accept/reject/withdraw/remove/list; plans/checkout/subscription/cancel/provider webhook; conversations/messages/receipts/block/report; reviews/leaderboards/badges; ad draft/submit/pause/performance and admin decisions; notifications/preferences/devices; scoped admin moderation, plans, audit and privacy requests.

Enforce role, ownership, state, visibility, connection, entitlement and account status server-side. Use idempotency for financial/campaign/message writes, bounded inputs, allowlisted filters/sorts, rate limits and audit records. Use projections to avoid reading/serializing unnecessary PII. Responses omit private contacts, GSTIN, hidden profile attributes, message content, provider secrets and moderation data unless policy authorizes access.

WebSocket events: client join/send/read/typing; server created/delivered/read/presence/typing/error. Include version and IDs/timestamps. Every event reauthorizes. Reconnect fetches durable data by cursor; presence/typing are ephemeral and privacy controlled. Breaking contracts are versioned; generate typed clients and contract tests.
