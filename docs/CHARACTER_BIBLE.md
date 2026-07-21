# BODY32 Character Bible

| Field | Value |
| --- | --- |
| Version | v0.1 |
| Status | Draft — Taxonomy Foundation |
| Updated | 2026-07-21 |
| Parent documents | `docs/MASTER_PRD.md`, `docs/BRAND_GUIDE.md`, `docs/DESIGN_SYSTEM.md` |

## 1. Purpose

The BODY32 Guardians turn an abstract wellness result into a memorable identity. This document defines the stable 32-type system and the shared rules that keep every Guardian coherent across the product.

The Guardian system must support:

- Deterministic result assignment
- Korean and English localization
- Accessible non-image descriptions
- Result pages and BODY32 Passports
- Social square and story assets
- Future avatars, stickers, daily content, animation, and merchandise
- Content updates without invalidating stored user results

The Guardians are character IP and product navigation—not medical categories, diagnoses, or claims about fixed human nature.

## 2. Taxonomy decision

### 2.1 Stable model

BODY32 uses two categorical axes:

```text
4 Energy Rhythms × 8 Guardian Archetypes = 32 BODY32 Types
```

Each result also contains a separate five-element balance vector:

```text
Wood + Fire + Earth + Metal + Water
```

The balance vector enriches the interpretation but does not create the type ID by itself. This prevents an irregular `5 × ? = 32` mapping and allows two users with the same Guardian type to have different balance profiles.

### 2.2 Why the axes are separated

- The 32-type identity needs a stable categorical system.
- Five-element balance is better represented as continuous relative scores.
- User answers can change the balance profile without changing the stored meaning of a type code.
- The product can explain categorical identity and current balance independently.
- Character art does not need 32 arbitrary, manually tuned chart presets.

### 2.3 Safety boundary

Energy Rhythms and Guardian Archetypes are original BODY32 product language. They may be culturally inspired, but they must not be presented as validated equivalents of Sasang constitutional medicine, medical five-element diagnosis, MBTI, or blood-type personality theory.

## 3. Axis A — Energy Rhythms

Energy Rhythm describes how a user tends to activate, respond, sustain, and recover. It is expressed as a pattern, not a value judgment.

### 3.1 Ignite

| Field | Definition |
| --- | --- |
| Code | `IGNITE` |
| Core motion | Initiate and express |
| Strength language | Momentum, courage, visibility, action |
| Balance language | Pacing, recovery, listening, sustainable intensity |
| Visual motion | Upward arc, expanding light, forward stance |
| Art temperature | Warm and luminous |
| Avoid | Aggressive, reckless, dominant, “best leader” stereotypes |

Ignite users are framed as people who often move toward action and visible expression. The result should celebrate initiative while inviting sustainable pacing.

### 3.2 Weave

| Field | Definition |
| --- | --- |
| Code | `WEAVE` |
| Core motion | Connect and adapt |
| Strength language | Empathy, flexibility, awareness, collaboration |
| Balance language | Boundaries, decisiveness, personal restoration |
| Visual motion | Interlocking paths, curved flow, open stance |
| Art temperature | Balanced and iridescent |
| Avoid | Indecisive, dependent, people-pleasing stereotypes |

Weave users are framed as people who often sense context and connect ideas or people. The result should respect adaptability without implying weakness.

### 3.3 Ground

| Field | Definition |
| --- | --- |
| Code | `GROUND` |
| Core motion | Sustain and stabilize |
| Strength language | Reliability, patience, endurance, care |
| Balance language | Flexibility, novelty, asking for support |
| Visual motion | Low center, broad base, circular shelter |
| Art temperature | Earthy and tactile |
| Avoid | Slow, stubborn, heavy, body-size stereotypes |

Ground users are framed as people who often create continuity and dependable structure. The result must not associate steadiness with a body type or weight.

### 3.4 Reflect

| Field | Definition |
| --- | --- |
| Code | `REFLECT` |
| Core motion | Observe and refine |
| Strength language | Insight, precision, sensitivity, depth |
| Balance language | Expression, experimentation, reducing overanalysis |
| Visual motion | Inward orbit, focused light, poised stance |
| Art temperature | Cool and crystalline |
| Avoid | Fragile, antisocial, anxious, intellectual superiority stereotypes |

