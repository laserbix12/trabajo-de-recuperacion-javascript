// Ejercicio 105: Contar nombres que comienzan con "A"
function contarNombresConA(nombres) {
    return nombres.filter(n => n.startsWith("A")).length;
}
console.log(contarNombresConA(["Ana", "Pedro", "Andrés", "Lucía"]));
