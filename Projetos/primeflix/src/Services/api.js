import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=3ebae495045c6e0071c657538115e5b0&language=pt-BR

const api = axios.create({ //create permite criar instancias personalizadas do axios
    baseURL: 'https://api.themoviedb.org/3/' //nunca vai mudar
});

export default api;