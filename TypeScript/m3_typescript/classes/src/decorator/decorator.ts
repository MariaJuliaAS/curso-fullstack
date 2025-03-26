/*  
    >> DECORATORS -- É uma função especial que pode modificar ou adicionar comportamentos a: <<
    Classes
    Propriedade
    Métodos
    Parametros (BEM POUCO USADO)
    Getters / Setters (BEM POUCO USADO)
*/


/* >> DECORATOR DE CLASSE <<
Estrutura do decorator e seus parâmetros obrigatorios
function logInfo(target: any) { //Target = recebe o construtro da classe
    console.log('Sistema ONLINE')
}

    >> Padrao factory (FÁBRICA) -- Função que vai retornar a criação do decorator
function logInfo(mensagem: string) {
    return (target: any) => {
        console.log(`${mensagem}, ${target}`)
    }
}

@logInfo('Servidor rodando') //iniciando o decorator relacionando a classe
class Sistema { //O decorator é executado assim que a classe é carregada, sem precisar instanciá-la.

}*/

// ================== PRATICANDO ==================

function setIpServidor(novoIp: string) {

    return (target: any) => {
        return class extends target {
            ip = novoIp;
        }
    }

}

@setIpServidor('192.168.50.30')
class Servidor {

}

const servidor1 = new Servidor();

console.log(servidor1)