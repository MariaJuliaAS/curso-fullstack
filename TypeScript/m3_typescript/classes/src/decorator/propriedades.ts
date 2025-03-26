/*  
    >> DECORATORS -- É uma função especial que pode modificar ou adicionar comportamentos a: <<
    Classes
    Propriedade
    Métodos
    Parametros (BEM POUCO USADO)
    Getters / Setters (BEM POUCO USADO)
*/


// >> DECORATOR DE PROPRIEDADE <<

function validaNome(tamanho: number) {
    //target = construtor da nossa classe
    //key = nossa propriedade (nesse caso nome)
    return (target: any, key: string) => { //Quando vai criar um decorator para uma propriedade além do target precisa da key
        let valor = target[key] //acessa a propriedade nome dentro do construtor

        const getter = () => valor;

        const setter = (value: string) => {
            if (value === '') {
                console.log('Digite algo!')
            } else if (value.length < tamanho) {
                console.log('Nome muito pequeno, digite um nome válido!')
            } else {
                valor = value;
            }
        }
        Object.defineProperty(target, key, {
            get: getter, //ao tentar acessar a propriedade nome o metodo getter vai ser chamado
            set: setter //ao tentar atribuit um valor a propriedade nome o metodo setter vai ser chamado
        })
    }
}

class JogoOnline {

    @validaNome(5) //iniciando o decorator relacionando a propriedade
    nome: string;

    @validaNome(15)
    titulo: string;
    constructor(nome: string, titulo: string) {
        this.nome = nome;
        this.titulo = titulo
    }
}

const jogo1 = new JogoOnline('GTA5', 'Jogo online super legal')
console.log(jogo1.nome)
console.log('=====================================')
console.log(jogo1.titulo)