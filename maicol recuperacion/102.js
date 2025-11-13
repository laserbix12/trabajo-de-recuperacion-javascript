// Función que simula una operación asincrónica con promesas
function simularOperacionAsincrona(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("Operación completada con éxito ✅");
      } else {
        reject("❌ Error: La operación falló.");
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
}

// Consumo de una promesa fallida
simularOperacionAsincrona(false)
  .then(mensaje => {
    console.log("Éxito (Promise):", mensaje);
  })
  .catch(error => {
    console.error("Error (Promise):", error);
  });
