// Ejercicio 123: Crear saludos personalizados con closure
function crearSaludo(prefijo) {
    return function(nombre) {
        return `${prefijo}, ${nombre}!`;
    };
}
const saludarHola = crearSaludo("Hola");
console.log(saludarHola("Juan"));
