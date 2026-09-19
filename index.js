const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          // Remove class when out of view to re-trigger the animation every time you scroll to it
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.5 },
  ); // Triggers when 50% of the section is visible

  const impactTitle = document.querySelector(".impat-title");
  if (impactTitle) {
    observer.observe(impactTitle);
  }
});
