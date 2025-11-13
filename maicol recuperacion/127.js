const usuario = { nombre: "Pedro", edad: 30 };

// Guardar objeto (convertir a JSON)
localStorage.setItem("usuario", JSON.stringify(usuario));

// Leer objeto
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log("Usuario guardado:", usuarioGuardado);
