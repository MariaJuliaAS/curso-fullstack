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

class Conta{
    private limite: number = 450;

    private aumentarLimite(quantidade: number){
      if(quantidade < 1000){
        this.limite = quantidade;
        console.log(`O limite da sua conta recebeu um aumento e agora é ${this.limite} `)
      }else{
        console.log(`Não podemos te oferecer esse limite, seu limite atual é: ${this.limite}`)
      }
    }

    protected solicitarLimite(quantidade: number){
      return this.aumentarLimite(quantidade)
    }

    solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void{
      if(estaAutenticado){
        this.aumentarLimite(quantidade)
      }else{
        console.log('O usuario não esta autenticado')
      }
    }
}

class BancoAfiliado extends Conta{
  limiteContaAfiliado(){
    return this.solicitarLimite(1500)
  }
}

const fulano = new Conta();
fulano.solicitarLimiteApp(true, 750)
console.log(fulano)


console.log('====================================')

const joao = new BancoAfiliado();
joao.limiteContaAfiliado()
console.log(joao)