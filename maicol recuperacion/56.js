// Ejercicio 24: Contar cuántos números pares hay del 1 al 50
let pares = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) pares++;
}
console.log("Cantidad de números pares del 1 al 50:", pares);
