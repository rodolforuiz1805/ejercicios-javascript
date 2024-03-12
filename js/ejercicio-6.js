console.log("Exercise #6");

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function ordenarNumeros() {
    let numeros = [3, 6, 12, 5, 100, 1];
    let resultadoDiv = document.getElementById('resultadoFinal');
    let salida = bubbleSort(numeros);
    resultadoDiv.innerHTML = 'Resultado: ' + salida.join(', ');
}