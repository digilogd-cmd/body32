# BODY32 Algorithm Specification

| Field | Value |
| --- | --- |
| Version | v0.1 |
| Algorithm ID | `body32-v1-draft` |
| Status | Draft — Pre-calibration |
| Updated | 2026-07-21 |
| Parent documents | `docs/MASTER_PRD.md`, `docs/CHARACTER_BIBLE.md` |

## 1. Product and safety definition

The BODY32 algorithm is a deterministic wellness-personality classification model. It converts self-reported preferences and tendencies into:

1. One Energy Rhythm
2. One Guardian Archetype
3. One stable BODY32 type ID
4. One five-element balance vector
5. A confidence descriptor and explanation trace

It is not a medical, diagnostic, biological, nutritional, or psychological assessment. Results must be described as reflective tendencies and entertainment/wellness content.

## 2. Input policy

### 2.1 Core scoring inputs

Only answers to the approved BODY32 questionnaire affect the v1 Guardian type and five-element vector.

Each answer uses a five-point Likert scale:

```text
1 — Strongly disagree
2 — Disagree
3 — Neither / unsure
4 — Agree
5 — Strongly agree
```

### 2.2 Profile inputs excluded from core scoring

| Input | MVP use | Core score effect |
| --- | --- | --- |
| Nickname | Optional display on result/Passport | None |
| Language | Localization | None |
| Unit system | Measurement presentation | None |
| Age band | Optional aggregate research with consent | None |
| Gender | Optional personalization/research with consent | None |
| Height | Optional future feature; canonical unit conversion | None |
| Weight | Optional future feature; canonical unit conversion | None |
| MBTI | Optional comparison insight | None |
| Blood type | Optional cultural/entertainment comparison | None |
| Email | Result recovery/communication only with consent | None |

BMI must not influence the v1 type. Gender and age must not change identical quiz answers into different Guardian types. MBTI and blood type must not be presented as scientific predictors.

### 2.3 Data minimization

The core quiz can be completed anonymously. Nonessential profile fields should be skipped by default or clearly marked optional. Analytics must not receive raw answers or direct identifiers unless a separately reviewed, consented research flow is introduced.

## 3. Behavioral dimensions

The questionnaire measures five product-defined dimensions on a normalized 0–100 scale.

### 3.1 Activation (`activation`)

How readily a person tends to initiate action, express energy, and move from intention to execution.

- High: quick activation and visible momentum
- Low: deliberate activation and energy conservation
- Neither end is better

### 3.2 Adaptability (`adaptability`)

How readily a person tends to adjust plans, environments, and responses when conditions change.

- High: fluid adjustment and experimentation
- Low: consistency and preference for known patterns

### 3.3 Steadiness (`steadiness`)

How strongly a person tends to sustain routines, pace effort, and create continuity.

- High: endurance and dependable rhythm
- Low: variable pace and preference for shorter cycles

### 3.4 Reflection (`reflection`)

How strongly a person tends to process internally, notice detail, and pause before concluding.

- High: depth and careful interpretation
- Low: external processing and rapid synthesis

### 3.5 Connection (`connection`)

How strongly a person tends to orient toward shared energy, communication, and interpersonal context.

- High: relational awareness and expressive exchange
- Low: autonomous focus and internally directed work

## 4. Questionnaire model

### 4.1 Structure

- 20 scored questions
- Four questions per dimension
- Two positively keyed and two reverse-keyed items per dimension
- One question per screen
- All questions required for the official result
- A user may go back and revise answers before submission

The final production wording must be reviewed for reading level, translation equivalence, ambiguity, cultural bias, and response leading.

### 4.2 Draft question registry

