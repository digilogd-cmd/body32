# BODY32 Release-Candidate Checklist

Status: local release candidate. Public deployment remains intentionally unauthorized.

## Product

- [x] Korean and English landing, profile, quiz, analysis, result, Passport, and sharing flows
- [x] Five optional profile contexts with explicit purpose and skip behavior
- [x] 20 versioned Body Pattern questions and deterministic 32-type calculation
- [x] Body Score, five Body Signals, five-element expression, explanation trace, and confidence
- [x] 32 Guardian portraits and bilingual identity guidance
- [x] Rhythm-specific practical guidance and seven-day experiment
- [x] MBTI changes framing only and never changes scores
- [x] Restart, home, and reload-resume paths

## Trust and privacy

- [x] No account or email required
- [x] Profile fields are optional and have no v1 score effect
- [x] Anonymous progress is versioned and saved only in browser local storage
- [x] No raw answers, profile context, or internal trace in sharing payloads
- [x] Wellness—not medical diagnosis—boundaries appear in profile, analysis, result, guidance, and Passport
- [x] Blood type does not affect health, constitution, or type output
- [x] No analytics, advertising, commerce, or third-party tracking in the local release candidate
- [x] No fabricated testimonial, user count, ranking, compatibility percentage, or QR code

## Accessibility and localization

- [x] Keyboard-operable quiz and profile controls
- [x] Skip navigation, focus movement, live status, semantic progress, and text equivalents
- [x] Reduced-motion analysis avoids an artificial long wait
- [x] Korean and English message schemas are automatically compared
- [x] Guardian and Body Signal meaning remains available without images or color
- [ ] Native editorial review before public marketing launch
- [ ] Screen-reader and 200% zoom manual QA on target browsers

## Visual QA

- [x] Landing center typography is separated
- [x] Guardian constellation stays within desktop viewport safety boundaries
- [x] Result leads with Body Profile before Guardian
- [x] Character faces, ears, antlers, beaks, and full silhouettes use contain framing
- [x] All 32 types are available in the local review gallery
- [ ] Final physical-device checks at 320, 375, 390, 430, 768, 1024, and 1440 CSS pixels

## Engineering

- [x] Lint, strict typecheck, 25 automated tests, and production build
- [x] Neutral, extreme, deterministic, invalid-input, registry, persistence, Passport, share, and localization coverage
- [x] All 32 stable Guardian IDs resolve to content and independent WebP art
- [x] Versioned algorithm, question set, and local progress key
- [x] Korean and English static routes build successfully
- [x] Browser critical path completes landing → optional profile → 20 questions → analysis → full result

## Documentation

- [x] Ten-document source index and precedence
- [x] Product Vision, PRD, UX Flow, Design System, Database, Algorithm, Character Bible, API, Admin, and Codex Guide
- [x] Platform expansion separated from anonymous release candidate

## Required before public deployment

- [ ] Owner approval of final product direction and visual QA
- [ ] Native Korean and English editorial review
- [ ] Algorithm calibration and public-claim review
- [ ] Legal, privacy, wellness, and trademark review for intended launch markets
- [ ] Privacy policy, terms, contact, and report paths
- [ ] Final domain, hosting, canonical URL, and KTYPE ownership decision
- [ ] Public share-link, revocation, QR, and social-preview infrastructure
- [ ] Production error monitoring and consented privacy-preserving analytics
- [ ] Physical-device and supported-browser test matrix
- [ ] Explicit deployment authorization

## Current release decision

The repository is a verified local release candidate, not a clinically validated product and not yet approved for public deployment. Guardian IP, Body Profile utility, and platform architecture are implemented far enough for owner review and the next calibration/design cycle.
