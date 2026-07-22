# BODY32 Product Requirement Document

| Field | Value |
| --- | --- |
| Product | BODY32 — Powered by KTYPE |
| Version | v1.0 release-candidate direction |
| Status | Approved implementation source |
| Parent | `docs/PRODUCT_VISION.md` |
| Replaces | MVP scope assumptions in `docs/MASTER_PRD.md` v0.2 |

## 1. Product definition

BODY32 is a global K-Wellness Personality Platform that translates self-reported body and lifestyle patterns into a transparent Body Profile, one of 32 Guardian identities, a personal Passport, and low-risk lifestyle experiments.

Brand line: **Decode Your Body. Balance Your Life.**

Category line: **The World's First Korean Wellness Personality Test.**

The category line is a brand claim, not a clinical or scientific claim. Public use requires a prior-art and trademark review.

## 2. Product outcome

The first-session result must provide value in this order:

1. Body Pattern summary
2. Five Body Signal scores and explanation
3. Five-element expression
4. Guardian identity and story
5. Personalized seven-day experiment
6. Passport and sharing assets
7. Optional return, comparison, and app-install loops

The Guardian must never be the only meaningful output.

## 3. Users

### Primary

- Global mobile-first adults aged 18–45
- Interested in personality frameworks, wellness, self-tracking, Korean culture, fitness, recovery, yoga, meditation, or biohacking
- Wants useful self-understanding without a clinical or judgmental experience

### Secondary

- Friend and partner comparison users
- Returning users tracking daily energy and recovery
- Future commerce users seeking clearly labeled wellness products

## 4. Release scope

### 4.1 Release candidate

- Korean and English landing pages
- Anonymous, mobile-first guided assessment
- Optional profile context with purpose and skip controls
- 20 five-point Body Pattern questions
- Deterministic, versioned Body Profile calculation
- Five Body Signal scores
- Energy Rhythm, Guardian, five-element expression, and confidence
- Explanation trace
- Body Score framed as a self-reported balance snapshot
- Guardian story, strengths, watch-outs, and recovery mode
- Safe food-pattern, movement, rest, and reflection suggestions
- Seven-day personal experiment
- Square and story Passport PNG generation
- Device-local progress recovery
- Privacy-safe share text and QR-ready public-link boundary
- Development review gallery for all 32 types

### 4.2 Next release

- Account and cross-device result recovery
- Consent-based friend comparison
- PDF Passport
- PWA install and notifications
- Daily check-in and streaks
- AI Guide grounded only in structured result data
- Public share pages and referral attribution
- Admin content and analytics console

### 4.3 Later platform

- Apple Health and Health Connect integrations
- Apple/Google Wallet passes
- Native application
- Country-level aggregate maps with privacy thresholds
- Clearly separated BODY32 Shop and affiliate disclosures
- Physical character IP, stickers, figures, and licensing

Global ranking, compatibility percentages, supplements, and health-device integrations require separate validity, privacy, abuse, and regulatory review.

## 5. First-session UX

```text
Landing
  → Start
  → Profile (language, units, nickname)
  → Body context (optional age band, height, weight, gender context)
  → Personality context (optional MBTI, optional blood type cultural field)
  → 20 one-question screens
  → 3-second staged analysis
  → Body Profile reveal
  → Guardian reveal
  → Body Signals and five elements
  → Why this result
  → Seven-day experiment
  → Passport save/share
```

Persistent top-level progress groups the journey into **Profile → Body → Quiz → Result**. Each screen presents one decision. Optional screens provide a visible Skip action.

## 6. Profile requirements

| Field | Required | Product use | Score effect |
| --- | --- | --- | --- |
| Locale | Yes | Language | None |
| Unit system | Yes | Measurement display | None |
| Nickname | No | Result and Passport | None |
| Age band | No | Context and safety copy | None in v1 |
| Height | No | Optional body context | None in v1 |
| Weight | No | Optional body context | None in v1 |
| Gender context | No | Inclusive context and future safety rules | None in v1 |
| MBTI | No | Explanation and habit-framing style | Never a body/health predictor |
| Blood type | No | Cultural comparison label only | Never a constitution/health predictor |
| Country | No | Passport and consented aggregate analytics | None |

