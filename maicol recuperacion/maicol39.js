let producto = {
  nombre: "Camiseta",
  precio: 50,
  mostrarInfo() {
    console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
  }
};
producto.mostrarInfo();
