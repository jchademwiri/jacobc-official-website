---
name: changelog
description: |
  Auto-generate changelog. Use when user says "changelog", "release notes",
  "/changelog", or "what changed".
metadata:
  author: custom
  version: "1.0.0"
---

# Changelog (Release Notes)

Generates changelog from conventional commits.

## Steps

### 1. Resolve Range
```bash
tags=($(git tag -l "v*" --sort=-v:refname | head -2))

if [[ ${#tags[@]} -ge 2 ]]; then
  TO_TAG="${tags[0]}"
  FROM_TAG="${tags[1]}"
  RANGE="${FROM_TAG}..${TO_TAG}"
elif [[ ${#tags[@]} -eq 1 ]]; then
  TO_TAG="${tags[0]}"
  RANGE="${TO_TAG}"
  echo "Only one tag exists (${TO_TAG}). Changelog covers everything up to this tag."
else
  echo "No tags found. Generating changelog from all commits."
  RANGE=""
fi
```

### 2. Fetch & Categorize
```bash
if [[ -n "$RANGE" ]]; then
  git log --oneline --no-merges "${RANGE}"
else
  git log --oneline --no-merges -50
fi
```

| Prefix | Section |
|--------|---------|
| `feat:` | 🚀 Features |
| `fix:` | 🐛 Bug Fixes |
| `perf:` | ⚡ Performance |
| `refactor:` | ♻️ Refactoring |
| `chore:` | 🔧 Maintenance |
| `BREAKING` | ⚠️ Breaking Changes |

### 3. Output
```markdown
# Release vX.Y.Z
**Compare:** [vA.B.C...vX.Y.Z](https://github.com/jchademwiri/jacobc-official-website/compare/vA.B.C...vX.Y.Z)

## 🚀 Features
- ...

## 🐛 Bug Fixes
- ...
```
