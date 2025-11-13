// Producto.js
class Producto {
constructor(nombre, precio, cantidad) {
this.nombre = nombre;
this.precio = precio;
this.cantidad = cantidad;
}

valorTotal() {
return this.precio * this.cantidad;
}

static categoriaBase() {
return "General";
}
}

class ProductoElectronico extends Producto {
constructor(nombre, precio, cantidad, garantia) {
super(nombre, precio, cantidad);
this.garantiaMeses = garantia;
this.categoria = "Electrónico";
}
}