function verificarEdad() {
    let edadTexto = prompt("Por favor, ingresa tu edad:");
    let edad = Number(edadTexto);
    if (isNaN(edad) || edadTexto === "") {
        document.getElementById("resultado").innerText = "Por favor, ingresa una edad válida.";
    } else if (edad >= 18) {
        document.getElementById("resultado").innerText = "Acceso permitido. Eres mayor de edad.";
    } else {
        document.getElementById("resultado").innerText = "Acceso denegado. Eres menor de edad.";
    }
}