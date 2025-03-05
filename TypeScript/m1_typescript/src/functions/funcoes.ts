/*function login(username: string): void{ //tipo void nunca renotar nada
    let message = 'Bem vinda ' + username
    console.log(message)
}*/

/*function login(username: string): boolean | string{ //vai retornar apenas boolean
    let message = 'Bem vinda ' + username
    console.log(message)

    return username
}

const retornoFunca = login('Júlia Araújo')
console.log(retornoFunca)*/

let n1: number = 10;
let n2: number = 25;

function soma(valor1: number, valor2:number): string{
    let soma = valor1 + valor2;
    if(soma > 40){
        return 'SOMA MAIOR QUE 20'
    }else{
        return'SOMA MENOR QUE 20'
    }
}
console.log(soma(n1, n2))