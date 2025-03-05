"use strict";
const novoUsuario = {
    email: 'matheus@teste.com',
    status: true
};
//console.log(novoUsuario)
function novoUser(usuario) {
    console.log(usuario.email);
}
novoUser({ email: 'ana@ana.com', status: false });
