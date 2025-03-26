"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = connection;
exports.statusConnection = statusConnection;
function connection(info) {
    console.log('Conexão realizada com sucesso: ', info.ip);
    return true;
}
function statusConnection() { }
{
    console.log('Servidor funcionando normalmente!');
}
