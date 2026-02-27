# Phase 3 — Configuration & Secrets (Managed Identity + Key Vault)

## Phase Objectives
- [ ] Remove secrets from code/config files and GitHub repository settings
- [ ] Use Managed Identity so the app authenticates to Azure resources without stored credentials
- [ ] Establish a pattern for environment-specific configuration

## Scope
- Key Vault creation and secret storage
- Managed Identity enabling for the deployed service
- Wiring app settings to Key Vault (direct references or app-side retrieval)

## Technical Requirements
- Azure Key Vault provisioned
- Managed Identity enabled for the hosting resource
- RBAC/permissions set so the app can read required secrets

## Definition of Done
- [ ] No production secrets are stored in the repo or CI variables
- [ ] App can retrieve at least one secret from Key Vault using Managed Identity
- [ ] Configuration approach is documented (what goes where and why)

## Notes
- Use placeholders for any sensitive values in documentation.