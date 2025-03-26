//https://api.themoviedb.org/3/movie/now_playing?api_key=3ebae495045c6e0071c657538115e5b0&language=pt-BR
import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Link } from "react-router-dom";
import './style.css';


function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){ //a expressao awai so é aceita dentro de uma funcao assincrona
            const response = await api.get('movie/now_playing', { //await para esperar a requisicao para passar para linha de baixo 
                params:{
                    api_key: '3ebae495045c6e0071c657538115e5b0',
                    language: 'pt-BR',
                    page: 1
                }
            }) 

            setFilmes(response.data.results.slice(0, 10)); //o slice permite que pego do filme 0 ao 10
            setLoading(false);
        }

        loadFilmes();

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;