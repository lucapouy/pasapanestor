
<?php
session_start();
$mensaje = $_SESSION['mensaje'] ?? '';
unset($_SESSION['mensaje']);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pasapalabra | Inicio de sesión</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>

    <main class="contenedor">

        <header class="logo">
            <div class="rosco">
                <span>P</span>
                <span>A</span>
                <span>S</span>
                <span>A</span>
                <span>P</span>
                <span>A</span>
                <span>L</span>
                <span>A</span>
                <span>B</span>
                <span>R</span>
                <span>A</span>
            </div>

            <h1>PASAPALABRA</h1>
            <p>UN ROSCO, MIL RESPUESTAS</p>
        </header>

        <section class="login">

            <h2>¡Bienvenido!</h2>

            <?php if ($mensaje): ?>
                <p class="descripcion" role="alert">
                    <?= htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8') ?>
                </p>
            <?php endif; ?>

            <p class="descripcion">
                Preparáte para poner a prueba tus conocimientos.
                ¿Estás listo para completar el rosco?
            </p>

            <form action="login.php" method="post">

                <input
                    type="text"
                    name="usuario"
                    placeholder="Usuario o correo electrónico"
                    autocomplete="username"
                    required
                >

                <input
                    type="password"
                    name="contrasena"
                    id="contrasena"
                    placeholder="Contraseña"
                    autocomplete="current-password"
                    required
                >

                <label class="mostrar-pass">
                    <input type="checkbox" id="mostrarPassword">
                    Mostrar contraseña
                </label>

                <button type="submit" class="btn-login">
                    INICIAR SESIÓN
                </button>

            </form>

            <div class="separador">
                <span></span>
                O TAMBIÉN
                <span></span>
            </div>

            <a href="invitado.php" class="btn-invitado">
                <span>▶</span> ENTRAR COMO INVITADO
            </a>

            <p class="registro">
                ¿No tenés cuenta?
                <a href="registro.php">Registrate</a>
            </p>

        </section>

        <footer>
            <p>© 2026 PASAPALABRA - TODOS LOS DERECHOS RESERVADOS</p>
        </footer>

    </main>

    <script>
        const mostrarPassword = document.getElementById('mostrarPassword');
        const contrasena = document.getElementById('contrasena');

        mostrarPassword.addEventListener('change', function () {
            contrasena.type = this.checked ? 'text' : 'password';
        });
    </script>

</body>
</html>
