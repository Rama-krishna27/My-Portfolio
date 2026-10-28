# Validation — 2026-10-28 refinement

Environment: macOS arm64, official temporary Node.js 24.11.0 runtime, locked npm dependencies, Vite production build at `/My-Portfolio/`, Chromium 156 / Playwright. No deployment performed.

- Production build and lint passed.
- Production browser suite: **28 passed, 2 intentionally skipped** (mobile-only navigation on desktop/tablet).
- Widths 320, 390, 600, 768, 1024, and 1440px: no horizontal overflow, missing assets, or JavaScript errors found.
- Axe WCAG A/AA checks passed for the page, case-study modal, and Delivery view on desktop, tablet, and mobile. Static/reduced motion is used for stable contrast auditing, independent of reveal transitions.
- Verified all section anchors, contacts, project filters, all four case-study dialogs, Escape dismissal, focus restoration, experience disclosures, Architecture/Delivery tabs with arrow/Home keyboard navigation, layer selection with keyboard/mouse/mobile touch, and contextual inspector content.
- Verified shared persistent motion pause/play, saved running preference overridden by device reduced motion, static geometry, and offscreen animation suspension. Tab visibility suspension is implemented using visibilitychange; an actual background-tab lifecycle is not covered by the automated suite.
- Clipboard writes and accessible success feedback passed; injected clipboard failure produced the intended accessible fallback.
- Inspected desktop, tablet, mobile and 320px full-page/viewport screenshots. Tablet/mobile use a stacked hero rather than miniature desktop content. Also inspected isolated Architecture/Delivery component captures; the sticky header is set to normal document flow for those component-only screenshots. Full-page and hero captures retain the actual sticky header.
- Checked source, public assets, current docs and build against previously disclosed identifying names. No matches; no original resume, PDF or Word document in the build. No history was rewritten.
- Raster 1200×630 social card rendered from the local SVG and inspected.

## Lighthouse lab measurement — before the finishing touches

Lighthouse 12.8.2, Chromium 156 headless, local production preview on port 4174. Default mobile simulated throttling: 150ms RTT, 1638.4 Kbps throughput, 4× CPU slowdown. One run of the previous design revision, with no concurrent browser tests. The finishing touches below were not re-audited with Lighthouse. These are lab results, not public-network guarantees.

| Category / metric | Result |
| --- | --- |
| Performance | 95 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |
| LCP | 2.4 seconds |
| CLS | 0 |
| Total blocking time | 0 ms |

INP has not been measured; TBT is not a substitute. Automated checks do not establish full accessibility compliance or replace manual screen-reader review. No public deployment or public-network verification has occurred. Screenshots are local QA artifacts in ignored `artifacts/`.

## Remaining publication gates

The latest private resume was not attached. The newer prior summary from the professional-portfolio branch is the provisional factual source; roles, dates, education, contacts and case studies need reconciliation with the actual latest document. The owner must approve this redesigned version before the manual Pages workflow is run. Its design/content approval checkbox defaults to false. Earlier Git commits still contain identifying content; any historical cleanup requires separate authorization.

## Finishing touches — 2026-10-28

Added a gentle looping technology strip and mint pointer/touch glow; preserved all palette values. Made the name the larger primary heading, reduced the tagline size, and applied the requested hand cursor throughout the page. The strip pauses offscreen, with the site motion control, in hidden tabs, and under reduced motion.

Production build and lint passed again. Browser suite: 28 passed, 2 deliberate skips. Additional production-browser checks verified actual strip movement, site pause and reduced-motion suspension, pointer and touch glow, hand cursor, larger name than tagline, and no overflow at 320/390/768/1024/1440px. Updated desktop/mobile screenshots inspected. No deployment performed.
