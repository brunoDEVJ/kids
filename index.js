const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 8; // 512

let teclado = {
  cima: false,
  direita: false,
  baixo: false,
  esquerda: false,
}

const jogador = new Jogador(c,teclado)


function animacao() {
  window.requestAnimationFrame(animacao);
  c.clearRect(0, 0, canvas.width, canvas.height)

  jogador.desenhar()
}

animacao()

