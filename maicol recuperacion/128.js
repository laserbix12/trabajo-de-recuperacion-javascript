let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Agregar una tarea
tareas.push("Aprender JavaScript");
localStorage.setItem("tareas", JSON.stringify(tareas));

// Mostrar tareas
console.log("Tareas:", JSON.parse(localStorage.getItem("tareas")));
