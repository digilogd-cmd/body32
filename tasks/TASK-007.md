# TASK-007 — Korean/English Routing and Shared UI Primitives

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Frontend Foundation |
| Started | 2026-07-21 |
| Owner | Codex |

## Objective

Establish locale-aware routing and reusable accessible UI primitives before feature pages are implemented.

## Scope

- Add `/ko` and `/en` routes with default-locale negotiation.
- Add version-controlled Korean and English message catalogs.
- Add locale metadata and language switching.
- Add shared Button, Card, Progress, and LanguageSwitcher components.
- Replace the temporary root screen with a localized foundation screen.
- Add component behavior tests.

## Acceptance criteria

- `/` resolves to a supported locale and `/ko` and `/en` render their own copy.
- Unsupported locales return a safe not-found response.
- Page metadata is localized.
- Shared controls meet semantic, keyboard, focus, and touch-target requirements.
- Progress values are bounded and announced accessibly.
- No component contains business scoring logic.
- Lint, typecheck, tests, and production build pass.

## Verification

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- HTTP checks for `/`, `/ko`, `/en`, and an unsupported locale
- `git diff --check`

## Completion notes

- Added locale-prefixed Korean and English routes with default-locale negotiation.
- Added localized metadata, message catalogs, and a language switcher.
- Added accessible Button, Card, Progress, and LanguageSwitcher primitives.
- Verified redirect and response behavior for `/`, `/ko`, `/en`, and unsupported paths.
- Lint, typecheck, 10 tests, production build, and whitespace checks pass.
