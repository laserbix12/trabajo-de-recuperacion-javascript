const fs = require('fs');

fs.appendFileSync('mensaje.txt', '\nEsta línea fue añadida después.');
console.log("Archivo actualizado correctamente.");
