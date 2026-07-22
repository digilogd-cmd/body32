# BODY32 Master Product Requirements Document

| Field | Value |
| --- | --- |
| Product | BODY32 |
| Tagline | Decode Your Body. Balance Your Life. |
| Document version | v0.2 |
| Status | Implemented MVP baseline — pre-release review |
| Last updated | 2026-07-22 |
| Primary market | Global (KR/EN launch) |
| Repository | `digilogd-cmd/body32` |

## Document purpose

This document is the product source of truth for BODY32. Product decisions, UX requirements, design direction, data rules, and release criteria must remain consistent with this document and its linked specifications.

When implementation and this document conflict, the team must stop, record the discrepancy, and update either the implementation or this document through an explicit decision. Chat history is supporting context, not the final specification.

### Versioning policy

- `v0.x`: product discovery and pre-MVP specification
- `v1.0`: approved MVP specification
- `v1.x`: backward-compatible clarification or expansion
- `v2.0+`: material product or platform change

### Planned document sections

1. Product Overview
2. Product Vision
3. Goals & KPI
4. Target Users
5. Brand Identity
6. Information Architecture
7. User Journey
8. UX Principles
9. Design System
10. Core Features
11. Quiz System
12. BODY32 Algorithm
13. Character System
14. Passport System
15. Recommendation Engine
16. Social Sharing
17. Admin
18. Database
19. API
20. Technical Stack
21. Security & Privacy
22. Analytics
23. SEO & Localization
24. Roadmap
25. Release Checklist

---

# 1. Product Overview

## 1.1 Product definition

BODY32 is a mobile-first wellness personality experience inspired by Eastern philosophy. It combines a short lifestyle questionnaire with optional profile signals to help users discover one of 32 BODY32 types, meet a corresponding Guardian character, and receive a personalized BODY32 Passport.

BODY32 is positioned as a self-discovery and lifestyle product—not a medical diagnosis, clinical assessment, or substitute for professional care.

## 1.2 Core proposition

People readily describe their personality, but rarely have an accessible language for discussing how they experience energy, recovery, comfort, routine, and balance. BODY32 turns those observations into a memorable identity that users can understand and share.

The core promise is:

> Discover a memorable way to describe your wellness tendencies, then turn that insight into small, practical lifestyle reflections.

## 1.3 Product concept

The product combines five layers:

1. **Discovery** — a short, welcoming profile and quiz flow
2. **Interpretation** — a transparent, deterministic mapping to one of 32 types
3. **Identity** — a premium Guardian character and type name
4. **Artifact** — a downloadable and shareable BODY32 Passport
5. **Continuation** — optional comparison, daily reflection, and future app experiences

## 1.4 Core experience

```text
Landing
  → Language and unit selection
  → Profile setup
  → 15–20 question wellness quiz
  → Analysis transition
  → BODY32 type reveal
  → Guardian and Passport
  → Lifestyle reflections
  → Save or share
  → Friend comparison or return visit
```

The first-session experience should take approximately two to four minutes. The test must feel like a guided discovery journey rather than a long form.

## 1.5 Initial platform scope

The MVP will launch as a responsive web product designed for later expansion to PWA and Android/iOS applications.

Launch requirements:

- Mobile-first responsive experience
- Korean and English support
- Metric and imperial unit support
- One-question-per-screen quiz flow
- 32 result types and Guardian identities
- Five-element balance visualization
- BODY32 Passport generation
- Shareable result assets and link copying
- Clear wellness and privacy disclosures
- Anonymous completion without mandatory account creation

## 1.6 Product boundaries

### BODY32 is

- A wellness personality and self-reflection experience
- A modern interpretation inspired by Eastern philosophy
- A character-led global brand and shareable identity system
- An entertainment and lifestyle guidance product
- A foundation for future daily wellness experiences

### BODY32 is not

- A medical diagnosis or diagnostic device
- A validated psychological or clinical test
- A treatment plan or prescription service
- A substitute for a doctor, dietitian, psychologist, or other professional
- A system that claims MBTI or blood type determines health
- A supplement storefront disguised as a diagnostic result

MBTI and blood type may be used only as optional, low-weight personalization or comparison signals. They must not be presented as scientifically validated predictors of health, constitution, or disease.

## 1.7 MVP and future expansion

### MVP

- Landing and product explanation
- Guided profile and quiz
- Deterministic 32-type result
- Guardian character presentation
- Result interpretation and five-element visualization
- BODY32 Passport
- Download and social sharing
- Basic analytics and content administration

