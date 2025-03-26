"use strict";
//Vai permitir que as classes herdem mais de uma classe
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log('LIGADO');
    }
    desligar() {
        console.log('DESLIGADO');
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]); //primeiro parametro: interface ---- segundo parametro: construtores/classes q quer utilizar
const gol = new Carro('Gol 1.6');
gol.ligar();
gol.descricao = 'Modelo completo automatico';
console.log(gol);
gol.desligar();
