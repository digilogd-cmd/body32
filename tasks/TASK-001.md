# TASK-001 — Brand Guide and Design Token Specification

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Product Design / Specification |
| Started | 2026-07-21 |
| Owner | Codex |

## Objective

Translate the approved BODY32 direction into a coherent brand guide and an implementation-ready design system that can be shared by the web MVP and future applications.

## Context

BODY32 depends on visual trust, a premium Guardian universe, and a smooth mobile quiz experience. Implementation must not begin with arbitrary page-level colors, spacing, or animation values. The system needs semantic tokens and component rules first.

## Scope

- Define brand positioning, personality, voice, visual principles, and logo requirements.
- Establish semantic color, typography, spacing, radius, elevation, motion, and layout tokens.
- Specify accessibility and responsive rules.
- Define the first shared component contracts.
- Define Guardian and Passport integration boundaries without designing individual Guardians.

## Out of scope

- Final logo artwork
- Guardian names or illustrations
- Production CSS or React components
- Final result-page composition
- Quiz scoring logic
- Dark theme implementation
- Marketing campaign assets

## Dependencies

- `docs/MASTER_PRD.md` v0.1
- `AGENTS.md`
- Shared BODY32 planning direction

## Deliverables

- `docs/BRAND_GUIDE.md`
- `docs/DESIGN_SYSTEM.md`
- Updated task registry

## Acceptance criteria

- The brand is clearly differentiated from clinics, supplement stores, and generic quiz sites.
- Color values are semantic, accessible, and separated from Guardian-specific palettes.
- Typography supports Korean and English with defined fallbacks and scale.
- Spacing, radius, elevation, motion, layout, and responsive behavior use finite token scales.
- Core components have states, dimensions, interaction, and accessibility requirements.
- No design rule depends on copying another brand's proprietary visual system.
- Tokens can be represented as CSS custom properties and reused by a future native app.
- Reduced motion, contrast, keyboard interaction, and touch targets are specified.

## Verification

- Run `git diff --check`.
- Confirm both documents contain all required sections.
- Check color contrast targets and state rules are explicitly documented.
- Check every numeric visual decision maps to a token or documented exception.
- Review the diff for unrelated changes.

## Risks and decisions

- Actual font rendering and palette contrast must be visually validated during TASK-005.
- The final logo requires dedicated concept exploration and trademark screening.
- Guardian palettes must extend—not replace—the semantic UI palette.
- Dark mode is planned but is not an MVP requirement until the light theme is validated.

## Completion notes

- Brand positioning, voice, naming, logo direction, visual principles, Guardian boundaries, Passport rules, and approval checks were specified.
- Platform-neutral color, typography, spacing, radius, elevation, layout, motion, and component contracts were specified.
- Initial semantic color pairs were mathematically checked for WCAG AA contrast targets.
- The muted text candidate was corrected from `#8A847B` to `#77716A` after the first contrast check failed.
- `git diff --check` completed without errors.
- No application code or dependencies were introduced.
