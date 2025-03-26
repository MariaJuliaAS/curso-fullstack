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
/* >> DECORATOR DE CLASSE <<
Estrutura do decorator e seus parâmetros obrigatorios
function logInfo(target: any) { //Target = recebe o construtro da classe
    console.log('Sistema ONLINE')
}

    >> Padrao factory (FÁBRICA) -- Função que vai retornar a criação do decorator
function logInfo(mensagem: string) {
    return (target: any) => {
        console.log(`${mensagem}, ${target}`)
    }
}

@logInfo('Servidor rodando') //iniciando o decorator relacionando a classe
class Sistema { //O decorator é executado assim que a classe é carregada, sem precisar instanciá-la.

}*/
// ================== PRATICANDO ==================
function setIpServidor(novoIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = novoIp;
            }
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor('192.168.50.30')
], Servidor);
const servidor1 = new Servidor();
console.log(servidor1);
