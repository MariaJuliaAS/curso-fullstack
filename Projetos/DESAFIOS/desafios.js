//===================================================================
console.log('===================================================================');
console.log('PRIMEIRO DESAFIO;')
console.log('===================================================================');
//===================================================================

const list = ['Computador', ' Telefone', ' Mouse', ' Teclado'];
console.log(`Lista: ${list} - Tamanho da lista: ${list.length} itens`);

list.splice(2, 1);
console.log(`Nova lista: ${list} - Tamanho da lista: ${list.length} itens`);

const findProduct = list.find(p => p === 'Computador');

if(findProduct){
    console.log(`O produto --${findProduct}-- foi encontrado!`);

}else{
    console.log('Produto não encontrado!')
}

const filterProduct = list.filter(p => p !== ' Telefone');
console.log(`Nova lista: ${filterProduct} - Tamanho da lista: ${filterProduct.length} itens`)

//===================================================================
console.log('===================================================================');
console.log('SEGUNDO DESAFIO;')
console.log('===================================================================');
//===================================================================

const numbers = [1, 3, 5, 7, 0, 9];

console.log(`Lista em ordem crescente: ${numbers.sort()}`);

numbers.shift();
console.log(`Retirando o primeiro número da lista: ${numbers}`);

numbers.reverse();
console.log(`Lista em ordem decrescente: ${numbers}`);

//===================================================================
console.log('===================================================================');
console.log('TERCEIRO DESAFIO;')
console.log('===================================================================');
//===================================================================

let hoje = '08/01/2025';

const [dia, mes, ano] = hoje.split('/');
console.log(`Dia: ${dia}`);
console.log(`Mês: ${mes}`);
console.log(`Ano: ${ano}`);