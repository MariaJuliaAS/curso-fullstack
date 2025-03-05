//Herança > quando tem uma classe que herda de outra classe
//ClassePAI tem seus atributos e a classeFILHA vai herdar todos os atributos do pai alem dos seus prórpios atributos

class Usuario {
    protected id: number; //Pode ser chamado na classe pai ou nas classes filhas
    nome: string;
    email: string; //Não esta declarado mas mesmo assim é public

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

}

class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number) {

        super(id, nome, email) //Chamando o construtor da classe pai ---- Tem que ser passado no constructor também

        this.cargo = cargo;
        this.nivel = nivel;
    }

    protected mudarCargo(cargoAlterado: string, idAlterado: number): void { //Não poderia ser acessado fora da classe pai/filha
        console.log('Alterando cargo para:', cargoAlterado)
        console.log('ID do usuario:', idAlterado)
        this.cargo = cargoAlterado
        this.id = idAlterado
    }

    acessarAdmi(): void {
        this.mudarCargo('Desinger', 456)
    }
}

const usuario1 = new Admin(123, 'João', 'joao@teste.com', 'Programador', 5)
//usuario1.cargo = 'Desing'; //Por ser publico pode modificar a hora que quiser
usuario1.acessarAdmi()
console.log(usuario1)


// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)

/*
    >> Public: Todos podem acessar e modificar (não precisa ser declarado de fato)
    >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da 
    classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

    >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados, 
    Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

    >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
    nao podemos alterar ele.
*/