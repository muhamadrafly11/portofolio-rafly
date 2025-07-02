// Popup welcome
document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("welcome-popup").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
  window.scrollTo(0, 0);
});

// Scroll animasi fade-in
const fadeSections = document.querySelectorAll(".fade-in-section");

window.addEventListener("scroll", () => {
  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
