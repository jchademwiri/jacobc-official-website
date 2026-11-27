# jacobc-official-website — AI Agent Instructions

## Tech Stack
- **Frameworks:** Astro
- **Database:** None detected
- **Auth:** None detected
- **Email:** Resend
- **Hosting:** Vercel
- **Testing:** bun test
- **Linting:** astro check

## Environments
- **Staging (`dev`):** https://dev.jacobc.co.za
- **Production (`master`):** https://www.jacobc.co.za (`https://jacobc.co.za` redirects to `www`)

## Workflow Commands
- `/start <task>` — Create branch, audit, plan
- `/ship` — Pre-flight, commit, PR, CI
- `/release` — Open `dev` → `master` release PR for staging/preview testing (`dev.jacobc.co.za`)
- `/tag vX.Y.Z` — Merge approved release PR into `master`, tag `vX.Y.Z`, and verify production
- `/rollback` — Revert to previous release
- `/incident "desc"` — Diagnose production issues
- `/changelog` — Generate release notes

## Skills
All skills in `.agents/skills/`. See each SKILL.md for details.

## Conventions
- Branches: `feat/<slug>`, `fix/<slug>`, `chore/<slug>`
- Commits: Conventional commits (`feat:`, `fix:`, `chore:`, `refactor:`, `perf:`)
- PRs: Target `dev` for features, `master` for releases
- Never push to `master` directly
