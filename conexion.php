<?php
// Conexion local para XAMPP. Si configuraste una clave para root, escribila en $contrasena.
$host = 'localhost';
$base = 'pasapanestor';
$usuario = 'root';
$contrasena = '';

try {
    $conexion = new PDO(
        "mysql:host=$host;dbname=$base;charset=utf8mb4",
        $usuario,
        $contrasena,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch (PDOException $e) {
    error_log('Pasapanestor DB: ' . $e->getMessage());
    http_response_code(500);
    exit('No se pudo conectar con la base de datos. Verificá que MySQL esté iniciado y que exista la base pasapanestor.');
}
