let visitas = localStorage.getItem("visitas") || 0;
visitas = Number(visitas) + 1;
localStorage.setItem("visitas", visitas);

console.log(`Has visitado esta página ${visitas} veces.`);
