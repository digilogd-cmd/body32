# TASK-026 — Definitive landing counter separation

## Objective

Guarantee that the central `32` never overlaps either supporting label at narrow desktop and mobile widths.

## Acceptance criteria

- [x] The three labels use a vertical flex layout.
- [x] The number has explicit top and bottom safety margins.
- [x] The core has additional usable space at narrow widths.
- [x] Automated checks pass.
- [ ] Owner confirms the corrected narrow-screen rendering.

## Verification

- ESLint, TypeScript, 25 tests, and the production build passed.
