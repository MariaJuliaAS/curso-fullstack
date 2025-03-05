
type Connection = {
    ip: string; 
    name: string;
}

export function connection(info: Connection): boolean{ //Não ta usando default entao usa chaves para fazer importacoes nomeadas, especificas, por exemplo uma função em especifico
    console.log('Conexão realizada com sucesso: ', info.ip);
    return true;
}

export function statusConnection(): void{}{
    console.log('Servidor funcionando normalmente!')
}