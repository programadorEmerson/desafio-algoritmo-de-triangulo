window.onload = function() {
  let baseDaPiramide = 19;
  let NumerosDeLinhasDoTriangulo = (baseDaPiramide + 1) / 2;
  let ladoEsquerdo = NumerosDeLinhasDoTriangulo; 
  let ladoDireito = NumerosDeLinhasDoTriangulo; 
  let trianguloRecuperado = document.querySelector(".triangle");
  let linhasDoHtml = null;

  montarLinhas() && preencherTriangulo(linhasDoHtml);  

  function montarLinhas(){
    for (let index = 0; index < NumerosDeLinhasDoTriangulo; index++) {
      trianguloRecuperado.appendChild(criarElemento("line"))
    }
    linhasDoHtml = document.querySelectorAll(".line");
    return true;
  }  
  
  function atualizarContador() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        localStorage.count = parseInt(localStorage.count) +1;
        document.getElementById("count").innerHTML = localStorage.count;
      } else {
        localStorage.count = 1;
        document.getElementById("count").innerHTML = localStorage.count;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
    return true;
  }

  function preencherTriangulo(linhasDoHtml) {
    for(let index = 0; index < linhasDoHtml.length; index += 1) {
      preencherLinha(linhasDoHtml[index]);
      ladoDireito += 1;
      ladoEsquerdo -= 1;
    }
    atualizarContador();
  }

  function criarElemento(className) {
    let bloco = document.createElement("div");
    bloco.className = className;
    return bloco;
  }

  function preencherLinha(divLine) {
    for (let linha_colune = 1; linha_colune <= baseDaPiramide; linha_colune += 1) {
      if(linha_colune >= ladoEsquerdo && linha_colune <= ladoDireito) {
        let blocoCriado = criarElemento("box");
        divLine.appendChild(blocoCriado);
      } else {
        divLine.appendChild(criarElemento("box-empty"));
      }
    }
  }
}
