// Ejercicio 164: Obtener un usuario y luego sus posts
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(usuario => {
    console.log("👤 Usuario:", usuario.name);
    return fetch(`https://jsonplaceholder.typicode.com/users/${usuario.id}/posts`);
  })
  .then(res => res.json())
  .then(posts => console.log("📬 Posts del usuario:", posts.length))
  .catch(err => console.error("Error:", err));
