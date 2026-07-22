# TASK-023 — Landing orbit typography spacing

## Objective

Keep the central `32` and `GUARDIANS` label visually separate across supported viewport sizes.

## Acceptance criteria

- [x] The three text lines use explicit grid rows.
- [x] The number no longer relies on negative margins.
- [x] Automated and visual checks pass.

## Verification

- ESLint, TypeScript, 24 tests, and production build passed.
- The landing page was checked at desktop width; `32` and `GUARDIANS` remain separated.
