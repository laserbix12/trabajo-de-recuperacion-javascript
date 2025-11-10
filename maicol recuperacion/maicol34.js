const fs = require('fs');

if (fs.existsSync('mensaje.txt')) {
  fs.unlinkSync('mensaje.txt');
  console.log("Archivo eliminado con éxito.");
} else {
  console.log("El archivo no existe.");
}
