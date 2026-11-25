# Backend

NestJS API scaffold for the Hindu Business Network. Requires Node.js 24.15+ on the 24 line and npm 11. Copy `.env.example` to `.env` for local development; `.env` is ignored by Git.

## Local development
1. Copy the template: `Copy-Item .env.example .env` (PowerShell).
2. Install dependencies with `npm install`.
3. Start MongoDB's local replica set: `docker compose up -d mongo` (Docker required).
4. Start the API in watch mode: `npm run start:dev`.

Health/readiness route: `GET /api/v1/health` (pings MongoDB). Swagger docs: `/api/v1/docs` in development only.

## Structure
- `src/config`: validated runtime configuration.
- `src/common`: cross-cutting HTTP behavior.
- `src/modules`: domain boundaries; health is initialized.
- MongoDB collections and Mongoose schemas are added within their feature modules.
- `test`: test configuration; no behavior tests are implemented yet.

No product API feature is complete in this scaffold. Keep authorization in backend services/guards as feature modules arrive. See `../plans/` for requirements and phase handoff.
