---
name: release
description: |
  Production release. Use when user says "/release", "release", or "promote".
metadata:
  author: custom
  version: "1.0.0"
---

# Release (Staging Verification & Production PR)

Prepares a `dev` → `master` release PR for testing on staging (`https://dev.jacobc.co.za`) and the Vercel preview with full pre-flight checks. Does **not** merge into `master` — `/tag vX.Y.Z` merges the approved release PR and tags production.

## Steps

### 1. Sync & Audit
```bash
git fetch origin
git checkout dev && git pull origin dev
git log --oneline origin/master..origin/dev
```

### 2. Pre-Flight (must pass before PR)
```bash
# Unit tests
bun test

# Type check
bunx astro sync && bunx tsc --noEmit

# Lint
bun run lint

# Build
bun run build
```

If any check fails, fix before proceeding.

### 3. Generate Changelog
Analyze commits since last release:
```bash
git log --oneline --no-merges "$(git describe --tags --abbrev=0 2>/dev/null)..dev" 2>/dev/null || git log --oneline -20 dev
```

Categorize by prefix: `feat:` → 🚀, `fix:` → 🐛, `perf:` → ⚡, `chore:` → 🔧

### 4. Create Release PR
```bash
gh pr create --base master --head dev \
  --title "release: v<version>" \
  --body "<generated-changelog>"
```

### 5. Monitor CI & Staging
```bash
gh pr checks --watch
curl -sI https://dev.jacobc.co.za | head -1
```
Fix failures until all green. Do **not** merge to `master` automatically.

### 6. Ready for Testing
Tell user: "Release PR is ready for testing on staging (https://dev.jacobc.co.za) and the Vercel preview. Once approved, run `/tag v<version>` to merge into `master` and tag the production release."
