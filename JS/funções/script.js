var area = document.getElementById('area') /*Definiu a variavel area e dentro dela tem o id area do index.html */

function entrar(){ /*Definir a função e dentro dela escreve oq vai fazer*/

    var nome = prompt("Digite seu nome"); /*Definiu a variavel nome e nela botou um prompt para digitar na pagina */

    if(nome === '' || nome === null){ /*se o nome for igaul a vazio ou nulo vai dar um alert e mostrar na tela o area.innerHTML(innerHTML serve para mostrar algo escrito na tela*) */
        alert("Ops, algo deu errado")
        area.innerHTML = "Clique no botao para acessar...";
        
    }else{ /*se tiver a escrita certa no promp ele vai mostrar na tela o bem vindo + nome */
        area.innerHTML = "Bem vindo " + nome + " ";

        let botaoSair = document.createElement("button");/*definiu a variavel botaoSair e dentro do botaoSair criou o elemento button no document*/
        botaoSair.innerText = "Sair da conta";/*innerText: dentro do botaoSair vai escrever "sair da conta"*/
        botaoSair.onclick = sair;/*quando apertar o botaoSair vai executar a fuction sair */

        area.appendChild(botaoSair);/*para colocar o botao dentro do h2(area) */
    }

}

function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}


/*-----------------------------------------Console-----------------------------------------*/
function mediaAluno(nota1, nota2){ /*parametros de uma função, nesse caso nota1 e nota2 */
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("aluno aprovado com a média: " + media)
    }else if(media <7){
        console.log("aluno reprovado com a média: " + media)
    }
}

function aluno(nome, curso){
    var mensagem ="Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem);
}