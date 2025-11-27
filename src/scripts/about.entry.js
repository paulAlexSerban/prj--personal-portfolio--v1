import "../styles/about.scss";

const animateStats = () => {
  const statNumbers = document.querySelectorAll(".stats__number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const count = parseInt(target.getAttribute("data-count"));
          const duration = 2000; // 2 seconds
          const step = count / (duration / 16); // 60fps
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= count) {
              current = count;
              clearInterval(timer);
            }
            target.textContent = Math.floor(current);
          }, 16);

          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((stat) => observer.observe(stat));
};

document.addEventListener("DOMContentLoaded", () => {
  animateStats();
});
