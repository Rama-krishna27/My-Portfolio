# Ramakrishna Maddinapudi — Professional portfolio

A responsive static portfolio for a Senior Full Stack .NET Developer. Original graphite, warm-white, and mint design with conceptual system illustrations, resume-backed content, accessible project dialogs, domain filters, expandable experience, and locally hosted fonts.

Built with React, Vite, Tailwind CSS v4, and Lucide icons. No backend, API keys, analytics, external font requests, or paid services. CSS animations honor reduced-motion preferences. A persistent motion preference, selectable architecture layers, Architecture/Delivery tabs, and offscreen/hidden-tab pausing keep the system explorer controllable. Device reduced-motion preferences always take precedence. Decorative perspective sits behind stable interactive controls.

See [research and limitations](docs/DESIGN-RESEARCH.md) and [measured validation results](docs/VALIDATION.md). The latest resume was not attached in the redesign session; the newer prior summary from `feat/professional-portfolio` is provisional and needs reconciliation before publication.

## Run locally

Use Node.js 24 LTS (minimum 22.12) and npm:

```sh
npm ci
npm run dev
```

Open **http://localhost:5173/My-Portfolio/**. In a hosted workspace, forward port 5173 using your provider's port-forwarding feature. The development server binds to all interfaces; a public preview URL depends on the provider.

Production preview:

```sh
npm run build
npm run preview -- --port 4173
```

Open **http://localhost:4173/My-Portfolio/**. Review the design and content before publishing.

## Quality checks

```sh
npm run lint
npx playwright install --with-deps chromium
npm test
```

Tests build and serve the production site automatically. They check desktop, tablet, and mobile rendering; asset and JavaScript errors; widths from 320 to 1440 pixels; anchors; contact destinations; filters/dialogs; focus restoration; experience disclosures; and automated axe WCAG A/AA rules. Mobile navigation tests deliberately skip desktop and tablet.

The configuration uses `/usr/bin/chromium` when available, otherwise Playwright's installed Chromium. Set `CHROMIUM_PATH` to use another system Chromium binary. Failure traces are retained in ignored `test-results/`.

## Content and privacy

Current content and documentation anonymize employers and clients. Earlier Git commits contain identifying content; removing it from the current tree does not remove historical disclosures. No history was rewritten. Review historical exposure separately before deciding whether a coordinated cleanup is necessary.

- Edit content in `src/data.js`; see [resume analysis](docs/RESUME-CONTENT.md) for source facts and editorial decisions.
- The owner confirmed LinkedIn only. No GitHub contact link or unlisted certifications appear.
- Case study titles describe documented employer work, not official product names or independent personal projects.
- The original resume is not committed, bundled, or offered for download. Obtain explicit owner approval before adding a download.
- Contact uses email and telephone links; there is no form implying a backend delivery service.

## GitHub Pages deployment

The approved site builds and deploys automatically when changes reach `main`. Pull requests run the same build, lint, artifact, and browser checks without deploying. A manual **Run workflow** fallback remains available, with no checkbox or inputs that silently skip the run.

1. In **Settings → Pages**, select **GitHub Actions** as the source. Publishing the repository root serves uncompiled React files and produces a blank page.
2. Merge a reviewed change into `main`, or open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, select `main`, and run it.
3. The workflow installs locked dependencies, lints, builds Vite, checks compiled asset paths, tests the production page, and uploads only `dist`.
4. The deploy job publishes that artifact and verifies the public HTML and assets, allowing time for propagation.
5. If the `github-pages` environment requires approval, approve that deployment job.

Expected public URL: **https://Rama-krishna27.github.io/My-Portfolio/**. A successful deployment and public-site verification are required before calling it live.

The workflow's publishing permissions are limited to the deploy job. No personal tokens or extra secrets are required. `vite.config.js` sets `base: '/My-Portfolio/'`; the verification script rejects raw source HTML or missing compiled JavaScript. For a repository rename or custom domain, update the Vite base, verification base, and canonical/social metadata together.

## Structure

```text
src/App.jsx                 Sections and interactive components
src/data.js                 Provisional resume-derived content
src/SystemConsole.jsx       Architecture/Delivery interaction
src/system-data.js          Structured capability and delivery content
src/premium.css             Midnight/mint theme and explorer styles
src/styles.css              Tailwind theme and responsive styling
public/                     Original favicon and social illustration
docs/RESUME-CONTENT.md       Resume analysis and content decisions
tests/portfolio.spec.js      Functional/accessibility browser checks
.github/workflows/pages.yml CI, Pages deployment, and public artifact verification
scripts/verify-pages.mjs    Reject raw source and broken compiled asset paths
```

Fonts and graphical assets are local. A 1200 × 630 PNG social card supports sharing previews, with its original SVG retained for editing. Automated accessibility checks supplement manual keyboard and screen-reader review.
