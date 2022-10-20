const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 8; // 512


let larguraCanvas = 1024;
let alturaCanvas = 512;

let posicaoX = 0;
let posicaoY = 0;

let velocidade = 5

const keyBoard = 
{
  cima:false,
  baixo: false,
  esquerda: false,
  direita: false,
  personagemEsquerda: false,
}

let personagemImagem = new Image();
personagemImagem.src = './idle.png';
let recorteInicial = 0;
let larguraImagemTotal = personagemImagem.width;
let numeroDeSprite = 11;
let NumeroDeVomentoDoSprite = 4
let larguraDoSprite = larguraImagemTotal/numeroDeSprite
let alturaImagemTotal = personagemImagem.height
let numeroDoSprite = larguraDoSprite * recorteInicial

setInterval(() => {
  
  recorteInicial++
  
  if(recorteInicial >= numeroDeSprite){
    recorteInicial = 1
  }
},100)



function animacao() {
  window.requestAnimationFrame(animacao);
  c.clearRect(0, 0, larguraCanvas, alturaCanvas);
  numeroDoSprite = larguraDoSprite * recorteInicial

  c.drawImage(personagemImagem, numeroDoSprite, 0 , larguraDoSprite, alturaImagemTotal, posicaoX, posicaoY,larguraDoSprite,alturaImagemTotal )
  


  if(keyBoard.direita){
    posicaoX += velocidade
  }
  if(keyBoard.esquerda){
    posicaoX -= velocidade
  }
  if(keyBoard.cima){
    posicaoY -= velocidade
  }
  if(keyBoard.baixo){
    posicaoY += velocidade
  }

  
}




addEventListener('keydown', ({key}) => {
  switch (key) {
    case 'd' :
      keyBoard.direita = true
      keyBoard.personagemEsquerda = false
      personagemImagem.src = './runRight.png'
      numeroDeSprite = 8
      break;
    case 'a' :
      keyBoard.esquerda = true
      keyBoard.personagemEsquerda = true
      personagemImagem.src = './runLeft.png'
      numeroDeSprite = 8
      break;
    case 'w' :
      keyBoard.cima = true
      personagemImagem.src = './enterDoor.png'
      numeroDeSprite = 8
      break;
    case 's' :
      keyBoard.baixo = true
      keyBoard.personagemEsquerda ? personagemImagem.src = './runLeft.png' : personagemImagem.src = './runRight.png'
      numeroDeSprite = 8
      break;
  }  
})

addEventListener('keyup', ({key}) => {
  switch (key) {
    case 'd' :
      keyBoard.direita = false
      keyBoard.personagemEsquerda = false
      personagemImagem.src = './idle.png'
      numeroDeSprite = 8
      break;
    case 'a' :
      keyBoard.esquerda = false
      keyBoard.personagemEsquerda = true
      personagemImagem.src = './idleLeft.png'
      numeroDeSprite = 8
      break;
    case 'w' :
      keyBoard.cima = false
      personagemImagem.src = './idle.png'
      numeroDeSprite = 8
      break;
    case 's' :
      keyBoard.baixo = false
      personagemImagem.src = './idle.png'
      numeroDeSprite = 8
      break;
  }  
})


animacao()
