// Versión normal
const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
};

// Versión corta (return implícito)
const areaTrianguloCorto = (base, altura) => (base * altura) / 2;

console.log("Área:", areaTriangulo(10, 5)); // 25
