alert("Bem vindo ao meu currículo!");

function leiamais(){
    var maisinformacoes= document.getElementById("#informações")[0];
    var btnmaisinformacoes= document.getElementById("#btnmaisinformações")[0];
    if(maisinformacoes.style.display === "none"){
        maisinformacoes.style.display = "inline";
        btnmaisinformacoes.innerHTML ="Menos informações"
    }else{
        maisinformacoes.style.display = "none";
        btnmaisinformacoes.innerHTML ="Mais informações"
    }
}
