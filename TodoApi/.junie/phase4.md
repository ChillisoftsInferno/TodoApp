# Phase 4 — Database (Managed DB + Migrations)

## Phase Objectives
- [ ] Provision a managed database in Azure and connect the API to it
- [ ] Ensure database schema is applied reliably (migrations strategy)
- [ ] Keep credentials out of the app via Key Vault + Managed Identity where possible

## Scope
- Choose DB provider aligned with the project (Azure SQL or Azure Database for PostgreSQL)
- Connection configuration via Key Vault
- Migration execution approach (manual first, then automated)

## Technical Requirements
- Azure database instance provisioned and reachable from the app
- Network access decision documented (public access for learning vs private networking later)
- Migration tooling/process defined (EF Core migrations or equivalent)

## Definition of Done
- [ ] API uses the Azure database successfully (CRUD works against cloud DB)
- [ ] Migrations can be applied repeatably (documented steps)
- [ ] DB connection details are not stored in source control

## Notes
- Start simple (public connectivity) then harden later once the workflow is understood.