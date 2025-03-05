"use strict";
/*
### O QUE É UMA CLASSSE? ###
>> Armazena os atributos (caracteristicas) e os métidos (ações) que esse objeto vai possuir
*/
class Loja {
    constructor(nome, categoria) {
        this.nome = nome; //Esse nome, ou seja, o nome dessa classe vai recer o que foi passado no construtor
        this.categoria = categoria;
    }
    //Métodos da nossa classe.
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((item) => {
            console.log(`Saindo novo pedido: ${item}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === 'ABERTO') {
            console.log('LOJA ABERTA');
        }
        else {
            console.log('LOJA FECHADA');
        }
    }
}
const redBurguer = new Loja('Red Burguer', 'Fast Food');
//console.log(redBurguer)
redBurguer.criarLoja();
redBurguer.mudarStatus('ABERTO');
const retornoLoja = redBurguer.emitirPedido(48, 'Suco de maracujá', 'Sanduiche');
console.log(retornoLoja);
