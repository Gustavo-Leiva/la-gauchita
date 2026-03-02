const whatsapp = document.querySelector('.whatsapp-float');

let targetTop = window.scrollY + window.innerHeight - 80; // posición deseada
let currentTop = targetTop;
const easing = 0.08; // cuanto más bajo, más suave

function animateWhatsapp() {
    // Actualizamos la posición objetivo según scroll
    targetTop = window.scrollY + window.innerHeight - 80;

    // Aplicamos easing para suavizar
    currentTop += (targetTop - currentTop) * easing;

    // Movemos el botón
    whatsapp.style.top = currentTop + 'px';

    // Llamamos al siguiente frame
    requestAnimationFrame(animateWhatsapp);
}

// Iniciamos la animación
animateWhatsapp();