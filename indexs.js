const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 8; // 512


function animacao() {
  requestAnimationFrame(animacao);

}
