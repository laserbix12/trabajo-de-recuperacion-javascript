// Ejercicio 157: Obtener lista de usuarios
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(usuarios => {
    usuarios.forEach(u => console.log(`👤 ${u.name} (${u.email})`));
  })
  .catch(err => console.error("Error:", err));
