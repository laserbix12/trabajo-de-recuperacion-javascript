// Ejercicio 26: Mostrar los primeros 10 números de Fibonacci
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}
console.log("Serie Fibonacci:", fib);
