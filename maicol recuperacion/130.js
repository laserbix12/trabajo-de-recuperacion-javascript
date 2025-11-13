const preferencias = {
  tema: "oscuro",
  tamañoFuente: "16px",
  mostrarNotificaciones: true
};

// Guardar
localStorage.setItem("preferencias", JSON.stringify(preferencias));

// Leer y usar
const prefs = JSON.parse(localStorage.getItem("preferencias"));
console.log(`Tema: ${prefs.tema}, Fuente: ${prefs.tamañoFuente}, Notificaciones: ${prefs.mostrarNotificaciones}`);
