const fs = require('fs');

function verificarArchivo(nombreArchivo) {
  if (fs.existsSync(nombreArchivo)) {
    console.log(`✅ El archivo '${nombreArchivo}' existe.`);
  } else {
    console.log(`❌ El archivo '${nombreArchivo}' NO existe.`);
  }
}

verificarArchivo('mensaje.txt');
