import { Link } from "react-router-dom"

export function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Ops... Essa página não existe!</h2>

            <br />

            <Link to='/'>Go Home</Link>

        </div>
    )
}