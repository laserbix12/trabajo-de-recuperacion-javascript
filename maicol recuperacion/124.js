// Obtener posts del usuario con id=1
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then(res => res.json())
  .then(posts => console.log("Posts del usuario 1:", posts))
  .catch(err => console.error(err));
