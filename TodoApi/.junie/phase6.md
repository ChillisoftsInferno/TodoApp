# Phase 6 — Messaging (Azure Service Bus)

## Phase Objectives
- [ ] Introduce asynchronous processing for backend events
- [ ] Publish and consume messages reliably
- [ ] Learn retries, dead-letter queues, and failure modes

## Scope
- Service Bus namespace + queue (or topic/subscription)
- Minimal producer in the API (e.g., “TodoCreated” event)
- Minimal consumer (background worker/service) deployed alongside the API

## Technical Requirements
- Service Bus provisioned
- Managed Identity access configured for send/receive
- Message contract/versioning note created

## Definition of Done
- [ ] API publishes a message to Service Bus
- [ ] Consumer processes the message successfully in Azure
- [ ] A failure scenario is tested (message ends up retried or dead-lettered as expected)

## Notes
- Keep message payloads small and versioned; treat contracts as public APIs.