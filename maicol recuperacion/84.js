// Ejercicio 117: Ejecutar una función después de 3 segundos
function ejecutarDespues(callback) {
    setTimeout(callback, 3000);
}
ejecutarDespues(() => console.log("Han pasado 3 segundos"));