### Post-MVP candidates

- Friend and relationship compatibility
- Daily Energy and Balance Score
- Seven-day wellness challenges
- Optional accounts and result history
- AI Coach with strict wellness safety boundaries
- PWA and native mobile application
- Apple Health and Health Connect integration
- Country-level aggregate insights
- Character stickers, digital collectibles, and merchandise
- Wallet-compatible Passport

Post-MVP items require separate validation and must not delay the first reliable test-to-Passport experience.

---

# 2. Product Vision

## 2.1 Vision statement

BODY32 aims to become a globally recognizable K-Wellness personality platform: a place where people discover, name, visualize, and share their personal patterns of energy and balance.

The long-term cultural ambition is for a BODY32 type to become a lightweight identity expression:

> “I’m a BODY32 Type 18.”

## 2.2 Mission

BODY32 makes wellness reflection approachable by transforming abstract ideas about energy, routine, recovery, and balance into an understandable story, a distinctive Guardian, and a beautiful personal artifact.

## 2.3 User transformation

Before BODY32, the user may:

- Feel curious about recurring energy or lifestyle patterns
- Find traditional wellness language difficult or overly clinical
- Lack a simple, enjoyable way to talk about personal balance
- Encounter recommendation products that feel commercial or judgmental

After BODY32, the user should:

- Have a memorable name and visual identity for their result
- Understand the result in plain, non-medical language
- Recognize strengths and areas for reflection without feeling judged
- Receive small and safe lifestyle suggestions
- Want to save or share the Passport
- Feel curious enough to return or compare with a friend

## 2.4 Product principles

### Discovery over diagnosis

The experience must make users feel that they are discovering a perspective, not receiving a medical verdict.

### Identity before recommendation

The primary value is “Who am I?” Recommendations support the result but must never dominate it or turn it into an advertisement.

### Delight with restraint

Animation, characters, and celebration should create warmth and anticipation without reducing trust or accessibility.

### Transparent personalization

Users should be able to understand which inputs affect their result. The product must not imply that an opaque AI system is making a clinical judgment.

### Global clarity, Korean inspiration

BODY32 should be globally understandable while retaining a distinctive Korean and Eastern-philosophy-inspired point of view. Cultural inspiration must be explained respectfully and never framed as medical certainty.

### Mobile and app ready

The web MVP must establish reusable design tokens, content schemas, result data, and interaction patterns suitable for later mobile applications.

## 2.5 Strategic pillars

### Product

A fast, understandable, high-completion test with a result users consider meaningful enough to save.

### Brand

A premium character universe built around 32 Guardians rather than generic AI-generated result art.

### Growth

Organic discovery through Passport sharing, type conversations, and friend comparison.

### Retention

Future daily reflection and challenges that provide value without fear-based health messaging.

### Platform

A structured type, content, localization, and recommendation system reusable across web, mobile, social assets, and physical merchandise.

## 2.6 Experience standard

The target quality bar is calm, polished, and trustworthy. The interface may draw inspiration from the restraint and clarity associated with premium wellness and productivity products, but BODY32 must establish its own visual identity and must not imitate another brand’s protected assets or trade dress.

The finished experience should be describable as:

- Modern, not futuristic for its own sake
- Premium, not luxurious or exclusive
- Warm, not childish
- Scientific in clarity, not in unsupported claims
- Natural, not rustic
- Playful, not gamified to the point of distraction

---

# 3. Goals & KPI

## 3.1 MVP objective

Validate that global users can understand the BODY32 concept, complete the experience, value the result, and voluntarily save or share their Passport.

## 3.2 Product goals

### Goal A — Make the concept immediately understandable

Users should understand within the first screen that BODY32 is a short wellness personality experience with 32 possible identities.

### Goal B — Maximize high-quality completion

The profile and quiz must be quick, accessible, and free of unnecessary account or email requirements.

### Goal C — Deliver a credible and desirable result

The result must feel personally relevant without making deterministic, medical, or fear-based claims.

### Goal D — Create a share-worthy artifact

The Passport and result card should be visually strong enough that users choose to save or share them without incentives.

### Goal E — Build a reusable product foundation

Type data, translations, design tokens, characters, analytics events, and recommendations must be structured for future web and app expansion.

## 3.3 MVP success metrics

Initial targets are hypotheses and must be reviewed after sufficient traffic is collected.

