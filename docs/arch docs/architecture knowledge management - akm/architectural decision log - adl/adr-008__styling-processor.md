### ADR 008: Styling Processor

**Context:** The project required a more maintainable and scalable approach to styling. CSS was initially used, but SCSS was introduced to leverage features like variables, nesting, and mixins.

**Decision:** Use SCSS for styling instead of plain CSS.

**Consequences:**

- Positive: Improved maintainability and scalability of styles.
- Positive: Easier to manage design tokens (e.g., colors, typography).
- Negative: Requires additional build step to compile SCSS to CSS.
- Risk: Developers need to be familiar with SCSS syntax.

**Status:** Accepted