let colaClientes = ["Cliente A", "Cliente B", "Cliente C"];

console.log("Cola inicial:", colaClientes);

let atendido = colaClientes.shift(); // Remueve el primero
console.log("Cliente atendido:", atendido);

colaClientes.unshift("Cliente Prioritario"); // Agrega al inicio
console.log("Cola final:", colaClientes);
