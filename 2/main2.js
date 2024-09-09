var contador = 1;
// declara una variable llamada contador y le da el valor de 1

var temporizador;
// Declara una variable llamada temporizador para controlar el cambio de las imagenes

function iniciar() {
    temporizador = setInterval(rotarImagenes, 3000);
    // Inicia un temporizador
}

function rotarImagenes() {
    if (contador >= 10) {
        contador = 0;
        // condicion por si el contador es mayor a 10 contador equivale a 0
    }

    var img = document.getElementById('imgSlide');
    // Obtiene el elemento de la imagen

    img.src = '../images/img' + ++contador + '.jpg';
    // Cambia la fuente de la imagen a la siguiente
}
