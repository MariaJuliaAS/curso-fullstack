//function Nome(props){
//    return(
//      <span>Bem vindo: {props.aluno}</span>
//    )
//  }

//export default Nome;

function Nome({ aluno, idade }){
    return(
        <span>Bem vindo: {aluno} - Idade: {idade} anos</span>
    )
}

export default Nome;