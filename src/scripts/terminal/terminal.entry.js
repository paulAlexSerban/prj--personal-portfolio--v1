import "../../styles/terminal.scss";

const config = {
  selectors: {
    textReveal: ".terminal__output .text-reveal",
    blinkingCursor: ".terminal__line--blinking-cursor",
  },
  animation: {
    typingDelay: 10, // Delay between typing each character
    lineDelay: 300, // Delay between each line
    cursorActivationDelay: 4500, // Total delay before activating the blinking cursor
  },
};

const addSpanWithAnimation = (char, delay) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char; // Preserve spaces
  span.style.opacity = 0;
  span.style.display = "inline-block";
  span.style.transition = `opacity 0.05s ease-out ${delay}ms, transform 0.05s ease-out ${delay}ms`;

  setTimeout(() => {
    span.style.opacity = 1;
  }, delay);

  return span;
};

const animateTextRevealForElement = (element, delayOffset) => {
  Array.from(element.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      node.textContent = "";

      text.split("").forEach((char, index) => {
        const span = addSpanWithAnimation(
          char,
          delayOffset + index * config.animation.typingDelay
        );
        element.appendChild(span);
      });
    }
  });
};

const animateTextReveal = () => {
  const textElements = document.querySelectorAll(config.selectors.textReveal);
  const terminalLineBlinkingCursor = document.querySelector(
    config.selectors.blinkingCursor
  );

  textElements.forEach((element, index) => {
    const originalHTML = element.innerHTML;
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = originalHTML;
    element.innerHTML = "";

    Array.from(tempContainer.childNodes).forEach((node, lineIndex) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const clonedNode = node.cloneNode(true);
        element.appendChild(clonedNode);
        animateTextRevealForElement(
          clonedNode,
          index * config.animation.lineDelay + lineIndex * config.animation.lineDelay
        );
      }
    });
  });

  setTimeout(() => {
    if (terminalLineBlinkingCursor) {
      terminalLineBlinkingCursor.classList.add("active");
    }
  }, config.animation.cursorActivationDelay);
};

document.addEventListener("DOMContentLoaded", () => {
  animateTextReveal();
});