Reflect users are framed as people who often notice detail and process experience deeply. The result should value observation without romanticizing withdrawal.

## 4. Axis B — Guardian Archetypes

Archetype describes the style through which a Rhythm is expressed. Animals are symbolic character forms, not claims about culture, gender, biology, or personality science.

### 4.1 Tiger — The Catalyst

| Field | Definition |
| --- | --- |
| Code | `TIGER` |
| Core theme | Courage and decisive movement |
| Strength vocabulary | Brave, direct, protective, energizing |
| Balance vocabulary | Patience, softness, shared control |
| Silhouette | Strong shoulders, clear tail curve, triangular facial rhythm |
| Emblem | Split sun-stripe |
| Avoid | Violence, militarism, gendered dominance |

### 4.2 Fox — The Navigator

| Field | Definition |
| --- | --- |
| Code | `FOX` |
| Core theme | Ingenuity and pathfinding |
| Strength vocabulary | Curious, inventive, resourceful, quick-learning |
| Balance vocabulary | Consistency, transparency, finishing |
| Silhouette | Long tail, alert ears, compact agile stance |
| Emblem | Turning path |
| Avoid | Dishonesty, seduction, cultural trickster stereotypes |

### 4.3 Deer — The Harmonizer

| Field | Definition |
| --- | --- |
| Code | `DEER` |
| Core theme | Sensitivity and graceful growth |
| Strength vocabulary | Gentle, perceptive, considerate, renewing |
| Balance vocabulary | Boundaries, confidence, direct expression |
| Silhouette | Branching antler/crown motif, long calm lines |
| Emblem | Paired leaf-antlers |
| Avoid | Timidity, fragility, gender coding |

### 4.4 Crane — The Visionary

| Field | Definition |
| --- | --- |
| Code | `CRANE` |
| Core theme | Perspective and intentional movement |
| Strength vocabulary | Composed, farsighted, elegant, purposeful |
| Balance vocabulary | Presence, play, accepting imperfection |
| Silhouette | Tall vertical line, folded-wing geometry |
| Emblem | Horizon wing |
| Avoid | Spiritual authority, nationality shorthand, sacred symbolism |

### 4.5 Bear — The Keeper

| Field | Definition |
| --- | --- |
| Code | `BEAR` |
| Core theme | Protection and restorative strength |
| Strength vocabulary | Warm, dependable, grounded, reassuring |
| Balance vocabulary | Movement, openness, releasing responsibility |
| Silhouette | Rounded mass, stable paws, protective arc |
| Emblem | Sheltering ring |
| Avoid | Laziness, appetite, body-size humor |

### 4.6 Wolf — The Pathfinder

| Field | Definition |
| --- | --- |
| Code | `WOLF` |
| Core theme | Commitment and coordinated purpose |
| Strength vocabulary | Loyal, focused, resilient, organized |
| Balance vocabulary | Independence, flexibility, rest |
| Silhouette | Forward line, angular ears, trailing mantle |
| Emblem | Twin route marks |
| Avoid | Alpha hierarchy myths, aggression, pack obedience stereotypes |

### 4.7 Owl — The Interpreter

| Field | Definition |
| --- | --- |
| Code | `OWL` |
| Core theme | Pattern recognition and quiet insight |
| Strength vocabulary | Observant, analytical, discerning, reflective |
| Balance vocabulary | Action, simplicity, asking rather than assuming |
| Silhouette | Circular face, layered wing planes, centered gaze |
| Emblem | Concentric eye-map |
| Avoid | Omniscience, occult imagery, intellectual hierarchy |

### 4.8 Dolphin — The Resonator

| Field | Definition |
| --- | --- |
| Code | `DOLPHIN` |
| Core theme | Expression and responsive connection |
| Strength vocabulary | Playful, communicative, intuitive, uplifting |
| Balance vocabulary | Quiet, depth, sustained attention |
| Silhouette | Fluid arc, wave-tail, open circular motion |
| Emblem | Echo wave |
| Avoid | Constant happiness, performance pressure, aquatic realism mismatch |

## 5. Stable type registry

