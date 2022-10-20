*- c = context/contexto  -*

`c.fillRect(posicaoX, posicaoY, larguraRet, alturaRet);`
## fillRect cria um cria uma imagem (posicao eixo x, posicao eixo y, largura , altura)

`c.fillStyle()`
## fillStyle preenche o Rect que foi criado

**--------------------------------------------------------------------------------------**
`c.strokeRect(posicaoX, posicaoY, larguraRet, alturaRet) `
## strokeRect cria uma borda

`c.lineWidth = 1`
## lineWidht a largura da borda

`c.strokeStyle = 'red' `
## strpleStule preencher a cor da borda

**--------------------------------------------------------------------------------------**

`c.arc()`
## cria um arco (posicao eixo x, posicao eixo y, raio, angulo inicial, angulo final, sentido)
## sentido true para horario false para anthorario
## radianos para grau formula (PI/180)* angulo em grau
## exemplo c.arc(100, 100, 100, (Math.PI/180)*0, (Math.PI/180)*90, false )

**---------------------------------------------------------------------------------------**

`c.fill()`
## somente fill para preenchimento

`c.beginPath()`
## reseta a ponta do canvas
**---------------------------------------------------------------------------------------**

`let img = new Image()`
## estancia uma imagem

`img.src = './img.png' `
## src local da imagem

`c.drawImage(img, recorte inicial x , recorte inical y, recorte largura, recorte altura, posicao x da imagem, posicao y da imagem, largura da imagem, altura da imagem)`
## drawImage desenha a imagem, apos o load da imagem pode ser chamado de duas maneiras onload() => {drawImage()} || img.addEventListener('load', drawImage)