console.log("Exercise #1");

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    let sentence = "";
    for (let i = 0; i < arr.length; i++) {
        sentence += " " + arr[i]; 
    }
      return sentence;
      
  }

  
  function imprimirYMostrar() {
    document.getElementById("resultado").innerHTML = printOutString();
} 