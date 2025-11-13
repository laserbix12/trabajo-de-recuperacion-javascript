// Ejercicio 135: Calcular el promedio con arrow function
const promedio = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(promedio([5, 10, 15]));
