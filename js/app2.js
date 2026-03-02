document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".carousel-container img");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let current = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
  }

  if (images.length > 0 && prev && next) {

    next.addEventListener("click", () => {
      current = (current + 1) % images.length;
      showImage(current);
    });

    prev.addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });

  }

});