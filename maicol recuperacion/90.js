// Ejercicio 126: Banco con depósitos y retiros (closure)
function crearBanco() {
    let saldo = 0;
    return {
        depositar: cantidad => saldo += cantidad,
        retirar: cantidad => saldo -= cantidad,
        verSaldo: () => saldo
    };
}
const banco = crearBanco();
banco.depositar(100);
banco.retirar(30);
console.log("Saldo actual:", banco.verSaldo());
