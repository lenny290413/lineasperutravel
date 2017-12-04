<?php
    $destino="lenny290413@gmail.com";
    $correo = $_POST["correo"];/*
    $contenido = "NUEVO CORREO DE SUSCRIPCION" . "\CORREO: " . $correo;*/
    mail($destino, "Correo Del Boletín", "sakdsad")
    header("location:index.html")
?>