| Funnel stage | Metric | Initial target | Notes |
| --- | --- | ---: | --- |
| Landing | Start rate | ≥ 35% | Unique visitors who begin the experience |
| Onboarding | Profile completion | ≥ 85% | Users who finish required profile steps |
| Quiz | Quiz completion | ≥ 80% | Users who start and reach analysis |
| End-to-end | Result completion | ≥ 70% | Visitors who reach a valid result |
| Result | Passport save rate | ≥ 15% | PNG/PDF save or supported wallet action |
| Result | Share intent rate | ≥ 12% | Share action opened, copied, or downloaded |
| Growth | Completed referral rate | ≥ 5% | Referred visitors who complete a result |
| Quality | Result helpfulness | ≥ 4.0/5 | Optional post-result feedback |
| Reliability | Error-free sessions | ≥ 99% | Sessions without blocking client errors |
| Performance | Mobile LCP | ≤ 2.5 s | Measured at the 75th percentile |

## 3.4 Guardrail metrics

Growth must not come at the expense of trust, privacy, or safety.

Monitor:

- Quiz abandonment by question and device
- Result regeneration or unstable result rate
- Accessibility-related failures
- Misleading health interpretation reports
- Recommendation click concentration that suggests commercial bias
- Data deletion and privacy requests
- Character or cultural representation complaints
- Translation quality issues

## 3.5 Analytics principles

- Collect only events needed to improve the product.
- Do not include raw health-like answers, email addresses, nicknames, or other direct identifiers in analytics event properties.
- Separate product analytics from sensitive result storage.
- Obtain consent where required by applicable law.
- Define every event and property in the Analytics section before implementation.
- Treat pre-launch KPI targets as assumptions, not evidence of market demand.

## 3.6 Non-goals for MVP

- Proving clinical efficacy
- Providing diagnosis or treatment
- Maximizing supplement revenue
- Building a full social network
- Native mobile applications
- Wearable integrations
- Real-time global rankings
- Celebrity matching using real people without rights and risk review
- AI-generated free-form health advice

---

# 4. Target Users

## 4.1 Primary audience

Globally minded adults aged approximately 18–45 who enjoy identity-based discovery experiences and have an interest in wellness, personality frameworks, or Korean culture.

Shared characteristics may include:

- Mobile-first browsing habits
- Familiarity with personality quizzes or MBTI-style conversations
- Interest in self-understanding without clinical framing
- Preference for visually polished and shareable experiences
- Curiosity about routines, energy, food, sleep, movement, or recovery
- Comfort using Korean or English at launch

## 4.2 Secondary audiences

- Yoga, Pilates, fitness, meditation, and mindfulness communities
- K-culture and Korean lifestyle audiences
- Biohacking and quantified-self audiences seeking a lighter experience
- Couples and friends interested in comparison features
- Wellness creators who need visually distinctive shareable content

## 4.3 Core personas

### Persona A — The Social Self-Explorer

**Profile:** 18–29, mobile-first, familiar with MBTI and social sharing.

**Motivation:** Wants a result that feels personal, visually expressive, and easy to discuss with friends.

**Needs:** Fast start, clear progress, attractive Guardian, short result summary, effortless story download.

**Risks:** Leaves if the quiz feels repetitive, asks for too much personal information, or produces a generic result.

### Persona B — The Practical Wellness Seeker

**Profile:** 25–45, interested in energy, sleep, food, exercise, or stress management.

**Motivation:** Wants useful reflection without a medical appointment or a hard sell.

**Needs:** Trustworthy language, transparent reasoning, modest practical suggestions, privacy control.

**Risks:** Distrusts exaggerated claims, unsupported supplement advice, or overly playful presentation.

### Persona C — The K-Culture Explorer

**Profile:** Global user interested in Korean culture and modern interpretations of Eastern philosophy.

**Motivation:** Wants a culturally distinctive experience that is understandable without prior knowledge.

**Needs:** Clear translations, respectful explanations, pronunciation or terminology support, original visual identity.

**Risks:** Becomes confused by unexplained traditional terminology or disengages if the experience relies on stereotypes.

### Persona D — The Returning Companion

**Profile:** Existing user invited back through a friend, partner, or future daily feature.

**Motivation:** Wants to compare types or revisit a useful result.

**Needs:** Easy result recovery, clear consent for comparison, compact compatibility explanation.

**Risks:** Feels exposed if personal result details are shared without explicit control.

