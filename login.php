<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

$identificador = trim($_POST['usuario'] ?? '');
$clave = $_POST['contrasena'] ?? '';

if ($identificador === '' || $clave === '') {
    $_SESSION['mensaje'] = 'Completá el usuario y la contraseña.';
    header('Location: index.php');
    exit;
}

try {
    require_once __DIR__ . '/conexion.php';

    $stmt = $conexion->prepare(
        'SELECT id, nombre, usuario, correo, contrasena_hash
         FROM usuarios_pasapanestor
         WHERE usuario = :usuario OR correo = :correo
         LIMIT 1'
    );
    $stmt->execute([
        'usuario' => $identificador,
        'correo' => $identificador
    ]);

    $fila = $stmt->fetch();

    if ($fila && password_verify($clave, $fila['contrasena_hash'])) {
        session_regenerate_id(true);
        $_SESSION['usuario_id'] = $fila['id'];
        $_SESSION['nombre'] = $fila['nombre'];
        $_SESSION['nombre_usuario'] = $fila['usuario'];
        $_SESSION['es_invitado'] = false;
        header('Location: menu.php');
        exit;
    }

    $_SESSION['mensaje'] = 'Cuenta no encontrada o contraseña incorrecta. Revisá tus datos e intentá nuevamente.';
    header('Location: index.php');
    exit;

} catch (Throwable $e) {
    error_log('Error login Pasapanestor: ' . $e->getMessage());
    $_SESSION['mensaje'] = 'No se pudo comprobar la cuenta. Revisá la conexión y la instalación de la base de datos.';
    header('Location: index.php');
    exit;
}
