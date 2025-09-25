function jugar() {
    const numeroSecreto = 4;
    const intento = prompt("Adivina el número secreto (entre 1 y 10):");

    const numeroUsuario = Number(intento);

    if (isNaN(numeroUsuario)  /intento === "") {
        document.getElementById("mensaje").innerText = "Ingrese un número válido.";
    } else if (numeroUsuario === numeroSecreto) {
        document.getElementById("mensaje").innerText = "Adivinaste el número secreto.";
    } else {
        document.getElementById("mensaje").innerText = "Incorrecto. Intenta de nuevo.";
    }
}