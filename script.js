window.onload = function() {
  let baseDaPiramide = 19;
  let NumerosDeLinhasDoTriangulo = (baseDaPiramide + 1) / 2;
  let ladoEsquerdo = NumerosDeLinhasDoTriangulo; 
  let ladoDireito = NumerosDeLinhasDoTriangulo; 
  let trianguloRecuperado = document.querySelector(".triangle");
  let linhasDoHtml = null;

  montarLinhas();
  atualizarContador();
  preenchertriangulo(linhasDoHtml);

  function montarLinhas(){
    for (let index = 0; index < NumerosDeLinhasDoTriangulo; index++) {
      let linhas = document.createElement("div");
      linhas.className = "line";
      trianguloRecuperado.appendChild(linhas)
    }
    linhasDoHtml = document.querySelectorAll(".line");
  }  
  
  function atualizarContador() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        let count = parseInt(localStorage.count);
        count+=1;
        localStorage.count = count;
        document.getElementById("count").innerHTML = count;
      } else {
        localStorage.count = 1;
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }

  function preenchertriangulo(linhasDoHtml) {
    for(let index = 0; index < linhasDoHtml.length; index += 1) {
      preencherLinha(linhasDoHtml[index]);
      ladoDireito += 1;
      ladoEsquerdo -= 1;
    }
  }

  function criarBloco(className) {
    let bloco = document.createElement("div");
    bloco.className = className;
    return bloco;
  }

  function preencherLinha(divLine) {
    for (let linha_colune = 1; linha_colune <= baseDaPiramide; linha_colune += 1) {
      if(linha_colune >= ladoEsquerdo && linha_colune <= ladoDireito) {
        let blocoCriado = criarBloco("box");
        divLine.appendChild(blocoCriado);
      } else {
        divLine.appendChild(criarBloco("box-empty"));
      }
    }
  }
}
