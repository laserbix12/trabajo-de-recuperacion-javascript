let pilaLibros = ["El Quijote", "100 Años de Soledad", "Fahrenheit 451"];

console.log("Libros iniciales:", pilaLibros.length); 

pilaLibros.push("Moby Dick");
console.log("Después de push:", pilaLibros.length); 

let libroEliminado = pilaLibros.pop();
console.log("Libro removido:", libroEliminado);
console.log("Libros finales:", pilaLibros.length); 
