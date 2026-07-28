# Handoff: Jacob Chademwiri — Personal Website

## Overview
Personal/professional site for Jacob Chademwiri, dual-purpose: consulting-forward (tender management, project management, ISO/SHEQ) plus a web-development portfolio/blog. Five pages: Home, Services, Blog, Blog Post (article detail), About.

## About the Design Files
The bundled `.dc.html` files are **design references built in a prototyping tool** — not production code to paste in. Recreate them in the target codebase: **Astro** (`jchademwiri/jacobc-official-website`, deployed to Vercel via `@astrojs/vercel`). Rebuild each page as an `.astro` page (or a shared `Layout.astro` + page components), using Tailwind or plain CSS with the same custom-property tokens below — do not depend on the prototype's runtime (`support.js`, `x-dc`, `sc-for`, `image-slot`).

Note: `Portfolio.dc.html` in the project root is an **earlier options-exploration canvas** (multiple side-by-side layout directions), not a finished page — ignore it for the build; the five files below are the locked designs.

## Fidelity
**High-fidelity.** Final colors, type, spacing and copy are locked. Build pixel-accurate to what's described; only real photography/blog copy are placeholders.

## Design Tokens
Dark theme, one accent, Inter throughout.
- `--color-bg: #161826` (page ground)
- `--color-surface: #232532` (cards)
- `--color-text: #e9e9ed`
- `--color-accent: #9184d9` (links, kickers, active states, outlined primary button, focus ring)
- `--color-divider: color-mix(in srgb, #e9e9ed 16%, transparent)` (hairline borders/rules)
- `--color-section: #262a60` / `--color-section-glow: #353b80` (alternate section background — a subtle radial glow at top-right or bottom-left over this base, used behind Services/Contact bands)
- Font: `Inter` for both heading and body; headings weight 500 (never bolder), `line-height: 1.12`, `letter-spacing: -0.015em`; body `font-size: 15px`, `line-height: 1.55`
- Radii: `--radius-sm 4px`, `--radius-md 8px` (buttons, inputs, cards), `--radius-lg 14px`
- Shadows (card elevation): `--shadow-sm: 0 0 0 1px #3f424d` (hairline edge, no blur — cards use this)
- Max content width: 1200px (1440px on Home only), centered, with 56px side padding (32px ≤900px, 20px ≤600px)
- Buttons are **outlined, never filled**: `.btn-primary` = 1px accent border, transparent fill, accent text, tints on hover/active; `.btn-secondary` = divider-color border; `.btn-ghost` = accent text, no border
- Tags/chips: small pill, `tag-accent` (accent-tinted fill), `tag-neutral` (subtle neutral fill), `tag-outline` (border only)
- `:focus-visible` everywhere = `2px solid var(--color-accent)`, `outline-offset: 2px`

## Global Chrome (every page)
**Nav**: sticky top, `z-index:20`, glassmorphic on scroll (`background: color-mix(in srgb, var(--color-bg) 72%, transparent)`, `backdrop-filter: blur(14px)`), 1px bottom divider. Left: wordmark "Jacob C." Center/right: Home / Services / Blog / About / Contact links (current page in accent color), then a primary "Get Consultation" button (links to `/#contact` or `Home#contact` from subpages).
**Mobile nav** (≤900px): desktop links + button hidden; a hamburger (3 bars, 22×2px, `--color-text`) toggles a dropdown panel (checkbox-driven in the prototype — use real state/JS in the rebuild) that lists the same links stacked, plus the CTA button, over a blurred glass panel anchored under the nav.
**Kicker label** pattern used above most section headings: small uppercase accent text (12px, letter-spacing .08em) preceded by a 40px solid accent line, 56px left padding to clear the line.
**Footer**: 1px top divider, 32px padding, flex row (wraps on mobile) — "© 2026 Jacob Chademwiri" left, GitHub / LinkedIn / email links right.
**Responsive breakpoints**: 900px (2/3-col grids collapse to 1 col, nav collapses to hamburger, hero title shrinks) and 600px (tighter padding, hero title shrinks further, CTA button rows stack full-width).

## Screens

### 1. Home (`/`)
- **Hero** (padding 88px top / 56px bottom): kicker "Jacob C.", H1 56px "Bridging project management with digital excellence." (max 16 characters wide), 17px intro paragraph (max 640px), a row of 4 tags (Tender Management / Project Management accent; Accounts Receivable / Web Development neutral), two CTAs ("Schedule Consultation" primary → `#contact`, "View Our Services" secondary → `#services`), small availability line below ("● Currently available for new projects · 24–48hr consultation response · Free initial assessment").
- **Current positions**: kicker + H2 "Where I'm making an impact", 2-column card grid (3 cards: Sithembe Tendering & AR Manager Jan 2022–Present, Babiya Geomatics Tender & Office Admin Jan 2021–Jan 2022, Playhouse Media Website Developer Jan 2020–Present). Each card: date/type kicker on top, role title, company/location meta, description, optional outline tag row.
- **Services preview** (alt background `--color-section` + top-right radial glow): kicker + "View all services" ghost link at top; 3-column row of numbered items (01/02/03 in accent, small caps), each a heading + one-line description, linking to Services page anchors.
- **About preview**: 5/7 split grid — portrait image left (4:5, rounded 12px, `.lighten` blend), kicker + H2 + paragraph + "More about me" secondary button right, linking to About page.
- **Blog preview**: kicker + "View all posts" ghost link; 3-column card grid of the 3 latest posts (16:10 cover image, category kicker, title, date/read-time meta).
- **Contact band** (alt background, bottom-left glow): H3 "Ready to discuss your project needs?", paragraph, two CTAs (mailto primary, "View All Services" secondary), small emoji-free trust line (24–48hr response · free consultation · tailored solutions).
- **Footer** as global.

