const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 8; // 512

let posicaoX = 0;
let posicaoY = 0;

let direcaoX = 0;
let direcaoY = 0;

let larguraRet = 50;
let alturaRet = 50;

function animacao() {
  requestAnimationFrame(animacao);

   
  posicaoX += direcaoX;
  posicaoY += direcaoY;
  
  if (posicaoY <= 0) {
    direcaoX = 2;
    direcaoY = 0;
  }
  if (posicaoX + larguraRet >= larguraCanvas -1) {
    direcaoX = 0;
    direcaoY = 2;
  }

  if (posicaoY + alturaRet >= alturaCanvas) {
    direcaoY = 0;
    direcaoX = -2;
  }

  if (posicaoX < 1 && posicaoY + alturaRet >= alturaCanvas) {
    direcaoX = 0;
    direcaoY = -2;
  }
}

