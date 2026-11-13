<?php
// Activar errores para depuración
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

session_start();

// Validar que la petición sea por POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: registro.php');
    exit;
}

// Recoger y limpiar los datos del formulario
$nombre = trim($_POST['nombre'] ?? '');
$usuario = trim($_POST['usuario'] ?? '');
$correo = strtolower(trim($_POST['correo'] ?? ''));
$clave = $_POST['contrasena'] ?? '';
$confirmar = $_POST['confirmar'] ?? '';

// Función para volver al registro con un mensaje de error
function volverRegistro($mensaje) {
    $_SESSION['mensaje_registro'] = $mensaje;
    header('Location: registro.php');
    exit;
}

// Validaciones de campos vacíos
if ($nombre === '' || $usuario === '' || $correo === '' || $clave === '' || $confirmar === '') {
    volverRegistro('Completá todos los campos.');
}

// Validar formato de correo
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    volverRegistro('Ingresá un correo válido.');
}

// Validar longitud del usuario
if (strlen($usuario) < 3 || strlen($usuario) > 50) {
    volverRegistro('El usuario debe tener entre 3 y 50 caracteres.');
}

// Validar longitud de la contraseña
if (strlen($clave) < 6) {
    volverRegistro('La contraseña debe tener al menos 6 caracteres.');
}

// Validar que las contraseñas coincidan
if ($clave !== $confirmar) {
    volverRegistro('Las contraseñas no coinciden.');
}

try {
    // Incluir la conexión a la base de datos
    require_once __DIR__ . '/conexion.php';

    // Comprobar si el usuario o correo ya existen
    $comprobar = $conexion->prepare(
        'SELECT id FROM usuarios_pasapanestor 
         WHERE usuario = :usuario OR correo = :correo 
         LIMIT 1'
    );

    $comprobar->execute([
        'usuario' => $usuario,
        'correo' => $correo
    ]);

    if ($comprobar->fetch()) {
        volverRegistro('Ese usuario o correo ya está registrado.');
    }

    // Encriptar la contraseña de forma segura
    $hash = password_hash($clave, PASSWORD_DEFAULT);

    // Insertar el nuevo usuario en la base de datos
    $insertar = $conexion->prepare(
        'INSERT INTO usuarios_pasapanestor 
         (nombre, usuario, correo, contrasena_hash) 
         VALUES (:nombre, :usuario, :correo, :hash)'
    );

    $insertar->execute([
        'nombre' => $nombre,
        'usuario' => $usuario,
        'correo' => $correo,
        'hash' => $hash
    ]);

    // Regenerar la sesión por seguridad
    session_regenerate_id(true);

    // Guardar datos en la sesión para iniciar sesión automáticamente
    $_SESSION['usuario_id'] = $conexion->lastInsertId();
    $_SESSION['nombre'] = $nombre;
    $_SESSION['nombre_usuario'] = $usuario;
    $_SESSION['es_invitado'] = false;

    // Redirigir al menú principal
    header('Location: menu.php');
    exit;

} catch (PDOException $e) {
    // Si ocurre un error con la base de datos, se mostrará en pantalla para identificarlo rápido
    echo "<div style='font-family: Arial; padding: 20px; background: #ffe6e6; border: 1px solid #ff4d4d; margin: 20px; border-radius: 5px;'>";
    echo "<h2 style='color: #cc0000;'>Error de Base de Datos / Conexión:</h2>";
    echo "<p><strong>Mensaje:</strong> " . htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8') . "</p>";
    echo "<p><em>Revisá si la tabla 'usuarios_pasapanestor' existe y si las columnas coinciden con el script.</em></p>";
    echo "</div>";
    exit;

} catch (Throwable $e) {
    echo "<div style='font-family: Arial; padding: 20px; background: #ffe6e6; border: 1px solid #ff4d4d; margin: 20px; border-radius: 5px;'>";
    echo "<h2 style='color: #cc0000;'>Error inesperado:</h2>";
    echo "<p>" . htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8') . "</p>";
    echo "</div>";
    exit;
}
?>