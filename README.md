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

All three variables (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `SENDER_NAME`) are declared in `astro.config.mjs` under `env.schema` with `access: 'secret'`, so they're read from `process.env` at runtime rather than inlined into the build.

The From display name is built as `{sender's name} via {SENDER_NAME}`, so a submission from Thabo Mokoena arrives as "Thabo Mokoena via Jacob C" — the inbox shows who wrote in, and reply still goes to them.

### Email templates

The notification is a [React Email](https://react.email) template at `src/emails/ContactNotification.tsx`. It renders server-side only — no React is shipped to the browser, and the project deliberately does not install the React renderer integration; `tsconfig.json` just points JSX at React so esbuild can transform the template.

Both the HTML and plain-text bodies are rendered from that one component, so the text alternative can't drift from the HTML. The brand palette is duplicated as literal hex in `src/emails/theme.ts` because email clients can't read CSS custom properties — keep it in step with the `@theme` block in `src/styles/global.css`.

## Deployment

Deployed on Vercel via `@astrojs/vercel`. Pushing to the repo's connected branch triggers a build through Vercel's own Git integration — no separate CI deploy step is needed.
