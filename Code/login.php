
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

    $consulta = $conexion->prepare(
        'SELECT id, nombre, usuario, correo, contrasena_hash
         FROM usuarios_pasapanestor
         WHERE usuario = :usuario OR correo = :correo
         LIMIT 1'
    );

    $consulta->execute([
        'usuario' => $identificador,
        'correo' => $identificador
    ]);

    $fila = $consulta->fetch();

    if (!$fila || !password_verify($clave, $fila['contrasena_hash'])) {
        $_SESSION['mensaje'] = 'Usuario o contraseña incorrectos.';
        header('Location: index.php');
        exit;
    }

    session_regenerate_id(true);

    $_SESSION['usuario_id'] = $fila['id'];
    $_SESSION['nombre'] = $fila['nombre'];
    $_SESSION['nombre_usuario'] = $fila['usuario'];
    $_SESSION['es_invitado'] = false;

    header('Location: menu.php');
    exit;

} catch (Throwable $e) {

    error_log('Error de login: ' . $e->getMessage());

    $_SESSION['mensaje'] = 'No se pudo comprobar la cuenta.';
    header('Location: index.php');
    exit;
}
