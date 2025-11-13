// Ejercicio 156: Petición GET básica a una API pública
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Datos del post:", data))
  .catch(error => console.error("Error:", error));
