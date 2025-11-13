// Ejercicio 130: Contador que solo cuenta números pares
function crearContadorPares() {
    let cuenta = 0;
    return function(numero) {
        if (numero % 2 === 0) cuenta++;
        return cuenta;
    };
}
const contarPares = crearContadorPares();
console.log(contarPares(2));
console.log(contarPares(3));
console.log(contarPares(4));
