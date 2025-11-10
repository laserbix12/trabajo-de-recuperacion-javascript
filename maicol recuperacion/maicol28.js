export const VERSION = "1.0.0";

export function saludarUsuario(nombre) {
  return `Hola ${nombre}. Versión: ${VERSION}`;
}

export const MAX_USUARIOS = 100; // Se pueden exportar varios elementos

import { VERSION, saludarUsuario } from './utilidades.js';

console.log("Versión:", VERSION);
console.log(saludarUsuario("Ana"));
// Hola Ana. Versión: 1.0.0
