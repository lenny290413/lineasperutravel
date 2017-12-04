$(document).ready(function(){
   
    $('*[data-menu] h2').on("click",function(e){e.preventDefault();});
    $('*[data-menu] h2').on("click",bajadaMenu);
    
});

function bajadaMenu(){
    let id = $(this).attr("data-nodo");
    let height = $(id).outerHeight()/2.4;
    let posicion = $(id).offset().top-height;
    $(id).parent().css('perspective','600px');
    $("html,body").animate({
        scrollTop:posicion+'px',
    },500,function(){
    });
}