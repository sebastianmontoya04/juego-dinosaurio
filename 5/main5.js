// Esta función cambia el color de las luces del semáforo.
function cambiarColor(color) {
    // Cambia el color de la luz roja si el parámetro es 'rojo'; de lo contrario, la pone gris.
    document.getElementById("rojo").style.backgroundColor = color === 'rojo' ? 'red' : 'grey'; 

    // Cambia el color de la luz amarilla si el parámetro es 'amarillo'; de lo contrario, la pone gris.
    document.getElementById("amarillo").style.backgroundColor = color === 'amarillo' ? 'yellow' : 'grey'; 

    // Cambia el color de la luz verde si el parámetro es 'verde'; de lo contrario, la pone gris.
    document.getElementById("verde").style.backgroundColor = color === 'verde' ? 'green' : 'grey';
}

// Esta función inicia el ciclo del semáforo.
function iniciarSemaforo() {
    // Cambia la luz a rojo inmediatamente.
    setTimeout(() => cambiarColor('rojo'), 0);

    // Cambia la luz a amarillo después de 3000 milisegundos (3 segundos).
    setTimeout(() => cambiarColor('amarillo'), 3000); 

    // Cambia la luz a verde después de 6000 milisegundos (6 segundos).
    setTimeout(() => cambiarColor('verde'), 6000); 

    // Reinicia el ciclo del semáforo cada 9000 milisegundos (9 segundos).
    setTimeout(iniciarSemaforo, 9000);
}
