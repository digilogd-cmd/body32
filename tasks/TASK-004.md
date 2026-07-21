# TASK-004 — Technical Architecture, Database, and API Design

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Architecture / Backend Specification |
| Started | 2026-07-21 |
| Owner | Codex |

## Objective

Define a maintainable technical architecture for the BODY32 web MVP, including application boundaries, data ownership, database design, API contracts, privacy, security, observability, and future app expansion.

## Scope

- Define frontend, domain, content, persistence, and external-service boundaries.
- Define which data belongs in Git and which belongs in a database.
- Define an incremental Supabase/PostgreSQL model.
- Define versioned API contracts for result creation and sharing.
- Define authentication, privacy, rate limiting, error, migration, and observability rules.
- Define deployment environments and configuration boundaries.

## Out of scope

- Installing packages or creating the Next.js application
- Creating a Supabase project
- Applying database migrations
- Production deployment
- User accounts, payments, commerce, AI Coach, or wearable integration
- Final vendor selection for analytics or email

## Dependencies

- `docs/MASTER_PRD.md`
- `docs/ALGORITHM.md`
- `docs/CHARACTER_BIBLE.md`
- `AGENTS.md`

## Deliverables

- `docs/TECHNICAL_ARCHITECTURE.md`
- `docs/DATABASE.md`
- `docs/API.md`
- Updated task registry

## Acceptance criteria

- Domain logic remains independent from React, database, and external services.
- Static versioned product data is not duplicated in the database without need.
- Anonymous MVP use is supported without mandatory accounts.
- Public sharing reveals only explicitly approved fields.
- Database tables have ownership, constraints, indexes, retention, and RLS expectations.
- API requests and responses are validated and versioned.
- Client-submitted result IDs are never blindly trusted.
- Errors do not leak sensitive data or internal details.
- Architecture supports later mobile clients without rewriting the core algorithm.

## Verification

- Check entity and endpoint references are consistent across all three documents.
- Confirm public result reads cannot expose raw answers or private profile fields.
- Confirm algorithm/content versions are stored with every persistent result.
- Confirm migration and rollback rules are defined.
- Run `git diff --check`.
- Review the diff for unrelated changes.

## Risks and decisions

- Exact dependency versions will be verified during TASK-005.
- Supabase is the preferred persistence option but is introduced only when server persistence is required.
- Public sharing creates privacy and abuse risk; it remains opt-in and revocable.
- Analytics and email vendors remain replaceable adapters.

## Completion notes

- Layered architecture and dependency direction were defined to keep the algorithm independent from frameworks and vendors.
- Repository, client-local, and database data ownership were separated.
- Anonymous-first result lifecycle, optional server persistence, server recalculation, and revocable public sharing were specified.
- PostgreSQL entities, constraints, indexes, RLS, retention, migrations, and database QA were defined.
- Versioned result creation, share creation, public retrieval, and share revocation API contracts were defined.
- Cross-document review corrected share revocation to target a specific `publicId` rather than an ambiguous result-level route.
- Privacy, security, rate limiting, idempotency, caching, error, environment, and observability boundaries were specified.
- `git diff --check` completed without errors.
- No services, dependencies, migrations, or application code were created.
