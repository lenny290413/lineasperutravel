function menu(){
document.getElementById("menu").classList.toggle("menu-aparecer");
}

document.getElementById("icon-menu").onclick =  function(){
    menu();
}
document.getElementById("menu").onclick =  function(){
    menu();
}
//almacenar slider en una variable
var slider = $('#slider_ofertas');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#promocion-items:last').insertBefore('#promocion-items:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.promociones-items:first').insertAfter('.promociones-items:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('.promociones-items:last').insertBefore('.promociones-items:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();