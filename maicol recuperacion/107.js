// Ejercicio 159: Manejo de errores HTTP
fetch("https://jsonplaceholder.typicode.com/404")
  .then(res => {
    if (!res.ok) throw new Error("Recurso no encontrado (404)");
    return res.json();
  })
  .catch(error => console.error("❌ Error:", error.message));
