### ADR 009: Transpiling with Babel

**Context:** The project uses modern JavaScript (ES6+), which may not be supported in all browsers. Babel was introduced to ensure compatibility.

**Decision:** Use Babel to transpile ES6+ JavaScript to ES5.

**Consequences:**

- Positive: Ensures compatibility with older browsers.
- Positive: Allows the use of modern JavaScript features.
- Negative: Adds a build step, increasing complexity.
- Risk: Requires maintaining Babel configuration.

**Status:** Accepted