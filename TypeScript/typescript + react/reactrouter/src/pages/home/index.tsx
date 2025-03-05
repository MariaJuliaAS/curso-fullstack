import { Link } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h1>Bem vindo a página home</h1>
            <span>Primeira página com navegação</span>

            <br /><br />

            <Link to='/about'>Sobre</Link> <br />
            <Link to='/contact'>Contato</Link>
        </div>
    )
}