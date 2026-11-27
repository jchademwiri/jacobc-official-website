---
name: tag
description: |
  Production release git tagging. Use when the user says "tag", "tag release",
  "tag v1.2.3", "create tag", or "/tag v1.2.3".
metadata:
  author: custom
  version: "1.0.0"
---

# Tag (Approved Production Release)

Finalizes an approved production release: merges the open `dev` → `master` release PR (if still open and CI is green), creates an annotated git tag on `master`, pushes the tag, and runs production health checks.

## Steps

### 1. Validate Version
Ensure format is `vX.Y.Z`. If omitted, infer from the open `release: vX.Y.Z` PR targeting `master` (or ask user if ambiguous).

### 2. Merge Approved Release PR (if open)
Check for an open release PR from `dev` to `master`:
```bash
gh pr list --base master --head dev --state open --json number,title,url
```
If an open release PR exists:
1. Verify all CI checks pass (`gh pr checks <pr-number>`). Abort if checks are failing or still pending.
2. Merge using a merge commit without deleting `dev`:
   ```bash
   gh pr merge <pr-number> --merge
   ```

### 3. Ensure on `master`
```bash
git fetch origin --tags
git checkout master && git pull origin master
```

### 4. Check Existing Tag
```bash
git tag -l "vX.Y.Z"
```
Abort if exists.

### 5. Create & Push
```bash
git tag -a vX.Y.Z -m "Production Release vX.Y.Z"
git push origin vX.Y.Z
```

### 6. Health Check
```bash
echo "jacobc.co.za: $(curl -sI https://jacobc.co.za | head -1)"
echo "www.jacobc.co.za: $(curl -sI https://www.jacobc.co.za | head -1)"
curl -s https://www.jacobc.co.za | grep -o '<meta name="app-version" content="[^"]*"'
```
(Note: Vercel's production deploy may take ~20–40 seconds after merging into `master` before the new `app-version` meta tag appears.)

### 7. Summary
```
🔀  Merged release PR #<number> → master (if applicable)
🏷️  Tagged vX.Y.Z on master
📤  Pushed to origin
🏥  Health check: production endpoints responding
```

## Rules
- Never force-push tags.
- Never delete the `dev` branch when merging `dev` → `master` (never pass `--delete-branch`).
- Fix forward, don't rewrite history.
