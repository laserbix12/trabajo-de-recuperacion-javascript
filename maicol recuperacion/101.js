function simularOperacionAsincrona(exito) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (exito) {
resolve("Datos obtenidos correctamente."); // La promesa se cumple
} else {
reject("Error al obtener los datos."); // La promesa es rechazada
}
}, 2000); // Simula una operación que tarda 2 segundos
});
}