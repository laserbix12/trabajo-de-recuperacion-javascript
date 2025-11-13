// Ejercicio 162: Modificar solo el título de un post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Título cambiado con PATCH" })
})
  .then(res => res.json())
  .then(data => console.log("🛠️ Resultado PATCH:", data));
