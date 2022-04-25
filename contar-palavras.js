const conta = {};

function contarPalavras(entrada) {
    let re = /[^a-zA-Z ]/g;
    let entradaArray = entrada.toLowerCase().replace(re,"").split(' ');
    entradaArray.forEach(function (x) { conta[x] = (conta[x] || 0) + 1});
    return conta;

}
console.log(contarPalavras());