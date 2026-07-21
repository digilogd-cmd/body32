# BODY32 Design System

| Field | Value |
| --- | --- |
| Version | v0.1 |
| Status | Draft — Implementation Specification |
| Updated | 2026-07-21 |
| Parent documents | `docs/MASTER_PRD.md`, `docs/BRAND_GUIDE.md` |

## 1. System goals

The BODY32 design system provides a shared visual and interaction language for the responsive web MVP and future native applications.

It must:

- Produce a calm, premium, mobile-first experience
- Keep design decisions centralized and reusable
- Support Korean and English without layout breakage
- Meet WCAG 2.2 AA as the minimum accessibility target
- Separate semantic UI colors from Guardian identity colors
- Support light theme first without blocking a future dark theme
- Represent tokens in platform-neutral data and expose them as CSS custom properties on web

## 2. Token architecture

Use three layers:

1. **Primitive tokens** — raw color, size, and timing values
2. **Semantic tokens** — purpose such as background, text, border, or action
3. **Component tokens** — limited overrides for a component contract

UI components consume semantic or component tokens. They must not consume arbitrary primitive values when a semantic token exists.

Example:

```text
primitive.color.forest.600
  → semantic.color.action.primary
    → component.button.primary.background
```

Production token data should be exportable to CSS variables and future native theme objects.

## 3. Color system

### 3.1 Primitive foundation palette

| Token | Value | Intent |
| --- | --- | --- |
| `warm-0` | `#FFFFFF` | Highest light surface |
| `warm-50` | `#F8F7F4` | Primary warm canvas |
| `warm-100` | `#F4F1EC` | Secondary page canvas |
| `stone-200` | `#EAE6DF` | Dividers and subtle fills |
| `stone-300` | `#D8D2C8` | Stronger neutral border |
| `stone-500` | `#77716A` | Muted text candidate |
| `charcoal-700` | `#45423E` | Secondary text |
| `charcoal-900` | `#262626` | Primary text |
| `forest-50` | `#EEF5EF` | Soft action tint |
| `forest-200` | `#C6DBC9` | Selected border tint |
| `forest-600` | `#4F7A5A` | Primary action foundation |
| `forest-700` | `#3F6549` | Action hover candidate |
| `forest-800` | `#304F39` | Action pressed candidate |
| `clay-100` | `#F6E5DA` | Warm contextual tint |
| `clay-500` | `#C87D4D` | Warm accent |
| `gold-100` | `#F6EBCB` | Premium contextual tint |
| `gold-500` | `#D6B35A` | Premium detail only |
| `navy-100` | `#E3EAF2` | Cool contextual tint |
| `navy-700` | `#233B5E` | Deep accent |
| `red-50` | `#FFF1F0` | Error background |
| `red-600` | `#B83A36` | Error text/action |
| `amber-50` | `#FFF8E7` | Warning background |
| `amber-700` | `#7A5700` | Warning text |
| `blue-50` | `#EEF6FF` | Information background |
| `blue-700` | `#245A8D` | Information text |

These values are initial implementation candidates. Automated and visual contrast testing during TASK-005 may adjust them without changing their semantic intent.

Initial contrast verification on the documented light surfaces:

| Pair | Ratio | Result |
| --- | ---: | --- |
| Primary text / canvas | 13.43:1 | AA pass |
| Secondary text / canvas | 8.87:1 | AA pass |
| Muted text / white surface | 4.82:1 | AA pass for normal text |
| White text / primary action | 4.93:1 | AA pass for normal text |
| Focus color / canvas | 10.03:1 | Exceeds non-text target |
| Error text / error background | 5.16:1 | AA pass for normal text |

These ratios are engineering checks, not a substitute for browser rendering and visual accessibility review.

### 3.2 Semantic light-theme colors

