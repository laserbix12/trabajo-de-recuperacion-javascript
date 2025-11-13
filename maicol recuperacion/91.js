// Ejercicio 128: Lista con métodos privados
function crearLista() {
    let lista = [];
    return {
        agregar: item => lista.push(item),
        mostrar: () => console.log(lista)
    };
}
const miLista = crearLista();
miLista.agregar("Manzana");
miLista.agregar("Pera");
miLista.mostrar();
