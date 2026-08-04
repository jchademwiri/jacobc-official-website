---
title: "Shipping a Client Site in a Two-Week Sprint"
category: "Web development"
track: "dev"
date: 2026-03-15
excerpt: "Scope, build and launch, without scope creep."
cover: "shipping-client-site-sprint"
tags:
  - label: "Web Development"
    accent: true
  - label: "Astro.js"
  - label: "Project Management"
---

Two weeks is enough to ship a small business site end to end, provided scope is locked before the first commit. The projects that slip are almost never slowed down by the build itself. They're slowed down by decisions still being made mid-sprint, after the layout has already been built around an earlier decision.

## 1. Freeze content before you freeze design

A design can't be finished against copy that's still changing. Get final copy and imagery signed off before the first layout is built, even if that means the design kickoff slips by a few days. A layout built around placeholder text almost always needs rework once the real copy arrives, and that rework eats far more time than waiting would have.

This is the single biggest lever in a fixed two-week timeline. Everything downstream, the component structure, the page length, the image treatment, depends on knowing what content actually needs to fit.

## 2. Treat the build like a small project, not just code

A two-week site is still a project with a client, a scope and a deadline, and it benefits from the same discipline as any other engagement: a short kickoff to confirm scope, a mid-sprint check-in to review the first draft, and a clear definition of what "done" means before the first line of code is written.

Skipping that structure to save time on a small job is usually where the time actually gets lost, because a scope disagreement discovered on day twelve costs far more than a thirty-minute alignment call on day one. A handful of the [sites in this portfolio](/portfolio) were built on exactly this cadence.

## 3. Build the design system before the pages

Start with the tokens, colors, spacing, type scale, before building a single page. Every page after the first one goes faster if the components it needs already exist, and the site reads as one coherent product rather than a set of pages designed independently.

Astro's component model makes this fast to do properly. A shared layout, a handful of reusable sections, and most of a small business site is really just recombining the same six or seven building blocks with different content.

## 4. Launch is a checklist, not a moment

Domain, DNS propagation, analytics, redirects, forms and SEO basics (title tags, meta descriptions, a sitemap, an actual favicon) should all be verified against a fixed checklist the day before launch, not discovered the day after a client shares the link with their customers.

A broken contact form or a missing redirect from the old domain is invisible until someone hits it, and by then it's a support ticket instead of a five-minute fix. Running the checklist the day before, with time to fix what it finds, is what keeps launch day boring, which is exactly what a launch day should be.

## 5. Ship, then iterate against real usage

A two-week build should cover the core pages and the primary conversion path well, not every feature a client could eventually want. Ship that core scope on time, then use actual traffic and actual client feedback to prioritise what gets built next.

Trying to cram every future feature into the first sprint is usually how a two-week timeline turns into a six-week one, without the client ever getting to see something live in between. If you're scoping a build like this, [get in touch](/contact) and we can map out what fits in the first sprint.