| Token | Primitive mapping | Usage |
| --- | --- | --- |
| `color.bg.canvas` | `warm-100` | App background |
| `color.bg.surface` | `warm-0` | Cards and controls |
| `color.bg.surface-subtle` | `warm-50` | Low-emphasis sections |
| `color.bg.inverse` | `charcoal-900` | Dark emphasis surface |
| `color.text.primary` | `charcoal-900` | Main content |
| `color.text.secondary` | `charcoal-700` | Supporting content |
| `color.text.muted` | `stone-500` | Metadata only |
| `color.text.inverse` | `warm-0` | Text on inverse surface |
| `color.border.subtle` | `stone-200` | Default dividers |
| `color.border.strong` | `stone-300` | Input boundaries |
| `color.action.primary` | `forest-600` | Primary action |
| `color.action.primary-hover` | `forest-700` | Hover |
| `color.action.primary-pressed` | `forest-800` | Pressed |
| `color.action.tint` | `forest-50` | Selected/soft action surface |
| `color.focus` | `navy-700` | Focus indicator |
| `color.status.error` | `red-600` | Error foreground |
| `color.status.error-bg` | `red-50` | Error surface |
| `color.status.warning` | `amber-700` | Warning foreground |
| `color.status.warning-bg` | `amber-50` | Warning surface |
| `color.status.info` | `blue-700` | Information foreground |
| `color.status.info-bg` | `blue-50` | Information surface |

### 3.3 Color rules

- Never communicate status or quiz selection by color alone.
- Text and meaningful icons must meet WCAG AA contrast.
- Normal text targets at least 4.5:1; large text and essential UI graphics target at least 3:1.
- Disabled states must remain understandable; reduced opacity cannot make labels illegible.
- Gold is decorative and must not carry essential information on a light background.
- Guardian palettes are data/content colors and cannot replace action, error, warning, or focus colors.
- Five-element chart colors require label, pattern, icon, or direct-value support.

## 4. Typography

### 4.1 Font families

Initial web stack:

```text
Latin/Korean UI:
Pretendard Variable, Inter, system-ui, -apple-system,
BlinkMacSystemFont, "Segoe UI", sans-serif
```

Pretendard is the preferred candidate because it supports balanced Korean and Latin UI. Font licensing, hosting, loading strategy, and actual rendering must be validated before final adoption.

### 4.2 Type scale

| Token | Mobile | Desktop | Weight | Line height | Usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `text.display` | 40 px | 64 px | 650 | 1.08 | Landing hero only |
| `text.h1` | 32 px | 48 px | 650 | 1.15 | Page title/result reveal |
| `text.h2` | 26 px | 36 px | 650 | 1.2 | Major section |
| `text.h3` | 22 px | 28 px | 600 | 1.25 | Card group title |
| `text.title` | 18 px | 20 px | 600 | 1.35 | Component title |
| `text.body-lg` | 18 px | 18 px | 400 | 1.6 | Introductory body |
| `text.body` | 16 px | 16 px | 400 | 1.6 | Default body/control |
| `text.body-sm` | 14 px | 14 px | 400 | 1.55 | Supporting text |
| `text.caption` | 12 px | 12 px | 500 | 1.45 | Metadata and labels |

### 4.3 Typography rules

- Do not use font sizes below 12 px for meaningful content.
- Form controls use at least 16 px on mobile to avoid unintended browser zoom.
- Korean headings may require optical line-height adjustment but must keep the same semantic token.
- Avoid all-caps body copy. Short English labels or type codes may use uppercase with tracking.
- Limit long-form text to approximately 65–72 characters per line.
- Support text expansion of at least 30% without clipping.
- Use tabular numerals for progress, measurements, scores, and Passport metadata.

## 5. Spacing and sizing

### 5.1 Spacing scale

The system uses a 4 px base with an 8 px layout rhythm.

| Token | Value |
| --- | ---: |
| `space-0` | 0 |
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-3` | 12 px |
| `space-4` | 16 px |
| `space-5` | 20 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-10` | 40 px |
| `space-12` | 48 px |
| `space-16` | 64 px |
| `space-20` | 80 px |
| `space-24` | 96 px |

