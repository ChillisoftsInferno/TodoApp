# Phase 7 — Authentication & Authorization (Microsoft Entra ID)

## Phase Objectives
- [ ] Secure the API so only authenticated callers can access it
- [ ] Implement authorization (scopes/roles/policies) for protected endpoints
- [ ] Prepare for frontend integration without breaking local dev workflow

## Scope
- Entra ID app registration(s)
- JWT validation in the API
- Role/scope-based authorization for key endpoints

## Technical Requirements
- Entra ID configuration documented (tenant, app registration purpose, redirect URIs as needed)
- Local dev auth strategy defined (dev tokens or local bypass with guardrails)
- Production configuration stored securely (Key Vault / app settings)

## Definition of Done
- [ ] Unauthenticated requests are rejected for protected endpoints
- [ ] Authorized requests succeed with expected permissions model
- [ ] Documentation exists for obtaining a token and calling the API

## Notes
- Secure-by-default in cloud; keep developer ergonomics in mind locally.