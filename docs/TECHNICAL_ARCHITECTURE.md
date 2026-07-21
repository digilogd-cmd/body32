# BODY32 Technical Architecture

| Field | Value |
| --- | --- |
| Version | v0.1 |
| Status | Draft — MVP Architecture |
| Updated | 2026-07-21 |

## 1. Architecture goals

- Mobile-first, fast, and accessible web experience
- Deterministic and testable classification engine
- Korean and English localization
- Anonymous-first usage with optional persistence
- Minimal external-service dependency for the first usable build
- Clear path to PWA and future native clients
- Privacy by design and safe public sharing
- Versioned content, algorithm, and stored results

## 2. Recommended stack

Exact versions must be verified against official sources during TASK-005.

| Concern | Preferred technology | Reason |
| --- | --- | --- |
| Web framework | Next.js App Router | Server/client composition, routing, metadata, deployment support |
| Language | TypeScript strict mode | Stable domain contracts and refactoring safety |
| UI runtime | React | Component model and ecosystem |
| Styling | Tailwind CSS mapped to semantic tokens | Fast implementation without scattered arbitrary values |
| Accessible primitives | Radix-based components/shadcn patterns where useful | Composable behavior without locking product styling |
| Motion | Framer Motion only where CSS is insufficient | Controlled interaction and result reveal |
| Validation | Zod | Runtime validation shared across boundaries |
| Forms | React Hook Form where multi-field behavior warrants it | Form state and validation integration |
| Localization | next-intl or equivalent App Router-compatible layer | Typed locale routing and messages |
| Unit tests | Vitest | Fast domain and component tests |
| UI tests | Testing Library | User-centered component behavior |
| End-to-end | Playwright | Browser, responsive, localization, and accessibility flows |
| Persistence | Supabase/PostgreSQL when required | Managed relational storage, migrations, RLS, future auth |
| Deployment | Vercel for web MVP | Natural Next.js deployment workflow |

Libraries are selected per requirement. A package is not installed merely because it appears in this table.

## 3. Layered architecture

```text
Presentation
  app routes, screens, UI components
        ↓
Application
  use cases, orchestration, view models
        ↓
Domain
  algorithm, types, result rules, content contracts
        ↓
Ports
  result repository, analytics, sharing, clock, ID generation
        ↓
Adapters
  browser storage, Supabase, HTTP, analytics vendor, image renderer
```

Dependencies point inward. Domain code imports no React, Next.js, database client, browser API, analytics SDK, or localized display copy.

## 4. Repository target structure

```text
app/
  [locale]/
  api/v1/
components/
  ui/
  quiz/
  result/
  passport/
domain/
  algorithm/
  guardian/
  result/
content/
  guardians/
  questions/
  locales/
lib/
  config/
  validation/
  server/
  client/
adapters/
  persistence/
  analytics/
  sharing/
styles/
  tokens/
tests/
  fixtures/
  e2e/
docs/
tasks/
supabase/
  migrations/
```

The exact scaffold is created in TASK-005. Directories are introduced when they contain real code; empty architectural folders are not created preemptively.

## 5. Data ownership

### 5.1 Repository-owned data

Keep these versioned with code:

- Algorithm configuration and version registry
- Question definitions and scoring directions
- Guardian registry and stable IDs
- Localized product and result content
- Design tokens
- JSON schemas and runtime validators
- Test fixtures

Benefits include code review, reproducible builds, atomic content/code changes, and reliable rollback.

### 5.2 Database-owned data

Use persistence only for runtime records:

- Opt-in saved results
- Revocable public share records
- Optional user accounts and ownership links
- Consent receipts
- Operational rate-limit/abuse records where appropriate
- Admin audit records after admin features exist

Do not mirror repository content into PostgreSQL merely to appear “dynamic.” A future CMS must justify its operational cost and synchronization model.

### 5.3 Client-local data

Before submission, quiz progress may live in memory and versioned local storage. It must:

