// Ejercicio 166: Manejo de errores con async/await
async function obtenerPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/post_inexistente");
    if (!res.ok) throw new Error("No se pudo obtener el post");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("⚠️ Error:", error.message);
  }
}
obtenerPost();
