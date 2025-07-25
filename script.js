document.addEventListener("DOMContentLoaded", () => {
    // Scroll reveal
    const sections = document.querySelectorAll("section");
  
    const revealOnScroll = () => {
      const triggerPoint = window.innerHeight * 0.85;
  
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerPoint) {
          section.classList.add("reveal");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
  
    // Dark mode toggle
    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  