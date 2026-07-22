# BODY32 UX Flow v1

| Field | Value |
| --- | --- |
| Version | v1.0 release-candidate flow |
| Parent | `docs/PRODUCT_REQUIREMENTS_V1.md` |
| Principle | One screen, one decision |

## 1. Experience principles

1. **Discovery, not intake** — never resemble a clinic form.
2. **Value before data** — explain why optional context helps before asking.
3. **One decision per screen** — no dense multi-field forms.
4. **Continuous orientation** — always show Profile, Body, Quiz, or Result and local progress.
5. **Transparent interpretation** — result screens answer “why.”
6. **Identity after insight** — introduce the Guardian after the Body Profile promise is understood.
7. **Saveable value** — the result remains useful without account creation.

## 2. End-to-end route

```text
Landing
  → Assessment intro
  → Profile setup
  → Optional context
  → Body Pattern quiz
  → Analysis transition
  → Body Profile reveal
  → Guardian reveal
  → Body Signals
  → Constitution Lens
  → Explanation trace
  → Seven-day experiment
  → Passport
  → Share / compare / return
```

## 3. Global progress

The assessment header shows four stages:

```text
1 Profile  →  2 Body  →  3 Quiz  →  4 Result
```

- Current stage uses Forest.
- Completed stages use a check mark and remain visually quiet.
- Future stages use Stone.
- Within Quiz, a second progress indicator shows `Question 7 of 20` and percentage.
- Back navigation never erases saved answers.

## 4. Landing flow

### 4.1 Hero

- BODY32 / Powered by KTYPE
- `Decode Your Body. Balance Your Life.`
- Category descriptor
- Large 32-Guardian living constellation or curated character cluster
- Primary CTA: `Start free`
- Time, question count, no-account requirement

### 4.2 Value sequence

1. What BODY32 helps reveal
2. Body Profile preview
3. Four Rhythms → 32 Guardians
4. Passport preview
5. Practical seven-day experiment preview
6. Trust and privacy boundaries
7. Testimonials only after real testimonials exist
8. Final CTA

Do not ship invented testimonials or usage counts.

## 5. Assessment introduction

- Explain recent two-to-four-week reference period.
- Explain that the result is a wellness reflection, not diagnosis.
- Explain device-local saving.
- Actions: `Begin` and `Back home`.

## 6. Profile stage

Every optional step contains `Why we ask`, `Skip`, and a short privacy note.

### P1 Language

- Korean / English
- Required; defaults from route/browser

### P2 Unit

- Metric / Imperial
- Required; defaults from locale

### P3 Nickname

- Single text input
- Optional
- Used only on the result and Passport
- Maximum 24 grapheme clusters; no public sharing by default

### P4 Age band

- 18–24 / 25–34 / 35–44 / 45–54 / 55+ / Prefer not to say
- Optional cards
- No exact birthdate in anonymous release

### P5 Gender context

- Woman / Man / Non-binary / Self-describe / Prefer not to say
- Optional
- No score effect in v1

### P6 Height

- Optional slider plus direct entry
- Live unit conversion
- Plausibility validation without judgment

### P7 Weight

- Optional slider plus direct entry
- No ideal-weight, BMI grade, or visual body judgment

### P8 MBTI

- 16 chips plus `Not sure` and `Skip`
- Explain: used to frame habits and communication, not to infer health

### P9 Blood type

- A / B / O / AB / Unknown / Skip
- Explain: cultural context only; no score effect
- May be removed before launch if the output offers no honest utility

The release candidate may compress optional context into fewer screens after usability testing, but must preserve one primary decision per viewport.

## 7. Body Pattern quiz

### Screen anatomy

- Stage progress
- Question count and percentage
- Short theme eyebrow
- One question
- Five vertically clear response cards on mobile
- Labels at both ends and understandable labels for all five values
- Back / Continue

### Interaction

- Selection animates within 300ms.
- Continue enables after selection.
- Keyboard arrows and number keys are supported where practical.
- Answer saves immediately to device storage.
- Reload resumes at the latest question.
- No automatic advance; users retain control.

### Content order

Questions alternate themes to reduce response patterning. Similar and reverse-scored items are separated.

## 8. Analysis transition

### Standard motion

Target 3 seconds with five staged lines:

1. Reading Body Signals
2. Mapping Five Elements
3. Understanding Lifestyle Rhythm
4. Meeting your Guardian
5. Creating your Passport

Each line changes from pending to active to complete. The final transition reveals the Body Profile rather than only the character.

### Reduced motion

- No artificial countdown.
- Static summary of calculation stages.
- Immediate result navigation after calculation.

### Error behavior

- Local calculation errors never erase answers.
- Show `We kept your answers. Try the analysis again.`
- Provide retry and report controls.

