// Solicitar permiso y mostrar una notificación
if ('Notification' in window) {
Notification.requestPermission().then(permission => {
if (permission === 'granted') {
console.log('Permiso de notificación concedido.');
new Notification('¡Hola desde tu PWA!', {
body: 'Esta es una notificación de prueba.',
icon: '/favicon.ico' // Icono de la notificación
});
} else {
console.log('Permiso de notificación denegado.');
}
});
} else {
console.log('Tu navegador no soporta la Notification API.');
}