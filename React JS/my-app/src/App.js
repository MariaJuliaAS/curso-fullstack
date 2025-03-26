//AULA COMPONENTES E PROPS; CONHECENDO USESTATE; MANIPULANDO FORMULÁRIOS
/*import { useState } from "react";

function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  function handleRegister(event){
    event.preventDefault(); //Para nao apagar/atualizar a pagina ao apertar no botão
    
    alert('Usuário registrado')

    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  function handleReset(){
    setNome('');
    setEmail('');
    setIdade('');
    setUser('')
  }

  return(
    <div>
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuários</h1>

        <label>Nome:</label><br/>
        <input 
        placeholder="Digite seu nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)} //Cada letra q for digitada no input sera jogada no useState nome
        /><br/>

        <label>E-mail:</label><br/>
        <input placeholder="Digite seu e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        /><br/>

        <label>Idade:</label><br/>
        <input placeholder="Digite sua idade"
        value={idade}
        onChange={(event) => setIdade(event.target.value)}
        /><br/>

        <button type="submit">Registrar</button>
        <button type="button" onClick={handleReset}>Limpar</button>
      </form> 
      
      <br/><br/>

      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Email: {user.email}</span><br/>
        <span>Idade: {user.idade}</span><br/>
      </div>
    </div>
  );
}

export default App;*/
//===================================================================================================================================================
//AULA PRATICANDO CONHECIMENTOS; USEEFFECT - Ciclos de vida
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(() => {
    const taskStorage = localStorage.getItem('@tarefa');

    return taskStorage ? JSON.parse(taskStorage) : []
  });

  /*useEffect(() => {
    const taskStorage = localStorage.getItem('@tarefa');

    if(taskStorage){
      setTasks(JSON.parse(taskStorage)) //Metodo de salvar usando o useEffect que não funcionou na minha maquina
    }

  }, []);*/
  //Se a array estiver vazia, toda vez que entrar/montar/atualizar na aplicação vai chamar a useEffect

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tasks)) //LocalStorage não recebe em array, por isso JSON.stringify para transformar em string
  }, [tasks]) //Se tiver algo na array toda vez que ele sofrer alteração vai chamar a useEffect (EX: Se a useState tasks for colocada na array, sempre que adicionar uma nova task vai chamar o useEffect)


  function handleRegister(event){
    event.preventDefault();

    setTasks([...tasks, input]); //Chama as tasks que ja estavam na array e as novas
    setInput('')

  }

  function handleDelet(index){
    const updateTask = [...tasks]
    updateTask.splice(index, 1)
    setTasks(updateTask)
  }
  return (
    <div>
     <form onSubmit={handleRegister}>

      <label>Nome da tarefa:</label> <br/>
      <input
      placeholder="Digite uma tarefa"
      value={input}
      onChange={(event) => setInput(event.target.value)} //Cada letra q for digitada no input sera jogada no useState input
      /> <br/>
      <button type="submit">Registrar</button>

     </form>

     <br/><br/>

      <ul>
        {tasks.map((task, index) => ( //Ao invés de uma função {}, coloca o () para ja retornar algum html na tele
          <li key={index}>{task}
          <button onClick={() => handleDelet(index)}>Deletar</button> 
          </li> //Percorre toda a array tasks pega a primeira e cria uma li com ela, depois cria com a segundo e assim vai
        ))}
      </ul>
    </div>
  );
}

export default App;
//===================================================================================================================================================

