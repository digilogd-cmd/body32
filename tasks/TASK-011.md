# TASK-011 — Downloadable BODY32 Passport

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Share Artifact |
| Started | 2026-07-22 |
| Owner | Codex |

## Objective

Turn the completed Guardian result into a deterministic, privacy-safe BODY32 Passport that users can save locally.

## Scope

- Create one typed Passport data contract shared by preview and image output.
- Render downloadable square and 9:16 story PNG formats in the browser.
- Include type number, Guardian name, Rhythm, Archetype, and all Balance values.
- Provide visible download progress, success, and recovery feedback.
- Keep all rendering and downloads on the user device.

## Out of scope

- Public result URLs and social-network APIs
- Server-side storage or image rendering
- QR codes, accounts, wallet passes, and PDF output
- Final Guardian character illustrations

## Acceptance criteria

- Both formats are generated from the same deterministic result data.
- Downloaded filenames contain stable type number and format.
- No raw quiz answers appear in the image or leave the browser.
- The HTML preview represents the same identity and Balance data as the PNG.
- Korean and English text render without concatenated translation fragments.
- Lint, typecheck, tests, and production build pass.

## Verification

- Filename and format tests
- Existing result and algorithm integration tests
- Localized production build
- `git diff --check`

## Completion notes

- Added a dependency-free browser Canvas renderer for square and 9:16 story Passport PNGs.
- Added a typed render contract shared by the on-screen preview and both image formats.
- Added deterministic filenames, local-only downloads, and accessible progress/success/error feedback.
- Included Guardian identity, type number, Rhythm, Archetype, Balance values, and wellness boundary without raw answers or personal data.
- Verified 14 automated tests, lint, typecheck, production build, and whitespace checks.
