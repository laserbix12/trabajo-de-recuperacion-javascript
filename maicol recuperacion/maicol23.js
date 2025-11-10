class Auto {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  static informacionGeneral() {
    return "Clase base para la gestión de vehículos.";
  }
}

console.log(Auto.informacionGeneral()); // ✅ Llamado desde la clase

const carro = new Auto("Ford", "Focus");
// carro.informacionGeneral(); ❌ No funciona desde una instancia
