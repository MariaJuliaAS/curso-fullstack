import { useParams } from "react-router-dom"

export function Produto() {
    const { id } = useParams(); //Recebe parâmentros da URL com o react router, como o parâmetro que eu passei recebe o nome de id aqui eu tambmém vou chamar de id

    return (
        <div>
            <h1>Bem vindo ao produto {id}</h1>
        </div>
    )
}