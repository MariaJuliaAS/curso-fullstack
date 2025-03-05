//tipo desconhecido > quando vc nao sabe o tipo que vai recer

let total: unknown;

total = {
    total: 100
}

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

//let totalEntrega: number = totalPedido; //valor do tipo unknown so pode ser atribuidos ao tipo unknown ou any
let totalEntrega: any = totalPedido;

console.log(totalEntrega)