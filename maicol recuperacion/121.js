// Obtener un post y mostrarlo en consola
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(post => console.log("📝 Post:", post))
  .catch(err => console.error("Error:", err));
