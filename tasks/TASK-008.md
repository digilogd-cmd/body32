# TASK-008 — Premium Landing Page and Visual Verification

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Product Experience |
| Started | 2026-07-22 |
| Owner | Codex |

## Objective

Replace the foundation placeholder with a polished, localized landing page that makes BODY32 immediately understandable and invites users into the diagnostic journey.

## Scope

- Build a responsive Korean and English landing page.
- Communicate the 32-type, 20-question, Guardian, and Passport proposition.
- Add a distinct BODY32 visual motif without depending on unfinished character art.
- Provide primary start actions and an explanatory journey section.
- Include privacy, transparency, inclusivity, and wellness boundaries.
- Verify common mobile and desktop viewports visually.

## Out of scope

- Functional profile and quiz flow
- Final Guardian illustrations
- Passport generation
- Analytics and public launch

## Acceptance criteria

- The first viewport explains the product and approximate commitment.
- Korean and English layouts remain readable and complete.
- Primary calls to action lead to the future localized quiz route.
- The page works at 320 px and desktop widths without horizontal overflow.
- Controls are keyboard accessible and reduced-motion preferences are respected.
- Only semantic tokens are used for product styling.
- Lint, typecheck, tests, and production build pass.

## Verification

- Automated quality scripts
- Browser review at mobile and desktop widths
- Keyboard and locale-link checks
- `git diff --check`

## Completion notes

- Replaced the temporary foundation screen with a complete Korean and English landing page.
- Established the 32-cell and five-element orbit as code-native BODY32 visual motifs pending final Guardian art.
- Added clear journey, Guardian/Passport, trust, wellness boundary, and final action sections.
- Verified the page visually at desktop and 320 px mobile widths and removed mobile horizontal overflow.
- Verified localized metadata, semantic headings, CTA localization, and keyboard-accessible links.
- Lint, typecheck, 10 tests, production build, and whitespace checks pass.
