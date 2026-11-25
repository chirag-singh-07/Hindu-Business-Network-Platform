# Backend PRD

TypeScript modular monolith using NestJS REST/WebSockets and MongoDB through Mongoose. Redis is for transient/queue work only; S3-compatible private storage handles media. Domains: foundation, identity, profiles, media, feed, directory/connections, billing, messaging, reputation, ads, notifications, admin/moderation/privacy. Use explicit Mongoose validation and indexes; services enforce cross-document ownership/lifecycle. Multi-document transactions require a MongoDB replica set. Validate configuration at boot; provide health/readiness, redacted structured logs, request IDs, rate limits, idempotent jobs, backups and restore drills.

The initial scaffold includes package scripts, Nest bootstrap, configuration validation, Mongoose connection and readiness endpoint. Feature schemas, authentication, API contracts, security tests and CI follow their checkpoints.

## Foundation checklist
- [ ] MongoDB URI and local replica set configured.
- [ ] Mongoose schemas/indexes added per feature.
- [ ] Server policy guards and safe response DTOs in place.
- [ ] Secrets/logging/rate limits configured.
- [ ] OpenAPI contract maintained.
- [ ] Backup/restore and deployment plan agreed.
