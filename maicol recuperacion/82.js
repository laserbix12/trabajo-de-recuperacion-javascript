// Ejercicio 114: Aplicar descuentos usando callback
function aplicarDescuento(precios, callback) {
    return precios.map(callback);
}
const descuento = precio => precio * 0.9;
console.log(aplicarDescuento([100, 200, 300], descuento));
