# Mobile App PRD — Flutter

Build the member iOS/Android app in Flutter using Dart. It uses the same backend identity, permissions, membership, profile, connections, messages and advertisements as the website. The mobile client never connects directly to MongoDB; REST/OpenAPI and authenticated WebSockets are the only data paths.

## Screens
Welcome/onboarding; sign-up/sign-in/recovery/verification; profile/business editor; feed/composer; directory/filters; member/business detail; connection inbox/suggestions; chat list/thread; plans/checkout/history; reviews/reputation/rankings; notifications; ad creation/status/performance; settings, privacy/consent, sessions, block/report, export/delete.

## Architecture and quality
Use feature-first Dart organization with clear UI, view-model/state, repository and service boundaries. Keep API and secure storage behind services; repositories own data/cache/error/retry behavior. Select state management and routing packages during Phase 11 and record versions in `pubspec.lock`. Use platform secure credential storage, deep links, push notifications, offline-safe reads and explicit conflict handling. Support native back/safe areas, accessible labels, scalable text, upload progress/retry and point-of-need permissions. Avoid persisting unnecessary private contacts/messages. Include loading/empty/error/offline states; do not imply unimplemented voice chat or fake analytics.

## Environment checklist
- [ ] Flutter stable SDK and Dart version recorded.
- [ ] Android SDK/emulator configured; iOS build tooling documented for macOS.
- [ ] API/auth, secure storage and deep-link strategy selected.
- [ ] Push token lifecycle/privacy reviewed.
- [ ] Device, accessibility and build coverage planned.

Official starting points: [Flutter installation](https://docs.flutter.dev/install) and [Flutter app architecture](https://docs.flutter.dev/app-architecture).
