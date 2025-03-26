"use strict";
//Buscar o meu arquivo que conecta com o banco de dados.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../modulos/dataBase/connection"); //Não ta usando default entao usa chaves para fazer importacoes nomeadas, especificas, por exemplo uma função em especifico
const aplicativo_1 = __importDefault(require("../modulos/dataBase/aplicativo")); //Ta exportando de forma default, ou seja, não precisa das chaves pois ta exportando todo aquele arquivo
function acessarSistema() {
    (0, connection_1.connection)({ ip: '192.168.54.10', name: 'MySQL' });
}
acessarSistema();
(0, connection_1.statusConnection)();
(0, aplicativo_1.default)();
