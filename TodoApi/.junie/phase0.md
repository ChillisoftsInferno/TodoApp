# Phase 0 — Local Baseline (Aspire Topology + Dev Workflow)

## Phase Objectives
- [x] Identify all Aspire projects/services (AppHost, ApiService, Web, etc.) and how they run together locally
- [x] Verify the API and any dependencies run cleanly from Rider on Windows
- [x] Document local run steps and expected endpoints (e.g., Swagger URL, health checks)

## Scope
- Inventory of solution projects and their roles in the Aspire app
- Local run configuration(s) in Rider (Debug profiles, ports, launch settings)
- Local observability baseline (Aspire dashboard / OpenTelemetry locally, if enabled)

## Technical Requirements
- .NET SDK: 10.0 (as specified in .csproj files)
- Docker Desktop: Required for PostgreSQL and PgAdmin containers
- Rider/Visual Studio: Run `TodoApi.AppHost` as the startup project.

## Local Run Baseline
- **AppHost**: `TodoApi.AppHost` orchestrates the services.
- **API Service**: `apiservice` handles todo logic. Accessible at `/api/todos`.
- **Database**: PostgreSQL container `todos-postgres` with volume `todos-db-volume`.
- **Management**: PgAdmin included in orchestration.
- **Endpoints**:
  - Aspire Dashboard: `http://localhost:18888` (default)
  - API Swagger: `/swagger` on `apiservice` port.
  - Health Checks: `/health` and `/alive`.

## Definition of Done
- [x] App runs locally end-to-end (AppHost starts, API responds successfully)
- [x] Local endpoints are documented (API base URL, Swagger/OpenAPI, health endpoint if present)
- [x] Any required local prerequisites are written down (e.g., Docker Desktop, local DB)

## Notes
- The Blazor `TodoApi.Web` project exists but is currently commented out in `AppHost.cs`.
- EF Core Migrations are applied automatically on startup in `TodoApi.ApiService`.