# TASK-019 — Final product QA and character performance optimization

## Objective

Keep the complete 32-Guardian experience fast and release-ready without changing its visual direction or diagnostic behavior.

## Scope

- Convert runtime Guardian sheets from large PNG files to visually reviewed WebP assets.
- Keep the internal art-direction source PNG unchanged.
- Verify every typed portrait path, all tests, and the production build.
- Preserve local-only operation until deployment is explicitly requested.

## Acceptance criteria

- [x] All eight runtime sheets use WebP and retain acceptable visual quality.
- [x] Total runtime portrait weight is substantially reduced.
- [x] All 32 Guardian combinations still resolve correctly.
- [x] Quality checks pass.
