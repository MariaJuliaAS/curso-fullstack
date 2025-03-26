//Interface com funcoes

/*interface CursoProps{
    id: string;
    nome: string;
    preco: number;

    //Definir apenas a funcao e o que ela deve esperar e retornar
    promocao: (preco: number) => void
}

function mostraPromocao(preco: number): void{
    console.log(`Promoção no curso: R$ ${preco}`)
}

const novoCurso: CursoProps = {
    id: '1',
    nome: 'Curso typescript',
    preco: 750,
    promocao: mostraPromocao 
}

const novoCurso: CursoProps = {
    id: '1',
    nome: 'Curso typescript',
    preco: 750,
    promocao: (preco: number) => {
        console.log(`Promoção no curso: R$ ${preco}`)
    } 
}

console.log(novoCurso)
console.log(novoCurso.promocao(350))*/

interface SomaProps{
    (valor1: number, valor2: number): number
}

let somaNumeros: SomaProps = (valor1: number, valor2: number):number => {
    console.log('Resultado:', valor1+valor2)

    return valor1+valor2
}

const result = somaNumeros(5, 81)
console.log('Resultado da variavel:', result)