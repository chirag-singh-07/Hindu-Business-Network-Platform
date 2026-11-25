# Risks and Decisions
| Topic | Current state | Decision / review |
|---|---|---|
| Stack | User selected MongoDB and Flutter; NestJS/Mongoose and Next.js retained | Adopted in `architecture/ADR-001-BACKEND-STACK.md`; Flutter SDK and local MongoDB runtime still need verification |
| Eligibility | Hindu business network identity; eligibility policy not defined | Clarify inclusive member criteria and moderation rules |
| Billing | Gateway, currency, tax, renewal, grace and cancellation undefined | Choose provider and commercial policy; qualified tax/legal review |
| Indian privacy/legal | Requirements depend on operating model and may change | Qualified legal review; consent, retention, deletion and grievance process before production |
| Verification | Evidence, vendor, expiry and appeals undefined | Define fraud prevention and reviewer scope |
| Chat | History access after membership expiry undefined | Decide continuity and retention policy |
| Ads | Pricing, inventory, targeting, disclosure, refund and attribution undefined | Define policies and event measurement before ads launch |
| Reputation | Example weights uncalibrated and gameable | Pilot methodology, appeals, bias/abuse controls |
| Hosting | Region, provider and recovery targets unknown | Decide residency, backups, incident and RTO/RPO |
| Brand | Raster logo only; palette approximate | Obtain vector/source and validate accessible colors/fonts |
| Analytics | No event taxonomy or consent design | Choose privacy-preserving approach and definitions |
| Operations | No support/moderation staffing defined | Define escalation, response and incident ownership |

Record resolved architecture decisions as dated ADRs. These are product questions, not legal advice.
