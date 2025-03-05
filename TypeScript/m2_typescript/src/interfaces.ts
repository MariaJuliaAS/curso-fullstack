interface LojaProps{ // é uma tipagem que se for tipada em uma variavel ela deve seguir a risca 
    nome: string
    endereco: string;
    status: boolean;
}

const BurguerK: LojaProps = {
    nome: 'Burguer K',
    endereco: 'Rua logo ali',
    status: true,
}

//console.log(BurguerK);


function novaLoja({nome, endereco, status}: LojaProps): void{
    console.log(`Loja: ${nome}`)
    console.log(`Endereço: ${endereco}`)
    console.log(`Status: ${status}`)
}

novaLoja({
    nome: 'Subway',
    endereco: 'Rua ali na esquina',
    status: false
})