## 9. Result narrative

The result is one continuous editorial story, not a crowded dashboard.

### R1 Body Profile reveal

- Nickname when provided
- `Your current Body Pattern`
- Pattern title and two-sentence utility summary
- Body Score with explicit “self-reported snapshot” label
- Confidence/nuance language

### R2 Guardian reveal

- Large uncropped character
- Type number, localized name, Rhythm, archetype
- Emblem and constellation motif
- One identity sentence connecting the character to body patterns

### R3 Five Body Signals

- Energy, Recovery, Thermal Comfort, Digestive Rhythm, Stress Flexibility
- Independent meters, never a good/bad leaderboard
- Each expands to explain high, low, and mixed expression

### R4 Constitution Lens

- Five-element visualization
- “Inspired by East Asian balance philosophy” disclosure
- Strongest and quietest expressions
- No medical constitution label

### R5 Personality context

- Only when MBTI was entered
- Explains how the preference may affect habit adoption and communication
- Explicitly separates personality context from body calculation

### R6 Why this result

- Top contributing answer themes
- Rhythm selection explanation
- Guardian selection explanation
- Algorithm and question-set versions

### R7 Practical guidance

Four cards:

- Eat/meal rhythm reflection
- Movement option
- Recovery option
- Stress-regulation option

Language uses `try`, `notice`, and `consider`, not `must`, `cure`, or `fix`.

### R8 Seven-day experiment

- One measurable, low-risk experiment
- User can choose morning/evening reminder in a future PWA
- Save locally in release candidate
- Daily completion check follows in the next release

### R9 Passport

- Front/back preview
- Square and story PNG buttons
- Share action
- Privacy notice before adding nickname/country to a shared asset

### R10 Continuation

- Retake from the beginning
- Back home
- Future: save result, compare with friend, install app

## 10. Passport flow

```text
Choose format
  → choose optional public fields
  → preview
  → generate locally
  → save/share
```

- Formats: Square, Story 9:16, Compact card.
- Front prioritizes identity and art.
- Back prioritizes useful pattern and experiment.
- QR appears only when a real revocable public result URL exists.
- Never place a fake or nonfunctional QR in production.

## 11. Friend comparison flow

```text
Create revocable friend code
  → share code
  → friend approves comparison
  → show common patterns and complementary needs
  → provide conversation prompts
```

- No compatibility percentage in v1.
- No public lookup by nickname.
- Either party can revoke access.

## 12. Returning-user flow

### Anonymous release

- Resume assessment
- Reopen latest local result
- Continue seven-day experiment
- Clear local data

### Account release

- Result history
- Daily Balance check-in
- Trend view
- Passport wallet
- Friend comparisons
- Data export/delete

## 13. Daily Balance flow

Future lightweight loop:

```text
Energy today
  → sleep/recovery
  → body comfort
  → stress load
  → one suggested action
  → streak and trend
```

Daily check-ins do not recalculate permanent identity every day. They show state changes around a stable profile.

## 14. Commerce flow

- Recommendations remain editorial until commerce is approved.
- Shop links are visibly labeled and separated from result evidence.
- Sponsored status appears before click.
- No supplement recommendation based only on Guardian, MBTI, blood type, or five-element expression.

## 15. Accessibility

- Logical heading hierarchy and landmarks
- Full keyboard operation
- Visible focus
- 44px minimum targets; 56px primary actions
- Labels independent of color
- Screen-reader progress announcements without excessive noise
- Reduced motion and high zoom support
- Korean and English line-break QA
- Results remain understandable without images or charts

## 16. Responsive behavior

- Primary target: 360–430px portrait mobile
- Supported: 320px through large desktop
- One-column quiz and result narrative on mobile
- Sticky action area only when it does not obscure content or keyboard
- Guardian uses contain framing
- Passport preview scales without text overflow

## 17. Analytics checkpoints

- `assessment_started`
- `profile_step_viewed/completed/skipped`
- `quiz_question_answered` with question order only
- `quiz_milestone` at 25/50/75/100%
- `analysis_started/completed/failed`
- `result_section_viewed`
- `experiment_saved`
- `passport_generated`
- `share_completed`
- `assessment_resumed`

Default events exclude answers and raw personal context.

## 18. Critical-path acceptance

1. A new user completes the full journey without an account.
2. Optional profile fields can all be skipped.
3. Reload restores profile, answers, and current step.
4. Result leads with Body Profile utility.
5. Guardian imagery never crops identity features.
6. The user can understand why the result appeared.
7. Guidance is useful but non-diagnostic.
8. Passport generation works on mobile and desktop.
9. Reduced-motion users are not forced through a fake wait.
10. No dead CTA or placeholder social proof ships.
