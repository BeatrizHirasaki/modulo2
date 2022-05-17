function caixa() {
    //alert('haieié!');
    var total = document.getElementById('valor').value;
    let cedulas10 = parseInt(total/10);
    let cedulas5 = parseInt((total % 10)/5);
    let cedulas1 = parseInt(total%5);
    console.log("Você sacará "+cedulas10+" cédulas de 10 reais, "+cedulas5+" cédulas de 5 reais, e "+cedulas1+" cédulas de 1 real.");
}