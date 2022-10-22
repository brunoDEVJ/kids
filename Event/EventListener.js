addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'w':
            jogador.py -= jogador.velocidade
            console.log(jogador.py)
            break;
    }
})