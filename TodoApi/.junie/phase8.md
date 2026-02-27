# Phase 8 — CI/CD (GitHub → Azure Deploy)

## Phase Objectives
- [ ] Automate build, test, and deployment from GitHub to Azure
- [ ] Use secure authentication between GitHub and Azure (avoid long-lived secrets)
- [ ] Add environment separation (at least dev/prod) if feasible

## Scope
- GitHub Actions workflow(s) (build/test/package/deploy)
- Azure deployment strategy aligned with hosting (e.g., deploy to Container Apps)
- Basic release notes/change tracking

## Technical Requirements
- CI workflow file(s) created and reviewed
- Secure auth configured (OIDC recommended)
- Pipeline includes unit tests and fails fast on errors

## Definition of Done
- [ ] Push to main triggers a deployment to Azure successfully
- [ ] Build and tests run in CI and gate deployments
- [ ] Deployment procedure is documented (including rollback approach at a basic level)

## Notes
- This phase keeps code in GitHub (for now) while Azure hosts the runtime.