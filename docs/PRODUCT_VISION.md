# BODY32 Product Vision

| Field | Value |
| --- | --- |
| Product | BODY32 — Powered by KTYPE |
| Document version | v1.0-direction-reset |
| Status | Approved direction for PRD revision |
| Updated | 2026-07-22 |

## 1. Vision

BODY32 aims to become the defining **K-Wellness Personality Platform**: a modern language for understanding how a person experiences energy, recovery, stress, comfort, routine, and balance.

People can often describe their personality, yet struggle to describe the patterns of their body and daily wellbeing. BODY32 makes those patterns visible, memorable, and actionable.

> Know your patterns. Understand your balance. Build a routine that fits you.

BODY32 is inspired by Korean and East Asian wellness traditions, interpreted through transparent contemporary product models. It does not diagnose disease, determine a medical constitution, or replace professional care.

## 2. Mission

Create an experience through which users can:

1. **Discover** — recognize recurring body and lifestyle patterns.
2. **Understand** — see what inputs and tendencies shaped the profile.
3. **Balance** — receive small, practical actions suited to the profile.
4. **Share** — express the profile through a premium Guardian and Passport.
5. **Improve** — return to observe changes rather than treating the first result as permanent fate.

## 3. Product thesis

The Guardian is not the product result. It is the memorable identity layer wrapped around a useful **Body Profile**.

The complete result has five layers:

1. **Body Pattern Map** — energy, recovery, sleep, stress response, digestion/comfort, temperature sensitivity, movement, and social regulation tendencies.
2. **Constitution Lens** — a non-medical five-element and balance interpretation, with every claim traceable to user answers.
3. **Personality Context** — an optional self-reported MBTI preference used to tailor explanation and habit framing, never to infer health or disease.
4. **Action Plan** — three immediate reflections and a seven-day experiment with clear limits and safety language.
5. **Identity Layer** — one of 32 Guardians plus a BODY32 Passport for memory and sharing.

## 4. Core user promise

After completing BODY32, the user should be able to answer:

- What patterns repeatedly affect my energy and recovery?
- Which environments and routines tend to support or drain me?
- What signals should I observe rather than ignore?
- What is one low-risk action I can try this week?
- Why did BODY32 produce this interpretation?

If the experience only answers “Which animal am I?”, it has failed the product promise.

## 5. Experience architecture

```text
Curiosity
  → language and unit preference
  → optional personal context and explicit consent
  → body-pattern questionnaire
  → lifestyle and recovery questionnaire
  → optional personality context
  → transparent profile calculation
  → short analysis transition
  → Body Profile reveal
  → Constitution Lens and explanation trace
  → Guardian reveal
  → practical seven-day experiment
  → Passport save/share
  → optional daily check-in and comparison
```

The first session should feel like a guided conversation, not a medical form. One decision appears per screen, progress is always visible, and optional information is clearly skippable.

## 6. Input philosophy

More personal data does not automatically create a more accurate result. Every field must have an explicit product purpose.

| Input | Role | Rule |
| --- | --- | --- |
| Body-pattern answers | Primary interpretation input | Required, versioned, calibrated |
| Lifestyle/recovery answers | Primary interpretation input | Required, versioned, calibrated |
| Age band | Context and safety boundaries | Optional unless a validated feature requires it |
| Height and weight | Optional body context | Never used to shame or determine Guardian identity |
| Sex/gender context | Optional recommendation safety | Inclusive, skippable, purpose explained |
| MBTI | Communication and habit-framing context | Self-reported, optional, not a health predictor |
| Blood type | Cultural comparison only | Must not influence constitution or health claims |
| Nickname/country | Passport personalization | Optional and locally processed by default |

Questions about sleep, digestion, thermal comfort, stress recovery, fatigue patterns, appetite regularity, movement, and environment are more useful to the Body Profile than collecting unrelated demographics.

## 7. Interpretation model

BODY32 uses two clearly separated layers:

