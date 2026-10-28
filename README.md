# Ramakrishna Maddinapudi — Professional portfolio

A responsive static portfolio for a Senior Full Stack .NET Developer. Original graphite, warm-white, and mint design with an interactive architecture explorer, conceptual system illustrations, resume-backed content, accessible project dialogs, domain filters, expandable experience, and locally hosted fonts.

Built with React, Vite, Tailwind CSS v4, and Lucide icons. No backend, API keys, analytics, external font requests, or paid services. CSS animations honor reduced-motion preferences.

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

- Edit content in `src/data.js`; see [resume analysis](docs/RESUME-CONTENT.md) for source facts and editorial decisions.
- The owner confirmed LinkedIn only. No GitHub contact link or unlisted certifications appear.
- Current public content anonymizes all employers and clients. Earlier Git history is unchanged; removing historical disclosures would require a separately approved history rewrite.
- The latest resume supersedes the original version: case studies now emphasize secure enterprise services and Azure event-driven/document integrations.
- Case study titles describe documented employer work, not official product names or independent personal projects.
- The original resume is not committed, bundled, or offered for download. Obtain explicit owner approval before adding a download.
- Contact uses email and telephone links; there is no form implying a backend delivery service.

## GitHub Pages deployment — after design approval

Deployment is **manual**. There is no push trigger, so merging or pushing will not automatically publish the portfolio.

1. Review the design and merge the finished website into `main` in `Rama-krishna27/My-Portfolio`.
2. In **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, select `main`, and run it.
4. The workflow installs locked dependencies, lints, runs browser tests (including the production build), uploads `dist`, and deploys.
5. If the `github-pages` environment requires approval, an authorized reviewer must approve the deployment job.
6. After successful deployment, open the URL below and verify mobile navigation, fonts, project dialogs, email, and LinkedIn.

Expected public URL: **https://Rama-krishna27.github.io/My-Portfolio/**

This is an expected destination, not a claim of publication. Write access is needed to push/create a PR; admin access may be needed for Pages settings. The workflow requests `pages: write` and `id-token: write`. Organization policies may require Actions approval. Pages requires no paid hosting for public repositories.

`vite.config.js` sets `base: '/My-Portfolio/'`. A repository rename or custom domain requires updating the base and canonical/Open Graph URLs in `index.html`. Section links need no client-router fallback.

## Structure

```text
src/App.jsx                 Sections and interactive components
src/data.js                 Resume-backed content
src/styles.css              Tailwind theme and responsive styling
public/                     Original favicon and social illustration
docs/RESUME-CONTENT.md       Resume analysis and content decisions
tests/portfolio.spec.js      Functional/accessibility browser checks
.github/workflows/pages.yml Manual test/build/deployment
```

Fonts and graphical assets are local. A 1200 × 630 PNG social card supports sharing previews, with its original SVG retained for editing. Automated accessibility checks supplement manual keyboard and screen-reader review.

## Interactive system explorer

The hero's right-side window illustrates frontend, .NET services, cloud integration, and data layers. Select a layer to inspect the related stack, or switch to Delivery for a conceptual release workflow. This is an illustration, not a real employer system or live operational telemetry.

Decorative objects, message signals, and the ambient glow animate while the explorer is visible. Controls stay stable for accurate pointing. Mouse movement adds restrained perspective. The header and explorer provide motion controls; the preference persists when local storage is available. Device reduced-motion preferences take precedence. Animations pause when the explorer is offscreen or the tab is hidden.

The requested Wix reference was inaccessible through the environment's network policy. The redesign is original and does not claim to reproduce or have inspected specific Wix examples.
