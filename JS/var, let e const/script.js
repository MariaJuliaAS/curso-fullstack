// Diferenças entre VAR, LET e CONS

//VAR = consegue alterar e acessar ela dentro e fora do bloco que foi criada {} --pode criar sem um valor inicial--
var nome = 'Júlia'
if (nome === 'Júlia'){
    var curso = 'Dev front-end';
    console.log(curso);
}

//LET = so pode ser acessada e alterada dentro do bloco que foi criada {} --pode criar variaveis como o mesmo nome da let fora do {}--  --pode criar sem um valor inicial--
if (nome === 'Júlia'){
    let cargo = 'Programador junior';
    console.log(cargo);
}

//CONST = so pode ser acessada dentro do bloco que foi criada {}, porém não pode ser alterada de nenhuma maneira pois é uma constante --não pode ser criada sem um valor inicial--
const trab = 'Estágiario'
console.log(trab);