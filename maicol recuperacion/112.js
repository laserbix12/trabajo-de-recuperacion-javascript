// Ejercicio 161: Actualizar un post existente
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: 1,
    title: "Post actualizado",
    body: "Este contenido fue modificado",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("✏️ Post actualizado:", data));
