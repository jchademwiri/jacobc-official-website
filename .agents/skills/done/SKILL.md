---
name: done
description: |
  Ship workflow. Use when user says "/done", "done", or "ship it".
metadata:
  author: custom
  version: "1.0.0"
---

# Done (Ship Workflow)

Automated ship workflow with 6-point pre-flight checks, auto-generated PR descriptions, and CI/CD failure resolution.

## Steps

### 1. Pre-Flight (6-point check)
Run each check sequentially. Fix failures before proceeding.

```bash
# 1. Type check
bun run typecheck 2>/dev/null || npx tsc --noEmit

# 2. Lint
bun run lint

# 3. Format check
npx prettier --check . 2>/dev/null || echo 'Prettier not configured'

# 4. Build
npx astro build
```

If any check fails, fix the issue before continuing.

### 2. Verify Test Coverage (if applicable)
If new features or bug fixes were added, verify tests exist. This project has no test framework configured — note this in the PR if the change is logic-heavy.

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
gh pr checks
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
