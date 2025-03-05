"use strict";
const BurguerK = {
    nome: 'Burguer K',
    endereco: 'Rua logo ali',
    status: true,
};
//console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja: ${nome}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status: ${status}`);
}
novaLoja({
    nome: 'Subway',
    endereco: 'Rua ali na esquina',
    status: false
});
