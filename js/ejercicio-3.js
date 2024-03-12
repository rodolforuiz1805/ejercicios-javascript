console.log("Exercise #3");

const calculaFactorial = num => {
    let result =1;
    for (let i = 1; i <= num; i++){
        result*=i;   
    }
    return result;
 }

function calcularFactorialYMostrar() {
    const num = 7;
    document.getElementById("resultadoFactorial").innerHTML = `El factorial de ${num} es: ${calculaFactorial(num)}`;
};