Use only this scale unless a documented optical adjustment is required. Optical adjustments belong in a component token, not as an unexplained local value.

### 5.2 Touch and control sizing

- Minimum interactive target: 44 × 44 px
- Preferred primary mobile control height: 56 px
- Compact desktop control height: 44 px
- Default input height: 56 px mobile, 48 px desktop where density requires it
- Do not reduce the clickable area when the visible icon is small

## 6. Radius, border, and elevation

### 6.1 Radius scale

| Token | Value | Usage |
| --- | ---: | --- |
| `radius-sm` | 8 px | Tags and compact controls |
| `radius-md` | 12 px | Inputs and small cards |
| `radius-lg` | 16 px | Standard cards |
| `radius-xl` | 24 px | Feature cards and modals |
| `radius-2xl` | 32 px | Hero/result surfaces |
| `radius-full` | 999 px | Pills and circular controls |

### 6.2 Border scale

- Default: 1 px
- Emphasized selection: 2 px without changing overall layout size
- Focus ring: 3 px visual ring with at least 2 px offset where space permits

### 6.3 Elevation

| Token | Intended effect |
| --- | --- |
| `shadow-0` | No elevation |
| `shadow-1` | Subtle resting card separation |
| `shadow-2` | Interactive/hovered card |
| `shadow-3` | Floating actions, menus, bottom sheets |
| `shadow-4` | Modal/dialog only |

Shadows must be soft and low-opacity. Use border and surface contrast before adding elevation. “Glass” effects are allowed only when text contrast and performance remain reliable; blur is not a default card treatment.

## 7. Layout and responsive behavior

### 7.1 Breakpoints

| Token | Width | Intent |
| --- | ---: | --- |
| `bp-sm` | 480 px | Large phone |
| `bp-md` | 768 px | Tablet/small split layout |
| `bp-lg` | 1024 px | Desktop layout |
| `bp-xl` | 1280 px | Wide desktop |

Breakpoints respond to content pressure, not device names. Components must work between breakpoints.

### 7.2 Page containers

- Mobile horizontal padding: 20 px
- Tablet horizontal padding: 32 px
- Desktop horizontal padding: 48 px
- Default content maximum: 1200 px
- Reading/quiz column maximum: 640 px
- Result narrative maximum: 720 px

### 7.3 Safe areas

Sticky mobile actions and full-screen flows must respect `env(safe-area-inset-*)`. Content must remain usable with browser chrome, virtual keyboards, and 200% text zoom.

### 7.4 Grid

- Use a fluid single-column base.
- At `bp-md`, selected content may become two columns when reading order remains logical.
- At `bp-lg`, marketing sections may use a 12-column grid.
- Quiz questions remain a focused single-column experience on every viewport.

## 8. Motion

### 8.1 Duration tokens

| Token | Value | Usage |
| --- | ---: | --- |
| `duration-instant` | 100 ms | Press feedback |
| `duration-fast` | 160 ms | Hover and small state changes |
| `duration-base` | 240 ms | Standard transitions |
| `duration-slow` | 360 ms | Page sections and reveals |
| `duration-celebrate` | 600 ms | Controlled result reveal |

### 8.2 Easing tokens

- `ease-standard`: balanced enter/exit
- `ease-enter`: decelerating entrance
- `ease-exit`: accelerating exit
- `ease-spring-soft`: low-overshoot emphasis for selected moments

Exact cubic-bezier or spring values will be validated during implementation and stored centrally.

### 8.3 Motion rules

- Motion communicates change, hierarchy, or progress.
- Default UI transitions should remain near 240 ms; 300 ms is a direction, not a hardcoded universal value.
- Use confetti only after an explicit completion and keep it subtle, brief, and non-blocking.
- Guardian idle motion must not distract from reading.
- Loading steps reflect actual progression when possible. Never fake AI analysis or certainty.
- Under `prefers-reduced-motion: reduce`, remove parallax, floating loops, scale bounces, and large translations; use opacity or instant state changes.

