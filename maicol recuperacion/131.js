// main.js (Hilo principal)
if (window.Worker) {
const myWorker = new Worker('worker.js'); // Crea un nuevo Web Worker
let contador = 0;

// Enviar mensaje al worker
myWorker.postMessage('Inicia el cálculo');

// Recibir mensaje del worker
myWorker.onmessage = function(e) {
console.log('Mensaje recibido del worker:', e.data);
document.getElementById('resultadoWorker').textContent = e.data;
};

// Ejemplo de interacción en el hilo principal
setInterval(() => {
contador++;
document.getElementById('contadorPrincipal').textContent = `Contador hilo principal: ${contador}`;
}, 100);

} else {
console.log('Tu navegador no soporta Web Workers.');
}

// worker.js (Archivo del Worker)
// self.onmessage = function(e) {
// console.log('Mensaje recibido en el worker:', e.data);
// // Realizar un cálculo intensivo
// let suma = 0;
// for (let i = 0; i < 1000000000; i++) {
// suma += i;
// }
// self.postMessage('Cálculo completado: ' + suma); // Enviar resultado de vuelta
// };