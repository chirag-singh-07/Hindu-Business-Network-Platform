# Troubleshooting

## Backend
Copy `backend/.env.example` to `.env`, install dependencies, and start the MongoDB replica set before running the Nest API. `GET /api/v1/health` checks the Mongoose connection and database ping. If startup fails, verify `MONGODB_URI`, the Compose health state, replica-set initialization and host/port reachability. Keep request IDs and error details free of secrets/PII.

For media, inspect signed URL expiry and processing state. For chat, check authentication and conversation authorization without exposing message bodies. When adding MongoDB schema versions/backfills, document the migration/recovery path and verify indexes.

## Mobile
The Flutter app has not been scaffolded yet. When it exists, record exact `flutter`/Dart commands and platform setup here. Diagnose API base URL, expired sessions, deep links, secure storage and offline/retry behavior without logging tokens or private member data.
