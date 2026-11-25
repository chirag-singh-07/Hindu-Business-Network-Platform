# Environment Variables

Backend local variables are defined in `backend/.env.example`; copy it to `backend/.env` for development. Current keys: `NODE_ENV`, `PORT`, `API_PREFIX`, `CORS_ORIGINS`, `MONGODB_URI`, `MONGO_ROOT_USERNAME`, and `MONGO_ROOT_PASSWORD`. Mongo root credentials in the example are local-only defaults. Never reuse them outside local development.

Future server config may add Redis, token signing key references, object storage endpoint/bucket/region, email/SMS provider credentials, payment provider credentials/webhook secret, app URLs and telemetry endpoint. Client config must contain public values only. Validate config at startup; keep real secrets in a secret manager, separate environments, rotate credentials, and redact secrets/PII from logs. Flutter uses Dart build-time configuration only for non-secret values; never put database credentials in a client build.
