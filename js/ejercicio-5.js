console.log("Exercise #5");

let personas = ["Juan", "Luis", "Dani", "Maria"];

function ejecutarOperaciones() {
    let resultadoHTML = "";

    resultadoHTML += "<p>Personas en la lista: " + personas.join(", ") + "</p>";

    personas.splice(personas.indexOf("Dani"), 1);

    personas = personas.filter(nombre => nombre !== "Juan");

    personas.unshift("Luis");

    let miNombre = "Rodolfo";
    personas.push(miNombre);

    for (let i = 0; i < personas.length; i++) {
        resultadoHTML += "<p>" + personas[i] + "</p>";
        if (personas[i] === "Maria") {
            break;
        }
    }

    let indiceMaria = personas.indexOf("Maria");
    resultadoHTML += "<p>El índice donde se encuentra Maria es: " + indiceMaria + "</p>";

    resultadoHTML += "<p>Personas después de las operaciones: " + personas.join(", ") + "</p>";

    document.getElementById("imprimirResultado").innerHTML = resultadoHTML;
}

document.getElementById("ejecutarBtn").addEventListener("click", ejecutarOperaciones);