document.addEventListener('DOMContentLoaded', () => {
  const matrixTabs = document.querySelectorAll('.matrix-tab');
  const matrixDomains = document.querySelectorAll('.matrix-domain');
  const subjectItems = document.querySelectorAll('.subject-item');

  // Handle tab switching
  matrixTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      matrixTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetDomainId = tab.dataset.domain;
      matrixDomains.forEach(domain => {
        if (domain.id === targetDomainId) {
          domain.classList.add('active');
        } else {
          domain.classList.remove('active');
        }
      });
      animateSubjectProficiency(); // Re-animate when tab changes
    });
  });

  // Animate subject proficiency bars
  const animateSubjectProficiency = () => {
    subjectItems.forEach(item => {
      const proficiency = item.dataset.proficiency;
      const proficiencyFill = item.querySelector('.subject-proficiency');
      if (proficiencyFill) {
        proficiencyFill.style.width = '0%'; // Reset before animation
        // Trigger reflow to ensure animation restarts
        void proficiencyFill.offsetWidth; 
        proficiencyFill.style.width = `${proficiency * 10}%`; // Animate to actual proficiency
      }
    });
  };

  // Initial animation on load for the active domain
  animateSubjectProficiency();

  // Handle subject proficiency fill on hover (optional, for subtle interaction)
  subjectItems.forEach(item => {
    const proficiencyFill = item.querySelector('.subject-proficiency');
    if (proficiencyFill) {
      item.addEventListener('mouseenter', () => {
        const proficiency = item.dataset.proficiency;
        proficiencyFill.style.width = `${proficiency * 10}%`;
      });
      item.addEventListener('mouseleave', () => {
        // Optionally reset or maintain last state
      });
    }
  });
});