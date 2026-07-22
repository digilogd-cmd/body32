# BODY32 Body Profile Algorithm v1

| Field | Value |
| --- | --- |
| Algorithm ID | `body32-profile-v1` |
| Question set | `body-pattern-v1` |
| Status | Release-candidate draft; calibration required before accuracy claims |

## 1. Outputs

The deterministic engine returns:

1. Five Body Signal scores
2. Four Energy Rhythm scores and selected Rhythm
3. Three centered Guardian axes and selected archetype
4. Stable 32-type ID
5. Five-element expression vector
6. Body Score snapshot
7. Confidence band and tie-break trace

No profile field, MBTI value, blood type, name, age, height, weight, gender context, or country changes the v1 type.

## 2. Five Body Signals

| Signal | High expression | Low expression |
| --- | --- | --- |
| Energy | Activates readily and sustains momentum | Conserves energy or needs a longer warm-up |
| Recovery | Returns to baseline readily | Reports accumulated fatigue or difficulty unwinding |
| Thermal Comfort | Tends toward warmth/heat sensitivity | Tends toward cold sensitivity or seeks warmth |
| Digestive Rhythm | Reports regular, resilient meal comfort | Reports variable or stress-sensitive comfort |
| Stress Flexibility | Adapts and returns to baseline readily | Reports prolonged disruption after change or stress |

Neither end is a diagnosis or moral grade. Thermal Comfort is directional rather than good/bad.

## 3. Questions

- 20 items, four per signal
- Five-point response
- Recent two-to-four-week reference period
- Balanced positive/reverse directions
- No disease, medical constitution, food morality, or supplement claims

Reverse transform: `adjusted = 6 - answer`.

Signal normalization:

```text
score = ((mean(adjusted answers) - 1) / 4) × 100
```

## 4. Rhythm model

Rhythms are weighted composites of the five signals. Coefficients sum to 1.0 per Rhythm.

- Ignite emphasizes Energy and warm outward activation.
- Weave emphasizes Stress Flexibility and adaptive regulation.
- Ground emphasizes Recovery and Digestive Rhythm.
- Reflect emphasizes Recovery, observation, and energy conservation.

The highest score wins. Ties use documented primary/secondary signals and then stable code order.

## 5. Guardian model

Three centered axes create eight octants:

```text
initiative = energy - 50
adaptability = stressFlexibility - 50
resilience = mean(recovery, digestion) - 50
```

Each positive/negative combination maps to one stable Guardian archetype. The axis names describe answer patterns only and are not biological measurements.

## 6. Five-element expression

Five-element values are independent 0–100 interpretive composites. They do not sum to 100.

- Wood: activation and flexibility
- Fire: activation and warmth
- Earth: digestive rhythm and recovery
- Metal: recovery, order, and regulation
- Water: recovery, conservation, and flexibility

The UI must call these expressions, not elemental deficiencies, excesses, diagnoses, or treatments.

## 7. Body Score

`Body Score` is a user-facing shorthand for a **current balance-support snapshot**:

```text
bodyScore = mean(recovery, digestiveRhythm, stressFlexibility)
```

It excludes age, BMI, gender, disability, blood type, and MBTI. It is not a health score, biological age, fitness score, or clinical risk estimate. Product copy must explain that a lower value is an invitation to observe current support needs, not a judgment.

## 8. Confidence

Confidence reflects classification separation, not truth or clinical certainty.

- Rhythm margin: highest minus second-highest Rhythm score
- Guardian margin: smallest absolute distance from an octant boundary
- High: rhythm margin ≥ 10 and Guardian margin ≥ 14
- Medium: rhythm margin ≥ 5 and Guardian margin ≥ 7
- Low: otherwise

## 9. Explanation trace

The engine exposes:

- strongest two Body Signals
- quietest two Body Signals
- rhythm score margin
- three Guardian axes
- tie-break status
- algorithm and question-set versions

Raw answers stay device-local in the anonymous release.

## 10. Calibration requirements

Before public accuracy or validation claims:

1. Cognitive interviews in Korean and English
2. Translation equivalence review
3. Item response distribution review
4. Internal consistency and test-retest analysis where appropriate
5. Demographic fairness analysis
6. Boundary and type-frequency analysis
7. Review by qualified wellness, behavioral-science, privacy, and legal advisors

Until then, the product uses `pattern`, `reflection`, and `tendency` language.

## 11. Versioning

- Any question wording, direction, coefficient, tie-break, or mapping change increments a version.
- Stored/shared results retain both versions.
- Stable type IDs remain stable unless a separately approved migration is published.
- Golden fixtures cover neutral, extreme, tie, and boundary profiles.
