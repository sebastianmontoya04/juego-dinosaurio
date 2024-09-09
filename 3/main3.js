let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Genera un número entre 1 y 10

let intentos = 0;
// Inicializa un contador en 0

function adivinar() {
    let intento = document.getElementById("numero").value;
    // Obtiene el valor de entrada donde el usuario ingresa un número

    intentos++;
    // Incrementa el contador 

    if (intento == numeroSecreto) {
        document.getElementById("resultado").innerText = "¡Correcto! Adivinaste en " + intentos + " intentos.";
        // Si el número que el usuario ingresa es el correcto muestra un mensaje de éxito y tambien los intentos
    } else if (intento < numeroSecreto) {
        document.getElementById("resultado").innerText = "El número es mayor. Inténtalo de nuevo";
        // Si el número que el usuario ingresa es menor da una pista de que el número secreto es mayor
    } else {
        document.getElementById("resultado").innerText = "El número es menor. Inténtalo de nuevo";
        // Si el número que el usuario ingresa es mayor, da una pista de que el número secreto es menor
    }
}
