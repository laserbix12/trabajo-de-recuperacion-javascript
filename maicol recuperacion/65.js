function procesarArchivo(nombreArchivo) {
try {
console.log(`Intentando leer el archivo: ${nombreArchivo}`);
// Simulación de una operación que podría fallar
if (nombreArchivo !== "datos.json") {
throw new Error("Archivo no encontrado o inválido.");
}
const contenido = "Contenido del archivo datos.json"; // Simula lectura
console.log("Archivo leído exitosamente:", contenido);
return contenido;
} catch (error) {
console.error("Se produjo un error:", error.message);
// Podríamos lanzar un error personalizado o retornar un valor predeterminado
throw new Error(`Fallo en el procesamiento: ${error.message}`);
} finally {
console.log("Operación de procesamiento de archivo finalizada.");
// Aquí se liberarían recursos, cerrarían conexiones, etc.
}
}

// Caso de éxito
try {
procesarArchivo("datos.json");
} catch (e) {
console.log("Error capturado externamente (éxito):", e.message);
}
console.log("---");

// Caso de error
try {
procesarArchivo("config.txt");
} catch (e) {
console.log("Error capturado externamente (fallo):", e.message);
}