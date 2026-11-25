# ADR-001: Backend and Mobile Stack

**Status:** Adopted for initial foundation. **Date:** 2026-11-25.

## Context
The repository started without a backend framework or database. The product owner specified MongoDB as the database and Flutter for mobile.

## Decision
- Node.js 24 LTS, TypeScript and NestJS 11 for the backend.
- MongoDB 8.0 for local development; Mongoose 9 and `@nestjs/mongoose` for data access.
- Local MongoDB runs as a single-node replica set so multi-document transaction behavior can be exercised.
- Flutter/Dart for iOS and Android.
- Next.js/TypeScript for web surfaces; clients access MongoDB only through the backend API.
- Redis remains optional for ephemeral presence, limits and queues; MongoDB stores durable product state.

## Rationale
These choices follow the product owner's explicit requirements and maintain one server-authoritative API. MongoDB document collections suit evolving profile/content records when paired with bounded embeds, explicit indexes and service-level integrity rules. Flutter is the selected cross-platform mobile client. Mongo transactions require replica-set deployments.

## Consequences
Mongoose schemas, indexes and application services replace relational constraints. Cross-document references and delete policies need deliberate enforcement. Production topology, hosting, and recovery objectives remain open. Flutter's app manifest and packages will be established in Phase 11. Exact mobile state, routing and API packages remain undecided.

## References
- [NestJS MongoDB integration](https://docs.nestjs.com/techniques/mongodb)
- [Mongoose connections](https://mongoosejs.com/docs/connections.html)
- [MongoDB 8.0 release notes](https://www.mongodb.com/docs/manual/release-notes/8.0/)
- [Flutter installation](https://docs.flutter.dev/install)
- [Flutter app architecture](https://docs.flutter.dev/app-architecture)
