// ---- Mobile nav toggle ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("navbar__toggle--open");
    navLinks.classList.toggle("navbar__links--open");
  });
}

// ---- Image slider ----
const track = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("sliderCounter");

if (track && prevBtn && nextBtn) {
  const slides = track.querySelectorAll(".slider__slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
    }
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    updateSlider();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
}