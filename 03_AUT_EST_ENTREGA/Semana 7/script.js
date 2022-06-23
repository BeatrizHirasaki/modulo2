const skills = document.querySelector(".db")

//alert("Bem vindo ao meu currículo!");

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


function getdata(){
  let url = "/data";
  

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
    xhttp.send();

  let data = JSON.parse(xhttp.responseText); 
 

  let html = "";
    data.forEach(element => {
        html += `<li>${element.skills}</li>
        <button onclick="skillsdelete(${element.id})">Deletar</button>
        <button>Editar</button>`;
    });
    skills.innerHTML = html;
    
}

getdata();

function skillsdelete(id) {
 
  var url = "/skillsdelete/"+id;
  var xhttp = new XMLHttpRequest();
   
  xhttp.open("POST", url, false);
 
  xhttp.send()
  
  window.location.href = "/"

  console.log('deu certo')

  
  //A execução do script pára aqui até a requisição retornar do servidor
//   window.location.href = "/"
}