### 5.1 ID rules

- Stable ID format: `B32_{RHYTHM}_{ARCHETYPE}`
- Stable IDs are never localized and never reused.
- Working public names may change after linguistic or trademark review.
- Stored results reference the stable ID and algorithm version, not a translated name.
- Display order is explicit; it must not depend on file order or alphabetic sorting.

### 5.2 The 32 types

| No. | Stable ID | Rhythm | Archetype | Working English name | Korean working name |
| ---: | --- | --- | --- | --- | --- |
| 01 | `B32_IGNITE_TIGER` | Ignite | Tiger | Blaze Tiger | 불꽃 호랑이 |
| 02 | `B32_IGNITE_FOX` | Ignite | Fox | Spark Fox | 불씨 여우 |
| 03 | `B32_IGNITE_DEER` | Ignite | Deer | Dawn Deer | 새벽 사슴 |
| 04 | `B32_IGNITE_CRANE` | Ignite | Crane | Solar Crane | 태양 두루미 |
| 05 | `B32_IGNITE_BEAR` | Ignite | Bear | Hearth Bear | 화로 곰 |
| 06 | `B32_IGNITE_WOLF` | Ignite | Wolf | Vanguard Wolf | 선봉 늑대 |
| 07 | `B32_IGNITE_OWL` | Ignite | Owl | Beacon Owl | 등불 부엉이 |
| 08 | `B32_IGNITE_DOLPHIN` | Ignite | Dolphin | Comet Dolphin | 혜성 돌고래 |
| 09 | `B32_WEAVE_TIGER` | Weave | Tiger | Prism Tiger | 프리즘 호랑이 |
| 10 | `B32_WEAVE_FOX` | Weave | Fox | Mosaic Fox | 모자이크 여우 |
| 11 | `B32_WEAVE_DEER` | Weave | Deer | Meadow Deer | 들꽃 사슴 |
| 12 | `B32_WEAVE_CRANE` | Weave | Crane | Ribbon Crane | 리본 두루미 |
| 13 | `B32_WEAVE_BEAR` | Weave | Bear | Harbor Bear | 항구 곰 |
| 14 | `B32_WEAVE_WOLF` | Weave | Wolf | Chorus Wolf | 합창 늑대 |
| 15 | `B32_WEAVE_OWL` | Weave | Owl | Lattice Owl | 격자 부엉이 |
| 16 | `B32_WEAVE_DOLPHIN` | Weave | Dolphin | Echo Dolphin | 메아리 돌고래 |
| 17 | `B32_GROUND_TIGER` | Ground | Tiger | Terra Tiger | 대지 호랑이 |
| 18 | `B32_GROUND_FOX` | Ground | Fox | Grove Fox | 숲길 여우 |
| 19 | `B32_GROUND_DEER` | Ground | Deer | Cedar Deer | 삼나무 사슴 |
| 20 | `B32_GROUND_CRANE` | Ground | Crane | Summit Crane | 봉우리 두루미 |
| 21 | `B32_GROUND_BEAR` | Ground | Bear | Mountain Bear | 산맥 곰 |
| 22 | `B32_GROUND_WOLF` | Ground | Wolf | Trail Wolf | 오솔길 늑대 |
| 23 | `B32_GROUND_OWL` | Ground | Owl | Archive Owl | 기록 부엉이 |
| 24 | `B32_GROUND_DOLPHIN` | Ground | Dolphin | Current Dolphin | 해류 돌고래 |
| 25 | `B32_REFLECT_TIGER` | Reflect | Tiger | Moon Tiger | 달빛 호랑이 |
| 26 | `B32_REFLECT_FOX` | Reflect | Fox | Veil Fox | 장막 여우 |
| 27 | `B32_REFLECT_DEER` | Reflect | Deer | Mist Deer | 안개 사슴 |
| 28 | `B32_REFLECT_CRANE` | Reflect | Crane | Starlit Crane | 별빛 두루미 |
| 29 | `B32_REFLECT_BEAR` | Reflect | Bear | Quiet Bear | 고요 곰 |
| 30 | `B32_REFLECT_WOLF` | Reflect | Wolf | Night Wolf | 밤길 늑대 |
| 31 | `B32_REFLECT_OWL` | Reflect | Owl | Orbit Owl | 궤도 부엉이 |
| 32 | `B32_REFLECT_DOLPHIN` | Reflect | Dolphin | Lunar Dolphin | 달결 돌고래 |

