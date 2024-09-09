function calcular() {
    
    let num1 = parseFloat(document.getElementById("num1").value);
    // el usuario ingresa un numero y ese numero se convierte en numero decimal
    
    let num2 = parseFloat(document.getElementById("num2").value);
    // el usuario ingresa un segundo numero y ese numero se convierte en numero decimal

    let operacion = document.getElementById("operacion").value;
     // Obtener el valor de la operación matemática

    let resultado; // Variable que almacenar el resultado del cálculo

    // Determina la operación a realizar
    switch (operacion) {
        case "+":
            resultado = num1 + num2;  // operacion suma
            break;

        case "-":
            resultado = num1 - num2;  // operacion resta
            break;

        case "*":
            resultado = num1 * num2;  // operacion multiplicación
            break;

        case "/":
            resultado = num1 / num2;  // operacion división
            break;

        default:
            resultado = "Operación no válida";  // Muestra un mensaje de error si la operación no es válida
    }
    
    // Muestra el resultado del cálculo
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