## 4.4 User needs hierarchy

1. **Clarity:** What is this and how long will it take?
2. **Safety:** Is this medical, and what happens to my information?
3. **Ease:** Can I complete it quickly on my phone?
4. **Relevance:** Does the result reflect my answers in an understandable way?
5. **Identity:** Is the Guardian and Passport worth keeping?
6. **Action:** Is there a small, safe next step I can try?
7. **Connection:** Can I share or compare without losing privacy control?

## 4.5 Accessibility and inclusion

BODY32 must support users across a range of devices, abilities, identities, and body profiles.

Requirements include:

- Keyboard-accessible and screen-reader-compatible flows
- Sufficient contrast and non-color-only communication
- Reduced-motion support
- Plain-language alternatives for traditional terms
- Inclusive gender options and a “prefer not to say” path where feasible
- Unit conversion without judgmental body-language labels
- No body shaming, ideal-weight messaging, or moral classification of food
- No assumption that disability, age, body size, or gender determines personality
- Result copy that describes tendencies, not fixed limitations

## 4.6 Geographic and localization priority

### Launch

- Korean (`ko-KR`)
- English (`en`), written for broad international comprehension
- Metric and imperial unit systems

### Future candidates

- Japanese
- Simplified and Traditional Chinese
- Spanish
- Portuguese

Localization must include content review and cultural adaptation rather than literal translation alone.

---

# 5. Brand Identity

## 5.1 Brand architecture

**Master brand:** BODY32  
**Descriptor:** K-Wellness Personality Platform  
**Primary tagline:** Decode Your Body. Balance Your Life.  
**Optional explanatory line:** Discover your wellness personality through a modern experience inspired by Eastern philosophy.

“Powered by KTYPE” may be retained as a future technology or methodology label, but it is not required in the primary MVP lockup until its role is clearly defined.

## 5.2 Brand idea

BODY32 gives the body a personality language.

The number 32 communicates a complete identity system and supports a collectible Guardian universe. “BODY” keeps the subject direct and globally understandable. Together, the name should feel like a modern platform rather than a clinic, test laboratory, or supplement brand.

## 5.3 Brand promise

> A beautiful, approachable way to discover and express your personal patterns of energy and balance.

## 5.4 Brand values

### Curiosity

Invite exploration without claiming certainty.

### Balance

Avoid extremes, fear, shame, and simplistic “good versus bad” classifications.

### Clarity

Explain unfamiliar concepts in plain language and show how the experience works.

### Care

Respect user privacy, accessibility, cultural context, and wellness safety.

### Craft

Treat typography, motion, illustration, and microcopy as core product quality.

### Originality

Build a coherent Guardian universe and avoid generic AI-generated visual inconsistency.

## 5.5 Brand personality

BODY32 should feel:

- Calm
- Insightful
- Warm
- Contemporary
- Premium
- Respectful
- Optimistic
- Slightly mysterious, but never obscure

BODY32 should not feel:

- Clinical
- Mystical to the point of superstition
- Childish
- Judgmental
- Commercially aggressive
- Fear-based
- Generic or visibly AI-assembled
- Like a traditional medicine clinic or supplement store

## 5.6 Voice and tone

### Voice

The BODY32 voice is a calm guide: observant, concise, encouraging, and transparent about uncertainty.

### Writing principles

- Use “may,” “often,” and “tendency” instead of deterministic language.
- Address the user directly without making assumptions about identity.
- Explain rather than impress.
- Prefer short sentences and scannable sections.
- Celebrate strengths without ranking types.
- Describe balance as dynamic, not as a permanent score of personal worth.
- Keep safety and privacy information clear rather than hiding it in legal language.

### Preferred examples

- “You may recharge best when your routine includes quiet recovery time.”
- “Your answers suggest a strong Fire tendency today.”
- “Try this as a gentle reflection, not a medical recommendation.”

### Avoid

- “Your blood type causes stress sensitivity.”
- “This supplement will fix your imbalance.”
- “Your type is unhealthy.”
- “AI has diagnosed your constitution.”
- “People like you always…”

## 5.7 Visual direction

The visual identity should combine warm minimalism with a refined Guardian universe.

### Core visual qualities

- Generous negative space
- Warm neutral surfaces
- Clear typographic hierarchy
- Soft depth rather than heavy glass effects
- Rounded geometry used consistently
- Controlled gradients and elemental accent colors
- Purposeful, brief motion
- Character art with a unified silhouette, material, lighting, and expression system