The Korean names are semantic placeholders. Native-language editorial review may replace them without changing stable IDs.

## 6. Five-element relationship

### 6.1 Separate output

Every completed result may include:

```ts
type FiveElementVector = {
  wood: number;
  fire: number;
  earth: number;
  metal: number;
  water: number;
};
```

TASK-003 will define normalization and scoring. The displayed values must:

- Use the same bounded scale for all five elements
- Be derived from versioned inputs and weights
- Include a plain-language explanation
- Avoid implying laboratory precision
- Never be manually hardcoded per Guardian

### 6.2 Character use

The Guardian base illustration is determined by stable type ID. Five-element results may influence controlled secondary presentation such as:

- A small elemental halo
- Passport chart or emblem accents
- Result-page background field
- Optional share-card annotation

They must not dynamically recolor the entire character in ways that break identity consistency.

## 7. Shared visual language

### 7.1 Style goals

Guardians should feel:

- Premium and collectible
- Warm but not infantile
- Geometric but not rigid
- Softly dimensional without photorealism
- Recognizable in silhouette
- Consistent across all 32 variants

### 7.2 Form system

- Use simplified, intentional anatomy rather than realistic animal anatomy.
- Build silhouettes from a shared family of rounded and tapered geometric forms.
- Keep head-to-body proportion consistent within the system.
- Limit fine detail so avatars remain readable at 48 px.
- Give every archetype one invariant silhouette cue.
- Give every Rhythm one invariant motion, material, or aura cue.
- Avoid clothing tied to a specific nationality, religion, profession, or social rank.

### 7.3 Rhythm visual cues

| Rhythm | Shape language | Motion cue | Material cue | Primary atmosphere |
| --- | --- | --- | --- | --- |
| Ignite | Rays and forward wedges | Rise/expand | Warm luminous ceramic | Dawn and ember |
| Weave | Loops and interlocking ribbons | Orbit/connect | Iridescent soft glass | Meadow and prism |
| Ground | Arches and broad circles | Settle/shelter | Matte stone and clay | Grove and mountain |
| Reflect | Concentric rings and fine facets | Focus/inhale | Moonlit porcelain | Mist and night sky |

“Glass,” “stone,” and “porcelain” describe visual art direction, not literal character biology.

### 7.4 Expression

- Default expression: composed warmth with a slight sense of alertness
- Avoid exaggerated baby eyes, open-mouth mascot smiles, or aggressive snarls
- Eye treatment must remain consistent across the universe
- Poses communicate the type without relying on props or text
- No type is visually framed as villainous, sick, weak, or superior

### 7.5 Palette structure

Every type palette contains semantic art roles:

```text
guardian.base
guardian.secondary
guardian.highlight
guardian.shadow
guardian.emblem
guardian.field
```

Values will be finalized after representative concept art is tested. UI control colors remain defined by `DESIGN_SYSTEM.md` and must not be replaced by character palettes.

## 8. Asset specification

### 8.1 Required master assets per type

| Asset | Aspect/format direction | Purpose |
| --- | --- | --- |
| `full` | Transparent master, high resolution | Source composition |
| `portrait` | 4:5 | Result hero |
| `avatar` | 1:1 | Compact profile and comparison |
| `silhouette` | SVG or vector-ready | Loading, locked states, small marks |
| `emblem` | SVG | Type identification |
| `passport` | Controlled transparent crop | Passport renderer |
| `share-square` | 1:1 composition data | Social download |
| `share-story` | 9:16 composition data | Story download |

Share assets should be rendered from structured templates rather than stored as 64 permanently flattened final images.

### 8.2 File naming

```text
assets/characters/{stable-id-lowercase}/
  master/
  web/
  social/
  emblem/
```

Example:

```text
assets/characters/b32-ignite-tiger/web/portrait.webp
assets/characters/b32-ignite-tiger/web/avatar.webp
assets/characters/b32-ignite-tiger/emblem/mark.svg
```

