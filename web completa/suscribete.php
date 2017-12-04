<?php

    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formulario'])){
        $micorreo = "lenny290413@gmail.com";
        $micorreo2 = "comercial@lineastouroperador.com";
        $micorreo3 = "gerencia@lineastouroperador.com";
        $mensaje = htmlspecialchars($_POST['mensaje']);
        $titulo  = 'Correo Enviado Desde El Boletin';
        
        
        $enviar = @mail($micorreo,$titulo,$mensaje);
        $enviar = @mail($micorreo2,$titulo,$mensaje);
        $enviar = @mail($micorreo3,$titulo,$mensaje);
        
        if(!$enviar){
            
            echo 'ERROR AL ENVIARSE';
            
        }else{
            
            echo 'Gracias por suscribirte';
        }
        
    }else{
        
        header("location:index.html");
    }



?>