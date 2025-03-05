/*interface TecnoProps{
    id: string;
    nome: string;
    slug?: (string | number)[];
}

let tecno1: TecnoProps = {
    id: '1',
    nome: 'PHP',
    slug: ['php', 'php-do-zeo', 'php12', 12]
}*/

interface TecnoProps{
    id: string;
    nome: string;
    descricao?: string;
}

interface Nomes{
    tecnologia: TecnoProps[];
}

let frontend: Nomes = {
    tecnologia: [
        {id: '12', nome: 'ReactJS', descricao: 'Biblioteca para criar interfaces'},
        {id: '43', nome: 'VueJS'}
    ]
}

console.log(frontend.tecnologia)