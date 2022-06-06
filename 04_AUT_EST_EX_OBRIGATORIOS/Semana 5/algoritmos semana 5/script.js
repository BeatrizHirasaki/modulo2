// ex 1
let numero1 = document.getElementById("n1");
let numero2 = document.getElementById("n2");
let operador = document.getElementById("op");

function calculo() {
  let li = document.createElement("li");
  let total = eval(numero1.value + operador.value + numero2.value);
  li.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${total}`;
  document.getElementById("total").appendChild(li);
}

// ex 2
var resto = 0

function calculate(valor) {

  var result = 0;
  var notas = [1, 2, 5, 10, 20, 50, 100]


  for (var i = 0; i < notas.length; i++) {

    if (valor >= notas[i]) {
      var cedula = notas[i];
    }
  }

  var conta = valor / cedula;

  document.getElementById("text_area").innerHTML += "Você precisa pagar com " + Math.floor(conta) + " notas de R$ " + cedula + ",00<br>";
  resto = parseFloat(valor % cedula);
  if ((resto != 0) && (resto > 1)) { calculate(resto); }
  else if (resto != 0 ) {
    document.getElementById("text_area").innerHTML += "Restou: " + 
resto;  }

}

// ex 3
function CalAndShow() {
    var array = document.getElementById("nums").value;
    array = array.split(',')
    
     for(let i = 0; i < array.length - 1; i++){
         for(let j = 0; j < array.length -1 - i; j++) {
             if(array[j] > array[j+1]){
                 var salvar = array[j+1]
                 array[j+1] = array[j]
                 array[j] = salvar
             }
         }
     }
    
     document.getElementById('crescente').innerHTML = " A lista ordenada de forma crescente é " + array;

    }