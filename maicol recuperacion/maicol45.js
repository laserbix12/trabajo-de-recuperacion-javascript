let cuenta = { saldo: 1000 };
Object.freeze(cuenta);
cuenta.saldo = 5000; // ❌ no cambia
console.log(cuenta.saldo); // 1000
