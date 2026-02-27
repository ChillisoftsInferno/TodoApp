# GitHub Copilot Custom Instructions

> **IMPORTANT**: These guidelines are mandatory for all AI assistants (Junie, Cursor, Copilot, etc.) interacting with this project. AI must adhere to these guardrails at all times.

## General Principles

### Clean Architecture
The project follows Clean Architecture principles to ensure separation of concerns, testability, and independence of UI, database, and external frameworks.
- **Domain**: Contains enterprise logic, entities, and repository interfaces. Must have NO dependencies on other layers.
- **Application**: Contains business logic, use cases, and DTOs. Depends only on the Domain layer.
- **Infrastructure**: Implements repository interfaces, database context, and external services (e.g., email, storage). Depends on Application and Domain layers.
- **API (ApiService)**: Entry point for the back-end. Handles HTTP requests, authentication, and maps to Application layer services.

### SOLID Principles
All code must adhere to SOLID principles:
- **S**ingle Responsibility: A class should have only one reason to change.
- **O**pen/Closed: Software entities should be open for extension but closed for modification.
- **L**iskov Substitution: Objects of a superclass should be replaceable with objects of its subclasses.
- **I**nterface Segregation: No client should be forced to depend on methods it does not use.
- **D**ependency Inversion: Depend upon abstractions, not concretions.

### REST API Best Practices
- Use appropriate HTTP methods (GET, POST, PUT, DELETE, PATCH).
- Use plural nouns for resource naming (e.g., `/api/todos` instead of `/api/todo`).
- Return standard HTTP status codes (200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, 500 Internal Server Error).
- Use DTOs (Data Transfer Objects) for request and response payloads; never expose Domain Entities directly in the API.

## .NET Aspire Guardrails

### Service Defaults
- Every service project (ApiService, Web, etc.) MUST call `builder.AddServiceDefaults()` in its `Program.cs`.
- Ensure `app.MapDefaultEndpoints()` is called to enable health checks and telemetry.

### AppHost Integration
- All infrastructure components (databases, caches, external APIs) must be configured in the `TodoApi.AppHost` project.
- Use Service Discovery (via names) instead of hardcoded connection strings or URLs in `appsettings.json`.

### Telemetry and Observability
- Use standard OpenTelemetry metrics and traces provided by Aspire Service Defaults.
- Log meaningful events and errors using `ILogger`.

## Git and Process Guardrails

### Git Command Approval
- **IMPORTANT**: Any attempts to run a `git` command (including `commit`, `push`, `pull`, `merge`, `checkout`, etc.) MUST be explicitly approved by the user before execution. Do not execute any git commands automatically.

### Code Quality
- Ensure all new features or bug fixes are accompanied by unit or integration tests in the `TodoApi.Tests` project.
- Follow the existing C# naming conventions and coding style.
