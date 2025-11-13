// Ejercicio 118: Simular carga de datos con callback
function cargarDatos(callback) {
    console.log("Cargando datos...");
    setTimeout(() => {
        callback("Datos cargados correctamente");
    }, 2000);
}
cargarDatos(mensaje => console.log(mensaje));
