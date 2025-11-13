// Ejemplo: Uso de closures en JavaScript
function contador() {
    let cuenta = 0; // Esta variable es parte del entorno léxico de la función interna

    return function() { // Esta es la closure
        cuenta++;
        return cuenta;
    };
}

const miContador = contador(); // 'miContador' ahora es la función interna

console.log(miContador()); // Salida: 1 (accede a 'cuenta' de la función 'contador')
console.log(miContador()); // Salida: 2
console.log(miContador()); // Salida: 3

const otroContador = contador(); // Creamos otra instancia de la closure

console.log(otroContador()); // Salida: 1 (tiene su propia 'cuenta' independiente)