- Contain no email or unnecessary identifier
- Have a documented expiration
- Be invalidated when the question-set version changes incompatibly
- Be clearable by the user
- Never be treated as authoritative after server persistence

## 6. Rendering and state strategy

- Render marketing and explanatory pages on the server where practical.
- Use client components only for interactive quiz, unit controls, animations, and downloads.
- Keep canonical quiz state in one feature-level controller, not global state by default.
- Introduce Zustand only if state must cross unrelated component trees or persist across complex flows.
- Calculate previews locally with the pure engine; recalculate and validate server-side when creating a persistent/shareable result.
- Do not send raw answers to analytics.

## 7. Result lifecycle

```text
Anonymous quiz in browser
  → local deterministic preview
  → user sees result
  → optional “save/share” action
  → explicit consent and server submission
  → server validates question set and recalculates result
  → sanitized result snapshot stored
  → unguessable public share ID issued
  → user can revoke using ownership/session capability
```

The server never trusts a client-submitted stable type ID without recalculation.

## 8. Environment strategy

| Environment | Purpose | Data policy |
| --- | --- | --- |
| Local | Development and tests | Fixtures only |
| Preview | Branch/PR validation | Synthetic or disposable test data |
| Production | Public service | Approved retention and access controls |

- Environment variables are validated at startup.
- Public variables use an explicit public prefix.
- Service-role credentials are server-only.
- `.env.example` contains names and safe placeholders, never real values.
- Preview and production databases must be separate.

## 9. External service boundaries

Each vendor sits behind a narrow adapter:

- `AnalyticsPort.track(event)`
- `ResultRepository.save(result)`
- `ShareRenderer.render(model)`
- `EmailPort.send(template, recipient)`

Business logic consumes the port, not a vendor SDK. This keeps PostHog, GA4, Resend, Supabase, and other services replaceable.

## 10. Security and privacy baseline

- Anonymous use by default
- Data minimization and explicit purpose for every collected field
- Server-side validation and recalculation
- Row Level Security for browser-accessible database paths
- Service-role key never exposed to clients
- Rate limiting on write and public-read endpoints
- Unguessable share identifiers
- Public allowlist serialization; never serialize database rows directly
- Revocation and retention support
- Secure headers and Content Security Policy appropriate to deployed integrations
- Dependency and secret scanning in CI when the app foundation exists
- Logs use request IDs and error codes, not raw answers or identifiers

## 11. Performance budgets

Initial mobile targets:

- LCP ≤ 2.5 seconds at the 75th percentile
- CLS ≤ 0.1
- INP ≤ 200 ms
- No master-resolution Guardian assets in runtime pages
- Route-level JavaScript budgets established after the first production build
- Nonessential animation and analytics must not block interaction

## 12. Failure behavior

- Quiz progress survives ordinary navigation and recoverable refreshes.
- Local result calculation remains available if persistence is unavailable.
- Save/share failures do not erase the visible result.
- API errors use stable codes and user-safe messages.
- Unknown algorithm or content versions fail explicitly.
- Public links to revoked or expired results return a privacy-safe not-found state.

## 13. Future native application

Future native clients reuse:

- Stable domain contracts
- Algorithm fixtures and configuration
- Content schemas and stable IDs
- API v1 contracts
- Design-token source values

React components are not assumed to be directly reusable. Product logic and data contracts are the reusable asset.

## 14. Architecture decisions

| ID | Decision | Status |
| --- | --- | --- |
| `ADR-001` | Keep core algorithm framework-independent | Accepted |
| `ADR-002` | Keep versioned questions, Guardians, and content in Git for MVP | Accepted |
| `ADR-003` | Anonymous-first; persistence is opt-in | Accepted |
| `ADR-004` | Server recalculates persistent results | Accepted |
| `ADR-005` | Introduce Supabase only when save/share work begins | Accepted |
| `ADR-006` | Public result payloads use explicit allowlists | Accepted |

## Change Log

### v0.1 — 2026-07-21

- Added stack direction, layers, target structure, data ownership, lifecycle, environments, adapters, security, performance, failures, and native-app boundaries.
