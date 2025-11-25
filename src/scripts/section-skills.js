document.addEventListener('DOMContentLoaded', () => {
  const proficiencyLevels = document.querySelectorAll('.proficiency-level');

  const animateProficiencyBars = () => {
    proficiencyLevels.forEach(level => {
      const proficiency = level.style.width;
      level.style.width = '0%'; // Reset to 0 before animating
      setTimeout(() => {
        level.style.width = proficiency; // Animate to the actual proficiency
      }, 100);
    });
  };

  // Trigger animation when the skills section is in view
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProficiencyBars();
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(skillsSection);
  }
});