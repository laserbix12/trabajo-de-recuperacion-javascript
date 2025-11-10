class Direccion {
  constructor(calle, codigoPostal) {
    this.calle = calle;
    this.codigoPostal = codigoPostal;
  }
}

class Cliente {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion; // Contiene un objeto Direccion
  }

  mostrarUbicacion() {
    console.log(`${this.nombre} vive en ${this.direccion.calle}, CP ${this.direccion.codigoPostal}`);
  }
}

const miDireccion = new Direccion("Avenida Central 456", "10101");
const juan = new Cliente("Juan Pérez", miDireccion);

juan.mostrarUbicacion();
// Juan Pérez vive en Avenida Central 456, CP 10101