| ID | Dimension | Direction | English working copy | Korean working copy |
| --- | --- | --- | --- | --- |
| `Q_ACT_01` | Activation | + | I usually turn an idea into action quickly. | 나는 보통 아이디어가 생기면 빠르게 행동으로 옮긴다. |
| `Q_ACT_02` | Activation | + | Starting something new gives me energy. | 새로운 일을 시작하면 에너지가 생긴다. |
| `Q_ACT_03` | Activation | − | I prefer to wait until every detail is settled before I begin. | 나는 모든 세부 사항이 정리될 때까지 시작을 미루는 편이다. |
| `Q_ACT_04` | Activation | − | I conserve my energy until action is truly necessary. | 나는 꼭 행동해야 할 때까지 에너지를 아끼는 편이다. |
| `Q_ADP_01` | Adaptability | + | I can change my plan without losing my rhythm. | 계획이 바뀌어도 내 리듬을 잃지 않고 적응할 수 있다. |
| `Q_ADP_02` | Adaptability | + | Unexpected situations often make me curious. | 예상하지 못한 상황이 생기면 호기심이 생기는 편이다. |
| `Q_ADP_03` | Adaptability | − | Sudden changes drain me for a long time. | 갑작스러운 변화가 생기면 오랫동안 지치는 편이다. |
| `Q_ADP_04` | Adaptability | − | I feel best when each day follows a familiar pattern. | 매일 익숙한 방식대로 흘러갈 때 가장 편안하다. |
| `Q_STD_01` | Steadiness | + | I am good at maintaining a routine over time. | 나는 일정한 루틴을 오래 유지하는 편이다. |
| `Q_STD_02` | Steadiness | + | People can usually rely on my pace and follow-through. | 사람들은 대체로 나의 꾸준함과 마무리를 믿을 수 있다. |
| `Q_STD_03` | Steadiness | − | My energy often rises and falls sharply. | 내 에너지는 크게 오르내리는 편이다. |
| `Q_STD_04` | Steadiness | − | Repetition quickly makes me want to switch direction. | 같은 일이 반복되면 금방 다른 방향으로 바꾸고 싶어진다. |
| `Q_REF_01` | Reflection | + | I notice small signals before I decide what they mean. | 나는 의미를 판단하기 전에 작은 신호들을 먼저 살피는 편이다. |
| `Q_REF_02` | Reflection | + | Quiet time helps me understand what I am feeling. | 조용한 시간은 내가 느끼는 것을 이해하는 데 도움이 된다. |
| `Q_REF_03` | Reflection | − | I usually understand my thoughts by speaking or acting first. | 나는 먼저 말하거나 행동하면서 내 생각을 이해하는 편이다. |
| `Q_REF_04` | Reflection | − | I rarely revisit a decision once I have made it. | 나는 한번 내린 결정을 다시 돌아보는 일이 드물다. |
| `Q_CON_01` | Connection | + | The mood of a group affects how I respond. | 함께 있는 사람들의 분위기는 내 반응에 영향을 준다. |
| `Q_CON_02` | Connection | + | Sharing an experience often makes it more meaningful to me. | 경험을 누군가와 나누면 더 의미 있게 느껴지는 편이다. |
| `Q_CON_03` | Connection | − | I do my best thinking with minimal input from others. | 나는 다른 사람의 의견이 적을 때 가장 잘 생각하는 편이다. |
| `Q_CON_04` | Connection | − | I usually restore my energy by focusing only on my own space. | 나는 대체로 나만의 공간에 집중하며 에너지를 회복한다. |

These are draft product questions, not validated survey items. Pilot data may require replacement rather than merely adjusting weights.

## 5. Answer transformation

### 5.1 Raw answers

Valid raw answer values are integers from 1 through 5.

### 5.2 Reverse scoring

For a reverse-keyed question:

```text
scoredAnswer = 6 - rawAnswer
```

For a positive question:

```text
scoredAnswer = rawAnswer
```

### 5.3 Dimension normalization

Each dimension has four scored answers. Its normalized score is:

```text
dimensionRaw = mean(scoredAnswers)       // range 1–5
dimensionScore = (dimensionRaw - 1) × 25 // range 0–100
```

Keep full precision during calculation. Round only for display.

### 5.4 Missing and invalid answers

- Official v1 results require all 20 answers.
- Missing, duplicated, unknown, non-integer, or out-of-range answers produce a validation error.
- The engine must not silently substitute neutral values.
- A saved incomplete session may resume, but it cannot generate a final result.

## 6. Energy Rhythm classification

### 6.1 Composite scores

Let `A`, `D`, `S`, `R`, and `C` be Activation, Adaptability, Steadiness, Reflection, and Connection.

```text
Ignite = 0.60A + 0.15D + 0.10S + 0.05R + 0.10C
Weave  = 0.10A + 0.45D + 0.05S + 0.10R + 0.30C
Ground = 0.05A + 0.05D + 0.55S + 0.20R + 0.15C
Reflect= 0.05A + 0.15D + 0.15S + 0.55R + 0.10C
```

Every row sums to `1.00`. Composite scores remain in the 0–100 range.

### 6.2 Selection

Select the Rhythm with the highest composite score.

Tie-breaking order:

1. Compare the Rhythm's primary dimension: `A`, `D`, `S`, or `R`.
2. Compare the Rhythm's secondary contribution defined in the coefficient table.
3. If still exactly tied, use stable precedence `IGNITE → WEAVE → GROUND → REFLECT`.

The stable precedence is an implementation fallback, not a user-facing hierarchy. Exact ties should be rare and included in test fixtures.

