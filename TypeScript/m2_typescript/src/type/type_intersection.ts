type Info = { //muito parecido com interface mas nao é
    id: number;
    nome: string;
    descr?: string;
}

const produtoInfo: Info = {
    id: 123,
    nome: 'Placa de video',
    descr: 'GTX 2090'
}

type Categoria = {
    slug: string;
    qtdProduto: number;
}

const categoria1: Categoria = {
    slug: 'Hardware',
    qtdProduto: 2,
}

type ProdutoInfo = Info & Categoria;//ProdutoInfo é a intercessa (UNIAO) entre info e categoria

const novoProduto: ProdutoInfo = {
    id: 54321,
    nome: 'Teclado RGB',
    slug: 'Teclado mecanico',
    qtdProduto: 15
}
console.log(novoProduto)