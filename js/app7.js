async function obtenerReservas() {
  const url = "https://calendar.google.com/calendar/ical/reservas.lagauchita%40gmail.com/public/basic.ics";

  const respuesta = await fetch(url);
  const texto = await respuesta.text();

  const fechasOcupadas = [];

  const eventos = texto.split("BEGIN:VEVENT");

  eventos.forEach(evento => {
    const inicio = evento.match(/DTSTART:(\d+)/);
    const fin = evento.match(/DTEND:(\d+)/);

    if (inicio && fin) {
      fechasOcupadas.push({
        from: inicio[1],
        to: fin[1]
      });
    }
  });

  return fechasOcupadas;
}

obtenerReservas().then(fechas => {

  flatpickr("#fechaEntrada", {
    dateFormat: "d/m/Y",
    disable: fechas
  });

});