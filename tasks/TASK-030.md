# TASK-030 — Body Profile algorithm v1

## Objective

Replace generic personality dimensions with useful self-reported Body Signals while preserving deterministic 32-type identity stability.

## Acceptance criteria

- [x] Five Body Signals and 20-question structure are defined.
- [x] Rhythm, Guardian, five-element, Body Score, confidence, and explanation contracts are defined.
- [x] Profile, MBTI, and blood-type scoring exclusions are explicit.
- [x] Calibration and claim limits are documented.
- [x] Domain code and tests implement the new contract.

## Verification

- ESLint and TypeScript passed.
- 25 automated tests passed, including neutral, clear-type, deterministic, bounded, invalid-input, and registry checks.
