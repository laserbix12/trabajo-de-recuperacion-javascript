// Ejercicio 113: Aplicar un callback a cada elemento de un arreglo
function procesarArreglo(arr, callback) {
    return arr.map(callback);
}
console.log(procesarArreglo([1, 2, 3], n => n * 10));
