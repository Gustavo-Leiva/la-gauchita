// refresca el calendario de Google cada 30 segundos
setInterval(() => {
  const iframe = document.querySelector(".calendario-frame");

  if (iframe) {
    iframe.src = iframe.src + "?refresh=" + new Date().getTime();
  }
}, 30000);