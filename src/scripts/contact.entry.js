import "../styles/contact.scss";

document.addEventListener("DOMContentLoaded", function () {

  const decodeOnHover = () => {
    const encodedEmails = document.querySelectorAll(".encoded-email");
    encodedEmails.forEach((element) => {
      element.addEventListener("mouseover", () => {
        const encodedHref = element.getAttribute("href");
        try {
          const decodedHref = atob(encodedHref);
          element.setAttribute("href", decodedHref);
        } catch (e) {
          console.error("Failed to decode email:", e);
        }
      });
      element.addEventListener("mouseout", () => {
        const decodedHref = element.getAttribute("href");
        try {
          const encodedHref = btoa(decodedHref);
          element.setAttribute("href", encodedHref);
        } catch (e) {
          console.error("Failed to encode email:", e);
        }
      });
      element.addEventListener("focus", (e) => {
        const encodedHref = element.getAttribute("href");
        try {
          const decodedHref = atob(encodedHref);
          element.setAttribute("href", decodedHref);
        } catch (e) {
          console.error("Failed to decode email:", e);
        }
      });
      element.addEventListener("blur", (e) => {
        const decodedHref = element.getAttribute("href");
        try {
          const encodedHref = btoa(decodedHref);
          element.setAttribute("href", encodedHref);
        } catch (e) {
          console.error("Failed to encode email:", e);
        }
      });
    });
  };
  decodeOnHover();
});
