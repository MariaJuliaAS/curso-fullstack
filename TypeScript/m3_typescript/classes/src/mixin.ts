//Vai permitir que as classes herdem mais de uma classe

import { applyMixins } from './mixin/applyMixin'

class Automovel{

    ligar(): void{
        console.log('LIGADO')
    }

    desligar(): void{
        console.log('DESLIGADO')
    }

}

class Especificacao{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao;
    }
}

class Carro {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificacao{}

applyMixins(Carro, [Automovel, Especificacao]) //primeiro parametro: interface ---- segundo parametro: construtores/classes q quer utilizar

const gol = new Carro('Gol 1.6');
gol.ligar();
gol.descricao = 'Modelo completo automatico';
console.log(gol)
gol.desligar();