### 7.1 Profile Engine

- Deterministic and versioned.
- Calculates Body Pattern dimensions, Energy Rhythm, Guardian archetype, five-element expression, and confidence.
- Produces an explanation trace showing which answers contributed.
- Must be calibrated before accuracy claims are made.

### 7.2 AI Guide

- Converts the structured profile into clear, supportive language.
- Adapts tone and habit framing using optional personality context.
- May explain, summarize, and suggest low-risk reflection experiments.
- Must never invent scores, diagnose a condition, prescribe treatment, or override safety rules.

AI is an explanation layer, not the source of the profile classification.

## 8. Safety and trust boundary

BODY32 may describe self-reported tendencies such as “you reported slower recovery after irregular sleep.” It must not state or imply “you have a cold constitution,” “your blood type causes fatigue,” or “this result explains your illness” as medical fact.

The product must:

- Use “profile,” “pattern,” “tendency,” and “reflection” language.
- Explain uncertainty and mixed patterns.
- Provide red-flag guidance to seek qualified care when appropriate.
- Avoid diagnosis, treatment, supplement dosage, ideal-weight, and fear-based claims.
- Collect optional personal data only with explicit purpose and consent.

This boundary is not a reduction of the vision. It is what allows BODY32 to become trustworthy and globally scalable.

## 9. Target audience

### Primary

- Ages 18–45
- Global mobile-first users
- Interested in wellness, personality frameworks, self-tracking, and Korean culture
- Wants useful self-understanding without a clinical experience

### Secondary

- Fitness, yoga, Pilates, meditation, recovery, and biohacking communities
- Couples and friends interested in comparison
- Users seeking a gentle starting point before building healthier routines

## 10. Brand principles

- **Modern** — contemporary interaction and language.
- **Minimal** — calm hierarchy; no dashboard overload.
- **Transparent** — every interpretation can be explained.
- **Beautiful** — premium Guardians and Passport artifacts.
- **Korean** — culturally rooted without stereotype or pseudo-medical costume.
- **Natural** — warm materials, restrained motion, humane language.
- **Premium** — collectible rather than childish; useful rather than gimmicky.

The user should feel they are discovering a pattern, not receiving a verdict.

## 11. Product pillars

1. **Body Profile** — useful first-session understanding.
2. **32 Guardians** — memorable global IP.
3. **Passport** — personal artifact and sharing loop.
4. **AI Guide** — contextual explanation and habit support.
5. **Daily Balance** — lightweight return value and longitudinal insight.
6. **Comparison** — consent-based friend or partner reflection.

Body Score, recommendations, ranking, commerce, and wallet features are later products. They cannot launch until their meaning, evidence, consent, and abuse risks are defined.

## 12. Success measures

### Initial product validation

| Measure | Target |
| --- | ---: |
| Assessment completion | ≥ 85% |
| Result comprehension | ≥ 75% |
| Users who identify one useful personal insight | ≥ 70% |
| Seven-day experiment save/start | ≥ 25% |
| Passport save/share | ≥ 25% |
| Voluntary social share | aspirational 40% |
| Seven-day return | ≥ 20% |

### Growth ambition

- 100,000 registered or recoverable users after anonymous value is proven.
- App install conversion ≥ 15% after the returning-user loop exists.
- Average engaged first session around five minutes without artificially extending the flow.

## 13. Definition of product success

BODY32 succeeds when users say:

> “The Guardian made it memorable, but the profile helped me notice something real about how I live and recover.”

It does not succeed when users say only:

> “I got a tiger.”

## 14. Document implications

This direction requires revision of the remaining source documents in order:

1. Product Requirement Document
2. UX Flow
3. UI Design System
4. Database Design
5. Algorithm Design
6. Character Bible
7. API Specification
8. Admin System
9. Codex Development Guide

Existing implementation remains a useful visual and technical prototype, but it is not the approved feature-complete product definition.
