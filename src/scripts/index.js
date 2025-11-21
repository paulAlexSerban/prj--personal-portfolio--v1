import '../styles/styles.scss';

(() => {
  // script.js
  document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Load projects from JSON (simulated)
    loadProjects();

    // Navbar background change on scroll
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
      } else {
        navbar.style.backgroundColor = "var(--secondary-color)";
      }
    });
  });

  // Simulated project data (in a real implementation, this would come from a JSON file)
  function loadProjects() {
    const projects = [
      {
        title: "React Playground",
        description:
          "A collection of React components and experiments to explore various React patterns and hooks.",
        technologies: ["React", "JavaScript", "CSS"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        title: "Bash Script Collection",
        description:
          "Useful bash scripts for automation, system administration, and development workflows.",
        technologies: ["Bash", "Linux"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        title: "Data Structures & Algorithms",
        description:
          "Implementation of common data structures and algorithms in JavaScript and TypeScript.",
        technologies: ["JavaScript", "TypeScript", "Algorithms"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        title: "Frontend Playground",
        description:
          "A collection of frontend challenges and experiments.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        title: "freeCodeCamp Projects",
        description:
          "Completed projects from freeCodeCamp curriculum including responsive web design and JavaScript algorithms.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        title: "Open Classrooms Projects",
        description:
          "Projects completed as part of Open Classrooms certification programs.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
        demoLink: "#",
        codeLink: "#",
      },
    ];

    const projectsGrid = document.querySelector(".projects-grid");

    projects.forEach((project) => {
      const projectTile = document.createElement("div");
      projectTile.className = "project-tile";

      projectTile.innerHTML = `
            <div class="project-image">
                <span>Project Image</span>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies
                      .map((tech) => `<span class="skill-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${
                      project.demoLink
                    }" class="project-link" target="_blank">Live Demo</a>
                    <a href="${
                      project.codeLink
                    }" class="project-link" target="_blank">View Code</a>
                </div>
            </div>
        `;

      projectsGrid.appendChild(projectTile);
    });
  }
})();
