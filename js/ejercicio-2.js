console.log("Exercise #2");

function duplicarNumeros() {
    const numerosOriginales = [3, 6, 9, 12];
    const numerosDuplicados = numerosOriginales.map(numero => numero * 2);

    const resultadoElemento = document.getElementById('resultadoDuplicados');

    resultadoElemento.innerHTML = `Arreglo original: [${numerosOriginales.join(', ')}]<br>
    Arreglo con números duplicados: [${numerosDuplicados.join(', ')}]`;
}