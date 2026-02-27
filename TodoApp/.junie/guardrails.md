### Purpose
Guidelines for the Junie agent working on this repository. Follow these rules to keep changes safe, minimal, and consistent with the project.

### Modes and When to Use Them (short)
- [CHAT]: Greetings and quick Q&A. No code changes.
- [ADVANCED_CHAT]: Explain or explore code (read-only). No edits or runs unless asked.
- [FAST_CODE]: Truly trivial edit (1–3 steps, single file). If it grows, switch to [CODE].
- [CODE]: Non-trivial edits, multi-step, tests/docs updates. Provide status updates and submit with green state.
- [RUN_VERIFY]: Run the app/tests to collect evidence. No edits. If changes are needed, switch to [CODE].
- [SETUP]: Install/configure, fix environment. Switch to [CODE] if app changes are needed.
- [NICHE]: Specialized forensics/reverse-engineering only if nothing else fits.

Always apply Latest‑First for the Effective Issue: the most recent user update defines the task.

### Repository Conventions
- Language/stack: React + TypeScript + Vite + Material UI (MUI) + Redux Toolkit/RTK Query.
- Key paths:
  - src/main.tsx: React root and providers.
  - src/router.tsx and src/app/GeneralAppRoutes.ts: Routing configuration.
  - src/app/components/shared/routing/GeneralRoute.tsx: Route wrapper.
  - src/app/pages/**: Page components (e.g., todo/TodoPage.tsx).
  - src/store/api and src/store/apiSlice.ts: RTK Query base/api slice.
  - src/types/**: Shared TypeScript types for API payloads.
  - src/theme/**: MUI theme configuration.
- Keep new types in src/types and import via relative paths consistent with existing code.
- Styling: Prefer MUI (`styled`, theme) consistent with current usage. Avoid adding new styling systems.
- Routing: Add new routes using the same patterns found in `GeneralAppRoutes.ts`/`routes.tsx`. Use existing wrappers.
- Data fetching: Use RTK Query hooks from `src/store/api`. Don’t introduce alternate fetch libs.

### Code Style
- Match existing formatting, imports, and naming.
- Functional React components with TypeScript types for props/returns when non-trivial.
- Use `useMemo`, `useCallback` only when needed (e.g., derived heavy computations).
- Keep components small; lift shared logic into `src/app/components/shared` when appropriate.
- Avoid over-commenting; match surrounding style.

### Safety & Scope
- Minimal viable change: implement the smallest fix/feature that satisfies the Effective Issue.
- Single-responsibility PRs/changes: don’t batch unrelated edits.
- Do not delete or broadly rename files unless explicitly requested.
- If any rename is required, you MUST use the dedicated rename tool (rename_element) — never raw search/replace for renames.
- Never weaken or skip tests to pass CI. Prefer fixing the underlying logic.
- Don’t introduce new runtime dependencies without user approval.
- Do not run any `git` related commands (e.g., commit, push, branch, checkout) without explicit user permission.
- Do not install or update packages (e.g., `npm install`, `npm add`, `npm update`) without explicit user permission.

### Tooling Rules (local environment is Windows/PowerShell)
- Use Windows-style paths (\\) and PowerShell syntax for commands.
- All commands must be non-interactive; add `-y`/`--yes` when applicable.
- Restricted commands (require explicit user permission):
  - `git` (any subcommands).
  - Package manager install/update commands (`npm`, `yarn`, `pnpm` install/add/update).
- Don’t combine special tools and terminal commands in a single line.
- Prefer project tools over ad-hoc shell tricks. Use project search/open tools to navigate and edit.
- For any `rename`, use ONLY the `rename_element` tool so all references are updated safely.

### Response & Formatting Rules for the Agent
- Language: English unless the user explicitly asks otherwise.
- Markdown rules in user answers:
  - Use `###` or deeper headings only.
  - Inline code uses single backticks; multi-line code blocks use triple backticks.
- Keep answers concise; include file paths and small snippets where it aids clarity.

### How to Work with This Codebase
- Vite dev/build (only if explicitly asked to run):
  - `npm run dev` to start dev server.
  - `npm run build` to build.
- Do not create ad-hoc scripts; prefer existing npm scripts.
- Configuration lives in `src/config.ts` and `src/environment.ts`. Respect these sources for API endpoints and environment flags.
- For RTK Query:
  - Add endpoints in `src/store/api/general.api.ts` (or corresponding slice) and export hooks via `src/store/api/index.ts`.
  - Type request/response payloads in `src/types` and wire them to the endpoint generics.
- For pages/components:
  - Pages go under `src/app/pages/<feature>`.
  - Shared UI or logic under `src/app/components/shared`.
  - Use MUI components and theme from `src/theme`.

### Testing & Verification
- If a bug fix or logic change: add or update a focused test if the repo contains a test setup; otherwise perform a minimal manual verification plan and document it in the submission.
- Don’t simulate test runs; execute when the mode and task require it.

### Data & API
- Respect types defined in `src/types`. Keep server contracts reflected here.
- Avoid hardcoding URLs; pull from `config.ts`/`environment.ts`.

### Non-Functional Requirements
- Accessibility: prefer semantic HTML via MUI components; label interactive elements.
- Performance: avoid unnecessary re-renders, compute maps/derived data with `useMemo` when beneficial.
- Error handling: surface API errors through existing toast/notification patterns (`src/app/components/shared/toast`).

### Guardrails on .junie
- `.junie` is reserved for guidelines/config. Do not add temporary or cache files here.
- This file (`.junie/guardrails.md`) may be updated to refine rules; don’t create other files here without explicit request.

### When to Ask for Clarification
- Requirements are ambiguous, conflict with these guardrails, or imply architectural changes (new libs, major re-structure).
- The requested change affects multiple modules or introduces new dependencies.

### Definition of Done (per task)
- Satisfies the latest Effective Issue and the UserPlan (if provided).
- Changes are minimal, consistent with conventions, and compile/build.
- Any added/updated tests pass; no broken lints introduced.
- Clear submission summary with file paths and a brief verification note.
