---
name: start
description: |
  Task initialization. Use when user says "/start <task>", "start", or "new task".
metadata:
  author: custom
  version: "1.0.0"
---

# Start (Task Init)

Creates isolated branch from `dev`, performs deep codebase audit, generates production-grade implementation plan.

## Steps

### 1. Stash if Dirty
```bash
git status --porcelain
git stash push -u -m "stash-before-start-$(date +%s)"
```

### 2. Sync `dev` & Prune Old Branches
```bash
git checkout dev && git pull origin dev
# Prune merged feature branches
 git branch --merged dev | grep -v '\*\|main\|master\|dev' | xargs git branch -d 2>/dev/null || true
```

### 3. Create Isolated Branch
```bash
git checkout -b feat/<task-slug>
```

### 4. Deep Codebase Audit
Inspect the codebase thoroughly:
- **Data models** — schemas, types, interfaces
- **API routes** — endpoints, middleware, auth guards
- **UI components** — pages, layouts, shared components
- **Edge cases** — error handling, loading states, empty states
- **Risks** — breaking changes, performance concerns, accessibility

### 5. Generate Implementation Plan
Create `implementation_plan.md` with:
- **Summary** — what we're building and why
- **Architecture** — data flow, component hierarchy
- **Implementation steps** — ordered, specific tasks
- **Given-When-Then** acceptance criteria
- **Test specifications** — what to verify
- **Risks & mitigations** — what could go wrong

### 6. Present & Wait for Approval
Show the plan summary to the user. Wait for "proceed" or "go" before writing any code.
