import { Link } from "react-router-dom"

export function About() {
    return (
        <div>
            <h1>Bem vindo a página about</h1>

            <Link to='/'>Home</Link> <br />
            <Link to='/contact'>Contato</Link>
        </div>
    )
}