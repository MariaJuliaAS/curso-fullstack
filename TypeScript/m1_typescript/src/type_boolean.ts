let estaAutenticado: boolean = true;

//estaAutenticado = true;

let codeStatus: string = '';

//Tudo que for diferente de zero, string vazia, undefined, será verdadeiro
estaAutenticado = Boolean(codeStatus); //transformou o codeStatus em booleano

console.log(estaAutenticado)