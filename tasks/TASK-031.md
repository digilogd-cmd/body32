# TASK-031 — Profile onboarding and analysis experience

## Objective

Add a transparent, skippable Profile stage and a trustworthy analysis transition before the Body Profile result.

## Acceptance criteria

- [x] The journey shows Profile, Body, Quiz, and Result stages.
- [x] Nickname, age band, height, weight, MBTI, and blood type are optional and purpose-labeled.
- [x] Optional context has no v1 score effect.
- [x] Profile and answers persist locally across reloads.
- [x] Analysis shows five understandable stages and respects reduced motion.
- [x] Automated checks pass.

## Verification

- ESLint and TypeScript passed.
- 25 automated tests passed, including profile skipping, progress restoration, and delayed result reveal.
