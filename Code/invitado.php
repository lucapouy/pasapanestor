<?php
session_start(); session_regenerate_id(true); $_SESSION['es_invitado']=true; $_SESSION['nombre']='Invitado'; unset($_SESSION['usuario_id'],$_SESSION['nombre_usuario']); header('Location: menu.php'); exit;
?>