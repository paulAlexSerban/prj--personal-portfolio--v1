### ADR 003: Content Management Approach

**Context:** Content (projects, coursework) needs to be easily updatable without code changes. The site is static, so content must be pre-built.

**Decision:** Store content in JSON files, processed during build time.

**Consequences:**

- Positive: Easy content updates, structured data, separation of content and presentation.
- Negative: Requires build step for content changes.
- Risk: JSON structure changes may require code updates.

**Status:** Accepted