// Carga el sonido
const sonido = new Audio("anime-ahh.mp3");

// Selecciona todos los inputs y textareas
const campos = document.querySelectorAll("input, textarea");

// Cuando se presione una tecla dentro de los campos
campos.forEach(campo => {
  campo.addEventListener("keydown", (e) => {
    // Solo suena si es letra o número
    if (/^[a-zA-Z0-9]$/.test(e.key)) {
      sonido.currentTime = 0; // Reinicia el sonido
      sonido.play();          // Reproduce el sonido
    }
  });
});
