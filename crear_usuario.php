<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: registro.php');
    exit;
}

$nombre = trim($_POST['nombre'] ?? '');
$usuario = trim($_POST['usuario'] ?? '');
$correo = strtolower(trim($_POST['correo'] ?? ''));
$clave = $_POST['contrasena'] ?? '';
$confirmar = $_POST['confirmar'] ?? '';

function volverRegistro($mensaje) {
    $_SESSION['mensaje_registro'] = $mensaje;
    header('Location: registro.php');
    exit;
}

if ($nombre === '' || $usuario === '' || $correo === '' || $clave === '' || $confirmar === '') {
    volverRegistro('Completá todos los campos.');
}
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    volverRegistro('Ingresá un correo electrónico válido.');
}
if (strlen($clave) < 6) {
    volverRegistro('La contraseña debe tener al menos 6 caracteres.');
}
if ($clave !== $confirmar) {
    volverRegistro('Las contraseñas no coinciden.');
}

try {
    require_once __DIR__ . '/conexion.php';

    $check = $conexion->prepare(
        'SELECT id FROM usuarios_pasapanestor WHERE usuario = :usuario OR correo = :correo LIMIT 1'
    );
    $check->execute(['usuario' => $usuario, 'correo' => $correo]);

    if ($check->fetch()) {
        volverRegistro('Ese nombre de usuario o correo ya está registrado.');
    }

    $insertar = $conexion->prepare(
        'INSERT INTO usuarios_pasapanestor (nombre, usuario, correo, contrasena_hash)
         VALUES (:nombre, :usuario, :correo, :clave)'
    );
    $insertar->execute([
        'nombre' => $nombre,
        'usuario' => $usuario,
        'correo' => $correo,
        'clave' => password_hash($clave, PASSWORD_DEFAULT)
    ]);

    session_regenerate_id(true);
    $_SESSION['usuario_id'] = $conexion->lastInsertId();
    $_SESSION['nombre'] = $nombre;
    $_SESSION['nombre_usuario'] = $usuario;
    $_SESSION['es_invitado'] = false;

    header('Location: menu.php');
    exit;

} catch (Throwable $e) {
    error_log('Error registro Pasapanestor: ' . $e->getMessage());
    volverRegistro('No se pudo crear la cuenta. Revisá que la base de datos esté instalada y que el usuario/correo no estén repetidos.');
}
