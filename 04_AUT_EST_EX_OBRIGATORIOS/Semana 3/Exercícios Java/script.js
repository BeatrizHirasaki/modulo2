//comentário em js

function ex1() {
    //criando uma mensagem de aviso com alert
    alert('Há ieié!!!!');
    //pegar o valor do form
    var v0 = document.getElementById('v0').value;
    const g = 10; //aceleração gravitacional 10 m/s^2

    tSubida = v0/g;
    document.getElementById('vem').innerHTML = "TEMPO DE SUBIDA = " + tSubida;
    console.log("TEMPO DE SUBIDA = " + tSubida);
}
