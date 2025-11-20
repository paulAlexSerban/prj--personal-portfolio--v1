(() => {
  console.log("Personal Portfolio V1 - Entry Point");
})();

// Smooth scrolling for navigation links
document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Interactive hover effect for project tiles
document.querySelectorAll('.project-tile').forEach(tile => {
  tile.addEventListener('mouseover', () => {
    tile.style.transform = 'scale(1.05)';
  });
  tile.addEventListener('mouseout', () => {
    tile.style.transform = 'scale(1)';
  });
});

// Ensure profile link opens in a new tab
document.querySelectorAll('#profile-link').forEach(link => {
  link.setAttribute('target', '_blank');
});
