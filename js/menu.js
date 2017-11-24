function menu(){
document.getElementById("menu").classList.toggle("menu-aparecer");
}

document.getElementById("icon-menu").onclick =  function(){
    menu();
}
document.getElementById("menu").onclick =  function(){
    menu();
}