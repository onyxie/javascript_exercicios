function jokenpo(escolha_jogador1, escolha_jogador2) { 

    const opcoes = ["PE", "PA", "TE"];

    if(!opcoes.includes(escolha_jogador1) || !opcoes.includes(escolha_jogador2)) return "Entrada Invalida.";

    if(escolha_jogador1 == escolha_jogador2) {
        return "Empate";
    } else if (escolha_jogador1 == "PA" && escolha_jogador2 == "PE" || escolha_jogador1 == "TE" && escolha_jogador2 == "PA" || escolha_jogador1 == "PE" && escolha_jogador2 == "TE") { 
        return "Jogador 1 ganhou!"
    } else {
        return "Jogador 2 ganhou!"
    }
}

console.log(jokenpo());