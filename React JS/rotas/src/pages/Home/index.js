import { Link } from 'react-router-dom'

function Home() {
    return (
      <div className="App">
        <h1>Bem vindo a pagina HOME</h1> <br/>
        <span>Sujeito programador</span><br/><br/>

        <Link to='/sobre'>Sobre</Link> <br/>
        <Link to='/contato'>Contato</Link>

        <hr/>

        <Link to='/produto/12345'>Acessar produto 123</Link>
      </div>
    );
  }
  
  export default Home;
  