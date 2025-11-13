// Definición de un error personalizado
class ValidacionError extends Error {
  constructor(mensaje, campo) {
    super(mensaje); // Llama al constructor de la clase base (Error)
    this.name = "ValidacionError"; // Establece el nombre del error
    this.campo = campo; // Propiedad adicional específica
  }
}

class AutorizacionError extends Error {
  constructor(mensaje, usuario) {
    super(mensaje);
    this.name = "AutorizacionError";
    this.usuario = usuario;
  }
}

function validarUsuario(usuario, rol) {
  if (!usuario || usuario.length < 3) {
    throw new ValidacionError("El nombre de usuario es demasiado corto.", "usuario");
  }
  if (rol !== "admin") {
    throw new AutorizacionError("No tiene permisos de administrador.", usuario);
  }
  return true;
}

// Primer intento: genera un error de autorización
try {
  validarUsuario("Juan", "user");
} catch (error) {
  if (error instanceof ValidacionError) {
    console.error(`Error de Validación en ${error.campo}: ${error.message}`);
  } else if (error instanceof AutorizacionError) {
    console.error(`Error de Autorización para ${error.usuario}: ${error.message}`);
  } else {
    console.error("Error desconocido:", error.message);
  }
}

// Segundo intento: validación exitosa
try {
  const resultado = validarUsuario("Ana", "admin");
  if (resultado) {
    console.log("✅ Usuario validado correctamente. Acceso concedido.");
  }
} catch (error) {
  if (error instanceof ValidacionError) {
    console.error(`Error de Validación en ${error.campo}: ${error.message}`);
  } else if (error instanceof AutorizacionError) {
    console.error(`Error de Autorización para ${error.usuario}: ${error.message}`);
  } else {
    console.error("Error desconocido:", error.message);
  }
}
