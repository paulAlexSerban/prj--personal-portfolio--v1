import "../../styles/navbar.scss";

import config from "./navbar.config.js";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(config.selectors.themeToggle);
    const themeIcon = themeToggle.querySelector(config.selectors.themeIcon);
    const sections = document.querySelectorAll(config.selectors.sections);
    const navLinks = document.querySelectorAll(config.selectors.navLink);
    const navbarLinks = document.querySelector(config.selectors.navbarLinks);

    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute(
        config.attributes.dataTheme
      );

      if (currentTheme === "light") {
        document.documentElement.removeAttribute(config.attributes.dataTheme);
        themeIcon.textContent = config.themeIcons.darkThemeIcon;
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute(
          config.attributes.dataTheme,
          "light"
        );
        themeIcon.textContent = config.themeIcons.lightThemeIcon;
        localStorage.setItem("theme", "light");
      }
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.setAttribute(
        config.attributes.dataTheme,
        "light"
      );
      themeIcon.textContent = config.themeIcons.lightThemeIcon;
    }

    const mobileMenuButton = document.querySelector(
      config.selectors.mobileMenuButton
    );

    if (mobileMenuButton && navbarLinks) {
      mobileMenuButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
        mobileMenuButton.classList.toggle("active");
      });

      navbarLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navbarLinks.classList.remove("active");
          mobileMenuButton.classList.remove("active");
        });
      });

      document.addEventListener("click", (event) => {
        if (
          !navbarLinks.contains(event.target) &&
          !mobileMenuButton.contains(event.target)
        ) {
          navbarLinks.classList.remove("active");
          mobileMenuButton.classList.remove("active");
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          navbarLinks.classList.remove("active");
          mobileMenuButton.classList.remove("active");
        }
      });
    }

    const highlightNavLink = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 700; // Adjust for navbar height
        const sectionHeight = section.clientHeight;
        if (
          pageYOffset >= sectionTop &&
          pageYOffset < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink();
  });
})();