### Foundation palette direction

| Role | Name | Initial value | Usage |
| --- | --- | --- | --- |
| Primary surface | Warm White | `#F8F7F4` | Main backgrounds and light cards |
| Secondary surface | Stone | `#EAE6DF` | Section separation and neutral controls |
| Primary text | Charcoal | `#262626` | Body text and high-emphasis content |
| Nature accent | Forest | `#4F7A5A` | Primary calm/action accent candidate |
| Warm accent | Clay | `#C87D4D` | Warm elemental emphasis |
| Premium accent | Gold | `#D6B35A` | Sparing Passport and achievement detail |
| Deep accent | Navy | `#233B5E` | Contrast, Water/Metal families, dark surfaces |

These values are directional and must be validated for contrast, dark mode, state colors, data visualization, and character families in `DESIGN_SYSTEM.md`.

## 5.8 Typography direction

- English candidates: Inter, Plus Jakarta Sans, or another highly legible global sans serif
- Korean candidates: Pretendard or SUIT
- Final families must support required weights, web performance, Korean and Latin harmony, and licensing needs
- Display typography may have more character, but product and quiz text must remain highly legible

## 5.9 Guardian identity system

The 32 Guardians are the central brand IP. Each Guardian must be recognizable as part of one universe while remaining distinct.

Every Guardian will eventually require:

- Type number and stable code
- Localized name and title
- Element and energy group
- Signature palette
- Emblem and simplified icon
- Personality keywords
- Strength and balance themes
- Recovery and lifestyle reflections
- Compatible and contrasting dynamics
- Short quote and backstory
- Master illustration and responsive crops
- Passport, result, sticker, and avatar variants
- Illustration-generation and quality-control specification

No Guardian should be generated or approved in isolation. The complete art direction, shared proportions, materials, lighting, line treatment, backgrounds, and forbidden variations must be defined first in `CHARACTER_BIBLE.md`.

## 5.10 Passport identity

The BODY32 Passport is the signature product artifact. It should feel official enough to keep, but must not resemble a government identity document or imply certification.

It should communicate:

- BODY32 brand
- Guardian and type identity
- User-controlled display name
- Type code
- Short strengths and balance summary
- Optional country or language marker
- Issue date or “Member Since” label
- Share or verification link where appropriate

The Passport must support mobile display, accessible HTML, downloadable social formats, and future wallet exploration.

## 5.11 Brand trust requirements

- Display a concise “not medical advice” explanation before or at result entry.
- Do not use fake scientific seals, clinical imagery, or unsupported accuracy percentages.
- Explain optional inputs and allow users to skip nonessential personal fields.
- Distinguish quiz-derived results from future AI-generated explanations.
- Label sponsored or affiliate recommendations clearly if introduced later.
- Obtain legal, privacy, and cultural review before public launch in target markets.

---

# Implemented MVP decisions in v0.2

- The taxonomy is fixed at four Energy Rhythms multiplied by eight Guardian Archetypes.
- The anonymous core experience uses 20 versioned questions and does not require profile data.
- Blood type, MBTI, BMI, gender, age, height, and weight do not influence the v1 result.
- The deterministic rules engine, not generative AI, calculates the Guardian and Balance.
- Korean and English launch routes share the same content schema and algorithm version.
- All 32 Guardian portraits, result guidance, Passport downloads, and privacy-safe sharing are implemented.
- Answers remain in temporary React state and are not persisted or transmitted in the current version.

# Open Decisions after v0.2

The following decisions are intentionally not finalized in v0.1:

1. Final launch analytics and consent platform, if analytics is introduced
2. Native editorial review of all Korean and English Guardian names
3. Passport identifier and QR/link behavior
4. Recommendation scope after the anonymous core launch
5. Authentication and opt-in result recovery strategy
6. Final font licensing and typography selection
7. Commercial model and rules for any future affiliate content

These items must be resolved through the relevant specification sections before implementation.

---

# Change Log

## v0.1 — 2026-07-21

### Added

- Product definition, boundaries, and MVP scope
- Product vision, principles, and strategic pillars
- Initial goals, KPIs, guardrails, and non-goals
- Primary audiences, personas, accessibility, and localization direction
- Brand architecture, voice, visual direction, Guardian identity, and trust requirements
- Open-decision register for the next PRD version

### Updated

- None

### Removed

- None
