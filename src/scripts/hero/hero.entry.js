import "../../styles/hero.scss";

const config = {
  selectors: {
    heroSection: ".section-hero__base",
    terminalWindow: ".terminal__base",
    scrollHint: ".section-hero__scroll-hint",
  },
};

const heroSection = document.querySelector(config.selectors.heroSection);
const terminalWindow = document.querySelector(config.selectors.terminalWindow);
const scrollHint = document.querySelector(config.selectors.scrollHint);

const applyParallax = () => {
  if (!heroSection || !terminalWindow) return;
  const scrollY = window.scrollY;
  terminalWindow.style.transform = `translateY(${scrollY * 0.3}px)`;
  scrollHint.style.opacity = 1 - scrollY / 300;
};

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", applyParallax);
  applyParallax(); // Apply initial parallax state
});
