type Uuid = number | string | null; //FORMA DE REUTILIZAR OS TIPOS 

function acessar(uuid: Uuid, nome: string ){
    console.log(`ID: ${uuid} - Bem vindo ${nome}`)
}

function logUser(uuid: Uuid){
    console.log(`Conta referente ao UUID: ${uuid}`)
}

/*acessar(123, 'José')
acessar('55', 'Ana')
logUser('123')*/

type Moedas = 'BRL' | 'EUR' | 'USD';

function comprarItem(moeda: Moedas){
    console.log('Comprando com a moeda:', moeda)
}

comprarItem("BRL") //NÃO CONSEGUE COLOCAR NENHUMA OUTRA MOEDA ALEM DAS 3 QUE FOI TIPADA
