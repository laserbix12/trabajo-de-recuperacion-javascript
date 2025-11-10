function clasificarNota(nota) {
  if (nota >= 70) {
    return "Aprobado";
  } else if (nota >= 50) {
    return "Requiere mejora";
  } else {
    return "Reprobado";
  }
}

console.log("Nota 85:", clasificarNota(85)); // Aprobado
console.log("Nota 60:", clasificarNota(60)); // Requiere mejora
console.log("Nota 45:", clasificarNota(45)); // Reprobado
