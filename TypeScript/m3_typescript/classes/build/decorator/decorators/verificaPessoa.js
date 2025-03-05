"use strict";
// >> DECORATOR DE MÉTODOS -- Só é chamado quando o método for chamado <<
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaPessoa = verificaPessoa;
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        /*console.log('Target: ', target)
        console.log('Key: ', key)
        console.log('Descriptor: ', descriptor)*/
        const metodoOriginal = descriptor.value; //Salvando o metodo original
        //Reescrevendo o método
        descriptor.value = function () {
            if (idade < 18) {
                console.log(`Menor de idade cadastrado --- ${idade} anos`);
                return metodoOriginal.apply(this); //Para continuar mostrando o console.log do método, ou seja, método original
            }
            else {
                console.log(`Adulto cadastrado no sistema --- ${idade} anos`);
                return metodoOriginal.apply(this);
            }
        };
    };
}
