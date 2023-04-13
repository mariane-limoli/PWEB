function play(jogador){
    var jogada = jogador;
    var pc = Math.floor(Math.random() * 3);
    var resultado;

    switch (pc){
        case 1: document.getElementById('imagem').src = 'pedra.jpg';
        break;
        case 2: document.getElementById('imagem').src = 'papel.jpg';
        break;
        case 3: document.getElementById('imagem').src = 'tesoura.jpg';
        break;       
    }

    if(jogada == pc){
        resultado = "EMPATE";
    }else if((jogada==2 && pc==1) || (jogada==1 && pc==3) || (jogada==3 && pc==2)){
        resultado="VOCÊ GANHOU";
    }else resultado = "VOCÊ PERDEU"



    document.getElementById("resultado").value = resultado;
    
 
}

