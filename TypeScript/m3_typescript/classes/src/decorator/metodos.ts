/*  
    >> DECORATORS -- É uma função especial que pode modificar ou adicionar comportamentos a: <<
    Classes
    Propriedade
    Métodos
    Parametros (BEM POUCO USADO)
    Getters / Setters (BEM POUCO USADO)
*/

// >> DECORATOR DE MÉTODOS -- Só é chamado quando o método for chamado <<

import { verificaPessoa } from "./decorators/verificaPessoa";

class People {
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }

    @verificaPessoa(19)
    cadastrarPessoa() {
        console.log(`Bem-vindo ${this.nome} ao sistema`)
    }
}

const pessoa1 = new People('Júlia')
pessoa1.cadastrarPessoa()