# BODY32 Platform Document Index

The following ten documents are the ordered product and development sources of truth.

| Order | Document | Repository source | Status |
| ---: | --- | --- | --- |
| 1 | Product Vision | `docs/PRODUCT_VISION.md` | v1 approved direction |
| 2 | Product Requirement Document | `docs/PRODUCT_REQUIREMENTS_V1.md` | v1 release-candidate scope |
| 3 | UX Flow | `docs/UX_FLOW_V1.md` | v1 release-candidate flow |
| 4 | UI Design System | `docs/DESIGN_SYSTEM.md` | v0 foundation; v1 governed by PRD/UX |
| 5 | Database Design | `docs/DATABASE.md` | v0 foundation; server persistence is post-anonymous release |
| 6 | Algorithm Design | `docs/BODY_PROFILE_ALGORITHM_V1.md` | v1 implemented contract |
| 7 | Character Bible | `docs/CHARACTER_BIBLE.md` | stable 4 × 8 IP taxonomy |
| 8 | API Specification | `docs/API.md` | future server boundary; local release has no required result API |
| 9 | Admin System | `docs/ADMIN_SYSTEM.md` | v1 product and privacy contract |
| 10 | Codex Development Guide | `docs/CODEX_DEVELOPMENT_GUIDE.md` | active implementation workflow |

## Precedence

1. Safety, privacy, consent, and legal requirements
2. Product Vision
3. PRD
4. UX Flow and Algorithm
5. Design, Character, Data, API, and Admin specifications
6. Development Guide
7. Implementation

When implementation conflicts with a higher source, stop and record the decision. Do not silently preserve obsolete behavior.

## Legacy documents

`docs/MASTER_PRD.md` remains a detailed v0.2 history and reference. Where it conflicts with the v1 documents above, the v1 documents take precedence.

`docs/ALGORITHM.md` remains the v0 personality-model history. `docs/BODY_PROFILE_ALGORITHM_V1.md` is the active release-candidate contract.
