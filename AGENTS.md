# BODY32 Repository Guidance

These instructions apply to the entire repository.

## Source of truth

Read the following before changing product behavior:

1. `docs/MASTER_PRD.md`
2. The active specification in `docs/`
3. The active task file in `tasks/`

If the documents conflict, stop implementation and record the conflict in the active task. Do not silently choose a convenient interpretation.

## Working principles

- Work in one bounded task at a time.
- Preserve product direction from the approved BODY32 planning conversation and repository documents.
- Prefer explicit domain models, typed configuration, reusable components, and deterministic rules over scattered constants or page-specific logic.
- Do not hardcode localized copy, type results, character attributes, quiz questions, scoring weights, design tokens, routes, or external URLs inside UI components.
- Keep Korean and English content in structured locale or domain data.
- Keep the web implementation mobile-first and suitable for future app reuse.
- Treat accessibility, privacy, security, performance, and wellness safety as acceptance criteria rather than later enhancements.
- Avoid medical, diagnostic, clinical, or scientifically unsupported claims.
- Do not add a dependency when a small, well-tested local implementation is sufficient.
- Do not introduce speculative abstractions that are not required by an approved task.

## Architecture expectations

- TypeScript strict mode must remain enabled once the application is initialized.
- Domain logic must not depend on React components or browser APIs.
- Quiz scoring must be deterministic, versioned, testable, and explainable.
- UI components must consume design tokens and typed data rather than duplicating values.
- External services must be accessed through narrow adapters with validated environment configuration.
- Sensitive or user-identifying values must not be written to logs or analytics.
- Database changes require migrations and documented rollback considerations.

## Task workflow

For every task:

1. Read the active task and relevant specifications.
2. Confirm scope and dependencies in the task file.
3. Implement only the approved scope.
4. Run the task's verification commands.
5. Update the task status and implementation notes.
6. Review the diff for unrelated changes.
7. Commit with a focused message after verification passes.

## Completion standard

A task is complete only when:

- Its acceptance criteria are satisfied.
- Relevant tests and checks pass.
- User-facing behavior has been visually checked when applicable.
- Documentation matches the implementation.
- Known limitations and follow-up work are recorded.

Never report a task as complete based only on file creation.

## Git discipline

- Keep commits focused on one task.
- Do not rewrite shared history or force-push without explicit approval.
- Do not discard unrelated user changes.
- Use feature branches and pull requests after the application foundation is established or whenever a change is high risk.
- Never commit secrets, local credentials, generated caches, or environment files containing real values.
