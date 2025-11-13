// Ejercicio 160: Enviar un nuevo post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Nuevo post desde JavaScript",
    body: "Este post fue creado con Fetch API",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("✅ Post creado:", data))
  .catch(err => console.error("Error:", err));
