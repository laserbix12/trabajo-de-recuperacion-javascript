class BaseDeDatos {
  constructor(url) {
    if (BaseDeDatos.instancia) {
      return BaseDeDatos.instancia; // Reutiliza la existente
    }
    this.url = url;
    this.conectado = true;
    BaseDeDatos.instancia = this; // Guarda la instancia
  }
}

const db1 = new BaseDeDatos("servidor_prod");
const db2 = new BaseDeDatos("servidor_test");

console.log("URL db1:", db1.url); // servidor_prod
console.log("URL db2:", db2.url); // servidor_prod
console.log("¿Misma instancia?", db1 === db2); // true
