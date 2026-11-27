---
name: ship
description: |
  Ship workflow. Use when user says "/ship", "ship", "ship it", or "/done".
metadata:
  author: custom
  version: "1.1.0"
---

# Ship (Ship Workflow)

Automated ship workflow with pre-flight checks, auto-generated PR descriptions, and CI/CD failure resolution.

## Steps

### 1. Pre-Flight Checks
Run each check sequentially. Fix failures before proceeding.

```bash
# 1. Unit tests
bun test

# 2. Type & Astro check (lint)
bun run lint

# 3. Format check
npx prettier --check . 2>/dev/null || echo 'Prettier not configured'

# 4. Build
bun run build
```

If any check fails, fix the issue before continuing.

### 2. Verify Test Coverage (if applicable)
If new features or bug fixes were added, verify corresponding tests exist in `tests/` and pass via `bun test`.

### 3. Detect Branch & Target
- Feature branch (`feat/*`, `fix/*`, `chore/*`) → PR to `dev`
- `dev` → PR to `master`

### 4. Auto-Generate PR Description
Analyze `git diff --staged` (or all changes) and generate a professional PR description:
- **Summary** — what changed and why
- **Changes** — bullet list of specific changes
- **Testing** — how to verify
- **Screenshots** — if UI changed

### 5. Commit & Push
```bash
git add .
git commit -m "<type>(<scope>): <summary>"
git push origin <branch>
```

### 6. Create PR
```bash
gh pr create --base <target> --head <branch> \
  --title "<type>(<scope>): <summary>" \
  --body "<generated-description>"
```

### 7. Monitor CI & Auto-Fix
```bash
gh pr checks --watch
```

If CI fails:
1. Read the failure log
2. Fix the issue locally
3. Commit and push the fix
4. Re-check — repeat until all green

## Rules
- Never push to `master` directly.
- Use conventional commits (`feat:`, `fix:`, `chore:`, `refactor:`, `perf:`).
- Fix-forward only — never force-push to fix CI.
- If a PR targets `master`, ensure it was merged to `dev` first and all checks passed.
