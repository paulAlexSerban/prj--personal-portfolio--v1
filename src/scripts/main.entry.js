import "../styles/main.scss";

(() => {
  // // script.js
  // Animate skill bars on scroll
  // const animateSkillBars = () => {
  //   const skillItems = document.querySelectorAll(".skill-item");
  //   skillItems.forEach((item) => {
  //     const level = item.getAttribute("data-level");
  //     const progressBar = item.querySelector(".skill-progress");
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (progressBar && entry.isIntersecting) {
  //             progressBar.style.width = `${level}%`;
  //             observer.unobserve(entry.target);
  //           }
  //         });
  //       },
  //       { threshold: 0.5 }
  //     );
  //     observer.observe(item);
  //   });
  // };
  // animateSkillBars();
  // Animate stats counter
  // Load projects
  // const loadProjects = () => {
  //   const projects = [
  //     {
  //       title: "Distributed Task Queue",
  //       description:
  //         "A scalable task queue system built with Node.js and Redis, handling millions of jobs daily.",
  //       technologies: ["Node.js", "Redis", "Docker", "AWS"],
  //       demoLink: "#",
  //       codeLink: "#",
  //     },
  //     {
  //       title: "Real-time Analytics Dashboard",
  //       description:
  //         "Interactive dashboard for monitoring application performance with real-time data visualization.",
  //       technologies: ["React", "TypeScript", "WebSocket", "D3.js"],
  //       demoLink: "#",
  //       codeLink: "#",
  //     },
  //     {
  //       title: "Microservices Architecture",
  //       description:
  //         "Cloud-native application with 10+ microservices, CI/CD pipeline, and automated scaling.",
  //       technologies: ["Kubernetes", "Docker", "AWS", "Terraform"],
  //       demoLink: "#",
  //       codeLink: "#",
  //     },
  //     {
  //       title: "Machine Learning API",
  //       description:
  //         "RESTful API for serving ML models with automatic model versioning and A/B testing.",
  //       technologies: ["Python", "FastAPI", "MLflow", "Docker"],
  //       demoLink: "#",
  //       codeLink: "#",
  //     },
  //     {
  //       title: "Blockchain Explorer",
  //       description:
  //         "Web application for exploring blockchain transactions and smart contract interactions.",
  //       technologies: ["Vue.js", "Web3.js", "Ethereum", "GraphQL"],
  //       demoLink: "#",
  //       codeLink: "#",
  //     },
  //     {
  //       title: "DevOps Automation Platform",
  //       description:
  //         "Platform for automating deployment pipelines, monitoring, and infrastructure management.",
  //       technologies: ["Go", "Kubernetes", "Prometheus", "Grafana"],
  //       demoLink: "#",
  //       codeLink: "#",
  //     },
  //   ];
  //   const projectsGrid = document.querySelector(".projects-grid");
  //   projects.forEach((project) => {
  //     const projectCard = document.createElement("div");
  //     projectCard.className = "project-card";
  //     projectCard.innerHTML = `
  //             <div class="project-header">
  //                 <h3 class="project-title">${project.title}</h3>
  //                 <p class="project-description">${project.description}</p>
  //                 <div class="project-tech">
  //                     ${project.technologies
  //                       .map(
  //                         (tech) => `<span class="tech-tag">${tech}</span>`
  //                       )
  //                       .join("")}
  //                 </div>
  //             </div>
  //             <div class="project-links">
  //                 <a href="${
  //                   project.demoLink
  //                 }" class="project-link" target="_blank">
  //                     <span>Live Demo</span>
  //                 </a>
  //                 <a href="${
  //                   project.codeLink
  //                 }" class="project-link" target="_blank">
  //                     <span>View Code</span>
  //                 </a>
  //             </div>
  //         `;
  //     projectsGrid.appendChild(projectCard);
  //   });
  // };
  // Initialize animations and content
  // animateStats();
  // loadProjects();
  // Mobile menu functionality
  // const mobileMenuBtn = document.querySelector(".mobile-menu-button");
  // const navLinks = document.querySelector(".nav-links");
  // mobileMenuBtn.addEventListener("click", function () {
  //   this.classList.toggle("active");
  //   navLinks.classList.toggle("active");
  // });
  // Close mobile menu when clicking on a link
  // document.querySelectorAll(".nav-link").forEach((link) => {
  //   link.addEventListener("click", () => {
  //     mobileMenuBtn.classList.remove("active");
  //     navLinks.classList.remove("active");
  //   });
  // });
  // Navbar background on scroll
  // window.addEventListener("scroll", function () {
  //   const navbar = document.getElementById("navbar");
  //   if (window.scrollY > 50) {
  //     navbar.style.background = "var(--glass-bg)";
  //     navbar.style.backdropFilter = "blur(10px)";
  //   } else {
  //     navbar.style.background = "transparent";
  //     navbar.style.backdropFilter = "none";
  //   }
  // });
  // Smooth scrolling for anchor links
  //   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //     anchor.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       const target = document.querySelector(this.getAttribute("href"));
  //       if (target) {
  //         target.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       }
  //     });
  //   });
  // });
  // Add this to your existing script.js
  // Competency Matrix Functionality
  // function initCompetencyMatrix() {
  //   const matrixTabs = document.querySelectorAll(".matrix-tab");
  //   const matrixDomains = document.querySelectorAll(".matrix-domain");
  //   // Tab switching functionality
  //   matrixTabs.forEach((tab) => {
  //     tab.addEventListener("click", function () {
  //       const targetDomain = this.getAttribute("data-domain");
  //       // Update active tab
  //       matrixTabs.forEach((t) => t.classList.remove("active"));
  //       this.classList.add("active");
  //       // Show target domain
  //       matrixDomains.forEach((domain) => {
  //         domain.classList.remove("active");
  //         if (domain.id === targetDomain) {
  //           domain.classList.add("active");
  //         }
  //       });
  //       // Animate proficiency bars when domain becomes visible
  //       setTimeout(() => {
  //         animateProficiencyBars();
  //       }, 300);
  //     });
  //   });
  //   // Animate subject proficiency bars on scroll
  //   function animateProficiencyBars() {
  //     const subjectItems = document.querySelectorAll(".subject-item");
  //     subjectItems.forEach((item) => {
  //       const proficiency = parseInt(item.getAttribute("data-proficiency"));
  //       const proficiencyBar = item.querySelector(".subject-proficiency");
  //       const observer = new IntersectionObserver(
  //         (entries) => {
  //           entries.forEach((entry) => {
  //             if (entry.isIntersecting && proficiencyBar) {
  //               // Calculate width based on proficiency level (1-10 scale)
  //               const width = (proficiency / 10) * 100;
  //               proficiencyBar.style.setProperty(
  //                 "--proficiency-width",
  //                 `${width}%`
  //               );
  //               observer.unobserve(entry.target);
  //             }
  //           });
  //         },
  //         { threshold: 0.5 }
  //       );
  //       observer.observe(item);
  //     });
  //   }
  //   // Initialize animations
  //   animateProficiencyBars();
  //   // Add keyboard navigation for matrix tabs
  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
  //       const activeTab = document.querySelector(".matrix-tab.active");
  //       const tabs = Array.from(matrixTabs);
  //       const currentIndex = tabs.indexOf(activeTab);
  //       let nextIndex;
  //       if (e.key === "ArrowRight") {
  //         nextIndex = (currentIndex + 1) % tabs.length;
  //       } else {
  //         nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  //       }
  //       tabs[nextIndex].click();
  //     }
  //   });
  // }
  // Initialize when DOM is loaded
  // document.addEventListener("DOMContentLoaded", function () {
  //   initCompetencyMatrix();
  //   // Add tooltip functionality for subject items
  //   const subjectItems = document.querySelectorAll(".subject-item");
  //   subjectItems.forEach((item) => {
  //     const proficiency = item.getAttribute("data-proficiency");
  //     const proficiencyText = getProficiencyText(proficiency);
  //     item.setAttribute(
  //       "title",
  //       `Proficiency: ${proficiency}/10 - ${proficiencyText}`
  //     );
  //   });
  //   function getProficiencyText(level) {
  //     const levelNum = parseInt(level);
  //     if (levelNum <= 3) return "Learning";
  //     if (levelNum <= 6) return "Proficient";
  //     if (levelNum <= 8) return "Advanced";
  //     return "Expert";
  //   }
  // });
  // Skills Section Interactions
  // document.addEventListener("DOMContentLoaded", function () {
  //   // Add subtle animations to skill items on scroll
  //   const skillItems = document.querySelectorAll(".skill-item");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.style.animationPlayState = "running";
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );
  //   skillItems.forEach((item) => {
  //     item.style.animationPlayState = "paused";
  //     observer.observe(item);
  //   });
  //   // Add click to copy functionality for skills
  //   skillItems.forEach((item) => {
  //     item.addEventListener("click", function () {
  //       const skillText = this.textContent;
  //       navigator.clipboard.writeText(skillText).then(() => {
  //         // Visual feedback
  //         const originalText = this.textContent;
  //         this.textContent = "✓ Copied!";
  //         this.style.background = "var(--accent-color)";
  //         this.style.color = "var(--primary-bg)";
  //         setTimeout(() => {
  //           this.textContent = originalText;
  //           this.style.background = "";
  //           this.style.color = "";
  //         }, 1000);
  //       });
  //     });
  //   });
  //   // Add keyboard navigation for accessibility
  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "Tab") {
  //       // Add focus styles for keyboard users
  //       const focusedElement = document.activeElement;
  //       if (focusedElement.classList.contains("skill-item")) {
  //         focusedElement.style.outline = "2px solid var(--accent-color)";
  //         focusedElement.style.outlineOffset = "2px";
  //       }
  //     }
  //   });
  // });
  // Design System Interactions
  // Theme Toggle
  // const themeToggle = document.getElementById("themeToggle");
  // const themeIcon = themeToggle.querySelector(".theme-icon");
  // themeToggle.addEventListener("click", function () {
  //   const currentTheme = document.documentElement.getAttribute("data-theme");
  //   if (currentTheme === "light") {
  //     document.documentElement.removeAttribute("data-theme");
  //     themeIcon.textContent = "🌙";
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.setAttribute("data-theme", "light");
  //     themeIcon.textContent = "☀️";
  //     localStorage.setItem("theme", "light");
  //   }
  // });
  // Check for saved theme preference
  // const savedTheme = localStorage.getItem("theme");
  // if (savedTheme === "light") {
  //   document.documentElement.setAttribute("data-theme", "light");
  //   themeIcon.textContent = "☀️";
  // }
  // Smooth scrolling for navigation
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     const target = document.querySelector(this.getAttribute("href"));
  //     if (target) {
  //       target.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   });
  // });
  // Interactive form elements
  // const formInputs = document.querySelectorAll("input, select");
  // formInputs.forEach((input) => {
  //   input.addEventListener("focus", function () {
  //     this.parentElement.classList.add("focused");
  //   });
  //   input.addEventListener("blur", function () {
  //     this.parentElement.classList.remove("focused");
  //   });
  // });
  // Component copy functionality
  // const copyButtons = document.querySelectorAll(".button");
  // copyButtons.forEach((button) => {
  //   button.addEventListener("click", function (e) {
  //     if (this.textContent.includes("View Source")) {
  //       e.preventDefault();
  //       // In a real implementation, this would copy component code
  //       const originalText = this.textContent;
  //       this.textContent = "Source Code Copied!";
  //       setTimeout(() => {
  //         this.textContent = originalText;
  //       }, 2000);
  //     }
  //   });
  // });
  // Matrix tab functionality for showcase
  // const matrixTabs = document.querySelectorAll(".matrix-tab");
  // matrixTabs.forEach((tab) => {
  //   tab.addEventListener("click", function () {
  //     matrixTabs.forEach((t) => t.classList.remove("active"));
  //     this.classList.add("active");
  //   });
  // });
  // Animate proficiency bars in competency matrix pattern
  // const subjectItems = document.querySelectorAll(".subject-item");
  // subjectItems.forEach((item) => {
  //   const proficiency = parseInt(item.getAttribute("data-proficiency"));
  //   const proficiencyBar = item.querySelector(".subject-proficiency");
  //   if (proficiencyBar) {
  //     setTimeout(() => {
  //       proficiencyBar.style.width = `${(proficiency / 10) * 100}%`;
  //     }, 500);
  //   }
  // });
  // Add keyboard navigation
  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "Tab") {
  //       // Add focus styles for accessibility
  //       const focused = document.activeElement;
  //       if (
  //         focused.classList.contains("button") ||
  //         focused.classList.contains("matrix-tab") ||
  //         focused.classList.contains("skill-item")
  //       ) {
  //         focused.style.outline = "2px solid var(--accent-color)";
  //         focused.style.outlineOffset = "2px";
  //       }
  //     }
  // });
})();
