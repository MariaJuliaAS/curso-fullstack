//Objetos

let pessoa = { //variavel do tipo objeto, caracterizado por: {}

    nome: "Júlia", //propriedades do objeto pessoa
    idade: 19,
    altura: 1.60,
    cargo: 'Programador junior'
};
console.log(pessoa);

//console.log(pessoa.nome); | acessando a variavel pessoa com a propriedade nome

let carro = {
    nome: 'Golf 1.6',
    cor: 'Branco',
    potencia: '140cv'
};
console.log(carro);



//Lista de objetos

let usuarios = [
    {nome: 'Mateus', cargo: 'Programador', status: 'Ativo'},
    {nome: 'Maria', cargo: 'Frontend', status: 'Ativo'},
    {nome: 'Felipe', cargo: 'RH', status: 'Ativo'}
];
console.log(usuarios);
console.log(usuarios[0].nome); //Nome da posição 0 
console.log(usuarios[1]); //Objeto da posição 1