# jacobc-official-website — AI Agent Instructions

## Tech Stack
- **Frameworks:** Astro
- **Database:** None detected
- **Auth:** None detected
- **Email:** Resend
- **Hosting:** Vercel
- **Testing:** TBD
- **Linting:** TBD

## Workflow Commands
- `/start <task>` — Create branch, audit, plan
- `/done` — Pre-flight, commit, PR, CI
- `/release` — Promote dev → master
- `/tag vX.Y.Z` — Tag production release
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
