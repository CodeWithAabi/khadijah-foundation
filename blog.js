
function toggleMenu() {
      document.getElementById("navbar").classList.toggle("show");
    }


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".blog-card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 150}ms`; // staggered
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
});





