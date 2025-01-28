import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../../Services/api';
import './style.css';
import { toast } from "react-toastify";


function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {

        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: '3ebae495045c6e0071c657538115e5b0',
                    language: 'pt-BR'
                }
            })
            .then((response) => { //se encontrar o filme cairá aqui
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => { //caso nao encontre o filme
                navigate('/', { replace: true }); //se não encontrar o filme ele automaticamente redireciona para a pagina de home
                return;
            })
        }

        loadFilme();


    }, [navigate, id])


    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeFlix');

        let filmesSalvos = JSON.parse(minhaLista) || []; //convertendo de volta a uma lista

        const hasFilme = filmesSalvos.some((filmesSalvo)  => filmesSalvo.id === filme.id) //compara se la nos filmes salvos existe algum filme igual ao filme da pagina atual
        if(hasFilme){
            toast.warn('Esse filme já está na sua lista!');
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@primeFlix', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!')
    
    }


    if(loading){
        return(
            <div className="filme-info">
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse:</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average.toFixed(1)}/10</strong>

            <div className="area-btns">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} Trailer` } target="blank" rel="external">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme