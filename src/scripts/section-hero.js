import "../styles/section-hero.scss";

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.section-hero__base');
    const terminalWindow = document.querySelector('.terminal__base');
    const scrollHint = document.querySelector('.section-hero__scroll-hint');

    // Text Reveal Animation for terminal output
    const animateTextReveal = () => {
        const textElements = document.querySelectorAll('.terminal__output .text-reveal');
        textElements.forEach((element, index) => {
            // Split text into characters for animation
            const text = element.textContent;
            element.innerHTML = ''; // Clear original content

            text.split('').forEach((char, charIndex) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = 0;
                span.style.transform = 'translateY(20px)';
                span.style.display = 'inline-block';
                span.style.transition = `opacity 0.05s ease-out ${charIndex * 20 + index * 200}ms, transform 0.05s ease-out ${charIndex * 20 + index * 200}ms`;
                element.appendChild(span);

                setTimeout(() => {
                    span.style.opacity = 1;
                    span.style.transform = 'translateY(0)';
                }, 100); // Small delay to kick off animation
            });
        });

        // Animate buttons
        const animatedButtons = document.querySelectorAll('.hero-buttons .animated-item');
        animatedButtons.forEach((button, index) => {
            button.style.opacity = 0;
            button.style.transform = 'translateY(20px)';
            button.style.transition = `opacity 0.3s ease-out ${index * 100 + textElements.length * 200}ms, transform 0.3s ease-out ${index * 100 + textElements.length * 200}ms`;
            setTimeout(() => {
                button.style.opacity = 1;
                button.style.transform = 'translateY(0)';
            }, 100);
        });
    };

    // Subtle Parallax Effect
    const applyParallax = () => {
        if (!heroSection || !terminalWindow) return;

        const scrollY = window.scrollY;
        // Adjust terminal window's position slightly on scroll
        terminalWindow.style.transform = `translateY(${scrollY * 0.1}px)`;
        // Fade out scroll hint
        scrollHint.style.opacity = 1 - scrollY / 300;
    };

    // Initial animations
    animateTextReveal();
    window.addEventListener('scroll', applyParallax);
    applyParallax(); // Apply initial parallax state
});

