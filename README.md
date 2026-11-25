# Hindu Business Network Platform

A trusted digital business network for Hindu business owners, entrepreneurs, professionals, traders, manufacturers, service providers, and organizations. The platform is planned for web and mobile, with shared accounts, profiles, connections, membership, messaging, reputation, and advertising.

> **Project status:** Planning is complete and the backend foundation is scaffolded. Authentication and product features are not implemented yet. The member website, public landing website, admin panel, and Flutter app are still planned. See [Current Status](plans/CURRENT_STATUS.md) before using or extending the project.

## Product surfaces

- **Backend API:** NestJS, TypeScript, MongoDB, and Mongoose.
- **Member mobile app:** Flutter and Dart (planned; not scaffolded yet).
- **Member website:** Next.js and TypeScript (planned).
- **Public landing website:** Next.js and TypeScript (planned).
- **Admin panel:** planned in the existing `admin-panel/` directory.

All clients will use the same server-authoritative API. Mobile and web clients must never connect directly to MongoDB.

## Technology stack

| Area | Current direction |
|---|---|
| Runtime | Node.js 24 LTS, npm 11 |
| API | NestJS 11, TypeScript, REST under `/api/v1` |
| Database | MongoDB 8.0, Mongoose 9, Nest Mongoose integration |
| Local database | MongoDB single-node replica set through Docker Compose |
| Mobile | Flutter and Dart |
| Web | Next.js and TypeScript (planned) |
| API docs | Swagger/OpenAPI in non-production environments |

The backend stack decision and tradeoffs are recorded in [ADR-001](plans/architecture/ADR-001-BACKEND-STACK.md). MongoDB collections and Mongoose schemas will be added alongside the feature checkpoints that own them.

## Repository layout

```text
backend/       NestJS API scaffold, MongoDB connection and local Compose setup
website/       Planned member and public web applications
mobile-app/    Planned Flutter/Dart member app
admin-panel/  Planned staff console
assets/        Brand assets, including the HBN logo
plans/         Product requirements, architecture, feature specs and checkpoints
```

The application directories may be empty until their implementation phases begin. The existing directory names `plans/` and `admin-panel/` are intentionally preserved.

## Backend setup

### Prerequisites

- Node.js 24.15 or newer on the 24.x line
- npm 11 or newer
- Docker with Docker Compose for the local MongoDB replica set

### Start locally

From PowerShell:

```powershell
cd backend
Copy-Item .env.example .env
npm install
docker compose up -d mongo
npm run start:dev
```

The local `.env` contains development-only MongoDB credentials. It is ignored by Git; do not replace it with production secrets. To stop the local database, run `docker compose down` from `backend/`. The database data persists in the named Compose volume.

### Available API routes

- `GET http://localhost:3000/api/v1/health` — checks the MongoDB connection and readiness.
- `http://localhost:3000/api/v1/docs` — Swagger documentation when `NODE_ENV` is not `production`.

No registration, authentication, profile, feed, chat, subscription, advertising, or admin endpoints have been implemented yet. A successful health response only confirms API/database readiness; it does not indicate the product is feature-complete.

### Useful backend commands

Run these from `backend/`:

```powershell
npm run start:dev
npm run build
npm run lint
npm run typecheck
npm run test
```

The scaffold currently builds and passes lint. A test harness is present, but no behavior tests are implemented yet. MongoDB runtime readiness depends on Docker or another reachable MongoDB replica set.

## Product and architecture documentation

- [Product requirements](plans/PRD.md)
- [System architecture](plans/architecture/SYSTEM_ARCHITECTURE.md)
- [MongoDB logical data model](plans/architecture/DATABASE_DOCUMENTATION.md)
- [Initial API contract](plans/architecture/API_DOCUMENTATION.md)
- [Membership rules](plans/features/MEMBERSHIP.md)
- [Messaging design](plans/features/MESSAGING.md)
- [Reputation and ranking](plans/features/REVIEWS_AND_RANKING.md)
- [Advertising workflow](plans/features/ADVERTISEMENT_SYSTEM.md)
- [Flutter mobile app plan](plans/mobile-app/MOBILE_APP_PRD.md)
- [Recommended skills and tooling](plans/development/RECOMMENDED_AI_SKILLS.md)
- [Development roadmap](plans/ROADMAP.md)
- [Current status and AI handoff](plans/CURRENT_STATUS.md)
- [Open decisions and risks](plans/RISKS_AND_DECISIONS.md)

Phase checklists live in [`plans/checkpoints/`](plans/checkpoints/). Read the current status and relevant checkpoint before making changes. Update the status, checkpoint, changelog, and technical documentation at the end of each meaningful development session.

## Brand direction

The HBN logo combines saffron and marigold, vermilion lettering, a trident/damru/Om motif, flags, a handshake, and community figures. The visual direction uses those colors in a restrained professional interface, with legible Devanagari typography. See the [Phase 00 audit](plans/checkpoints/PHASE_00_PROJECT_AUDIT.md) and the detailed [mobile](plans/ui-prompts/MEMBER_MOBILE.md), [member website](plans/ui-prompts/MEMBER_WEBSITE.md), [admin](plans/ui-prompts/ADMIN_DASHBOARD.md), and [public landing](plans/ui-prompts/PUBLIC_LANDING.md) design prompts.

## Security and privacy principles

- Enforce authentication, membership entitlements, ownership, and field visibility on the backend.
- Never return private contact fields in public profile or directory responses.
- Keep credentials and secrets in local ignored environment files or a production secret manager; never commit them.
- Verify payment events on the server before changing subscription or campaign state.
- Restrict private message moderation to an explicit, authorized, audited workflow.
- Plan account export, deletion, consent, retention, and legal review before production.

## Contributing

Work against the active phase and keep changes focused. Add MongoDB schema/index changes with the relevant feature documentation and API contract. Validate input at the API boundary, use explicit response DTOs, and enforce authorization in backend services. Never mark an unfinished feature complete. See [coding standards](plans/development/CODING_STANDARDS.md) and [AI development guidelines](plans/development/AI_DEVELOPMENT_GUIDELINES.md).

## License

No open-source license has been selected. All rights are reserved unless the project owner adds a license.
