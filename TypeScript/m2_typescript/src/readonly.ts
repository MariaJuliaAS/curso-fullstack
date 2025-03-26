//PODE APENAS LER E NÃO PODE ALTERAR

interface ProdutoProps{
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: ProdutoProps = {
    id: '1',
    nome: 'Tenis nike',
    descricao: 'Super tenis descolado'
}

produto1.nome = 'Tenis nike 2.0'

console.log(produto1)