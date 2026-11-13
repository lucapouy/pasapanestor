
<?php
session_start();

$mensaje = $_SESSION['mensaje_registro'] ?? '';
unset($_SESSION['mensaje_registro']);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pasapalabra | Registro</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>

<main class="contenedor">

    <header class="logo">
        <div class="rosco">
            <span>P</span><span>A</span><span>S</span><span>A</span>
            <span>P</span><span>A</span><span>L</span><span>A</span>
            <span>B</span><span>R</span><span>A</span>
        </div>

        <h1>PASAPALABRA</h1>
        <p>UN ROSCO, MIL RESPUESTAS</p>
    </header>

    <section class="login">

        <h2>Crear cuenta</h2>

        <?php if ($mensaje): ?>
            <p class="descripcion" role="alert">
                <?= htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8') ?>
            </p>
        <?php endif; ?>

        <p class="descripcion">
            Registrate y preparate para completar el rosco.
        </p>

        <form action="crear_usuario.php" method="post">

            <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                required
            >

            <input
                type="text"
                name="usuario"
                id="usuario"
                placeholder="Nombre de usuario"
                autocomplete="username"
                required
            >

            <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                required
            >

            <input
                type="password"
                name="contrasena"
                id="contrasena"
                placeholder="Crear contraseña"
                minlength="6"
                autocomplete="new-password"
                required
            >

            <input
                type="password"
                name="confirmar"
                id="confirmar"
                placeholder="Confirmar contraseña"
                minlength="6"
                autocomplete="new-password"
                required
            >

            <label class="mostrar-pass">
                <input type="checkbox" id="mostrarPassword">
                Mostrar contraseñas
            </label>

            <button type="submit" class="btn-login">
                CREAR CUENTA
            </button>

        </form>

        <p class="registro">
            ¿Ya tenés una cuenta?
            <a href="index.php">Iniciar sesión</a>
        </p>

    </section>

    <footer>
        <p>© 2026 PASAPALABRA - TODOS LOS DERECHOS RESERVADOS</p>
    </footer>

</main>

<script>
    const mostrarPassword = document.getElementById('mostrarPassword');
    const contrasena = document.getElementById('contrasena');
    const confirmar = document.getElementById('confirmar');

    mostrarPassword.addEventListener('change', function () {
        const tipo = this.checked ? 'text' : 'password';

        contrasena.type = tipo;
        confirmar.type = tipo;
    });
</script>

</body>
</html>
