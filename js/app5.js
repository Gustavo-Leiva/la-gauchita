// document.addEventListener("DOMContentLoaded", function(){

// const boton = document.getElementById("btnConsultar");

// boton.addEventListener("click", function(){

// const checkin = document.getElementById("checkin").value;
// const checkout = document.getElementById("checkout").value;

// if(!checkin || !checkout){
// alert("Seleccioná check-in y check-out");
// return;
// }

// const telefono = "5491133684166";

// const mensaje = `Hola! Quiero consultar disponibilidad del ${checkin} al ${checkout} en La Gauchita`;

// const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

// window.open(url,"_blank");

// });

// });
// Calendario para Entrada
document.getElementById("btnConsultar").addEventListener("click", function () {
  const entrada = document.getElementById("fechaEntrada").value;
  const salida = document.getElementById("fechaSalida").value;

  // Modal
  const modal = document.getElementById("modalAviso");
  const textoModal = document.getElementById("textoModal");
  const cerrarModal = document.getElementById("cerrarModal");

  // Función para mostrar modal
  function mostrarModal(mensaje) {
    textoModal.textContent = mensaje;
    modal.style.display = "block";
  }

  // Cerrar modal
  cerrarModal.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

  // Validar campos vacíos
  if (!entrada || !salida) {
    mostrarModal("Por favor completá ambas fechas: entrada y salida.");
    return;
  }

  // Validar que salida no sea anterior a entrada
  const fechaEntrada = new Date(entrada.split("/").reverse().join("-"));
  const fechaSalida = new Date(salida.split("/").reverse().join("-"));

  if (fechaSalida < fechaEntrada) {
    mostrarModal("La fecha de salida no puede ser anterior a la fecha de entrada.");
    return;
  }

  // Mensaje elegante sin emojis problemáticos
  const mensaje = `Hola Laura!\n\nMe gustaría consultar la disponibilidad en La Gauchita.\n\nEntrada: ${entrada}\nSalida: ${salida}\n\n¡Gracias!`;

  const url = `https://wa.me/5491135112751?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});