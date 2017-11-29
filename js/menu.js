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




//almacenar slider en una variable
var slider_paquete = $('#slider_paquetes');
//almacenar botones
var siguiente2 = $('#btn-next2');
var anterior2 = $('#btn-prev2');

//mover ultima imagen al primer lugar
$('.paquete-items:last').insertBefore('.paquete-items:first');
//mostrar la primera imagen con un margen de -100%
slider_paquete.css('margin-left', '-'+100+'%');

function moverD2() {
	slider_paquete.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.paquete-items:first').insertAfter('.paquete-items:last');
		slider_paquete.css('margin-left', '-'+100+'%');
	});
}

function moverI2() {
	slider_paquete.animate({
		marginLeft:0
	} ,700, function(){
		$('.paquete-items:last').insertBefore('.paquete-items:first');
		slider_paquete.css('margin-left', '-'+100+'%');
	});
}

function autoplay2() {
	interval = setInterval(function(){
		moverD2();
	}, 1000);
}
siguiente2.on('click',function() {
	moverD2();
	clearInterval(interval);
	autoplay2();
});

anterior2.on('click',function() {
	moverI2();
	clearInterval(interval);
	autoplay2();
});


autoplay2();


