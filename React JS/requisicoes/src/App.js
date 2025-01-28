//https://sujeitoprogramador.com/rn-api/?api=posts

import React, { useEffect, useState } from "react";
import './style.css'

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url) //buscas as informações da api
      .then((result) => result.json()) //se der certo pega o resultado e transforma em json
      .then((json) => { //deu certo novamente dentro do json vai ter toda aquele array da api
        setNutri(json);
      })
    }

    loadApi();

  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className="posts">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
