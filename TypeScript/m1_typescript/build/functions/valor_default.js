"use strict";
function cadastro(email, senha, nome = 'Usuário', idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro('maju@teste.com', '123123', 'Júlia', 19);
function cadastroLoja(nome, email, status = false) {
    console.log('Nome da loja:', nome, 'Email:', email);
    return status;
}
console.log(cadastroLoja('Burger K', 'bk@teste.com'));
