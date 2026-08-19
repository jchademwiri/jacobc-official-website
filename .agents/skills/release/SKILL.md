---
name: release
description: |
  Production release. Use when user says "/release", "release", or "promote".
metadata:
  author: custom
  version: "1.0.0"
---

# Release (Production Promotion)

Promotes `dev` → `master` via release PR with full pre-flight checks.

## Steps

### 1. Sync & Audit
```bash
git fetch origin
git checkout dev && git pull origin dev
git log --oneline origin/master..origin/dev
```

### 2. Pre-Flight (must pass before PR)
```bash
# Type check
bun run typecheck 2>/dev/null || npx tsc --noEmit

# Lint
bun run lint

# Format check
npx prettier --check . 2>/dev/null || echo 'Prettier not configured'

# Build
npx astro build
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

### 5. Monitor CI
```bash
gh pr checks
```
Fix failures until all green.

### 6. After Merge
Tell user: "Merge PR, then run `/tag v<version>` to tag the production release."
