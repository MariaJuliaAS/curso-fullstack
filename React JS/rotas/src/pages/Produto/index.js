import { useParams } from 'react-router-dom'

function Produto(){
    const { id } = useParams();
    return(
        <div>
            <span>MEU PRODUTO É {id}</span>
        </div>
    )
}

export default Produto;