## 9. Iconography and imagery

### 9.1 UI icons

- Use one consistent outline icon family for functional controls.
- Default optical size: 20 px; compact 16 px; emphasis 24 px.
- Icons require accessible labels when meaning is not visible in adjacent text.
- Do not use a decorative icon as the only explanation of a traditional concept.

### 9.2 Guardian assets

Guardian assets must expose predictable variants:

```text
portrait
full-body
avatar
silhouette
emblem
passport-crop
share-square
share-story
```

Components reference typed asset keys, not file paths scattered through page code.

## 10. Core component contracts

### 10.1 Button

Variants:

- `primary`
- `secondary`
- `tertiary`
- `destructive`
- `icon`

Sizes:

- `sm`: 40 px visual height with 44 px minimum hit target
- `md`: 48 px
- `lg`: 56 px

States:

- Rest
- Hover
- Active/pressed
- Focus-visible
- Disabled
- Loading

Rules:

- One primary action per focused mobile step.
- Loading preserves width and communicates progress to assistive technology.
- Disabled controls need an explanation when the user cannot infer why.
- Button text remains a verb phrase whenever possible.

### 10.2 Text input

An input includes label, optional marker, field, helper text, and error message.

Rules:

- Labels never rely on placeholders.
- Use appropriate input mode and autocomplete metadata.
- Errors state how to correct the value.
- Unit suffixes remain visible and accessible.
- Numeric values are stored in canonical units; display conversion is separate.

### 10.3 Choice card and chip

Use for MBTI, blood type, age band, and quiz scales where appropriate.

Rules:

- Expose radio/checkbox semantics.
- Selected state uses icon/marker, border, and color.
- Keyboard navigation follows the underlying control pattern.
- Avoid rendering all 16 MBTI choices as tiny mobile chips; use a readable grouped or guided pattern.

### 10.4 Slider

Use only when approximate continuous selection is beneficial. Height and weight must also support direct keyboard/text entry.

Rules:

- Current value and unit remain visible.
- Provide usable step size and min/max explanation.
- Do not infer health judgment from the selected value.
- Unit switching must not change the canonical stored quantity.

### 10.5 Progress indicator

Quiz progress combines text and visual progress:

```text
Question 7 of 20
35%
```

Rules:

- Use actual completed steps.
- Announce meaningful updates without overwhelming screen readers.
- Do not count optional profile screens inconsistently.
- Preserve progress when the user navigates back.

### 10.6 Card

Variants:

- `surface`
- `interactive`
- `feature`
- `result`
- `passport`

Rules:

- Cards group related content; they are not a universal container.
- Clickable cards expose a single clear interactive target.
- Nested controls must not create invalid nested interactions.
- Result cards may use Guardian palettes while maintaining semantic text and focus colors.

### 10.7 Quiz step

Structure:

1. Optional category/step label
2. Question
3. Short explanation where necessary
4. Answer control
5. Back and continue actions
6. Progress context

Rules:

- One primary question per screen.
- Preserve answers when navigating.
- Avoid auto-advance where it may cause accidental input or accessibility problems; if used for simple choices, provide clear feedback and an easy undo path.
- Five-point scales show understandable endpoint labels and a neutral center.

### 10.8 Analysis transition

The analysis experience builds anticipation while staying truthful.

Allowed step labels:

- Reviewing your profile
- Mapping your responses
- Building your balance view
- Preparing your Guardian
- Creating your Passport

Rules:

- Do not claim AI analysis unless AI is actually used.
- Do not artificially delay users beyond the minimum needed for a coherent transition.
- Provide an accessible status message and recovery path if processing fails.

### 10.9 Result hero

Must contain:

- Guardian image or accessible fallback
- Type number/code
- Localized Guardian name and title
- One concise recognition statement
- Clear path to explore the result

