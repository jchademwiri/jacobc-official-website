# Jacob Chademwiri — Official Website

Personal/professional site for Jacob Chademwiri: consulting-forward (tender management, project management, ISO/SHEQ) plus a web-development portfolio and blog.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## Project Structure

```text
/
├── docs/                    # Design reference files (see docs/README.md)
├── public/                  # Static assets (favicons, etc.)
├── src
│   ├── components/          # Nav, Footer, ContactBand, WhatsAppButton, ScrollToTop
│   ├── content/
│   │   ├── blog/             # Blog posts (Markdown, via Astro content collections)
│   │   └── portfolio/        # Portfolio entries (Markdown, via Astro content collections)
│   ├── content.config.ts    # Blog + portfolio collection schemas
│   ├── layouts/
│   │   └── Layout.astro     # Shared page shell (nav + footer + design tokens)
│   ├── lib/
│   │   └── site.ts          # Shared contact constants
│   ├── pages/
│   │   ├── index.astro      # Home
│   │   ├── services.astro   # Services
│   │   ├── about.astro      # About
│   │   ├── contact.astro    # Contact
│   │   ├── portfolio.astro  # Portfolio listing (with category filter)
│   │   ├── portfolio/
│   │   │   └── [slug].astro # Portfolio detail template
│   │   └── blog/
│   │       ├── index.astro  # Blog listing (with category filter)
│   │       └── [slug].astro # Blog post template
│   └── styles/
│       └── global.css       # Design tokens + Tailwind theme + shared component classes
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :------------------------------------------------ |
| `bun install`     | Installs dependencies                            |
| `bun dev`         | Starts local dev server at `localhost:4321`      |
| `bun build`       | Build the production site to `./dist/`           |
| `bun preview`     | Preview the build locally, before deploying      |
| `bun lint`        | Type-check with `astro check`                    |
| `bun astro ...`   | Run other Astro CLI commands                     |

## Adding a blog post

Add a new Markdown file to `src/content/blog/`, following the frontmatter shape in an existing post (`title`, `category`, `track`, `date`, `excerpt`, `cover`, `tags`) — the schema in `src/content.config.ts` is strict and rejects unknown keys. Read time is computed at render by `src/lib/reading-time.ts`, so there is no `readTime` field. Posts are picked up automatically by the blog listing, the `track` landing pages and the RSS feed.

## Contact form

`/contact` is server-rendered and posts to itself. Delivery goes through [Resend](https://resend.com) and needs `RESEND_API_KEY` set in the Vercel project (see `.env.example`). Without it the form renders its failure state and points visitors at the mailto address, so the page still works — it just doesn't deliver.

The verified sending domain is **`info.jacobc.co.za`** — a subdomain, so transactional sending reputation stays separate from the root domain used for ordinary correspondence. Only the `From` address has to be on it (`noreply@info.jacobc.co.za` by default, overridable with `CONTACT_FROM_EMAIL`); mail is delivered to `hello@jacobc.co.za` and `reply-to` is set to whoever filled in the form.

Both variables are declared in `astro.config.mjs` under `env.schema` with `access: 'secret'`, so they're read from `process.env` at runtime rather than inlined into the build.

## Deployment

Deployed on Vercel via `@astrojs/vercel`. Pushing to the repo's connected branch triggers a build through Vercel's own Git integration — no separate CI deploy step is needed.
