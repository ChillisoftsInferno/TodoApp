# Phase 5 — Storage (Azure Blob Storage)

## Phase Objectives
- [ ] Add object storage to the backend for learning/extension scenarios
- [ ] Use Managed Identity (preferred) to access Blob Storage
- [ ] Validate uploads/downloads and error handling

## Scope
- Storage account + blob container(s)
- Access control (RBAC roles for the app identity)
- Minimal API integration (store and retrieve a blob)

## Technical Requirements
- Azure Storage account provisioned
- Proper RBAC role assigned (e.g., Blob data access)
- App configuration for storage endpoint/container name

## Definition of Done
- [ ] API can write and read a blob in Azure Storage
- [ ] Access is granted via Managed Identity (no storage keys in configs)
- [ ] Basic operational notes exist (where blobs live, how to inspect them)

## Notes
- Even if the Todo domain doesn’t need files, this phase teaches a core Azure primitive.