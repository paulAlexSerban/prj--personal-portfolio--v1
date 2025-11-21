# Architectural Decision Log

This section contains Architectural Decision Records (ADRs) documenting key decisions made during the architectural design phase.

### ADR 001: Frontend Framework Selection

**Context:** The project aims to demonstrate foundational web development skills and maintain simplicity. Frameworks could add complexity and learning overhead.

**Decision:** Use vanilla HTML, CSS, and JavaScript without any frontend frameworks.

**Consequences:**

- Positive: Demonstrates core skills, reduces dependencies, faster development for simple features.
- Negative: Manual implementation of responsive design and interactions, potential for more verbose code.
- Risk: May require more effort for complex UI elements in future versions.

**Status:** Accepted

### ADR 002: Build Tool Selection

**Context:** Need a way to bundle assets, process templates, and optimize for production. The project requires efficient build processes for static site generation.

**Decision:** Use Webpack for asset bundling and Handlebars for HTML templating.

**Consequences:**

- Positive: Efficient bundling, template reusability, supports modularity.
- Negative: Adds build complexity, requires configuration.
- Risk: Learning curve for Webpack setup.

**Status:** Accepted

### ADR 003: Content Management Approach

**Context:** Content (projects, coursework) needs to be easily updatable without code changes. The site is static, so content must be pre-built.

**Decision:** Store content in JSON files, processed during build time.

**Consequences:**

- Positive: Easy content updates, structured data, separation of content and presentation.
- Negative: Requires build step for content changes.
- Risk: JSON structure changes may require code updates.

**Status:** Accepted

### ADR 004: Hosting Platform Selection

**Context:** Need free, reliable hosting for a static site. Should integrate well with version control and deployment workflows.

**Decision:** Use GitHub Pages for hosting.

**Consequences:**

- Positive: Free, automatic deployment from repository, reliable uptime.
- Negative: Limited to static content, no server-side features.
- Risk: Potential limitations if site grows beyond static capabilities.

**Status:** Accepted

### ADR 005: Responsive Design Implementation

**Context:** Site must work across devices. freeCodeCamp requires at least one media query.

**Decision:** Implement responsive design using CSS media queries and flexible layouts.

**Consequences:**

- Positive: Meets requirements, improves user experience.
- Negative: Requires additional CSS complexity.
- Risk: Testing across devices needed.

**Status:** Accepted

### ADR 006: Navigation Structure

**Context:** Navbar must be fixed at top and contain navigation links. Required for freeCodeCamp compliance.

**Decision:** Implement fixed navbar with anchor links to page sections.

**Consequences:**

- Positive: Meets requirements, provides smooth navigation.
- Negative: May impact mobile experience if not handled properly.
- Risk: Potential z-index and positioning issues.

**Status:** Accepted

### ADR 007: Project Structure Organization

**Context:** Codebase needs to be maintainable and support future growth.

**Decision:** Organize code into logical directories (src/, public/, docs/), separate concerns (HTML, CSS, JS).

**Consequences:**

- Positive: Clear structure, easy to navigate and extend.
- Negative: Initial setup overhead.
- Risk: May need refactoring as project grows.

**Status:** Accepted

### ADR 008: Styling with SCSS

**Context:** The project required a more maintainable and scalable approach to styling. CSS was initially used, but SCSS was introduced to leverage features like variables, nesting, and mixins.

**Decision:** Use SCSS for styling instead of plain CSS.

**Consequences:**

- Positive: Improved maintainability and scalability of styles.
- Positive: Easier to manage design tokens (e.g., colors, typography).
- Negative: Requires additional build step to compile SCSS to CSS.
- Risk: Developers need to be familiar with SCSS syntax.

**Status:** Accepted

### ADR 009: Transpiling with Babel

**Context:** The project uses modern JavaScript (ES6+), which may not be supported in all browsers. Babel was introduced to ensure compatibility.

**Decision:** Use Babel to transpile ES6+ JavaScript to ES5.

**Consequences:**

- Positive: Ensures compatibility with older browsers.
- Positive: Allows the use of modern JavaScript features.
- Negative: Adds a build step, increasing complexity.
- Risk: Requires maintaining Babel configuration.

**Status:** Accepted

This architectural documentation provides the foundation for detailed system design and implementation. It should be reviewed and updated as the project evolves.
