# Chat System
Persist one-to-one messages in MongoDB collections; authenticated WebSockets provide live events. MongoDB is truth; reconnect retrieves by cursor. Use an idempotent outbox/event mechanism for reliable publication. Redis may hold transient typing/presence. Keep message histories separate from conversation documents to avoid unbounded documents.

Check both participants, entitlement, account state, block state, conversation membership and upload access on every join/send/history/receipt/notification. Idempotent client message IDs prevent duplicates. Sent/delivered/read receipts are separate; offline retries reconcile. Typing/last-seen privacy-controlled. Push previews omit sensitive content by default. Local delete does not mean global deletion. Signed media links expire. Reports lead to case-scoped review with purpose, minimal scope and audit; no unrestricted admin browsing.

Tests: expiry, unauthorized access, block races, retries, reconnect, unread counts, delivery, notification preferences, limits and admin case audit.
