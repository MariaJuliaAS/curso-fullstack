import { Link } from 'react-router-dom'

function Sobre() {
    return (
      <div className="App">
        <h1>Bem vindo a pagina sobre a empresa</h1><br/>
        <span>Informações sobre a emrpesa</span><br/><br/>

        <Link to='/'>Home</Link> <br/>
        <Link to='/contato'>Contato</Link>
      </div>
    );
  }
  
  export default Sobre;
  