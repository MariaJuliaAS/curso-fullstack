"use strict";
//Classe Abstrata = Um modelo de classe a ser seguida por outras classes, ou seja, ela não pode ser instanciada diretamente
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log('===============================');
        console.log(`Nova conta P.Fisica criada com sucesso: ${dados.nome}`);
        console.log('===============================');
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log('===============================');
        console.log(`Nova conta P.Juridica criada com sucesso: ${dados.nome}`);
        console.log('===============================');
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: 'Joana Silva',
    numero: '1020-x',
    endereco: 'Rua 15, bairro centro'
});
const sujeitoProgramador = new PessoaJuridica();
sujeitoProgramador.abrirConta({
    nome: 'Matheus Fraga',
    numero: '90201-x',
    endereco: 'Rua XY, bairro centro'
});
