//Supondo que temos um jogo e esse jogo pode ter uma dlc

interface JogoProps{
    readonly id: string;
    nome: string;
    desc: string;
    plataforma: string[];
}

const left4dead: JogoProps = {
    id: '1',
    nome: 'Left 4 Dead 2',
    desc: 'Jogo de ação e tiro',
    plataforma: ['PS5', 'PC']
}

//console.log(left4dead)

/*interface DLC extends JogoProps{ //A interface DLC vai exntender/ter acesso tudo que tem no JogoProps alem do novoConteudo
    novoConteudo: string[];
}

const left4deadDLC: DLC = {
    id: '90',
    nome: 'Left 4 Dead 2 - Novos mapas',
    desc: '4 novos mapas para jogar online',
    plataforma: ['PS5', 'PC'],
    novoConteudo: ['Modo Coop', 'Mais 5 horas de jogo', 'Medalhas']
}

console.log(left4deadDLC)*/

interface DLC extends JogoProps{ // alem das informações da dlc que são extendidas do jogoProps esta passando agr as infos do jogo original
    jogoOriginal: JogoProps
    novoConteudo: string[];
}

const left4deadDLC: DLC = {
    id: '90',
    nome: 'Left 4 Dead 2 - Novos mapas',
    desc: '4 novos mapas para jogar online',
    plataforma: ['PS5', 'PC'],
    novoConteudo: ['Modo Coop', 'Mais 5 horas de jogo', 'Medalhas'],
    jogoOriginal: left4dead
}

console.log(left4deadDLC)