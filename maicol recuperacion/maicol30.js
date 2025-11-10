export function sumar(a, b) {
  return a + b;
}

export function sumarDoble(a, b) {
  return (a + b) * 2;
}


import { sumar as sumaSimple, sumarDoble as sumaConMultiplicador } from './calculosAvanzados.js';

console.log("Suma simple:", sumaSimple(3, 2)); // 5
console.log("Suma doble:", sumaConMultiplicador(5, 5)); // 20
