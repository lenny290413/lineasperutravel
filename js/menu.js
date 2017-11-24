function menu(){
document.getElementById("menu").classList.toggle("menu-aparecer");
}

document.getElementById("icon-menu").onclick =  function(){
    menu();
}
document.getElementById("menu").onclick =  function(){
    menu();
}

/*
function aparecer_precios(){
document.getElementById("modal_precios").classList.toggle("modal-precios-aparecer");    
}


document.getElementById("boton-precios").onclick = function(){
    aparecer_precios();
}

document.getElementById("modal_precios").onclick = function(){
    aparecer_precios();
}



*/