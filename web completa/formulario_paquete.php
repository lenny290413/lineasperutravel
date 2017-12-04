<?php

   if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formulario'])){
       
       
        $micorreo = "lenny290413@gmail.com";
        $titulo  = 'Correo Enviado desde un paquete';
       
        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
        $mensaje = $_POST['mensaje'];
       
       
        $mensaje = 'Nombre =>' . $nombre . ' telefono =>' . $telefono . 'Correo =>' . $correo . 'Mensaje =>' . $mensaje;
       
       
        
        $funcion = @mail($micorreo,$titulo,$mensaje);
        
        if($funcion){
            
            echo 'Gracias, En Breve Recibiras una Respuesta';
            
        }else{
            
            echo 'Error al Enviarse';
        }
       
       
   }else{
       
       
       
   }
    



?>