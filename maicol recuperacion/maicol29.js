class Auto {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  obtenerDescripcion() {
    return `${this.marca} ${this.modelo}`;
  }
}

export default Auto;


import Auto from './Auto.js';

const vehiculo = new Auto("Nissan", "Sentra");
console.log("Nuevo vehículo:");
console.log(vehiculo.obtenerDescripcion());
// Nissan Sentra

