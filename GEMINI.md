# Project Overview

This is a static personal portfolio website built to showcase projects, coursework, and software engineering skills.

**Key Technologies:**

*   **Frontend:** HTML, CSS (SASS), JavaScript (ES6+)
*   **Build Tool:** Webpack
*   **Templating:** Handlebars
*   **Hosting:** GitHub Pages

**Architecture:**

The project follows a component-based architecture. The website is a single-page application with different sections. The HTML is generated using Handlebars templates, with a base template and partials for each section. The styling is done with SASS, with separate files for themes, base styles, and components. The JavaScript is bundled with Webpack and includes features like animations and interactive elements. Data for the templates is sourced from JSON files in the `src/data` directory.

# Building and Running

**Installation:**

```bash
npm install
```

**Development:**

To start the development server with hot-reloading, run:

```bash
npm run dev
```

This will serve the site at `http://localhost:9000/`.

To build the project for development with file watching, run:

```bash
npm run start
```

**Production:**

To build the project for production, run:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified files.

# Development Conventions

**File Structure:**

*   `src/data`: Contains JSON files with data for the Handlebars templates.
*   `src/markup`: Contains Handlebars templates (`.hbs`).
    *   `partials`: Contains reusable Handlebars partials.
*   `src/scripts`: Contains JavaScript files. Each `.js` file is an entry point for Webpack.
*   `src/styles`: Contains SASS files (`.scss`).
    *   `partials`: Contains reusable SASS partials for themes, base styles, etc.
*   `public`: Contains static assets that are copied to the output directory.
*   `dist`: The output directory for the bundled and generated files.

**Styling:**

The project uses SASS for styling, with a clear separation of concerns. The `_theme.scss` file defines CSS variables for theming, supporting both light and dark modes.

**Templating:**

The project uses Handlebars for templating. Data is passed to the templates from JSON files. This allows for a clean separation of data and presentation.

**JavaScript:**

The project uses modern JavaScript (ES6+), transpiled with Babel. The code is organized into modules.