## 7. Guardian Archetype classification

### 7.1 Three centered axes

```text
initiative = A - R
flexibility = D - S
relational = C - 50
```

Each axis can be positive or negative. A value of exactly zero uses the non-negative side to ensure deterministic classification.

### 7.2 Octant mapping

| Initiative | Flexibility | Relational | Archetype |
| --- | --- | --- | --- |
| + | + | + | `DOLPHIN` |
| + | + | − | `FOX` |
| + | − | + | `TIGER` |
| + | − | − | `WOLF` |
| − | + | + | `DEER` |
| − | + | − | `CRANE` |
| − | − | + | `BEAR` |
| − | − | − | `OWL` |

This mapping covers all eight sign combinations exactly once.

### 7.3 Stable type ID

```text
stableTypeId = `B32_${rhythm}_${archetype}`
```

The generated ID must exist in the Character Bible registry. An unknown combination is an engine error, not a fallback to a default character.

## 8. Five-element balance

### 8.1 Draft coefficient model

The five-element vector is a secondary interpretive view derived from the same five behavioral dimensions.

```text
Wood  = 0.25A + 0.45D + 0.10S + 0.05R + 0.15C
Fire  = 0.55A + 0.10D + 0.05S + 0.05R + 0.25C
Earth = 0.05A + 0.05D + 0.55S + 0.15R + 0.20C
Metal = 0.10A + 0.05D + 0.30S + 0.45R + 0.10C
Water = 0.05A + 0.30D + 0.10S + 0.45R + 0.10C
```

Each element row sums to `1.00`, so each output remains in the 0–100 range.

### 8.2 Presentation

- Display rounded whole numbers or broad bands, not false decimal precision.
- Label the chart as a BODY32 interpretation, not a measurement.
- Provide a text table and plain-language explanation.
- Do not label the lowest element as a deficiency or health problem.
- Do not force the five values to sum to 100; they are independent relative expressions on the same bounded scale.

## 9. Confidence and result language

### 9.1 Rhythm margin

```text
rhythmMargin = highestRhythmScore - secondHighestRhythmScore
```

### 9.2 Archetype margin

```text
archetypeMargin = min(abs(initiative), abs(flexibility), abs(relational))
```

### 9.3 Confidence bands

The product may calculate internal confidence:

```text
high:   rhythmMargin >= 12 and archetypeMargin >= 15
medium: rhythmMargin >= 6  and archetypeMargin >= 8
low:    otherwise
```

These thresholds are pre-calibration hypotheses.

Do not show a clinical-looking “accuracy percentage.” Use language such as:

- High: “Your answers form a clear pattern around…”
- Medium: “Your strongest pattern points toward…”
- Low: “Your answers sit near two patterns; this result reflects the slightly stronger one.”

## 10. Explanation trace

Every result stores enough non-sensitive derived data to explain the outcome:

```text
algorithmVersion
questionSetVersion
dimensionScores
rhythmScores
selectedRhythm
archetypeAxes
selectedArchetype
stableTypeId
elementScores
confidenceBand
tieBreakApplied
```

Raw answers should be stored only when the product has a defined purpose, retention policy, consent basis, and security review.

## 11. Versioning and reproducibility

### 11.1 Required versions

- `algorithmVersion`
- `questionSetVersion`
- `contentVersion`
- `characterAssetVersion`

### 11.2 Change rules

A new algorithm version is required for changes to:

- Question membership or scoring direction
- Dimension calculation
- Rhythm coefficients
- Archetype axes or octant mapping
- Element coefficients
- Tie-breaking
- Confidence thresholds

Copy-only edits that preserve meaning may increment the question-set content version after bilingual equivalence review. Material wording changes require calibration and a new question-set version.

Historical results keep their original algorithm version. They must not be silently recalculated.

## 12. Domain data contracts

The following shapes are conceptual TypeScript contracts. TASK-005 will place production types in framework-independent domain modules.

