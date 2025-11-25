# Personal Portfolio V1

## Overview
This is a simple, static personal portfolio website to showcase projects, coursework, and software engineering skills. It is built with HTML, CSS (SASS), JavaScript, Webpack, and Handlebars, and is hosted on GitHub Pages.

## Live Demo
You can view the live version of the portfolio [here](https://paulalexserban.github.io/prj--personal-portfolio--v1/).

## Features
- Dynamic navigation bar with active link highlighting and mobile menu toggle
- Light/Dark mode toggle
- Animated Hero section with text reveal and subtle parallax
- About Me section
- Skills section with proficiency indicators
- Experience timeline
- Coursework section
- Technical Arsenal (tools, technologies, methodologies)
- Interactive Competency Matrix for detailed skill assessment
- Projects showcase with interactive filtering
- Contact section with form validation and social links
- Responsive design across various devices

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/paulAlexSerban/prj--personal-portfolio--v1.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd prj--personal-portfolio--v1
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server (with hot-reloading):**
   ```bash
   npm run dev
   ```
   This will serve the site at `http://localhost:9000/`.

5. **Build the project for production:**
   ```bash
   npm run build
   ```
   This will create a `dist` directory with the optimized and minified files.

## Deployment
The site is automatically deployed to GitHub Pages using a GitHub Actions workflow. Any changes pushed to the `main` branch will trigger a new deployment. The deployment process involves:
1. Checking out the code.
2. Setting up Node.js environment.
3. Installing project dependencies.
4. Building the project for production.
5. Deploying the contents of the `./dist` directory to GitHub Pages.

## Development Conventions & Structure
The project follows a component-based architecture.
- **File Structure:** Data (`src/data/*.json`), Markup (`src/markup/*.hbs`, `src/markup/partials/*.hbs`), Styles (`src/styles/*.scss`, `src/styles/partials/*.scss`), and Scripts (`src/scripts/*.js`) are organized in their respective directories.
- **Styling:** Uses SASS with a clear separation of concerns, supporting light and dark modes via CSS variables.
- **Templating:** Handlebars is used for templating, with data sourced from JSON files, ensuring a clean separation of data and presentation.
- **JavaScript:** Modern JavaScript (ES6+) is used, organized into modules and bundled with Webpack.
