"use strict";
//iterface e types com generics
const arroz = {
    nome: 'Arroz Branco',
    preco: 7,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(7));
/*type NovoProduto<T> = {
    nome: T;
    preco: T;
}

const feijao: NovoProduto<string | number> = {
    nome: 'Feijão preto',
    preco: 20
}

console.log(feijao)*/ 
