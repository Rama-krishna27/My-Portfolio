# Research and design decision — 2026-10-28

Started at https://www.awwwards.com/websites/portfolio/; retrieval timed out. No ranking or award claim is made.

The six portfolios below were retrieved directly through web text extraction. This verifies the described content and document hierarchy only. Typography appearance, pointer animation, scroll behavior, responsive navigation, and mobile layouts were not visually verified. No measured accessibility or performance claims are made about these sites. Tradeoffs below are design considerations, not audit findings.

| URL inspected | Direct observation and hierarchy | Motion / pointer / mobile evidence | Tradeoff to consider | Principle adapted |
| --- | --- | --- | --- | --- |
| https://bruno-simon.com/ | Named creative developer; interactive world description; extensive controls and options | Page text documents keyboard, one/two-finger touch, gamepad, quality and renderer controls. Actual behavior not exercised. | A complex renderer and game controls can delay access to professional content. | Make interaction discoverable and give visitors explicit controls. |
| https://rauno.me/ | Single prominent identity statement, selected work links, short craft principles | Email/copied text exists; copying, pointer and mobile behavior unverified. | Sparse navigation depends on clear link names and focus states. | Concise identity and careful interaction details. |
| https://www.dennissnellenberg.com/ | Name, role, recent work, navigation, contact; multilingual greetings in extracted text | Greeting text is present, but animation timing and mobile menu behavior unverified. | Intro sequences can compete with quick access to work. | Strong identity-to-work-to-contact progression. |
| https://brittanychiang.com/ | Name and role headings, skip link, About, Experience and detailed contributions | Visual typography, scrolling and pointer behavior unverified; document remains readable as text. | Dense career content needs scannable hierarchy. | Keep professional evidence accessible without interaction. |
| https://www.joshwcomeau.com/ | Named homepage; article headings, descriptions and category/course controls | Controls are present in extracted text; animation, menus and mobile behavior unverified. This is an engineering publication reference, not a conventional work portfolio. | Playful effects must preserve reading clarity. | Pair technical depth with clear explanations. |
| https://paco.me/ | Name heading, short introduction, Building / Projects / Writing / Now / Connect sections | Motion, pointer and mobile behavior unverified. The www variant failed; apex URL worked. | Minimal presentation relies on meaningful content and readable type. | Explain specific contributions in short, direct language. |

## Prior design exploration: living systems

Graphite surfaces, warm-white Manrope editorial headings, DM Sans reading text, restrained chartreuse signals, and monospaced technical labels. Local fonts, native scroll, no WebGL or animation dependency. The centerpiece uses original CSS geometry and connected selectable layers, with pause/speed controls and static reduced-motion behavior. It maps capabilities, not a real production architecture.

The adaptation is at the level of clarity, discoverability, and visitor control. No reference layouts, source, palettes, assets, or signature experiences were copied. Persistent animation is scoped to the diagram and pauses offscreen, in hidden tabs, on visitor request, or with reduced motion.

## Content limitation

Only the brief was attached in this session. Existing repository content and its prior resume summary were used provisionally. The latest private resume must be reconciled before publication; this research does not verify resume facts.

## Current refinement research and branch inspection — 2026-10-28

Inspected all three remote branches (`main`, `feat/professional-portfolio`, and `feat/living-systems-portfolio`) and the clean local worktree before editing. The newer professional-portfolio commit contains the preferred application-window explorer, Architecture/Delivery views, Azure integration case study, and a newer prior resume summary. Ported those features while retaining the living-systems branch's case-study challenge fields, expandable expertise, and privacy fixes. No private resume attachment was present in this session. The content remains provisional.

Collections:

- https://www.wix.com/explore/websites/categories/portfolio — accessible via text extraction. A categorized gallery of portfolio examples and links. Directly observed category/navigation structure and named examples; responsive appearance and motion unverified.
- https://www.awwwards.com/websites/portfolio/ — attempted again; timed out. No ranking or award-status claim.

Additional sites actually retrieved during this refinement:

| Site | Direct observation | Principle for this implementation | Limits |
| --- | --- | --- | --- |
| https://www.yukaidu.com/ | Menu/Close text, explicit Animation/Illustration/About/Contact navigation, concise identity statement, artwork image entries. | Clear routes into the work and direct contact access; original visual composition rather than dense decoration. | Text only; actual typography, animation and mobile menu behavior unverified. |
| https://rauno.me/ | Prominent professional identity, selected links, short craft principles, email/copied text. | Concise hierarchy and clear interaction feedback. | Text only; pointer behavior and font rendering unverified. |
| https://paco.me/ | Name, short introduction, Building/Projects/Writing/Now/Connect headings with specific descriptions. | Explain concrete capabilities in short readable blocks. | Text only; motion and mobile composition unverified. |
| https://brittanychiang.com/ | Name/role heading hierarchy, skip link, detailed experience and projects; footer states Inter is used. | Keep professional evidence available independently of decorative interaction; preserve a skip link and structured headings. | Typeface declaration observed in text, not visually verified; responsive and pointer behavior unverified. |

The attempted https://www.rafael-varona.com/ URL was inaccessible. It supplies no design evidence.

### Current design decision

Refined the existing implementation into midnight graphite, warm-white reading text, and mint accents. Preserved the original application-window chrome and added stable tabs, a readable capability inspector, and an explanatory delivery view. Pointer perspective affects a decorative backing plate, so targets remain stationary. CSS packets and orbiting geometry pause globally, offscreen, in hidden tabs, and under device reduced motion. Technical labels are enlarged rather than shrinking a desktop layout on mobile. A single-column tablet/mobile composition replaces the narrow two-column hero.

Typography, motion and mobile recommendations here are our implementation choices, not invented observations about the references. No reference assets, layouts, animations, palettes or code were copied. No measured comparisons or market rankings are claimed.
