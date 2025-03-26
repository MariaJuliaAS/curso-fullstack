"use strict";
function totalVendas(...vendas) {
    const qtdVendas = vendas.length;
    console.log(`Você fez ${qtdVendas} vendas hoje`);
}
totalVendas(10, 30, 25, 15, 90, 30);
function mostraNomes(...nomes) {
    console.log(`Existe ${nomes.length} nomes na array:`);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes('NATAN', 'LUCAS', 'SUJEITO', 'HENRIQUE', 'ANA');
