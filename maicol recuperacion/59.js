// Ejercicio 27: Comprobar si un número es primo
let numPrimo = 13;
let esPrimo = true;
if (numPrimo < 2) esPrimo = false;
for (let i = 2; i <= Math.sqrt(numPrimo); i++) {
    if (numPrimo % i === 0) esPrimo = false;
}
console.log(numPrimo + " es primo:", esPrimo);
