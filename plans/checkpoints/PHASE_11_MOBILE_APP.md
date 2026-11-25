# Phase 11 — Flutter Mobile App Integration
**Status:** Not started. **Depends on:** backend API/authentication, membership authorization and core domain contracts.

## Objective
Deliver the member iOS/Android app in Flutter/Dart, sharing identity, permissions, profile, connections, membership, messages and ads with the website.

## Scope
- [ ] Initialize Flutter stable app and commit `pubspec.lock`.
- [ ] Use feature-first views, view models, repositories and services.
- [ ] Select routing, state, API, secure storage, push and deep-link packages; record an ADR.
- [ ] Consume REST/OpenAPI and authenticated WebSockets; never connect directly to MongoDB.
- [ ] Implement onboarding/auth, profile, feed, directory, connections, membership, chat, reputation, ads, notifications and privacy settings.
- [ ] Add offline/error/retry/loading states, accessibility, scalable text, safe areas and native navigation.
- [ ] Document Android SDK/emulator and iOS/macOS build tooling/CI.

## Dependencies and verification
The backend owns permissions and private field access. Client contracts follow OpenAPI. Build/analyze on supported targets; cover auth and entitlement flows with unit/widget/integration checks; review device accessibility, deep links, secure storage, push and reconnect behavior.

## Next dependency
Start after backend API contracts and app environment are ready. See `../mobile-app/MOBILE_APP_PRD.md` and `../development/RECOMMENDED_AI_SKILLS.md`.
