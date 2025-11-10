const TASA_IMPUESTO = 0.15;

let precioString = prompt("Ingrese el precio:");
let precio = Number(precioString);

if (!isNaN(precio)) {
  let impuesto = precio * TASA_IMPUESTO;
  console.log("Precio base:", precio);
  console.log("Impuesto:", impuesto);
} else {
  console.log("Entrada inválida");
}
