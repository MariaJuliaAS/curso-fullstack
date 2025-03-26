import { Link } from "react-router-dom"

export function Contato() {
    return (
        <div>
            <h1>Bem vindo a página contatos</h1>
            <h3>Telefone: (xx) 9xxxx-xxxx</h3>

            <Link to='/'>Home</Link> <br />
            <Link to='/about'>Sobre</Link>
        </div>
    )
}