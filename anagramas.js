function encontrarValor (palavra, lista) {
    return lista.indexOf(palavra)>= 0;
}
function encontrarValorArrays (palavra, listaDeListas){
    for (let i=0; i<listaDeListas.length; i++){
       if (encontrarValor(palavra,listaDeListas[i]) == true) return true
    }
    return false;
}
function agruparAnagramas (palavras){
    let palavrasOrdem = [];
    for (let i=0; i< palavras.length; i++) {
        palavrasOrdem.push(palavras[i].toLowerCase().split('').sort().join(''))
    }
    let x = [];
    for (let i=0; i< palavrasOrdem.length; i++) {
        let y = [palavras[i]];
        if (!encontrarValorArrays(palavras[i],x)) {
        for (let j=0; j < palavrasOrdem.length; j++){
            if (palavrasOrdem[i]==palavrasOrdem[j] && i!= j) {

                y.push(palavras[j])
            
            }
        
        }
        x.push(y);
    }

    }
    return x;
}
 
    //passar por toda a array
    // ordenar por ordem alfabetica
    //comparar as palavras dentro da array
    //usar posição para comparar com arry de entrada e agrupar essas palavras
    
console.log(agruparAnagramas(["ana", "ANA", "Naa", "Batata", "TAtabA"]))
