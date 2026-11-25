# Backend Module Boundaries

Keep domains isolated under `src/modules/`; create implementation only at the matching approved checkpoint. Modules should expose application services and DTOs, not direct cross-module collection writes.

- `identity`: Phase 02; account lifecycle, sessions, authorization.
- `members`: Phase 03; member/business profiles and privacy projection.
- `directory`, `connections`: Phase 05.
- `membership`, `billing`: Phase 06.
- `messaging`, `notifications`: Phase 07.
- `reputation`, `reviews`, `badges`: Phase 08.
- `advertising`: Phase 09.
- `admin`, `moderation`, `privacy`: Phase 10+.

Use Mongoose schemas with explicit field validation, indexes and collection names. Add MongoDB transactions only for workflows that span documents and ensure deployment uses a replica set. The `health` module is the only initialized domain module. This list is not a claim of completed functionality.
