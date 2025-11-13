// Listar usuarios con sus emails
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    users.forEach(u => console.log(`${u.name} - ${u.email}`));
  });
