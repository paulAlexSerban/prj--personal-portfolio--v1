import "../styles/section-navbar.scss";

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
  });
})();
