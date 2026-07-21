# BODY32 Task System

The `tasks/` directory contains bounded, verifiable units of work. Product truth lives in `docs/`; task files describe how a specific increment will change the repository.

## Status values

- `Planned`: scoped but not started
- `In Progress`: actively being worked on
- `Blocked`: cannot continue without a recorded decision or dependency
- `In Review`: implementation complete and awaiting verification or approval
- `Complete`: acceptance criteria and verification are satisfied

## Task order

| Task | Title | Status |
| --- | --- | --- |
| TASK-000 | Project operating foundation | Complete |
| TASK-001 | Brand guide and design token specification | Complete |
| TASK-002 | Guardian taxonomy and Character Bible | Planned |
| TASK-003 | Diagnostic algorithm and domain data model | Planned |
| TASK-004 | Technical architecture, database, and API design | Planned |
| TASK-005 | Web application foundation and quality tooling | Planned |
| TASK-006+ | Feature implementation, QA, and deployment | Planned |

## Required task sections

Every task must define:

1. Objective
2. Context
3. Scope
4. Out of scope
5. Dependencies
6. Deliverables
7. Acceptance criteria
8. Verification
9. Risks and decisions
10. Completion notes

Task numbers are stable. If work is removed, record it as cancelled rather than reusing its number.
