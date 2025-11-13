// Ejercicio 163: Eliminar un post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(() => console.log("🗑️ Post eliminado correctamente"))
  .catch(err => console.error("Error:", err));