Every optional field must explain why it is requested before entry. Raw profile context remains device-local in the anonymous release.

## 7. Questionnaire requirements

- Exactly 20 versioned items for the release candidate.
- Five-point frequency/agreement scale; no yes/no items.
- Four balanced items for each Body Signal.
- At least one reverse-scored item per signal where editorially natural.
- Questions reference the recent two to four weeks.
- Questions avoid diagnosis, disease names, ideal weight, morality, and food shaming.

### Five Body Signals

1. **Energy** — activation, momentum, and energy conservation.
2. **Recovery** — sleep restoration, fatigue accumulation, and decompression.
3. **Thermal Comfort** — self-reported heat/cold sensitivity and environmental comfort.
4. **Digestive Rhythm** — regularity, meal sensitivity, and stress-related comfort.
5. **Stress Flexibility** — adaptation, somatic stress awareness, and return to baseline.

These are product-defined self-report signals, not validated clinical scales.

## 8. Analysis transition

- Target duration: 2.8–3.5 seconds when motion is allowed.
- Reduced-motion mode removes artificial waiting and animated progress.
- Stages: Body Signals → Five Elements → Lifestyle Pattern → Guardian → Passport.
- The interface may feel intelligent but must not claim a remote AI diagnosis.
- Calculation occurs immediately and deterministically on device; the transition supports comprehension and anticipation.

## 9. Result requirements

### 9.1 Hero

- Type number and localized Guardian name
- Full, uncropped premium Guardian portrait
- One-sentence Body Pattern summary
- Pattern confidence using plain language
- Optional nickname

### 9.2 Body Score

- 0–100 self-reported balance snapshot derived from the five signals.
- Must be labeled as a current reflection, not health, fitness, biological age, or medical status.
- Must not punish lower energy or disability-related patterns.

### 9.3 Body Signals

- Five independent 0–100 scales
- Meaning of higher/lower values
- One observation per signal
- No red/green good-bad encoding

### 9.4 Constitution Lens

- Five-element expression derived transparently from answers
- Described as a contemporary reflection framework inspired by East Asian philosophy
- No claims of Sasang constitution, disease predisposition, or treatment suitability without validated clinical collaboration

### 9.5 Personality context

- Optional “How your MBTI preference may shape habit adoption” card
- Uses the user-entered MBTI only
- Never claims MBTI caused a body pattern

### 9.6 Blood-type context

- Optional cultural note only
- Must explicitly state that blood type does not determine health or personality
- Exclude from result if no genuinely useful, non-misleading content exists

### 9.7 Practical guidance

Each result provides:

- One gentle food-pattern reflection
- One movement option
- One recovery option
- One stress-regulation practice
- One seven-day experiment

Recommendations remain general wellness education. Supplements, dosages, treatment, contraindications, and disease claims are excluded from the release candidate.

### 9.8 Explanation trace

The user can inspect:

- Which Body Signals were strongest and most mixed
- Which questionnaire themes contributed
- Why the Energy Rhythm and Guardian were selected
- The algorithm and question-set versions

## 10. Guardian IP

- Stable system: 4 Energy Rhythms × 8 Guardian archetypes = 32 types.
- Every type has a unique name, palette, emblem, constellation motif, story, strengths, watch-outs, recovery mode, safe lifestyle prompts, avatar, Passport treatment, and social crops.
- Characters must feel collectible and premium, not childish, generic, or visibly AI-inconsistent.
- Guardian art supports the result; it must not visually bury the Body Profile.

## 11. Passport and sharing

### Passport front

- BODY32 and KTYPE branding
- Type number, Guardian, name/nickname
- Rhythm and emblem
- QR/public-link area when available
- Member-since and optional country only for account users

### Passport back

- Pattern summary
- Strength, watch-out, recovery mode
- Seven-day experiment
- Non-medical footer and version

### Assets

- Square feed image
- 9:16 story image
- Compact result card
- PNG in release candidate; PDF and Wallet follow
- Shared assets include a safe referral path, never raw answers or private profile data

## 12. Friend comparison

