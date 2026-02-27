# Phase 9 — “All-in Azure” DevOps (Azure Repos + Azure Pipelines)

## Phase Objectives
- [ ] Migrate source hosting and CI/CD fully into Azure tooling
- [ ] Recreate/replace the GitHub workflow in Azure Pipelines
- [ ] Keep deployments consistent and auditable

## Scope
- Repository migration to Azure Repos (or mirror strategy)
- Azure Pipelines build/test/deploy
- Permissions, branch policies, and pipeline security baseline

## Technical Requirements
- Azure DevOps project created
- Pipeline service connections configured securely
- Branch policies and required checks configured for main

## Definition of Done
- [ ] Source is hosted in Azure Repos (or mirrored with clear ownership)
- [ ] Azure Pipelines deploys to the same Azure environment reliably
- [ ] Team workflow documented (PRs, approvals, releases)

## Notes
- This is mostly a tooling shift; keep the runtime architecture stable while migrating.