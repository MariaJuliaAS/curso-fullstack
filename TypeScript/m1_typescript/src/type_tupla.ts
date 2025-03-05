//Tupla so esta presente no TS
//Uma array de elementos que podem ter diferentes tipos de dados

let aluno: [string, number];

aluno = ['Sujeito Programador', 123]; //Não é possivel colocar mais um item, deve seguir a quatidade e o tipo que foi passado na variavel

aluno.push('Mj', 19)

console.log(aluno)



let statusPedido: [string, string, string];

statusPedido = ['Em produção', 'Saiu para entrega', 'Pedido entregue'];

console.log(statusPedido)



let lista: [number, boolean, string]; 

lista = [19, true, 'Maju']

console.log(lista)