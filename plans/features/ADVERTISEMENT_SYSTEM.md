# Advertisement System

## State machine
Draft → Submitted → Under Review → Approved or Rejected (reason required) → Scheduled → Active → Paused/Completed/Cancelled. Activation requires approved creative, eligible schedule and verified payment. Every transition is authorized, audited and idempotent. Creative edits after approval return to review; resubmission creates a revision.

## Member/admin workflow
Member enters title, copy, image, CTA, destination URL, category, duration, placement and budget; reviews policy, price/tax and estimates before server-created order. Payment provider confirms by signed webhook before review. Dashboard shows status, reason, spend and clearly defined measured events. Admin reviews creative, destination, targeting, payment and policy; immediate pause records reason.

Validate media and URLs; apply prohibited content policy, frequency caps, safe targeting, bot filtering and event deduplication. Define disclosure, inventory, refund, invoice/tax, minimum spend, retention and attribution before launch. Estimated delivery must show methodology/uncertainty. Never fabricate performance data. Gateway and pricing are undecided.
