rodada = 1

while(rodada <= 3){
    console.log("Rodada" + rodada)

    escolhaJogador = prompt(`Nivel ${rodada}! Escolha vidro (1, 2, 3): `)

    pisoQuebrado = Math.floor(Math.random()*3) + 1;

    if(escolhaJogador == pisoQuebrado){
        alert("Vidro quebrado! GAME OVER!")
        rodada = 10
    }else{
        alert(`Passou! Vidro quebrado estava na ponte ${pisoQuebrado}`)
    }

    rodada += 1
}

if(rodada == 4){
    alert("Você venceu! Parabéns!")
}