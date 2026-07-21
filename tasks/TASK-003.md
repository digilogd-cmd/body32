# TASK-003 — Diagnostic Algorithm and Domain Data Model

| Field | Value |
| --- | --- |
| Status | Complete |
| Type | Product Logic / Data Specification |
| Started | 2026-07-21 |
| Owner | Codex |

## Objective

Define a deterministic, versioned, explainable, and testable algorithm that maps a short wellness questionnaire to one of 32 BODY32 Guardian types and a separate five-element balance vector.

## Context

The 32-type registry is defined as four Energy Rhythms multiplied by eight Guardian Archetypes. The algorithm must produce those two categorical axes without embedding rules in UI components. It must also avoid unsupported claims that BMI, gender, blood type, or MBTI determines health or constitution.

## Scope

- Define result inputs and excluded scoring inputs.
- Define five behavioral dimensions and a 20-question structure.
- Define answer scoring, reverse scoring, missing-answer handling, and normalization.
- Define Rhythm and Archetype classification.
- Define five-element balance calculation.
- Define confidence, tie-breaking, explanation, versioning, and reproducibility.
- Define the domain data contracts required for implementation.
- Define algorithm test categories and acceptance thresholds.

## Out of scope

- Clinical validation
- Final production question copy approval
- React implementation
- Database tables and API endpoints
- AI-generated health advice
- Compatibility scoring
- Daily Energy calculation

## Dependencies

- `docs/MASTER_PRD.md`
- `docs/CHARACTER_BIBLE.md`
- `AGENTS.md`

## Deliverables

- `docs/ALGORITHM.md`
- Versioned scoring and domain schemas
- Test and calibration plan

## Acceptance criteria

- The same valid responses and algorithm version always produce the same result.
- The result uses only explicit quiz answers for core classification.
- Profile fields are clearly separated from scoring fields.
- Exactly one valid stable Guardian ID is produced for every complete valid response set.
- Rhythm, Archetype, and five-element calculations are independently explainable.
- Tie-breaking is deterministic and documented.
- Question and coefficient changes require a new algorithm version.
- Domain data is separated from UI and localization.
- Unit, property, boundary, and golden-case tests are specified.

## Verification

- Review all formulas for bounded outputs.
- Verify the eight Archetypes cover all three-axis sign combinations.
- Verify the four Rhythms resolve to stable codes.
- Check the data contracts reference stable IDs rather than display names.
- Run `git diff --check`.
- Review the diff for unrelated changes.

## Risks and decisions

- v1 is a product classification model, not a validated medical or psychological instrument.
- Question wording requires Korean and English editorial review and pilot testing.
- Coefficients are versioned hypotheses and must be calibrated with consented aggregate data.
- Low-confidence results require nuanced copy rather than false precision.

## Completion notes

- Core scoring was limited to explicit quiz answers; profile, BMI, gender, MBTI, and blood type were separated from v1 classification.
- Five behavioral dimensions and 20 bilingual draft questions were defined with balanced positive and reverse-keyed items.
- Deterministic Rhythm, Archetype, five-element, confidence, tie-breaking, explanation, and versioning rules were specified.
- Domain contracts and a framework-independent pure-engine architecture were defined.
- Unit, property, golden-fixture, calibration, and safety test requirements were specified.
- Automated document checks confirmed 20 unique question IDs, all eight Archetype octants, and coefficient sums of exactly `1.00` for four Rhythm and five element formulas.
- `git diff --check` completed without errors.
- No application code or dependencies were introduced.
