# TASK-006 — Versioned Algorithm Engine and Type Registry

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Domain Engineering |
| Started | 2026-07-21 |
| Owner | Codex |

## Objective

Implement the BODY32 v1 draft classification specification as a deterministic, framework-independent TypeScript domain module with a complete 32-type registry and automated tests.

## Scope

- Implement stable domain types and version constants.
- Implement the 20-question registry.
- Implement four Rhythm and five-element coefficient matrices.
- Implement answer validation, reverse scoring, dimensions, Rhythm selection, Archetype axes, stable type resolution, confidence, and tie handling.
- Implement the complete 32-type registry.
- Add unit and property-style invariant tests.

## Out of scope

- UI and form state
- Localized result descriptions
- Database or API integration
- Calibration or clinical validation
- Compatibility, recommendation, or daily score logic

## Acceptance criteria

- The engine imports no React, Next.js, browser, database, or network APIs.
- Invalid, missing, duplicate, or unknown answers fail explicitly.
- The same submission and version always produce the same result.
- All outputs remain finite and bounded.
- Every generated stable type resolves through the official registry.
- All 32 registry entries are unique and structurally valid.
- Tests cover reverse scoring, neutral/tie behavior, representative results, validation, bounds, determinism, and registry completeness.

## Verification

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `git diff --check`

## Completion notes

- Implemented stable domain types, version constants, 20 typed bilingual questions, coefficient matrices, and the full 32-type Guardian registry.
- Implemented strict submission validation, reverse scoring, dimension normalization, Rhythm selection, deterministic tie-breaking, Archetype octants, element scores, confidence, and registry validation.
- Kept the engine free of React, Next.js, browser, database, time, randomness, and network dependencies.
- Strict TypeScript checks identified and corrected overly broad question tuple inference before completion.
- Added eight passing tests covering neutral ties, a representative Ignite/Tiger result, determinism, bounds, invalid inputs, coefficient normalization, registry completeness, and key definitions.
- `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `git diff --check` completed successfully.
