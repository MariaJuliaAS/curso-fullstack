let pessoa = {
    nome: 'Maria',
    sobrenome: 'Júlia',
    cargo: 'estudante'
};

//let sobrenome = 'test';

//const {sobrenome: sobrenomePessoa, cargo, nome} = pessoa; //renomeando a reconstrução

//console.log(nome);
//console.log(sobrenomePessoa);
//console.log(cargo);


//===================================
//Desconstruindo um array

let nomes = ["Júlia", "Matheus", "Glenda"];

//let {0:julia, 2:glenda} = nomes;

//console.log(julia);
//console.log(glenda);

let [primeiroNome, segundoNome] = nomes;
console.log(primeiroNome);
console.log(segundoNome);