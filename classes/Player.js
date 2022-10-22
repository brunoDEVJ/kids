class Jogador {
    constructor(ctx, teclado) {
        this.ctx = ctx;
        this.teclado = teclado;

        this.px = 0
        this.py = 0

        this.velocidade = 5

        this.kat = new Image()
        this.kat.src = "./SpritePersonagem/kat.png"

        this.numSprite = 0
        this.CorteInicialX = 0
        this.LarguraImagem = 0
        this.larguraSprite = 0
        this.qtdSprite = 4

        this.larguraSprite = this.kat.width/this.qtdSprite
        this.AlturaSprite = this.kat.height/8

        this.CorteInicialX = this.larguraSprite*this.numSprite


        setInterval(() => {
            this.numSprite++
            if(this.numSprite > 3)
                this.numSprite = 0
            this.CorteInicialX = this.larguraSprite * this.numSprite
        }, 200);


        this.kat.onload = this.desenhar()
    }

    gerenciar(){
        if(this.teclado.cima)
        {
            if(this.py > 0)
            {
                this.py -= this.velocidade
            }
        }
        if(this.teclado.direita)
        {
            if(this.x < this.ctx.canvas.width - this.kat.width)
            {
                this.x += this.velocidade
            }
        }
        if(this.teclado.baixo)
        {
            if(this.py < this.ctx.canvas.height - this.kat.height)
            {
                this.py += this.velocidade
            }
        }
        if(this.teclado.esquerda)
        {
            if(this.x > 0)
            {
                this.x -= this.velocidade
            }
        }

    }

    desenhar()
    {
       

        this.ctx.drawImage(this.kat,this.CorteInicialX, 0, this.larguraSprite, this.AlturaSprite,this.px ,this.py, this.larguraSprite, this.AlturaSprite)
        this.gerenciar()
    }
}