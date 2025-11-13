// Ejercicio 120: Simular suma asíncrona con callback
function sumarAsync(a, b, callback) {
    console.log("Calculando...");
    setTimeout(() => {
        callback(a + b);
    }, 2000);
}
sumarAsync(5, 7, resultado => console.log("Resultado:", resultado));
