<?php

    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formulario'])){
        
        $para = "lenny290413@gmail.com";
        $titulo = "NUEVA RESERVA";
        
        
        $nombre = htmlspecialchars($_POST['nombre']);
        $telefono = htmlspecialchars($_POST['telefono']);
        $correo = htmlspecialchars($_POST['correo']);
        $argumento = htmlspecialchars($_POST['argumento']);
     
       
        
        
        $mensaje = "  nombre => " . $nombre . "  Telefono => " . $telefono . "  Correo => " . $correo . "  Argumento => " . $argumento;
        
        $funcion = mail($para,$titulo,$mensaje);
       
        
        
        if(!$funcion){
            
            echo '0';
            
        }else{
            
            echo '1';
        }
        
        
    }else{
        
        header("location:index.php");
        
    }
    


?>