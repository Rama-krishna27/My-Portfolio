# Validation — 2026-10-28

Environment: macOS arm64, temporary official Node.js 24.11.0 runtime, locked npm dependencies, Vite production build. Chromium 156 / Playwright. Production base `/My-Portfolio/`. No deployment performed.

- `npm run build`: passed.
- `npm run lint`: passed.
- `npm test`: 22 passed, 2 intentionally skipped (mobile-only menu test on desktop/tablet).
- Production checks cover 320, 390, 600, 768, 1024, and 1440px: no horizontal overflow, failed assets, or JavaScript errors found.
- Page and modal axe WCAG A/AA checks passed on desktop, tablet, and mobile.
- Verified navigation, contacts, domain filters, all four dialogs, Escape/focus restoration, expandable experience, selected architecture layers, local pause/speed, persistent motion preference, offscreen pause, and reduced-motion static mode.
- Separate mobile touch test successfully selected the API gateway node.
- Inspected full-page desktop/mobile screenshots in reduced-motion mode, plus readable viewport captures. Fixed mobile motion-toggle overlap by placing it in the sticky header. Final desktop/mobile viewport review passed.
- Checked source, public assets, docs and built text for the previously disclosed identifying names: no matches. No resume, PDF, or Word document in `dist`.
- Original 1200×630 social PNG rendered from its local SVG and inspected.

## Lighthouse lab measurement

Lighthouse 12.8.2, headless Chromium 156, local production preview on port 4174, default mobile simulated throttling: 150ms RTT, 1638.4 Kbps throughput, 4× CPU slowdown. Single final-build run; local host results are not public-network guarantees.

| Category / metric | Measured result |
| --- | --- |
| Performance | 96 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |
| LCP | 2.3 seconds |
| CLS | 0.01 |
| Total blocking time | 0 ms |

INP requires real-user interaction data and has not been measured. TBT is not INP. Automated accessibility checks do not replace human screen-reader review. Hidden-tab pause is implemented using `visibilitychange`; automated tests verify offscreen and visitor pause, not an actual background-tab lifecycle. No public deployment or public asset verification has occurred.

## Remaining gates

The latest resume was not attached. Existing prior resume-derived roles, dates, education, contacts, and case studies require reconciliation with that private source. The redesigned version needs owner approval before the manual Pages workflow is run. Historical employer disclosures remain in earlier Git commits; history was not rewritten.
