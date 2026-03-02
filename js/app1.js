// ===== CARRUSEL AUTOMÁTICO =====
let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slider img');

function showSlide(index){
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);
