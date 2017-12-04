$(document).ready(function(){
    modificar();
    $("div#ventana").hide();
    
    
    $('.icon-menu').on('click',function(){
        
        $('.menu').toggleClass('abrir-menu');
        
    });

    $('.icon-menu').on("click",function(){
       
        return false;
        
    });
    
    
    $(this).on("scroll click",function(){
       
        $('.menu').removeClass('abrir-menu');
        
    });
    
    
   $("div#zoom p").on("click",function(){
      
       $(this).parent("div#ventana").hide("slow",function(){
           
           $(this).parents("div#calculo").fadeOut();
       });
       
   });
   
    $("form#suscribete").on("submit",function(e){
        
        e.preventDefault();
        
        var datos = $(this).serialize();
        
        $.ajax({
            
            type:'POST',
            url:'suscribete.php',
            data:datos,
            cache:false,
            beforeSend:function(){
                
                $("form#suscribete").children().prop('disabled',true);
                
            }
            
        }).done(function(respuesta){
            
            $("form#suscribete").children().prop('disabled',false);
            
            $("form#suscribete input[type='text']").val("");
            alert(respuesta);
            
        }).fail(function(error){
           
            console.log("Error " + error);
            
        });
        
        
    });
    
    
    preloader();
});


    $("form[action='formulario_paquete.php']").on("submit",function(e){
        
        e.preventDefault();
        
       var datos = $(this).serialize();
        
        $.ajax({
            
            type:'POST',
            url:$(this).attr('action'),
            data:datos,
            cache:false,
            beforeSend:function(){
                
                
            }
            
            
        }).done(function(correcto){
            
            alert(correcto);
            
            
        }).fail(function(error){
            
            console.log('Error al Enviar ' + error);
            
        });
        
        //fin copia
        
        
        
    });
function modificar(){
    
    
    $("div.derecha form").append("<input type='hidden' name='formulario'>").attr({
       
        class:'formpaquete',
        action:'formulario_paquete.php',
    });
    
    var array = new Array();
    
    array['nombre'] = 'nombre';
    array['telefono'] = 'telefono';
    array['correo'] = 'correo';
    array['mensaje'] = 'mensaje';
    array['atributo'] = 'name';
    
    $(".formpaquete input[placeholder='Nombre']").attr(array['atributo'],array['nombre']);
    $(".formpaquet input[placeholder='Telefono']").attr(array['atributo'],array['telefono']);
    $(".formpaquet input[placeholder='E-mail']").attr(array['atributo'],array['correo']);
    $(".formpaquet  textarea[placeholder='Mensaje']").attr(array['atributo'],array['mensaje']);
    

    
}

function preloader(){
    
    $("html,body").animate({
        
       scrollTop:'0px', 
        
    },1300);
    
    setTimeout(function(){
        
        $("div#preloader").fadeOut(500,function(){
            
            $("div#calculo").fadeIn(500,function(){
                
                $("div#ventana").show("slow",function(){
                    
                   $(this).addClass("efecto_modal");
                    
                });
                
            });
            
        });
        
        $("body").css('overflowY','visible');
        
    },5000)
    
    
}



