document.getElementById("boton-hotel").onclick = function(){
    hotel_modal();
}
document.getElementById("hotel-modal").onclick = function(){
    quitar_modal();
}

$(function(){
    
    $("div.moda").hide();
    
    
    var nodo = 'div.owl-stage-outer div.owl-stage div.owl-item';
    
    
    $('.aliados-contenido').on("click",nodo,function(e){
        
        var enlace = $(this).children('img').attr('data-src');
        
        $("iframe.video").attr('src',"https://www.youtube.com/embed/"+enlace);
        
        $("div.moda").fadeIn(200);
        
    });

    
    $("div.moda").on("click",function(event){
        
        $(this).fadeOut(200);
        
    });
    
    $(this).on("keyup",function(e){
        
        var evento = e.event || window.event;
        
        if(evento.keyCode == 27){
        
            $("div.moda").fadeOut(200);
           
        }else{
           
           console.log("LA ESE ^-^");
        }
        
        
    });
    
    
    $("iframe.video").on("click",function(e){
        
        return false;
    });
    
    $("p.close-yt").on("click",function(){
        
        $(this).parents('div.moda').fadeOut(200);
        
    });
    
    
});