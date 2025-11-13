// Ejercicio 165: Fetch con async/await
async function obtenerUsuarios() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("👥 Lista de usuarios:", data.map(u => u.name));
  } catch (error) {
    console.error("❌ Error al obtener usuarios:", error);
  }
}
obtenerUsuarios();
