# TASK-024 — Resilient quiz progress

## Objective

Prevent a local server restart or page reload from erasing an in-progress 20-question session.

## Acceptance criteria

- [x] Answers and the current question are saved locally after every change.
- [x] Reopening the same locale and questionnaire version resumes the session.
- [x] Invalid or obsolete saved data is ignored safely.
- [x] Automated checks pass.

## Verification

- Added a reload-and-resume test for question 19 with 19 saved answers.
- ESLint, TypeScript, 25 tests, and the production build passed.
