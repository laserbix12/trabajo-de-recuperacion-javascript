// Ejercicio 115: Mostrar resultado de un cálculo mediante callback
function mostrarResultado(a, b, operacion) {
    const resultado = operacion(a, b);
    console.log("Resultado:", resultado);
}
mostrarResultado(4, 2, (x, y) => x ** y);
