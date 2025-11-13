// Ejercicio 167: Mostrar usuarios en una lista HTML
async function mostrarUsuarios() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const lista = document.createElement("ul");
  data.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.name} (${u.email})`;
    lista.appendChild(li);
  });
  document.body.appendChild(lista);
}
mostrarUsuarios();
