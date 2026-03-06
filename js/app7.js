document.addEventListener("DOMContentLoaded", () => {

flatpickr("#fechaEntrada",{
  locale:"es",
  dateFormat:"d/m/Y",
  minDate:"today"
});

flatpickr("#fechaSalida",{
  locale:"es",
  dateFormat:"d/m/Y",
  minDate:"today"
});

});