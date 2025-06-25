// Smooth scrolling and basic interactivity

document.addEventListener("DOMContentLoaded", () => {
  // Optional smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // More interactivity (dark mode toggles, animations, etc.) can be added here
});


