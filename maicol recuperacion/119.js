// Ejercicio 168: Enviar datos de un formulario con Fetch
document.querySelector("form").addEventListener("submit", async e => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email })
  });
  const data = await res.json();
  console.log("📝 Usuario enviado:", data);
});
