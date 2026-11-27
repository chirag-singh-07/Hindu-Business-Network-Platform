# Phase 13 — LANDING WEBSITE
**Status:** Implementation started; compilation and lint passed, build type-check and browser verification pending. **Depends on:** prior phases and relevant product/legal decisions.

## Objective
Deliver the approved scope for LANDING WEBSITE. See ../ROADMAP.md, product and domain specifications. Do not mark completion until evidence is recorded.

## Scope and implementation
- [x] Confirm phase requirements, owners and dependencies.
- [x] Design implementation and record material decisions (ADR).
- [x] Implement approved public informational landing page scope; registration and subscriptions remain unavailable.
- [x] Update affected product/technical documentation; no API/schema changes.

## Files/modules
`website/src/app/` (layout, landing page, styles, robots, sitemap), `website/src/components/` (header and motion), `website/public/` (logo and favicon), website package/configuration/README, root README, and current status/changelog documentation.

## Data and API changes
Document migrations, backfill/retention implications and endpoint/event changes here before implementation.

## Verification and completion criteria
- [ ] Unit/integration/authorization checks for changed behavior.
- [ ] Client accessibility/responsive/device checks where applicable.
- [ ] Security, failure and abuse cases reviewed.
- [ ] Build/release evidence and known issues recorded.
- [ ] CURRENT_STATUS.md, this checkpoint, and CHANGELOG.md updated.

## Known issues
Next.js compilation and ESLint succeeded before the clean install attempt. The website dependency audit reports zero vulnerabilities after upgrading Sharp to 0.35.5. Build type-checking remains unverified because npm did not complete a clean install and package files were left incomplete. Browser rendering remains unverified. No member onboarding endpoint or subscription flow is implemented.

## Next phase dependency
Record completed gates, outstanding issues and explicit next task. This phase remains incomplete until all applicable criteria are evidenced.
