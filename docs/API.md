# BODY32 API Specification

| Field | Value |
| --- | --- |
| Version | v0.1 |
| Base path | `/api/v1` |
| Status | Draft — MVP Contracts |
| Updated | 2026-07-21 |

## 1. API principles

- JSON over HTTPS
- Runtime validation for every request and response
- Server-side recalculation for persisted results
- Stable versioned error codes
- Minimal public payloads
- Idempotency for retryable writes where practical
- No raw database-row serialization
- No medical or AI diagnosis endpoint

## 2. Common response conventions

Successful responses include a `data` object. Errors use:

```json
{
  "error": {
    "code": "INVALID_SUBMISSION",
    "message": "Some quiz answers are missing or invalid.",
    "requestId": "req_...",
    "details": []
  }
}
```

- `message` is safe for users and localization mapping.
- `details` contains field-level validation only when safe.
- Stack traces, SQL messages, tokens, raw answers, and internal identifiers are never returned.

## 3. `POST /api/v1/results`

Validates answers, recalculates the result, and optionally persists it.

### Request

```json
{
  "algorithmVersion": "body32-v1",
  "questionSetVersion": "questions-v1",
  "locale": "ko",
  "answers": {
    "Q_ACT_01": 4
  },
  "persistence": {
    "save": true,
    "displayName": "Mina"
  }
}
```

All 20 answers are required; the abbreviated example is not a valid complete submission.

### Server behavior

1. Validate body size and schema.
2. Resolve supported algorithm and question-set versions.
3. Reject unknown or duplicate question IDs.
4. Calculate through the pure domain engine.
5. Verify the generated stable type exists.
6. Return an ephemeral result or persist a sanitized snapshot.
7. When persisted anonymously, return a one-time revocation capability separately from public data.

### Response

```json
{
  "data": {
    "resultId": "res_public-safe-reference",
    "stableTypeId": "B32_IGNITE_TIGER",
    "rhythm": "IGNITE",
    "archetype": "TIGER",
    "dimensions": {},
    "elements": {},
    "confidence": "medium",
    "versions": {
      "algorithm": "body32-v1",
      "questions": "questions-v1",
      "content": "content-v1"
    }
  }
}
```

The API must not accept a client-selected stable type as authoritative.

## 4. `POST /api/v1/results/{resultId}/shares`

Creates an opt-in public share for an owned or capability-authorized persistent result.

### Request

```json
{
  "showDisplayName": false,
  "expiresInDays": 30
}
```

### Response

```json
{
  "data": {
    "publicId": "unguessable_public_id",
    "url": "https://example.com/result/unguessable_public_id",
    "expiresAt": "2026-08-20T00:00:00Z"
  }
}
```

The public URL host comes from validated server configuration, not request headers.

## 5. `GET /api/v1/public-results/{publicId}`

Returns an allowlisted public result projection.

Allowed fields:

- Stable type ID and public code
- Localized Guardian name/title resolved from current compatible content
- Rhythm and Archetype
- Rounded element/dimension presentation values as approved
- Confidence language category if approved
- Display name only when share consent enables it
- Original algorithm/content version references

Forbidden fields:

- Raw answers
- Email, profile, owner, consent, or revocation data
- Internal result UUID
- Anonymous ownership hash
- IP address, user agent, analytics identifiers
- Private timestamps unrelated to the share

Revoked, expired, deleted, malformed, and nonexistent public IDs return the same privacy-safe not-found behavior.

## 6. `DELETE /api/v1/shares/{publicId}`

Revokes one specific public share. Requires authenticated ownership or the anonymous revocation capability.

- Operation is idempotent.
- The raw capability is submitted over HTTPS and never logged.
- Successful revocation returns `204 No Content`.
- Repeated revocation remains successful without revealing prior state.

## 7. Status and error codes

| HTTP | Code | Meaning |
| ---: | --- | --- |
| 400 | `INVALID_JSON` | Body cannot be parsed |
| 400 | `INVALID_SUBMISSION` | Schema or answer validation failed |
| 400 | `UNSUPPORTED_VERSION` | Algorithm/question version unavailable |
| 401 | `OWNERSHIP_REQUIRED` | Ownership or capability missing |
| 403 | `ACTION_NOT_ALLOWED` | Valid identity lacks permission |
| 404 | `RESULT_NOT_FOUND` | Missing, revoked, expired, or hidden result |
| 409 | `VERSION_CONFLICT` | Saved state conflicts with requested operation |
| 413 | `PAYLOAD_TOO_LARGE` | Request exceeds limit |
| 429 | `RATE_LIMITED` | Too many requests |
| 500 | `INTERNAL_ERROR` | Safe generic server failure |
| 503 | `PERSISTENCE_UNAVAILABLE` | Optional persistence temporarily unavailable |

## 8. Validation and limits

- JSON content type required for write endpoints
- Strict object schemas; unknown security-sensitive fields rejected
- Request-size limits set before parsing expensive content
- Display names normalized and length-limited
- Version strings selected from server registry
- `expiresInDays` restricted to approved bounds
- Public IDs match exact URL-safe format and length
- Rate limiting differentiates result creation, sharing, public reads, and revocation

## 9. Idempotency and concurrency

- Result creation may accept an `Idempotency-Key` when persistence is requested.
- Keys are scoped to an ownership/session context and expire.
- Replaying the same key with a different body returns a conflict.
- Share creation avoids duplicate active shares unless the user explicitly requests another.
- Revocation uses an atomic update and is idempotent.

## 10. Caching

- Ephemeral result creation: `no-store`
- Persistent private result operations: `no-store`
- Active public results: short controlled cache with purge/revalidation on revocation
- Revoked/not-found results: avoid long negative caching
- Responses involving display names use conservative cache policy

## 11. Abuse and security

- Apply rate limits before expensive scoring or rendering work.
- Do not expose whether a private result exists.
- Use CSRF protection where browser credentials authorize mutations.
- Validate origins for sensitive browser actions.
- Escape all user-controlled display content.
- Generate share IDs and capability tokens using cryptographically secure randomness.
- Hash capability tokens with a purpose-specific server secret before storage.
- Log only endpoint, outcome code, duration, request ID, and coarse operational metadata.

## 12. API testing

- Contract tests for every success and error response
- Validation tests for missing, extra, invalid, and oversized fields
- Golden algorithm fixtures through the endpoint
- Server ignores forged type IDs
- Public projection snapshot contains only allowlisted fields
- Authorization and revocation tests
- Rate-limit and idempotency tests
- Locale does not change classification
- Persistence failure still permits a safe local-result experience in the client

## 13. Future API boundaries

New versioned specifications are required for:

- Accounts and result history
- Compatibility
- Daily Energy and check-ins
- AI Coach
- Recommendations and affiliate content
- Admin/editorial mutations
- Wallet passes
- Native push notifications
- Wearable data

Do not extend the result endpoint into an unbounded all-purpose API.

## Change Log

### v0.1 — 2026-07-21

- Added v1 result creation, public sharing, public retrieval, revocation, validation, errors, caching, idempotency, security, and testing contracts.
