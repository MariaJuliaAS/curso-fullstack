function megaSena(quant){
    if(quant < 6 || quant > 9){
        console.log('Digite um número de 6 a 9')
        return [];
    }

    const numeros = [];    
    while(numeros.length < quant){
        const numAleatorio = Math.floor(Math.random() * 60) + 1;
        

        if(!numeros.includes(numAleatorio)){
            numeros.push(numAleatorio);
        }
    }
    
    return numeros;
}

const numeroSorteado = megaSena(9);
console.log(numeroSorteado)

