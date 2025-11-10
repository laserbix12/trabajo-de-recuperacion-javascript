export default function sumar(a, b) {
  return a + b;
}
import operacionSuma from './calculadora.js';

const resultado = operacionSuma(8, 7);
console.log("Resultado:", resultado); // 15
