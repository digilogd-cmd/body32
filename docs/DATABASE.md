# BODY32 Database Specification

| Field | Value |
| --- | --- |
| Version | v0.1 |
| Status | Draft — MVP Persistence |
| Preferred engine | PostgreSQL via Supabase |
| Updated | 2026-07-21 |

## 1. Persistence principle

The first local BODY32 experience does not require a database. Persistence is introduced for opt-in result recovery and sharing. Product content and algorithm configuration remain in Git for the MVP.

## 2. Core entities

### 2.1 `results`

Stores a sanitized, versioned result snapshot created by the server.

| Column | Type | Rules |
| --- | --- | --- |
| `id` | `uuid` | Primary key, server generated |
| `owner_user_id` | `uuid null` | Future auth owner; references auth user |
| `anonymous_owner_hash` | `text null` | Hash of revocation capability, never raw token |
| `algorithm_version` | `text` | Required |
| `question_set_version` | `text` | Required |
| `content_version` | `text` | Required |
| `stable_type_id` | `text` | Required, validated against server registry |
| `rhythm_code` | `text` | Required, constrained enum/check |
| `archetype_code` | `text` | Required, constrained enum/check |
| `dimension_scores` | `jsonb` | Required, schema validated before insert |
| `rhythm_scores` | `jsonb` | Required |
| `element_scores` | `jsonb` | Required |
| `axis_scores` | `jsonb` | Required |
| `confidence_band` | `text` | `low`, `medium`, or `high` |
| `display_name` | `text null` | Optional, length-limited, user controlled |
| `locale` | `text` | Required supported locale |
| `created_at` | `timestamptz` | Server default UTC |
| `expires_at` | `timestamptz null` | Retention support |
| `deleted_at` | `timestamptz null` | Soft deletion/revocation workflow |

Raw quiz answers are excluded from this table in the MVP. If later research requires them, use a separate consented table and retention policy.

### 2.2 `result_shares`

Controls public access separately from result ownership.

| Column | Type | Rules |
| --- | --- | --- |
| `id` | `uuid` | Primary key |
| `result_id` | `uuid` | Required foreign key to `results` |
| `public_id` | `text` | Unique, unguessable, URL-safe |
| `is_active` | `boolean` | Default true |
| `show_display_name` | `boolean` | Default false |
| `created_at` | `timestamptz` | Server default UTC |
| `expires_at` | `timestamptz null` | Optional expiry |
| `revoked_at` | `timestamptz null` | Revocation timestamp |

Only an allowlisted projection is exposed publicly. Ownership fields, hashes, internal UUIDs, and private metadata never appear in the public response.

### 2.3 `consent_receipts`

Created only when a feature needs recorded consent.

| Column | Type | Rules |
| --- | --- | --- |
| `id` | `uuid` | Primary key |
| `result_id` | `uuid null` | Optional related result |
| `user_id` | `uuid null` | Future auth owner |
| `purpose` | `text` | Versioned consent purpose |
| `policy_version` | `text` | Required |
| `granted_at` | `timestamptz` | Required UTC |
| `withdrawn_at` | `timestamptz null` | Withdrawal support |

Do not store IP addresses or user-agent strings here by default. Any audit requirement must be separately justified.

## 3. Constraints

- JSON score objects contain exactly their expected keys.
- Every numeric score is finite and between 0 and 100.
- `stable_type_id` must correspond to the stored Rhythm and Archetype.
- At least one ownership method is present for a revocable persistent result.
- `expires_at`, when present, is later than `created_at`.
- Display names are trimmed, length-limited, and escaped at output.
- Public IDs are generated from cryptographically secure randomness, not sequential values.

## 4. Indexes

Initial indexes:

- Unique index on `result_shares.public_id`
- Index on active `result_shares(result_id)`
- Index on `results.owner_user_id` where not null
- Index on `results.created_at` for retention jobs
- Index on `results.expires_at` where not null
- Index on `results.stable_type_id` only if aggregate reporting requires it

Do not add indexes speculatively. Verify query plans after real queries exist.

## 5. Row Level Security

- Enable RLS on every application table.
- Anonymous clients do not select directly from `results`.
- Public reads go through a server endpoint or security-definer function returning an allowlisted projection.
- Authenticated owners may read/delete their own results after auth exists.
- Anonymous revocation uses a server-validated capability token; the stored value is a one-way hash.
- Service-role access is server-only and narrowly scoped in application code.

## 6. Retention and deletion

- Unsaved local sessions expire in client storage.
- Persistent anonymous results receive a documented default retention window before public launch.
- Revocation immediately disables public access.
- Deletion requests remove or irreversibly anonymize owned records according to policy.
- Backup retention and deletion limitations must be disclosed accurately.
- Expired/revoked cleanup runs as an idempotent scheduled job when persistence launches.

## 7. Migrations

- Every schema change uses a timestamped SQL migration in `supabase/migrations/`.
- Migrations are immutable after shared application.
- Destructive migrations use expand → migrate → contract.
- Additive changes deploy before code that requires them.
- Rollback considerations and data backfills are documented in the task.
- Production migrations are tested against a disposable environment first.

## 8. Future entities

Not part of MVP schema:

- User profiles
- Saved comparisons
- Daily check-ins
- Challenges and streaks
- Recommendation catalogs
- Admin editorial content
- Commerce and affiliate records
- Wearable data

These require separate privacy, authorization, retention, and product specifications.

## 9. Database QA

- Migration applies from empty database
- RLS denies unauthorized direct reads/writes
- Public projection excludes private columns
- Revoked and expired shares return no result
- Constraints reject mismatched type data and out-of-range scores
- Cleanup job is idempotent
- Restore procedure is documented before production launch

## Change Log

### v0.1 — 2026-07-21

- Added MVP result, share, and consent entities with constraints, indexes, RLS, retention, migration, and QA rules.
