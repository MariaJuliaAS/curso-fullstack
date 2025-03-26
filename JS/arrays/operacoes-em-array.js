//PART 1 ================================
// MAP = PERCORRER TODO UM ARRAY.

//let lista = ['Mathes', 'Maria', 'Jose'];

//lista.map((item, index) => {
//    console.log(`Nome: ${item} - Posição: ${index}`);
//});


// REDUCDE = BUSCA REDUZIR UM ARRAY.

//let numeros = [5, 3, 2];

//let total = numeros.reduce((acumulador, numero, index, original) => {
//console.log(`${acumulador} - total ate o momento`);
//console.log(`${numero} - valor atual`);
//console.log(`${index} - posição`);
//console.log(`${original} - array original`);
//console.log('========================');

//return acumulador += numero;
//});

//console.log(total);

//PART 2 ================================
// FIND = BUSCAR ALGO EM UMA LISTA

//let listagem = [5, 3, 'Jose', 2, 'Matheus'];

//let busca = listagem.find((item) => {
//    if(item === 'Jose'){
//        return console.log('Item encontrado');
//    }
//});

//console.log(busca);

// FILTER

let palavras = ['Matheus', 'Ana', 'Jose', 'Ricardo Silva', 'Jose'];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);