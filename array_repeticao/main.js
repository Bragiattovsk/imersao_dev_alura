//Preciso criar uma lista com 3 jogadores
//Calcular a força de cada jogador para saber a força do time
//Calcular a força de cada jogador do time do computador
//Comparar os dois times para ver quem vence
personagem = ["","",""]

viloes = ["","",""]

forcaPersonagem = 0
forcaViloes = 0

for(let i = 0; i < 3; i++){
    escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i + 1))
    personagem[i] = escolhaPersonagem
    forcaPersonagem += Math.floor(Math.random () * 10) + 1;
}

for(let i=0; i<3; i++){
    indiceAleatorio = Math.floor(Math.random() * 10)
    viloesPossiveis = ["Darth Vader","Coringa","Lorde Voldemort","Hannibal Lecter","Thanos","Freddy Krueger","Jason Voorhees","Norman Bates","Anton Chigurh","Pennywise"]
    viloes[i] = viloesPossiveis[indiceAleatorio]
    forcaViloes += Math.floor(Math.random() * 10) + 1;
}

alert(`Vilões: ${viloes}`)

if(forcaPersonagem > forcaViloes){
    alert(`Sua força: ${forcaPersonagem} Vs Força vilões: ${forcaViloes}`)
    alert("Você ganhou! Parabéns")
}else{
    if(forcaPersonagem < forcaViloes){
        alert(`Sua força: ${forcaPersonagem} Vs Força vilões: ${forcaViloes}`)
        alert("Seu time perdeu! Tente novamente!")
    }else{
        alert(`Sua força: ${forcaPersonagem} Vs Força vilões: ${forcaViloes}`)
        alert("EMPATE!!")
    }
}