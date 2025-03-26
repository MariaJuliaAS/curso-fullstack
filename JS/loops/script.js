/*

while = enquanto (vai fazer esse loop enquanto a condição for verdadeira)

var x = 0;

while(x < 10){ //enquanto x for menor q 10 vai executar esse loop
    document.write("<br> O valor de X é: " + x); //escreve na tela o valor

    x++; //cada vez que rodar o loop aumenta + 1 ate chegar em 10
}
*/


/*
for = para (vai refazer o loop ate satisfazer a condição)

var valor = 15;

for(a = 0; a <= valor; a++){ //enquanto a for menor q 5 vai acrescentar + 1
    document.write("<br> O valor do A é: " + a);
}
*/


// Switch = expressão de casos

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4");


    switch (Number(valor)) { //o prompt sempre vai devolver como string, adicionando o number() ele transforma em numero

        case 1: //escolhe um dos casos no prompt e ele mostra o alerta
            alert("Você escolheu o número 1 = Suco");
            break;
        case 2:
            alert("Você escolheu o número 2 = Água");
            break;
        case 3:
            alert("Você escolheu o número 3 = Sorver");
            break;
        case 4:
            alert("Você chamou o garçom");
            break;

        default: //se for fora os casos escritos acima ele vai mostrar esse alerta
            alert("Escolha uma opção entre 1 a 4");
            break;
    }


    /*
    Opção sem ser com números
    switch (valor) {

        case "Suco":
            alert("Você escolheu o Suco");
            break;
        case "Água":
            alert("Você escolheu a Água");
            break;
        case "Sorvete":
            alert("Você escolheu o Sorverte");
            break;
        case "Chamar garçom":
            alert("Você chamou o garçom");
            break;

        default: //se for fora os casos escritos acima ele vai mostrar esse alerta
            alert("Escolha uma opção entre 1 a 4");
            break;
    }*/
}