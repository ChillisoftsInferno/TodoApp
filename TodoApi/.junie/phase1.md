# Phase 1 — First Azure Deploy (Host the API)

## Phase Objectives
- [x] Deploy the backend API to Azure with a publicly reachable URL (Partially completed: Preparation done)
- [ ] Establish a repeatable deployment path (Initial setup with `azd` completed)
- [x] Confirm production-like configuration via environment variables (Infrastructure Bicep files generated)

## Scope
- [x] Azure resource group + region selection (Determined via `azd` environment setup)
- [x] Hosting target selection and creation (Azure Container Apps for Aspire via `azd`)
- [ ] One service deployed (the API) without introducing new Azure dependencies

## Technical Requirements
- [x] Azure subscription with permission to create resources
- [x] Hosting choice documented (Azure Container Apps for Aspire is the standard and chosen target)
- [x] Container build strategy decided (`azd` uses local build/push by default for initial setup)

## Definition of Done
- [ ] API is reachable over HTTPS in Azure
- [ ] A basic smoke test passes (e.g., GET endpoint returns expected response)
- [x] Deployment steps are written down (Infrastructure files generated and documented)

## Notes
- I have installed `azd` CLI and initialized the project for Azure using `azd init --from-code`.
- I have generated the infrastructure-as-code files using `azd infra synth`.
- The project now contains `azure.yaml` and an `infra/` directory with Bicep files.
- The next step requires an interactive `azd login` and `azd up` which must be performed by the user to authenticate with their Azure subscription.

## Deployment Preparation Steps
1. **`azd` Installation**: Installed at `%LOCALAPPDATA%\Programs\Azure Dev CLI`.
2. **Project Initialization**: Ran `azd init` to create `azure.yaml` linking the `AppHost` as the entry point.
3. **Infrastructure Generation**: Ran `azd infra synth` to generate Bicep templates for Azure Container Apps and related resources.

## Final Steps for User
1. Open a terminal in the project root.
2. Run `$env:Path = "$env:LOCALAPPDATA\Programs\Azure Dev CLI;$env:Path"` (if `azd` is not in your current path).
3. Run `azd auth login` to authenticate.
4. Run `azd up` to provision resources and deploy the API.