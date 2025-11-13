// Ejercicio 124: Crear alarma con closure
function crearAlarma(mensaje) {
    return function() {
        console.log("🔔 Alarma:", mensaje);
    };
}
const alarma = crearAlarma("Hora de estudiar");
alarma();
