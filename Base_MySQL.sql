CREATE DATABASE IF NOT EXISTS pasapanestor
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE pasapanestor;

-- Tabla exclusiva de cuentas de Pasapanestor; no borra tablas anteriores.
CREATE TABLE IF NOT EXISTS usuarios_pasapanestor (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    correo VARCHAR(190) NOT NULL,
    contrasena_hash VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_pasapanestor_usuario (usuario),
    UNIQUE KEY uq_pasapanestor_correo (correo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