```ts
type Locale = 'ko' | 'en';
type LikertAnswer = 1 | 2 | 3 | 4 | 5;

type DimensionKey =
  | 'activation'
  | 'adaptability'
  | 'steadiness'
  | 'reflection'
  | 'connection';

type RhythmCode = 'IGNITE' | 'WEAVE' | 'GROUND' | 'REFLECT';

type ArchetypeCode =
  | 'TIGER'
  | 'FOX'
  | 'DEER'
  | 'CRANE'
  | 'BEAR'
  | 'WOLF'
  | 'OWL'
  | 'DOLPHIN';

type ElementKey = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

interface LocalizedText {
  ko: string;
  en: string;
}

interface QuizQuestion {
  id: string;
  dimension: DimensionKey;
  direction: 'positive' | 'reverse';
  prompt: LocalizedText;
  order: number;
  required: true;
}

interface QuizSubmission {
  algorithmVersion: string;
  questionSetVersion: string;
  answers: Record<string, LikertAnswer>;
}

interface DimensionScores extends Record<DimensionKey, number> {}
interface RhythmScores extends Record<RhythmCode, number> {}
interface ElementScores extends Record<ElementKey, number> {}

interface Body32Result {
  algorithmVersion: string;
  questionSetVersion: string;
  stableTypeId: string;
  rhythm: RhythmCode;
  archetype: ArchetypeCode;
  dimensions: DimensionScores;
  rhythmScores: RhythmScores;
  elements: ElementScores;
  axes: {
    initiative: number;
    flexibility: number;
    relational: number;
  };
  confidence: 'low' | 'medium' | 'high';
  tieBreakApplied: boolean;
}
```

Runtime validation is required at system boundaries. TypeScript types alone are not input validation.

## 13. Engine architecture

The production engine should be a pure domain module:

```text
validateSubmission
  → scoreAnswers
  → calculateDimensions
  → calculateRhythms
  → selectRhythm
  → calculateArchetypeAxes
  → selectArchetype
  → resolveStableTypeId
  → calculateElements
  → calculateConfidence
  → buildExplanationTrace
```

Requirements:

- No React, browser, database, network, locale, or analytics dependency
- No random values
- No current-time dependency in scoring
- Immutable configuration objects
- Explicit version lookup
- Fail closed on unknown questions, versions, or type IDs
- Full precision internally; presentation rounding outside the engine

## 14. Test strategy

### 14.1 Unit tests

- Positive and reverse scoring for values 1–5
- Dimension lower, neutral, and upper bounds
- Every Rhythm coefficient row sums to 1.00
- Every element coefficient row sums to 1.00
- All calculated scores remain in 0–100
- All eight Archetype octants map correctly
- Every generated type ID exists in the 32-type registry
- Stable tie-breaking
- Invalid and incomplete submissions fail clearly

### 14.2 Property tests

For many generated valid response sets:

- Result is deterministic
- Exactly one Rhythm and one Archetype is selected
- Type ID is valid
- No numeric output is `NaN`, infinite, or outside its bound
- Reordering answer object keys does not change the result
- Presentation locale does not change the result
- Profile fields do not change the result

### 14.3 Golden fixtures

Maintain reviewed example submissions for:

- Clear Ignite/Tiger
- Clear Weave/Dolphin
- Clear Ground/Bear
- Clear Reflect/Owl
- Every one of the 32 type IDs where feasible
- Exact neutral answers
- Exact and near ties
- Boundary answer patterns

Golden fixtures include the algorithm version and expected derived scores. Updating them requires review, not automatic snapshot replacement.

### 14.4 Calibration before public claims

Before launch:

- Conduct comprehension testing in Korean and English.
- Review question ambiguity and translation equivalence.
- Analyze completion time and abandonment.
- Check whether results collapse into a few dominant types.
- Check demographic skews without using protected traits to “correct” individual results.
- Review test/retest stability as a product-quality signal, not clinical validity.
- Adjust coefficients only through a new documented algorithm version.

## 15. Result safety rules

- Do not infer illness, deficiency, treatment, or supplement need.
- Do not use BMI, gender, blood type, or MBTI to claim constitution accuracy.
- Do not display “accuracy” or “sync” percentages that appear scientifically validated.
- Optional MBTI/blood-type comparisons must be clearly labeled cultural or entertainment context.
- Lifestyle suggestions must be low-risk, general, optional, and separately reviewed.
- Any future AI explanation receives only approved structured result data and must follow a constrained content policy.

## 16. Open decisions for v0.2

1. Editorial approval of all 20 bilingual questions
2. Pilot sample and calibration method
3. Final algorithm and question-set version naming
4. Whether low-confidence users can optionally answer tie-break questions
5. Exact result retention and anonymous recovery model
6. Whether the MVP collects any optional profile fields at all
7. Final language for five-element explanation and disclaimers
8. Research consent and aggregate-analysis policy

## Change Log

### v0.1 — 2026-07-21

#### Added

- Input policy and safety boundary
- Five behavioral dimensions and 20 draft bilingual questions
- Answer transformation, Rhythm, Archetype, five-element, confidence, and tie-breaking rules
- Explanation trace, versioning, domain contracts, engine architecture, testing, calibration, and result safety requirements

#### Updated

- None

#### Removed

- BMI, gender, age, blood type, and MBTI from core v1 scoring
