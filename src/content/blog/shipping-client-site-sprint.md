---
title: "Shipping a Client Site in a Two-Week Sprint"
category: "Web development"
track: "dev"
date: 2026-03-15
excerpt: "How project management discipline keeps scope, copy, design, and launch on a predictable 14-day timeline."
cover: "shipping-client-site-sprint"
tags:
  - label: "Web Development"
    accent: true
  - label: "Astro.js"
  - label: "Project Management"
---

Two weeks is plenty of time to design, build, and launch a high-performing business website—provided you manage it like a real project rather than an open-ended creative experiment. In my experience, website builds rarely slip because of code; they slip because scope and content decisions are still being made mid-build.

## 1. Lock content and structure before visual design

A layout cannot be finalized against placeholder *Lorem Ipsum* text. In Day 1–3 of a sprint:
- Map the exact sitemap (Home, Services, Portfolio/Track Record, About, Contact).
- Confirm the core value proposition, service breakdowns, and real client proof points.
- Gather company logos, statutory credentials (CIDB, ISO certificates, BBBEE status), and photography upfront.

When copy is frozen early, engineering moves at full speed without layout rework.

## 2. Build mobile-first with a strict component system

Using **Astro** and **Tailwind CSS**, Day 4–10 focus on building clean, reusable components—navigation, service rows, case study cards, and lead-capture forms—tested across mobile and desktop breakpoints simultaneously. Keeping the design system disciplined (fixed type scale, consistent spacing, verified WCAG AA contrast) avoids endless pixel-tweaking.

## 3. Treat launch as an engineering checklist, not a guess

Day 11–14 are reserved for verification—the same quality-gate mindset I apply to tender submissions and ISO audits:
- **Forms & Lead Routing:** Test contact form validation, spam protection, and transactional email delivery end-to-end.
- **Technical SEO & Metadata:** Verify canonical URLs, `sitemap-index.xml`, `robots.txt`, OpenGraph social cards, and JSON-LD schema markup.
- **Performance & Accessibility:** Run Lighthouse audits targeting 95–100 across Performance, Accessibility, Best Practices, and SEO before pointing DNS live.

Applying project management discipline to web development turns a chaotic multi-month agency process into a predictable 14-day delivery.