The result hero celebrates identity before displaying scores or recommendations.

### 10.10 Radar/balance visualization

Rules:

- Always provide textual values and interpretation.
- Do not imply clinical measurement precision.
- Use a stable 0–100 presentation scale only if the scoring specification defines how values are normalized.
- Charts must remain understandable without color and at narrow widths.

### 10.11 Passport

Variants:

- Responsive on-screen card
- Downloadable square image
- Downloadable 9:16 story image
- Future print/PDF and wallet formats

Rules:

- Separate display data from layout.
- Use a deterministic renderer for share assets.
- Hide optional personal fields by default.
- Preview exactly what will be downloaded or shared.
- Maintain a non-image HTML representation.

### 10.12 Toast, dialog, and bottom sheet

- Toasts confirm low-risk, non-blocking actions; they do not contain critical decisions.
- Dialogs handle focused confirmations and destructive actions.
- Bottom sheets are preferred for compact mobile actions such as share options.
- Focus must move into modal surfaces and return to the triggering control on close.

## 11. Forms and validation

- Validate on blur or submit, not on every keystroke when that creates noise.
- Keep entered values after errors.
- Place an error near its field and provide a summary when multiple errors block submission.
- Optional means genuinely optional.
- Explain why height, weight, age, gender, MBTI, or blood type is requested before collection.
- Avoid collecting email in the core MVP unless result recovery or consented communication requires it.

## 12. Localization

- UI layout must handle at least 30% text expansion.
- Do not concatenate translated fragments to build sentences.
- Dates, numbers, and units use locale-aware formatters.
- Store canonical measurement values in metric base units.
- Korean line breaking must avoid isolated punctuation and cramped headings.
- Branded feature names may remain in English with localized explanations.
- Locale files are organized by feature/domain rather than one unbounded global file.

## 13. Accessibility baseline

- WCAG 2.2 AA target
- Logical heading hierarchy
- Visible focus on every interactive element
- Full keyboard path through profile, quiz, result, and sharing
- Semantic form controls before custom interaction
- Screen-reader status for progress and processing
- 200% text zoom without loss of content or function
- Reduced-motion support
- Touch target minimum of 44 × 44 px
- Alternative text for meaningful Guardian art
- Text equivalents for charts, scores, and compatibility views
- No timed completion requirement

## 14. Implementation contract

When the web project is initialized:

- Define primitives and semantic tokens in one theme source.
- Generate or expose CSS custom properties from that source.
- Map Tailwind utilities to semantic tokens; avoid arbitrary color/spacing values in product components.
- Build core UI primitives before feature pages.
- Keep Guardian and type content in typed domain data.
- Test representative Korean and English content in each core component.
- Add automated accessibility checks and visual review at common mobile and desktop widths.

Suggested CSS variable naming:

```css
--color-bg-canvas
--color-bg-surface
--color-text-primary
--color-text-secondary
--color-border-subtle
--color-action-primary
--space-4
--radius-xl
--duration-base
```

The exact code structure is decided in TASK-005 after the framework and tooling versions are verified.

## 15. Design QA checklist

For every implemented screen:

- Uses semantic tokens only
- Works at 320 px width without horizontal scrolling
- Works with Korean and English content
- Maintains hierarchy at desktop width
- Has visible hover, active, focus, disabled, loading, and error states where relevant
- Passes contrast checks
- Supports keyboard and screen reader flow
- Supports reduced motion
- Avoids layout shift from images and font loading
- Avoids unapproved hardcoded copy, scores, assets, routes, or style values
- Matches the relevant product and task specification

## Change Log

### v0.1 — 2026-07-21

#### Added

- Token architecture
- Foundation and semantic color system
- Typography, spacing, sizing, radius, elevation, layout, responsive, and motion rules
- Core component contracts
- Form, localization, accessibility, implementation, and QA requirements

#### Updated

- None

#### Removed

- None
