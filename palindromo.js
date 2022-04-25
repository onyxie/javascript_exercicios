function palindromo(entrada) {
    let re = /[^a-zA-Z]/g;
    let entradaLower = entrada.toLowerCase().replace(re,"");
    let inverso = entradaLower.split(' ').reverse().join('');
    
    console.log(entradaLower);
    console.log(inverso);


    return inverso === entradaLower;
}


console.log(palindromo());