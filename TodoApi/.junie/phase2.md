# Phase 2 — Observability (Logs, Metrics, Traces)

## Phase Objectives
- [ ] Enable centralized telemetry for the deployed API
- [ ] Be able to troubleshoot failures using Azure-native tools
- [ ] Capture request traces and application logs in a consistent way

## Scope
- Application logging in Azure (viewing and querying)
- Application Insights (or equivalent) integration for request telemetry
- Basic alerting considerations (optional, minimal)

## Technical Requirements
- A telemetry backend selected (typically Application Insights)
- Log correlation strategy documented (trace IDs, request IDs)
- Production logging levels configured appropriately

## Definition of Done
- [ ] You can view API requests, failures, and latency in Azure
- [ ] You can view and query application logs for a specific request
- [ ] A “how to debug in prod” note exists (where to click / what to query)

## Notes
- Do this early—debugging without telemetry is like flying with a blindfold.