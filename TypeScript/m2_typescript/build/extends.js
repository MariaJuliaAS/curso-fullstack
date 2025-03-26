"use strict";
//Supondo que temos um jogo e esse jogo pode ter uma dlc
const left4dead = {
    id: '1',
    nome: 'Left 4 Dead 2',
    desc: 'Jogo de ação e tiro',
    plataforma: ['PS5', 'PC']
};
const left4deadDLC = {
    id: '90',
    nome: 'Left 4 Dead 2 - Novos mapas',
    desc: '4 novos mapas para jogar online',
    plataforma: ['PS5', 'PC'],
    novoConteudo: ['Modo Coop', 'Mais 5 horas de jogo', 'Medalhas'],
    jogoOriginal: left4dead
};
console.log(left4deadDLC);
