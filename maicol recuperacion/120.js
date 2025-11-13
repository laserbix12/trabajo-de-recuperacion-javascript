// Ejercicio 169: Mostrar "Cargando..." mientras se obtiene la respuesta
async function obtenerDatos() {
  console.log("⏳ Cargando datos...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log("✅ Datos cargados:", data.slice(0, 3));
}
obtenerDatos();
