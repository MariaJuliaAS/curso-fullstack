/*
### O QUE É UMA CLASSSE? ###
>> Armazena os atributos (caracteristicas) e os métidos (ações) que esse objeto vai possuir
*/

type Status = 'ABERTO' | 'FECHADO'

class Loja{
    //Atributos da nossa classe.

    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){ //O construtor recebe os parametros e os atribui ao nome e categoria por exemplo //Ao criar um objeto é o construtor que é executado
        this.nome = nome; //Esse nome, ou seja, o nome dessa classe vai recer o que foi passado no construtor
        this.categoria = categoria
    }

    //Métodos da nossa classe.
    criarLoja(): void{ //A classe pode ter o método (ação) de criar loja
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }
    
    emitirPedido(mesa: number, ...pedidos: string[]): string{
        pedidos.map((item) => {
            console.log(`Saindo novo pedido: ${item}`)
        })
        return `Pedido na mesa: ${mesa}`
    }

    mudarStatus(status: Status): void{
        if(status === 'ABERTO'){
            console.log('LOJA ABERTA')
        }else{
            console.log('LOJA FECHADA')
        }
    }
}

const redBurguer = new Loja('Red Burguer','Fast Food')


//console.log(redBurguer)
redBurguer.criarLoja()
redBurguer.mudarStatus('ABERTO')
const retornoLoja = redBurguer.emitirPedido(48, 'Suco de maracujá', 'Sanduiche')
console.log(retornoLoja)