### 2. Services (`/services`)
- **Header** (80px/56px padding): kicker, H1 48px "Tender management, project delivery and websites that hold up." (max 20ch), intro paragraph (max 620px).
- **Three service rows**, each a 2-column grid (320px label col + flexible body col), 48px vertical padding, 1px top divider between rows (plus bottom divider after the last): number (01/02/03, accent, 13px) + H2 26px on the left; on the right a description paragraph (max 60ch) and a tag row (accent + neutral):
  1. Tender Management — RFP Review, Bid Management, Compliance Scheduling
  2. Project Management — Stakeholder Management, Agile, Microsoft 365
  3. Website Development — Next.js, Astro.js, Tailwind CSS, SEO
- **Contact band** identical pattern to Home's, CTA links to mailto + "Back to Home".
- Collapses to 1 column per row under 900px.

### 3. Blog (`/blog`)
- **Header**: kicker, H1 38px "Notes on tenders, compliance & the web.", intro paragraph, then a **segmented filter control** (`.seg`) with 4 options: All / Tendering / ISO / SHEQ / Web Dev. Clicking a segment filters the grid below by category (client-side state; active segment gets accent text + inset accent border).
- **Post grid**: 3-column card grid, each card fixed-ratio 16:10 cover image on top, then category kicker, title (2-line clamp, min-height reserved so cards stay level even with 1-line titles), excerpt (2-line clamp), date/read-time meta pinned to card bottom via `margin-top:auto`. 6 seed posts across the 3 categories (2 each). Cards link to the Blog Post page.
- Grid collapses to 1 column under 900px.

### 4. Blog Post (`/blog/[slug]`)
- Narrower content column, max-width 900px page / 640px for body text.
- **Nav** variant: right side shows "← All posts" instead of the CTA button.
- **Header**: kicker "Category · Date · read time", H1 36px (max 22ch).
- **Hero image**: 16:9, rounded 10px, `.lighten` wrapper, 32px vertical margin.
- **Body**: intro paragraph 16px/1.75, then H3 subheads (19px) + paragraphs (15.5px/1.7) for each section, a fading horizontal rule (`.rule-fade` — gradient to transparent at both ends, 48px inset) before a closing tag row (topic tags, accent + neutral).
- **Footer** variant: "← All posts" left, "hello@jacobc.co.za" ghost button right (no social links row).

### 5. About (`/about`)
- **Intro** (5/7 grid, 88px/64px padding): portrait (4:5, rounded, `.lighten`) left; kicker "About", H1 42px "I don't just submit tenders — I understand the compliance systems that make them competitive." (max 18ch), 15.5px bio paragraph (max 52ch, mentions Centurion/Gauteng base and current roles), 4-tag row right.
- **Experience**: kicker "Experience", a stacked list (not cards) of 3 roles, each row bottom-divided: **date range on its own line above the title** (13px, muted) — confirmed decision, not date-beside-title — then role title (16px), company/type/location meta (13px, muted), description (card-body style, max 60ch). Roles: Sithembe (Jan 2022–Present), Babiya Geomatics (Jan 2021–Jan 2022), Playhouse Media Group (Jan 2020–Present, mentions React/Next.js/**Astro.js**).
- **Skills** (alt background band, top-right glow): kicker, a single wrapped row of ~14 tags (3 accent: Tender/Project/Accounts Receivable Management; rest neutral: Stakeholder Mgmt, Sage Accounting, Invoicing, Microsoft 365, React.js, Next.js, Astro.js, TypeScript, Tailwind CSS, SEO, Figma).
- **Contact band**: same pattern as other pages, links to mailto + "View Our Services".
- Max content width 1200px (matches Services/Blog, narrower than Home's 1440px).

## Interactions & Behavior
- **Blog category filter**: client-side; clicking a segment re-filters the post grid instantly, no page reload — implement as component state (e.g. a signal/store in Astro islands, or a small client-side script) filtering an array of post objects by `track`.
- **Mobile hamburger menu**: toggles a dropdown panel below the nav; only one menu open at a time; closes on link click (checkbox-driven in the prototype — use a proper toggle in production, close on outside-click/escape too).
- **Nav glass effect**: background blur increases perceived elevation on scroll — a static blurred sticky bar is sufficient; no scroll-triggered JS needed.
- Card links (blog cards, service rows, position cards) are fully clickable to their destination — hover state should be a subtle lift or tint per the design system's card conventions (not specified beyond default; use a light `background` tint on hover consistent with `.card`).
- All CTAs pointing to `#contact` should scroll-link to the Home page's contact section when on a subpage (e.g. `/services#contact` → home if contact only lives on Home; confirm with user whether Contact stays Home-only or becomes its own page/modal, which was an open next step).

## Assets
All imagery is currently **placeholder slots** (drag-and-drop image placeholders in the prototype) — needs real photography before ship:
- Portrait photo (used on Home-about-preview and About page intro), 4:5 ratio, ideally shot on a dark/neutral background
- 6 blog post cover images, 16:10 ratio
- 1 blog post hero image, 16:9 ratio (article detail page)

## Screenshots
Full-page captures in `screenshots/`: `home.png`, `services.png`, `blog.png`, `blog-post.png`, `about.png`.

## Files
- `Home.dc.html` — homepage
- `Services.dc.html` — services listing
- `Blog.dc.html` — blog listing with category filter
- `BlogPost.dc.html` — article detail template
- `About.dc.html` — about page

Open any file directly in a browser to view the reference design (a small runtime script inlines the design-system styles).
