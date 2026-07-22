# BODY32 Codex Development Guide

| Field | Value |
| --- | --- |
| Version | v1 |
| Audience | Codex and human contributors |

## 1. Working principle

BODY32 is a long-lived platform and character IP system. Implement domain rules as reusable data and pure functions. Never hardcode a one-off result, character offset, profile exception, or locale string merely to make one screen pass.

## 2. Task order

1. Read the relevant source documents from `docs/PLATFORM_DOCUMENT_INDEX.md`.
2. Write or update one numbered task with objective and acceptance criteria.
3. Inspect existing architecture and user changes.
4. Implement the smallest complete vertical slice.
5. Add or update tests at the domain and UI boundary.
6. Run lint, typecheck, tests, and production build in proportion to risk.
7. Perform visual/critical-path QA when requested or before release.
8. Update task status and documentation.
9. Commit intentionally and push only verified changes.

## 3. Architecture rules

- Domain calculation lives under `domain/` and remains independent of React.
- Character, Body Profile, and recommendation content are typed registries, not component conditionals.
- UI components consume structured domain output.
- Routes own composition; components own reusable interaction.
- Locale strings live in message files or typed localized content registries.
- Browser-local anonymous progress is versioned and invalidated safely.
- Server adapters never become required for the anonymous core unless the PRD changes.

## 4. Algorithm rules

- Deterministic for identical versioned input.
- No MBTI, blood type, age, height, weight, gender, country, or nickname score effect in v1.
- Every question and coefficient change increments a version.
- Stable type IDs are never reordered casually.
- Golden fixtures cover neutral, extreme, tie, and boundary profiles.
- UI language distinguishes confidence separation from clinical certainty.

## 5. Content and safety rules

Allowed language: pattern, signal, tendency, expression, reflection, experiment, may, can, notice.

Forbidden without separate validated approval: diagnosis, cure, treatment, deficiency, toxicity, disease risk, guaranteed compatibility, ideal body, supplement dosage, or claims that MBTI/blood type determines health.

- Practical guidance must be low-risk and reversible.
- Commerce never changes a result.
- Sponsored content is labeled before interaction.
- AI Guide is grounded in structured approved content and cannot invent scores.

## 6. Character rules

- 4 Rhythms × 8 archetypes remains the stable 32-type taxonomy.
- Use independent character assets with contain framing.
- Never crop faces, ears, antlers, beaks, or primary silhouette.
- New assets require provenance, consistent art direction, and all required crops.
- Guardian identity supports Body Profile utility; it does not replace it.

## 7. Design rules

- Mobile first, 320px minimum support.
- 8px layout rhythm and tokenized spacing.
- 44px minimum interactive targets; primary controls target 56px.
- Warm White, Stone, Forest, Clay, Navy, and Gold palette.
- Avoid clinic, traditional-medicine shop, supplement-store, childish game, and generic AI-art aesthetics.
- All motion supports reduced-motion preferences.
- Charts have text equivalents and never rely on color alone.

## 8. Data and privacy rules

- Collect only fields with documented purposes.
- Optional means skippable without reduced core value.
- Do not send raw answers or personal context to default analytics.
- Public sharing excludes private fields unless the user previews and opts in.
- No fake QR codes, fabricated testimonials, user counts, rankings, or scientific validation.
- Secrets never enter the repository, client bundle, logs, screenshots, or test fixtures.

## 9. Testing baseline

Before a release candidate:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- Korean and English critical path
- Mobile and desktop layouts
- Keyboard and focus order
- Reduced motion
- Progress reload/resume
- All 32 Guardian review gallery
- Passport generation and sharing fallback
- Invalid/corrupt local data recovery

## 10. Git discipline

- Preserve unrelated user changes.
- One task or coherent slice per commit.
- Commit message states product outcome.
- Do not bypass tests to ship.
- Do not rewrite history or use destructive reset operations without explicit authorization.

## 11. Definition of done

A task is done only when:

- Acceptance criteria are satisfied.
- Code and documentation agree.
- Safety and privacy boundaries remain intact.
- Relevant automated checks pass.
- User-visible behavior is understandable in Korean and English.
- No known placeholder, dead control, fabricated content, or silent failure remains in scope.
