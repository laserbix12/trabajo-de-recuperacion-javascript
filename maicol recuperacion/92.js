// Ejercicio 129: Sesión de usuario con closure
function crearSesion(usuario) {
    let activa = false;
    return {
        iniciar: () => { activa = true; console.log(`${usuario} inició sesión`); },
        cerrar: () => { activa = false; console.log(`${usuario} cerró sesión`); },
        estado: () => console.log("Sesión activa:", activa)
    };
}
const sesion = crearSesion("Carlos");
sesion.iniciar();
sesion.estado();
sesion.cerrar();
