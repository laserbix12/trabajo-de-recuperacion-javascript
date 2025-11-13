// main.js (Registro del Service Worker)
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('/service-worker.js')
.then(registration => {
console.log('Service Worker registrado con éxito:', registration.scope);
})
.catch(error => {
console.error('Fallo el registro del Service Worker:', error);
});
});
}

// service-worker.js (Dentro del Service Worker)
// const CACHE_NAME = 'mi-cache-v1';
// const urlsToCache = [
// '/',
// '/index.html',
// '/styles.css',
// '/script.js'
// ];

// self.addEventListener('install', event => {
// event.waitUntil(
// caches.open(CACHE_NAME)
// .then(cache => {
// console.log('Cache abierto');
// return cache.addAll(urlsToCache);
// })
// );
// });

// self.addEventListener('fetch', event => {
// event.respondWith(
// caches.match(event.request)
// .then(response => {
// // Devuelve la respuesta del cache si se encuentra
// if (response) {
// return response;
// }
// // Si no, realiza la solicitud de red
// return fetch(event.request);
// })
// );
// });