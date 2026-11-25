# Recommended AI Skills and Tooling
Backend npm dependencies are installed; the Flutter app has not yet been scaffolded. Current Codex skills are machine-specific; inspect trusted skill instructions before use and do not install untrusted skills. This project uses MongoDB/Mongoose, NestJS/TypeScript, Next.js/TypeScript and Flutter/Dart. Google IDE compatibility comes from standard source files, `pubspec.yaml`, package scripts, OpenAPI and repository guidance.

| Skill/tool | Purpose / where | Priority | Official setup/docs |
|---|---|---|---|
| Node.js + TypeScript | Backend and web clients | Essential | [Node](https://nodejs.org/), [TS](https://www.typescriptlang.org/docs/) |
| NestJS | API modules, guards, WS | Recommended | [Nest](https://docs.nestjs.com/) |
| MongoDB | Durable document database | Essential | Replica set for transactions; [MongoDB manual](https://www.mongodb.com/docs/manual/) |
| Mongoose + Nest integration | Schemas, validation, indexes and model injection | Recommended | [Nest guide](https://docs.nestjs.com/techniques/mongodb), [Mongoose guide](https://mongoosejs.com/docs/) |
| Next.js | Public/member/admin web | Essential for proposed stack | [Next](https://nextjs.org/docs) |
| Flutter + Dart | Cross-platform iOS/Android app | Essential | [Flutter setup](https://docs.flutter.dev/install), [Dart](https://dart.dev/get-dart) |
| Flutter architecture | View/view-model/repository/service separation | Recommended | [Official guide](https://docs.flutter.dev/app-architecture) |
| Flutter editor support | Flutter and Dart workflows | Recommended | Official editor setup: [docs](https://docs.flutter.dev/tools/editors) |
| Tailwind CSS | Web styles/tokens | Recommended | [Tailwind](https://tailwindcss.com/docs) |
| shadcn/ui + Radix | Accessible web primitives | Optional | [shadcn](https://ui.shadcn.com/docs) |
| OpenAPI | API/client contract | Essential | [OpenAPI](https://spec.openapis.org/oas/latest.html) |
| OWASP security | Threat modeling/review | Essential | [ASVS](https://owasp.org/www-project-application-security-verification-standard/), [API Top 10](https://owasp.org/www-project-api-security/) |
| WebSockets | Real-time chat | Essential for chat | Framework gateway; [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |
| Payment provider | India-capable checkout/webhooks | Essential before billing | Select only after review; follow selected provider's official docs |
| Jest/Vitest, Supertest, Flutter test, Playwright | Unit/API/client/E2E coverage | Essential | [Flutter testing](https://docs.flutter.dev/testing), [Jest](https://jestjs.io/docs/getting-started), [Playwright](https://playwright.dev/docs/intro) |
| Docker + CI/deployment | Repeatable environments/releases | Recommended / production essential | [Docker](https://docs.docker.com/); hosting vendor undecided |
| Browser-use skill | Local browser QA | Optional | Existing environment skill `r3/browser-use/.../SKILL.md` |
| Documentation/ADR workflow | Decisions and handoff | Essential | Markdown in `plans/`; no special installation |

No extra AI skill installation is needed for backend setup. Scaffold the Flutter app and lock its stable SDK/packages in Phase 11 using the official guides above.

