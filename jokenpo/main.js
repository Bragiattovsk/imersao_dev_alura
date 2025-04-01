idade = prompt("Quantos anos você tem?")
if(idade >= 18){
    alert("Você pode jogar")

    escolhaJogador = prompt("Digite 1. Pedra, 2. papel ou 3. tesoura")
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == escolhaComputador){
        alert("Empate!")
    }

    if(escolhaJogador == 1){
        if(escolhaComputador == 2){
            alert("O computador venceu, escolheu papel!")
        }
        if(escolhaComputador == 3)
            alert("O jogador vence, computador jogou tesoura")
    }

    if(escolhaJogador == 2){
        if(escolhaComputador == 3){
            alert("O computador venceu, escolheu tesoura!")
        }
        if(escolhaComputador == 1){
            alert("O jogador vence, computador jogou pedra")
        }
    }

    if(escolhaJogador == 3){
        if(escolhaComputador == 1){
            alert("O computador venceu, escolheu pedra!")
        }
        if(escolhaComputador == 2){
            alert("O jogador vence, computador jogou papel")
        }
    }
}else{
    alert("Você não pode jogar")
}