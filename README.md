PASAPANESTOR - INSTALACION LOCAL (XAMPP)

1) Extrae la carpeta "Pasapanestor-corregido" dentro de:
   C:\xampp\htdocs\
   Debe quedar:
   C:\xampp\htdocs\Pasapanestor-corregido\index.php

2) Abre XAMPP e inicia Apache y MySQL (ambos en verde).

3) Abre http://localhost/phpmyadmin

4) En phpMyAdmin entra en "Importar", selecciona el archivo
   Base_MySQL.sql que está en esta carpeta y pulsa "Importar".
   El SQL crea la base "pasapanestor" y la tabla
   "usuarios_pasapanestor". No borra tablas anteriores.

5) Abre el proyecto:
   http://localhost/pasapanestor-main/index.php

6) Para registrarte, pulsa "Registrate" y completa los cinco campos.
   La contraseña debe tener al menos 6 caracteres.

7) Inicia sesión con nombre de usuario O correo, más contraseña.

CONFIGURACION MYSQL:
conexion.php usa localhost, base pasapanestor, usuario root y contraseña
vacía (configuración habitual de XAMPP). Si root tiene contraseña,
completala en la variable $contrasena.

NOTAS:
- Las cuentas se guardan en usuarios_pasapanestor. No se borran tablas
  anteriores.
- Las contraseñas se guardan con password_hash.





Arreglos y mejoras realizadas en el proyecto Pasapalabra✔

Durante el desarrollo del proyecto Pasapalabra se realizaron diferentes correcciones y mejoras con el objetivo de solucionar errores de funcionamiento, mejorar la experiencia del usuario y agregar nuevas características al juego.

 1. Correcciones en el registro y la base de datos

Uno de los principales problemas se encontraba en el sistema de registro e inicio de sesión. Al principio, los datos del usuario no se guardaban correctamente y, en algunos casos, el sistema tomaba el usuario `root` como si fuera el nombre de la cuenta que se estaba registrando.

Se revisó y corrigió el código PHP encargado de recibir los datos del formulario y conectarse con MySQL. También se solucionaron errores relacionados con la estructura de la base de datos y los nombres de las tablas.

Además, se trabajó sobre la validación de los datos para evitar problemas al registrar usuarios que ya existen. Se comprobó que las cuentas se almacenen correctamente y que la información registrada pueda utilizarse posteriormente para iniciar sesión.

 2. Mejoras en los modos de juego

Se organizaron y ampliaron los bancos de preguntas para que cada modalidad tenga su propio contenido. De esta manera, los modos temáticos cuentan con preguntas relacionadas con sus respectivas categorías, como deportes, historia, cine, cultura general y cultura argentina.

También se incorporó un banco exclusivo de preguntas para el modo Contrarreloj, con preguntas diferentes a las de los demás modos.

 3. Mejoras en el modo Contrarreloj

Se agregó un sistema de rachas para hacer que esta modalidad sea más desafiante y dinámica.

- **Racha actual:** aumenta cada vez que el jugador responde correctamente.
- **Mejor racha:** registra la mayor cantidad de respuestas correctas consecutivas alcanzadas durante la partida.
- **Reinicio de racha:** cuando el jugador responde incorrectamente, su racha actual vuelve a cero.
- **Penalización de tiempo:** cada respuesta incorrecta resta 10 segundos del tiempo disponible.
- **Actualización del cronómetro:** el tiempo se actualiza inmediatamente después de una respuesta incorrecta.
- **Finalización automática:** si una penalización deja el tiempo en cero, la partida termina automáticamente.

También se incorporaron indicadores visuales para mostrar la racha actual y el mejor récord, además de incluir estas estadísticas en el resumen final de la partida.

 4. Mejoras generales del juego

Se trabajó en la organización del código JavaScript para separar mejor las funciones y facilitar futuras modificaciones. También se revisaron distintos elementos del funcionamiento del rosco, como el control de las preguntas, las respuestas, el avance entre letras y los marcadores.

Se buscó que cada modo mantenga sus propias características y que las nuevas funcionalidades no interfieran con el funcionamiento de las demás modalidades.

 Conclusión

En conjunto, estos cambios permitieron mejorar tanto el funcionamiento interno como la experiencia de juego de Pasapalabra. Se corrigieron problemas relacionados con el registro y la conexión con la base de datos, se mejoró la organización de las preguntas y se incorporaron nuevas mecánicas para aumentar la dificultad y la competitividad.

El objetivo de estas modificaciones fue conseguir un juego más completo, estable, dinámico y preparado para seguir incorporando nuevas funcionalidades.
