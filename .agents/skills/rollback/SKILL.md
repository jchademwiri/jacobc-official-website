---
name: rollback
description: |
  Production rollback. Use when user says "rollback", "revert", "/rollback",
  "undo deploy", or "production is broken".
metadata:
  author: custom
  version: "1.0.0"
---

# Rollback (Production Revert)

Reverts to previous tagged release. Auto-detects version if not provided.

## Steps

### 1. Resolve Version
**If provided** (`/rollback vX.Y.Z`): validate and verify tag exists.
**If not provided** (`/rollback`): auto-detect from tags.

```bash
ALL_TAGS=($(git tag -l "v*" --sort=-v:refname))
CURRENT="${ALL_TAGS[0]}"
PREVIOUS="${ALL_TAGS[1]}"
```

Show:
```
Current: v1.34.0
Suggested: v1.33.0 (previous)

Available:
  1. v1.33.0 ← recommended
  2. v1.32.0
  3. Pick different
```

### 2. Revert on `master`
```bash
git checkout master && git pull origin master
git log --oneline master | head -20
git revert --no-edit <merge-commit>
git push origin master
```

### 3. Health Check
```bash
echo "jacobc.co.za: $(curl -sI https://jacobc.co.za | head -1)"
```

### 4. Summary
```
🔄 Rollback Complete
  Reverted: vX.Y.Z → vA.B.C
  Pushed: master → redeploying
  Next: /start hotfix/<slug>
```

## Rules
- NEVER force-push. Use `git revert`.
- NEVER delete tags.
- Always health check after.
