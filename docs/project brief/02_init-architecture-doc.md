# Portfolio - Architecture

This document outlines the architecture for Personal Portfolio V1, reflecting its design principles, technology stack, and key components during its development phase.

## 1. Overview

Personal Portfolio was a foundational web development project aimed at showcasing basic skills and early projects. Its architecture prioritized simplicity, ease of development, and static deployment.

## 2. Architectural Goals

- **Simplicity:** Maintain a straightforward architecture for quick development and easy understanding.
- **Performance:** Achieve fast loading times characteristic of static websites.
- **Maintainability:** Ensure the codebase is easy to understand and update.
- **Cost-Effectiveness:** Utilize free hosting solutions.

## 3. System Architecture

(Conceptual Diagram - Textual Representation)

```
+-------------------+       +-------------------+
|   Developer       |       |   GitHub Pages    |
| (Local Machine)   |       | (Static Hosting)  |
+---------+---------+       +---------+---------+
          |                             ^
          | Build Process               | Serve Static Files
          v                             |
+---------+---------+       +---------+---------+
|   Source Code     |------>|   Static Assets   |
| (HTML, CSS, JS,   |       | (HTML, CSS, JS,   |
|  JSON Content)    |       |  Images)          |
+-------------------+       +-------------------+
```

**Explanation:**

- **Source Code:** Consists of HTML templates, CSS styles, JavaScript logic, and JSON files for content.
- **Build Process:** Webpack and Handlebars are used to compile the source code into static HTML, CSS, and JavaScript assets.
- **Static Assets:** The generated static files are deployed to GitHub Pages.
- **GitHub Pages:** Serves these static files to users' browsers.

## 4. Architectural Decisions

| ID  | Decision                                        | Rationale                                                              |
| --- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| 001 | **Frontend Framework: JavaScript**              | To demonstrate proficiency in JavaScript for UI development.           |
| 002 | **Static Site Generator: Webpack & Handlebars** | For efficient bundling of assets and templating of HTML content.       |
| 003 | **Content Management: JSON Files**              | Simple and easy to manage structured data for projects and coursework. |
| 004 | **Hosting: GitHub Pages**                       | Free, reliable, and straightforward hosting for static websites.       |

## 5. Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Build Tools:** Webpack, Handlebars
- **Content:** JSON files
- **Styling:** CSS
- **Hosting:** GitHub Pages
