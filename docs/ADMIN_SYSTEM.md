# BODY32 Admin System

| Field | Value |
| --- | --- |
| Version | v1 product contract |
| Availability | Post-anonymous release |
| Access | Staff-only, least privilege, MFA required |

## 1. Purpose

The Admin System governs content quality, localization, algorithm releases, Guardian assets, safety review, privacy requests, experiments, and aggregate product analytics. It is not a dashboard for browsing individual users.

## 2. Roles

| Role | Capabilities |
| --- | --- |
| Viewer | Aggregate dashboards and published content |
| Editor | Draft localized copy and guidance |
| Character editor | Manage approved Guardian metadata/assets |
| Safety reviewer | Approve wellness and recommendation language |
| Algorithm reviewer | Review versioned coefficients and fixtures |
| Publisher | Publish approved content/version bundles |
| Privacy operator | Process export/deletion requests without content access |
| Administrator | Role and system configuration; no routine user-data browsing |

No single editor can draft and publish safety-sensitive guidance without review.

## 3. Modules

### 3.1 Content

- Korean/English question registry
- Body Signal explanation bands
- Rhythm and archetype content
- Practical guidance and seven-day experiments
- Wellness disclaimers and report links
- Draft → review → approved → published workflow

### 3.2 Character IP

- 32 stable IDs and display order
- Localized name, story, strengths, watch-outs, recovery mode
- Palette, emblem, constellation, and asset variants
- Rights/provenance record for every master asset
- Visual QA checklist and version history

### 3.3 Algorithm releases

- Read-only view of current version and coefficients
- Proposed version diff
- Golden fixture results and distribution preview
- Required algorithm, safety, editorial, and product approvals
- Immutable publication record and rollback target

Production coefficients are never edited directly in an unrestricted form.

### 3.4 Recommendations

- Category: meal rhythm, movement, recovery, stress, reflection
- Audience and exclusion notes
- Evidence/source notes
- Locale variants
- Sponsored/affiliate status
- Safety review and expiry date

Supplements, dosages, contraindications, disease claims, and personalized treatment remain disabled until separately approved.

### 3.5 Analytics

- Funnel completion and abandonment
- Time per stage/question order
- Aggregate Rhythm/Guardian distribution
- Passport generation and share conversion
- Seven-day experiment starts and returns
- Locale, country, age band, MBTI, and blood-type aggregates only when consent and minimum cohort thresholds allow
- Recommendation clicks with sponsorship segmentation

Raw answers, names, exact measurements, and individual result browsing are excluded from default dashboards.

### 3.6 Privacy and safety

- Consent receipt lookup by opaque identifier
- Data export/deletion workflow
- Public share revocation
- User reports on content or AI Guide output
- Incident log and escalation status
- Retention job status

## 4. Dashboard rules

- Minimum cohort threshold before demographic breakdowns
- Suppress small cells and cross-filter combinations that could identify a person
- UTC storage and explicit reporting timezone
- Filter state reflected in shareable internal URLs without sensitive values
- Every metric defines numerator, denominator, exclusions, and freshness
- No “global ranking” based on personal health or Body Score

## 5. Publishing workflow

```text
Draft
  → editorial review
  → localization review
  → safety review when applicable
  → preview bundle
  → automated validation
  → publisher approval
  → immutable version
  → monitored rollout
```

## 6. Audit

- Actor, action, entity, version, timestamp, and reason
- Before/after diff for text and structured data
- Exportable audit history
- No secrets or raw sensitive values in audit payloads
- Administrative access reviewed quarterly

## 7. Release acceptance

- Role boundaries tested
- MFA and session expiry configured
- Content cannot publish without required approvals
- Algorithm releases require fixtures and multiple reviewers
- Demographic dashboards enforce thresholds
- Export, delete, and share-revoke paths tested
- Audit records are immutable to ordinary administrators
