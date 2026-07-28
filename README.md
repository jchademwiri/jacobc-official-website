# Jacob Chademwiri — Official Website

Personal/professional site for Jacob Chademwiri: consulting-forward (tender management, project management, ISO/SHEQ) plus a web-development portfolio and blog.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## Project Structure

```text
/
├── docs/                    # Design reference files (see docs/README.md)
├── public/                  # Static assets (favicons, etc.)
├── src
│   ├── components/          # Nav, Footer, ContactBand
│   ├── content/blog/        # Blog posts (Markdown, via Astro content collections)
│   ├── content.config.ts    # Blog collection schema
│   ├── layouts/
│   │   └── Layout.astro     # Shared page shell (nav + footer + design tokens)
│   ├── pages/
│   │   ├── index.astro      # Home
│   │   ├── services.astro   # Services
│   │   ├── about.astro      # About
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

Add a new Markdown file to `src/content/blog/`, following the frontmatter shape in an existing post (`title`, `category`, `track`, `date`, `readTime`, `excerpt`, `cover`, `tags`). It's picked up automatically by the blog listing and detail pages.

## Deployment

Deployed on Vercel via `@astrojs/vercel`. Pushing to the repo's connected branch triggers a build through Vercel's own Git integration — no separate CI deploy step is needed.