Do not reference these strings directly from components. Typed character data resolves asset keys to paths.

### 8.3 Delivery formats

- Preserve a lossless layered or master source outside optimized runtime assets.
- Web raster delivery: AVIF or WebP with PNG fallback only where needed.
- Emblems and simple silhouettes: reviewed SVG.
- Declare dimensions to prevent layout shift.
- Generate responsive sizes rather than shipping the master asset.
- Strip unnecessary metadata before production delivery.

## 9. Content schema requirements

Each Guardian record will eventually include:

```text
schemaVersion
stableId
displayOrder
rhythm
archetype
publicCode
names.{locale}
titles.{locale}
summary.{locale}
recognitionLine.{locale}
strengths[]
balanceThemes[]
recoveryReflections[]
lifestyleReflections[]
compatibilityNotes[]
quote.{locale}
story.{locale}
palette
emblemKey
assetKeys
accessibilityDescription.{locale}
contentVersion
```

The schema—not UI components—owns character content.

## 10. Localization and accessibility

- Stable IDs and public codes are locale-independent.
- Public names require native editorial review for meaning, rhythm, pronunciation, and unintended associations.
- Do not transliterate Korean working names into English as a substitute for localization.
- Every character needs a concise functional alt description and a longer optional art description.
- Results remain fully understandable if character images fail to load.
- Do not communicate Rhythm or element using color alone.
- Avoid cultural idioms that cannot be translated without changing the type meaning.

## 11. Cultural and ethical safety

- Research the symbolic meaning of each animal in launch cultures.
- Avoid sacred clothing, ritual objects, national emblems, and indigenous patterns without appropriate review.
- Do not assign gender, ethnicity, nationality, disability, age, or body type to a Guardian by default.
- Do not associate food preference, morality, intelligence, or disease with an animal.
- Do not claim the Guardian reveals a person's biological constitution.
- Provide a plain wellness/entertainment explanation wherever results may be seen out of context.

## 12. Character production workflow

1. Approve the taxonomy and working names.
2. Create a shared style sheet using four representative types.
3. Validate silhouettes at avatar size and Passport size.
4. Lock anatomy, eye treatment, material, lighting, background, and emblem rules.
5. Produce one complete archetype across all four Rhythms.
6. Review consistency before scaling to the remaining archetypes.
7. Produce master assets and approved crops.
8. Run visual, cultural, accessibility, and technical QA.
9. Register content and asset versions.
10. Integrate through typed data and visual regression tests.

AI-assisted image generation may be used during concept and production, but prompts alone are not a consistency system. Human selection, correction, and art direction are mandatory.

## 13. Visual QA rubric

Score every Guardian from 1–5 on:

- Universe consistency
- Archetype recognition
- Rhythm recognition
- Silhouette clarity
- Avatar-size readability
- Expression and emotional tone
- Palette distinction
- Passport compatibility
- Social crop compatibility
- Cultural safety
- Absence of rendering artifacts
- Accessibility description quality

No production asset is approved if any safety, consistency, or technical category scores below 4.

## 14. Versioning and change control

- Stable IDs never change after public release.
- Working names may change before launch.
- Post-launch name changes require aliases and migration-aware links.
- Character art updates increment an asset version.
- Content updates increment a content version.
- Algorithm updates increment an algorithm version and do not silently rewrite historical results.
- Retired assets remain recoverable for old Passport records where legally and operationally appropriate.

## 15. Open decisions for v0.2

1. Final public naming and codes
2. Representative four characters for style exploration
3. Exact character proportions and rendering method
4. Final rhythm and archetype palettes
5. Whether Korean public names remain translated descriptors or use original branded names
6. Compatibility model and how much character content appears in the MVP
7. Asset ownership, source-file format, and external art production workflow
8. Trademark and linguistic screening process

## Change Log

### v0.1 — 2026-07-21

#### Added

- Four Energy Rhythms and eight Guardian Archetypes
- Stable 32-type registry and working localized names
- Separation of Guardian identity and five-element balance
- Shared visual language, asset requirements, content schema, production workflow, QA, safety, and versioning rules

#### Updated

- None

#### Removed

- None
