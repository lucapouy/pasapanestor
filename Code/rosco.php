

<?php
session_start();

if (
    empty($_SESSION['usuario_id']) &&
    empty($_SESSION['es_invitado'])
) {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pasapalabra | Rosco</title>

    <link rel="stylesheet" href="css/rosco.css">
    <script src="js/rosco.js" defer></script>
</head>

<body>

    <nav class="navbar">
        <div class="logo">PASAPALABRA</div>
        <a href="menu.php" class="volver">← Volver al menú principal</a>
    </nav>

    <main class="juego">
        <header class="encabezado">
            <div>
                <h1 id="tituloModo">Rosco de Pasapalabra</h1>
                <p id="subtituloModo">Completá las 27 letras</p>
            </div>

            <div class="reloj">
                <span>TIEMPO</span>
                <strong id="tiempo">03:20</strong>
            </div>
        </header>

        <section class="zona-juego">

            <div class="rosco-contenedor">
                <div id="rosco" class="rosco"></div>
            </div>

            <section class="pregunta-panel">
                <div class="estado-pregunta" id="estadoPregunta">
                    LETRA A
                </div>

                <h2 id="pregunta">
                    Preparado para jugar
                </h2>

                <p id="tipoPregunta">La respuesta empieza con la letra indicada.</p>

                <form id="formRespuesta">
                    <input
                        type="text"
                        id="respuesta"
                        placeholder="Escribí tu respuesta..."
                        autocomplete="off"
                        required
                    >

                    <div class="botones">
                        <button type="submit" class="btn-responder">
                            RESPONDER
                        </button>

                        <button type="button" id="btnPasapalabra" class="btn-pasar">
                            PASAPALABRA
                        </button>
                    </div>
                </form>

                <p id="mensaje" class="mensaje"></p>

                <div class="controles">
                    <button id="btnPausa" type="button">⏸ Pausar</button>
                    <button id="btnReiniciar" type="button">↻ Reiniciar</button>
                </div>
            </section>

            <aside class="marcador">
                <h2>MARCADOR</h2>

                <div class="dato correcto">
                    <span>Correctas</span>
                    <strong id="correctas">0</strong>
                </div>

                <div class="dato incorrecto">
                    <span>Incorrectas</span>
                    <strong id="incorrectas">0</strong>
                </div>

                <div class="dato pasada">
                    <span>Pasadas</span>
                    <strong id="pasadas">0</strong>
                </div>

                <div class="dato restantes">
                    <span>Restantes</span>
                    <strong id="restantes">27</strong>
                </div>

                <div class="progreso">
                    <div class="progreso-texto">
                        <span>Progreso</span>
                        <strong id="porcentaje">0%</strong>
                    </div>

                    <div class="barra">
                        <div id="barraProgreso"></div>
                    </div>
                </div>

                <div class="dificultad">
                    <label for="dificultad">Dificultad</label>
                    <select id="dificultad">
                        <option value="300">Fácil - 5 minutos</option>
                        <option value="200" selected>Medio - 3:20 minutos</option>
                        <option value="120">Difícil - 2 minutos</option>
                    </select>
                </div>
            </aside>

        </section>

        <section id="resultadoFinal" class="resultado-final oculto">
            <h2>¡Fin de la partida!</h2>
            <p id="resumenFinal"></p>
            <button id="btnJugarOtra" type="button">JUGAR OTRA VEZ</button>
            <a href="menu.php">VOLVER AL MENÚ PRINCIPAL</a>
        </section>

    </main>

</body>
</html>
