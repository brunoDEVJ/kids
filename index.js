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
}

const jogador = new Jogador(c,teclado)


function animacao() {
  window.requestAnimationFrame(animacao);
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.drawImage(personagemImagem, numeroDoSprite, 0 , larguraDoSprite, alturaImagemTotal, posicaoX, posicaoY,larguraDoSprite,alturaImagemTotal )
  
  console.log("numeros altos")

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

animacao()

