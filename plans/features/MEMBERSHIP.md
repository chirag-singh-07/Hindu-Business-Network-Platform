# Membership System
Version plans and named entitlements such as `chat.send`, `directory.advanced_filters`, `contact.view.premium`; support limits and effective dates. Free is explicit baseline. API evaluates current entitlement on restricted actions, with short-lived cache and invalidation.

| Capability | Visitor | Free | Premium |
|---|---|---|---|
| Public directory/posts | Yes | Yes | Yes |
| Own profile, posts, reactions, connections | No | Yes | Yes |
| Explicit public contacts | Yes | Yes | Yes |
| Premium-only permitted contacts | No | No | Yes, owner policy applies |
| Initiate private chat | No | No | Yes, recipient eligible and unblocked |
| Advanced discovery/visibility | No | No | Plan configured |
| Approved advertisements | Yes | Yes | Yes |

Lifecycle: draft/versioned plan → order → signature-verified idempotent webhook → active → renewal/past-due/grace (if defined) → cancel/expiry/refund. Redirect is not payment proof. Preserve plan snapshots and transactions. Manual grants require actor, reason, expiry, audit. Define tax, gateway, renewal, grace, refund, and whether recipients retain old message history after entitlement expiry before launch.