- Requires explicit consent from both users.
- Uses a revocable friend code or public result token.
- Describes complementary patterns and communication prompts.
- Does not claim scientific compatibility or use a deceptive 91% score before a validated model exists.

## 13. AI Guide

- Grounded input: structured Body Profile, approved content library, locale, optional MBTI framing, and user-selected goal.
- Outputs: explanation, daily reflection, and low-risk habit experiment.
- Forbidden: diagnosis, prescriptions, supplement dosage, disease risk, emergency triage replacement, invented scores, or unsupported food claims.
- Every response carries provenance/version metadata and a report control.

## 14. Commerce

- Commerce is visually and technically separated from assessment interpretation.
- Sponsored and affiliate recommendations are labeled.
- Payment or commercial incentives never change a result.
- Supplements and health claims require jurisdiction-specific review.
- The initial release contains no personalized supplement prescription.

## 15. Data and privacy

- Anonymous completion is the default.
- In-progress answers and optional profile context stay on-device unless the user explicitly saves or shares.
- Server persistence requires a consent receipt, retention policy, deletion path, and purpose limitation.
- Analytics receives step completion, timing, and aggregate type events; no raw answers or sensitive profile values by default.
- Country and demographic statistics require minimum cohort thresholds to prevent re-identification.

## 16. Brand and design

- Palette: Warm White `#F8F7F4`, Stone `#EAE6DF`, Forest `#4F7A5A`, Clay `#C87D4D`, Deep Navy `#233B5E`, Gold `#D6B35A`.
- Mood: Apple Health, Oura, WHOOP, Nothing, MUJI, Notion, Calm.
- Avoid clinic, traditional medicine shop, supplement store, gaming, and childish personality-test aesthetics.
- Mobile-first, 8px grid, 24px primary radius, 56px primary controls, restrained 300ms motion, reduced-motion support.
- Korean and Latin typography must be visually balanced and licensed.

## 17. Platform architecture

- Next.js App Router, React, TypeScript, next-intl.
- Existing tokenized CSS and component architecture remain unless a migration shows measurable value.
- Validation schemas are shared between client and server boundaries.
- Domain algorithm and content are framework-independent for future native reuse.
- Authentication, database, storage, analytics, and email remain replaceable adapters.
- PWA follows after the anonymous core experience is stable.

## 18. Analytics

Required funnel events:

- Landing CTA
- Profile step viewed/completed/skipped
- Quiz started and question milestones
- Assessment completed
- Result sections viewed
- Experiment saved
- Passport generated
- Share attempted/completed
- Return visit

No raw answer text or direct identifiers are sent in default analytics events.

## 19. Release gates

- All 32 results are complete in Korean and English.
- Algorithm golden fixtures and boundary tests pass.
- Profile purpose, privacy, and wellness disclosures are reviewed.
- Every recommendation is editorially reviewed for safety and usefulness.
- Keyboard, screen-reader, reduced-motion, and mobile layouts pass QA.
- No face, ears, antlers, or emblem is cropped in supported surfaces.
- No result is only an animal description.
- Build, lint, typecheck, automated tests, and manual critical-path checks pass.
- Public deployment requires privacy policy, terms, contact/report path, analytics consent configuration, and brand-claim review.

## 20. KPIs

| Stage | Metric | Target |
| --- | --- | ---: |
| Acquisition | Landing-to-start | ≥ 25% |
| Assessment | Completion | ≥ 85% |
| Utility | User identifies a useful insight | ≥ 70% |
| Action | Seven-day experiment save/start | ≥ 25% |
| Artifact | Passport save/share | ≥ 25% |
| Retention | Seven-day return | ≥ 20% |
| Growth | Voluntary social share | aspirational 40% |

## 21. Product decisions

1. BODY32 is a platform and IP system, not a disposable quiz.
2. Body Profile utility precedes Guardian spectacle.
3. Eastern philosophy is a transparent inspiration layer, not disguised medicine.
4. MBTI changes framing, not biological inference.
5. Blood type does not affect health or constitution outputs.
6. AI explains approved structured results; it does not create diagnoses.
7. Anonymous value is proven before mandatory registration.
8. Commerce never compromises result integrity.
