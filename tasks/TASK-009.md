# TASK-009 — Anonymous 20-Question Diagnostic Flow

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Core Product Flow |
| Started | 2026-07-22 |
| Owner | Codex |

## Objective

Connect the landing page to a calm, anonymous 20-question experience that uses the versioned BODY32 engine to calculate a deterministic pattern.

## Scope

- Add a localized quiz introduction and privacy explanation.
- Present one required question per screen with a five-point response scale.
- Support back/next navigation and preserve revised answers in the active session.
- Display accurate completion progress.
- Calculate the final pattern through the framework-independent algorithm engine.
- Add a compact completion preview pending the full result experience.
- Correct and review the Korean working copy for all 20 questions.

## Out of scope

- Accounts or server-side answer storage
- Optional demographic/profile fields
- Full Guardian result narrative and artwork
- BODY32 Passport and sharing
- Algorithm calibration or clinical validation

## Acceptance criteria

- The landing CTA opens the localized quiz route.
- All 20 questions are required and use the approved engine registry.
- Users can go back without losing answers.
- The final result is produced only after all questions are answered.
- Raw answers are not transmitted or persisted.
- Keyboard, focus, mobile, and reduced-motion behavior remain usable.
- Lint, typecheck, tests, and production build pass.

## Verification

- Component tests for answer requirements and backward navigation
- Existing algorithm unit tests
- Korean and English route checks
- Mobile interaction review
- `git diff --check`

## Completion notes

- Added localized `/ko/quiz` and `/en/quiz` routes connected to the landing CTA.
- Added an anonymous introduction, one-question-per-screen flow, five-point answer controls, accurate completed-answer progress, and back navigation.
- Corrected the Korean working copy for all 20 registered questions.
- Integrated final submission directly with the versioned framework-independent algorithm engine.
- Added a compact completion preview while reserving the full Guardian result for TASK-010.
- Verified both locale routes, 13 automated tests, lint, typecheck, production build, and whitespace checks.
