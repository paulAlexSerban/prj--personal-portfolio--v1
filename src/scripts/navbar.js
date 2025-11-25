import "../styles/navbar.scss";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const darkThemeIcon = "🌙";
    const lightThemeIcon = "☀️";

    // Theme Toggle
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle.querySelector(".navbar__theme-icon");

    themeToggle.addEventListener("click",  () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      
      if (currentTheme === "light") {
        document.documentElement.removeAttribute("data-theme");
        themeIcon.textContent = darkThemeIcon;
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.textContent = lightThemeIcon;
        localStorage.setItem("theme", "light");
      }
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      themeIcon.textContent = lightThemeIcon;
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".navbar__mobile-menu-button");
    const navbarLinks = document.getElementById("navbar-links");

    if (mobileMenuButton && navbarLinks) {
      mobileMenuButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
        mobileMenuButton.classList.toggle("active");
      });

      // Close menu when a link is clicked (for single-page navigation)
      navbarLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navbarLinks.classList.remove("active");
          mobileMenuButton.classList.remove("active");
        });
      });
    }

    // Active Link Highlighting
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar__link");

    const highlightNavLink = () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", highlightNavLink);
    // Call on load to set initial active link
    highlightNavLink();
  });
})();
