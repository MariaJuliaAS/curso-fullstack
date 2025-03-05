//iterface e types com generics

interface NovoProduto<T extends number>{ //Garantindo que o T sempre seja um number
    nome: string;
    preco: T;

    formatar(valor: T): string;
}

const arroz: NovoProduto<number> = { //Por ter um extends number não é possivel colocar outro tipo aqui
    nome: 'Arroz Branco',
    preco: 7,
    formatar(valor: number): string{
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        return valorFormatado
    }
}

console.log(arroz)
console.log(arroz.formatar(7))


/*type NovoProduto<T> = {
    nome: T;
    preco: T;
}

const feijao: NovoProduto<string | number> = {
    nome: 'Feijão preto',
    preco: 20
}

console.log(feijao)*/