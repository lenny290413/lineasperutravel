function aparecer_precios(){
document.getElementById("modal_precios").classList.toggle("modal-precios-aparecer");    
}


document.getElementById("boton-precios").onclick = function(){
    aparecer_precios();
}

document.getElementById("modal_precios").onclick = function(){
    aparecer_precios();
}


