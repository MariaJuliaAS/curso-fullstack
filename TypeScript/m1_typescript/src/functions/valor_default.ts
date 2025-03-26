//como deixar um valor por default ou deixar ele opcional


//como já estou atribundo algo ao nome se não for enviano nenhum nome ele coloca aluno
function cadastro(email: string, senha: string, nome = 'Usuário', idade?: number): void{ //o parametro nome é uma string ou undefined, ou seja, pode passar algum valor ou não
    let data = {email, senha, nome, idade}
    console.log(data)
}

cadastro('maju@teste.com', '123123', 'Júlia', 19)


function cadastroLoja(nome: string, email: string, status = false): boolean{
    console.log('Nome da loja:', nome, 'Email:', email)
    return status
}

console.log(cadastroLoja('Burger K', 'bk@teste.com'))