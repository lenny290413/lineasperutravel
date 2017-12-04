// modal del hotel

function hotel_modal(){
    document.getElementById("hotel-modal").classList.add("modal-hotel-aparecer");
}
function quitar_modal(){
    document.getElementById("hotel-modal").classList.toggle("modal-hotel-aparecer")
}

//slider
var slider = $('#slider');

//mover ultima imagen al primer lugar
$('#slider .imagen_slider:last').insertBefore('#slider .imagen_slider:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .imagen_slider:first').insertAfter('#slider .imagen_slider:last');
		slider.css('margin-left', '-'+100+'%');
	});
}
function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 3000);
}
autoplay();


// preloader
var container = document.getElementById('preloader');
setTimeout(function() {
	container.classList.add('cerrar-preloader');
  document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
}, 200);



$('.icon-menu').on('click', function () {
    $('.contenido').toggleClass('abrir');
})




function cargar() {
    setInterval(intervalo, 100);
    x = 0;
    var clases = $("p[data-valor]");
    function intervalo() {
        x++;
        for (var i = 0; i < clases.length; i++) {
            resultados = $(clases[i]).attr('data-valor');
            if (x > resultados) {
                continue;
            } else {
            }
            $(clases[i]).text(x);

        }
    }
}
/*acordeon*/

$(function () {
    $(".accordion-titulo").click(function (e) {

        e.preventDefault();

        var contenido = $(this).next(".accordion-content");

        if (contenido.css("display") == "none") { //open        
            contenido.slideDown(250);
            $(this).addClass("open");
        } else { //close       
            contenido.slideUp(250);
            $(this).removeClass("open");
        }

    });
});