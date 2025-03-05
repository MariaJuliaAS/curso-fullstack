//SPREAD------------------------------------------------

//let primeiros = [1, 2, 3];

//let numeros = [...primeiros, 4, 5, 10]; os tres pontos faz com que o que tiver dentro da array primeiros seja colocado ali
//console.log(numeros);


//let pessoa = {
//    nome: 'Matheus',
//    idade: 45,
//    cargo: 'RH'
//};

//let novaPessoa = {
//    ...pessoa,
//    status: 'ATIVO',
//    cidade: 'Campo Grande /MS'
//};

//console.log(novaPessoa);


//function novoUsuario(info){
//    let dados = {
//        ...info,
//        status: 'ATIVO',
//        inicio: '20/03/2023',
//        codigo: '123123'
//    };

//    console.log(dados);
//}

//novoUsuario({nome: 'Jose', sobrenome: 'Silva', cargo: 'DEV'});

//REST------------------------------------------------

//function convidados(...nomes){ Vai receber todos os argumentos
//    console.log('Seja bem vindo todos convidados');
//    console.log(nomes);
//}

//convidados('Maria', ' Júlia', ' Glenda');

function sorteador(...numeros){
    console.log(numeros)

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log('Numero gerado foi ' + numeros[numeroGerado] + ' da posição: ' + (numeroGerado + 1));
}

sorteador(1, 22, 3, 5, 75, 34, 17, 4)