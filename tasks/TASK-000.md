# TASK-000 — Project Operating Foundation

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Documentation / Governance |
| Started | 2026-07-21 |
| Owner | Codex |

## Objective

Establish a durable product and engineering workflow so BODY32 can be developed in small, reviewable increments without relying on chat history or accumulating hardcoded behavior.

## Context

The BODY32 concept and initial repository structure are established. `docs/MASTER_PRD.md` v0.1 contains the first five foundation chapters. The project now needs explicit repository guidance, a stable task system, and verification that the initial product document accurately reflects the approved concept.

## Scope

- Establish repository-wide development guidance.
- Define task statuses, required sections, and task sequence.
- Verify the initial MASTER PRD structure and formatting.
- Record the project's decision and escalation policy.
- Prepare the repository for task-based commits.

## Out of scope

- Application scaffolding
- Dependency selection or installation
- UI implementation
- Final design tokens
- Guardian artwork
- Final scoring algorithm
- Database or API implementation

## Dependencies

- Shared BODY32 planning conversation
- `docs/MASTER_PRD.md` v0.1
- Existing GitHub repository and `main` branch

## Deliverables

- `AGENTS.md`
- `tasks/README.md`
- `tasks/TASK-000.md`
- Verified `docs/MASTER_PRD.md`

## Acceptance criteria

- Repository guidance identifies the source-of-truth hierarchy.
- Guidance explicitly prohibits scattered hardcoding of product data, localization, scoring, and design values.
- Task files have stable statuses and a repeatable required structure.
- Architecture expectations separate domain logic, presentation, configuration, and external services.
- Completion requires verification, documentation alignment, and a focused diff.
- High-impact decisions are distinguished from routine implementation authority.

## Decision and escalation policy

Codex may make routine, reversible technical decisions when they follow the approved product direction and this repository guidance.

Explicit user confirmation is required before:

- Public production deployment or a material change to an existing deployment
- Purchasing a paid service or creating material recurring cost
- Collecting new sensitive or identifying user data
- Making medical, legal, privacy, or commercial claims
- Deleting material data or rewriting shared Git history
- Changing the core BODY32 positioning, audience, or 32-type concept
- Introducing a vendor lock-in decision that would materially affect the roadmap

All other routine implementation choices should be documented and progressed without unnecessary interruption.

## Verification

- Run `git diff --check`.
- Confirm all required files exist.
- Confirm all required headings are present.
- Review the diff for unrelated changes.
- Confirm no application code or dependencies were added.

## Risks and decisions

- The shared planning conversation contains ambitious future features. MVP and post-MVP scope must remain separated.
- The final diagnostic taxonomy and input weighting remain open decisions for TASK-003.
- Product safety language must remain consistent across future specifications and UI.

## Completion notes

- Repository-wide product and engineering guidance was added.
- The stable task format and initial task sequence were established.
- `docs/MASTER_PRD.md` v0.1 was checked for required foundation sections.
- `git diff --check` completed without errors.
- No application code or dependencies were introduced.
