
<!DOCTYPE html>
<?php
session_start();
if (empty($_SESSION['usuario_id']) && empty($_SESSION['es_invitado'])) {
    header('Location: index.php'); exit;
}
$nombreMostrar = $_SESSION['nombre'] ?? 'Jugador';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pasapalabra - Menú</title>
    <link rel="stylesheet" href="css/menu.css">
</head>
<body>

    <nav class="navbar">
        <div class="logo">PASAPALABRA</div>

        <div class="nav-links">
            <a href="menu.php">Inicio</a>
            <a href="registro.php">Crear cuenta</a>
            <a href="logout.php" class="cerrar-sesion">Cerrar sesión</a>
        </div>
    </nav>

    <main class="contenedor">
        <h1>¡Bienvenido, <?= htmlspecialchars($nombreMostrar, ENT_QUOTES, 'UTF-8') ?>!</h1>
        <p class="subtitulo">Poné a prueba tus conocimientos.</p>

        <h2>Elegí un modo de juego</h2>

        <div class="modos">
            <a href="rosco.php?modo=deporte" class="modo">🏆 Deporte</a>
<a href="rosco.php?modo=historia" class="modo">📜 Historia</a>
<a href="rosco.php?modo=cultura-argentina" class="modo">🇦🇷 Cultura Argentina</a>
<a href="rosco.php?modo=cultura-general" class="modo">🌎 Cultura General</a>
<a href="rosco.php?modo=clasico" class="modo">🔵 Modo Clásico</a>
<a href="rosco.php?modo=cine" class="modo">🎬 Cine</a>
<a href="rosco.php?modo=contrarreloj" class="modo">⏱️ Contrarreloj</a>
<a href="rosco.php?modo=famosos" class="modo">⭐ Famosos</a>
    </main>

</body>
</html>
