"use strict";
//ReadOnly é apenas para atributos
// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)
/*
    >> Public: Todos podem acessar e modificar (não precisa ser declarado de fato)

    >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da
    classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

    >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
    Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

    >> Readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
    nao podemos alterar ele.
*/
class Pessoa {
    constructor(nome, idade) {
        this.id = '123'; //se colocasse private ia conseguir alterar dentro da classe, então colocamos o readony pq pode ser acessado mas não pode ser alterado
        this.nome = nome;
        this.idade = idade;
    }
    mostraID() {
        console.log(`O ID do usuário(a) ${this.nome} é ${this.id} e não pode ser alterado`);
    }
}
const ana = new Pessoa('Ana Carol', 29);
ana.mostraID();
console.log(ana);
