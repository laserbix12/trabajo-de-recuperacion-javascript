// Ejemplo 1: Función que recibe otra función como argumento
function aplicarOperacion(a, b, operacion) {
    return operacion(a, b);
}

function sumar(x, y) {
    return x + y;
}

function multiplicar(x, y) {
    return x * y;
}

let resultadoSuma = aplicarOperacion(5, 3, sumar);
console.log(resultadoSuma); // Salida: 8

let resultadoMultiplicacion = aplicarOperacion(5, 3, multiplicar);
console.log(resultadoMultiplicacion); // Salida: 15

// Ejemplo 2: Función que devuelve otra función
function crearSaludo(saludoInicial) {
    return function(nombre) {
        return `${saludoInicial}, ${nombre}!`;
    };
}

const saludarHola = crearSaludo("Hola");
const saludarQueTal = crearSaludo("Qué tal");

console.log(saludarHola("Ana"));    // Salida: Hola, Ana!
console.log(saludarQueTal("Pedro")); // Salida: Qué tal, Pedro!
