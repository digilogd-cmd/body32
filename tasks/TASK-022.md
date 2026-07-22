# TASK-022 — Safe full-character portrait framing

## Objective

Prevent Guardian faces and identity-defining features from being cropped in result, Passport preview, and review-gallery surfaces.

## Scope

- Split eight four-Rhythm sheets into 32 independent portrait assets.
- Resolve one explicit image path per stable archetype/Rhythm combination.
- Render portraits with contained framing rather than a shared center crop.
- Preserve a recoverable source history for the original sheets.

## Acceptance criteria

- [x] Each Guardian has an independent portrait file.
- [x] Full heads, ears, antlers, beaks, and primary silhouettes fit inside the frame.
- [x] Result and compact Passport surfaces use the same safe portrait source.
- [x] Quality checks pass.

## Verification

- ESLint passed.
- TypeScript typecheck passed.
- 24 automated tests passed.
- Next.js production build passed.
- Deer, crane, and tiger source portraits were visually checked for safe head and silhouette framing.
