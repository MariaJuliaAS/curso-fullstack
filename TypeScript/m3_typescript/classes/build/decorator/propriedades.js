"use strict";
/*
    >> DECORATORS -- É uma função especial que pode modificar ou adicionar comportamentos a: <<
    Classes
    Propriedade
    Métodos
    Parametros (BEM POUCO USADO)
    Getters / Setters (BEM POUCO USADO)
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// >> DECORATOR DE PROPRIEDADE <<
function validaNome(tamanho) {
    //target = construtor da nossa classe
    //key = nossa propriedade (nesse caso nome)
    return (target, key) => {
        let valor = target[key]; //acessa a propriedade nome dentro do construtor
        const getter = () => valor;
        const setter = (value) => {
            if (value === '') {
                console.log('Digite algo!');
            }
            else if (value.length < tamanho) {
                console.log('Nome muito pequeno, digite um nome válido!');
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter, //ao tentar acessar a propriedade nome o metodo getter vai ser chamado
            set: setter //ao tentar atribuit um valor a propriedade nome o metodo setter vai ser chamado
        });
    };
}
class JogoOnline {
    constructor(nome, titulo) {
        this.nome = nome;
        this.titulo = titulo;
    }
}
__decorate([
    validaNome(5) //iniciando o decorator relacionando a propriedade
], JogoOnline.prototype, "nome", void 0);
__decorate([
    validaNome(15)
], JogoOnline.prototype, "titulo", void 0);
const jogo1 = new JogoOnline('GTA5', 'Jogo online super legal');
console.log(jogo1.nome);
console.log('=====================================');
console.log(jogo1.titulo);
