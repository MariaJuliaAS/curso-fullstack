"use strict";
/*
    >> Permite criar estruturas que serão adptaveis a varios tipos de dados.
    (Ajudando a reaproveitar melhor nosso código e deixa-lo mais flexível)

    >> Podemos usar os generics:
    Funções - Interfaces / type - Classes
*/
/*

    >>Alguns padrões de nomeação do generic que pode encontrar:
    S => State;
    T => Type;
    K => Key;
    V => Value;
    E => Element;
*/
//<T> reprenseta o generic (poderia ser usado outro nome dentro)
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio(); //Definindo o tipo do generic, se não definir ele fca como unknow (pode definir 1 ou mais)
repo1.setDados(15);
repo1.setDados('15');
console.log(repo1.getDados());
const repo2 = repositorio(); //Posso passar so string ou so number mas não posso passar outro tipo porque la em cima está definido apenas como string ou number
repo2.setDados('25');
console.log(repo2.getDados());
