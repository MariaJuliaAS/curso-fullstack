//Buscar o meu arquivo que conecta com o banco de dados.

import { connection, statusConnection } from '../modulos/dataBase/connection'; //Não ta usando default entao usa chaves para fazer importacoes nomeadas, especificas, por exemplo uma função em especifico
import status from '../modulos/dataBase/aplicativo'; //Ta exportando de forma default, ou seja, não precisa das chaves pois ta fazendo apenas uma exportação

function acessarSistema() {
    connection({ ip: '192.168.54.10', name: 'MySQL' })
}

acessarSistema();

statusConnection();

status();