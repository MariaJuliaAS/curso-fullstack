//afirmando algum tipo

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

//afirmando que o statusAtual é de fato um numero
mudaStatus = statusAtual as number;

//Outra maneira de afirmar
mudaStatus = <number>statusAtual;

console.log(mudaStatus)

let query: unknown = 'pizza';

let searchTerm: string = query as string;

console.log(searchTerm);