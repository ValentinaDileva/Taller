function calcularPromedio() {
    const nota1 = prompt("Ingresa la primer nota:");
    const nota2 = prompt("Ingresa la segunda nota:");
    const nota3 = prompt("Ingresa la tercera nota:");

    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        let suma = nota1 + nota2 + nota3;
        alert("La suma de " + nota1 + "+" + nota2 + "es:" + suma);
    }
    }