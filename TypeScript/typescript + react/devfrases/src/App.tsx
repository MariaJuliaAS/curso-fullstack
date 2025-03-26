import { useState } from 'react'
import logoDevFrases from './assets/logo.png'
import './App.css'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)


  const todasFrases = [{
    id: 1,
    nome: 'Motivação',
    frases: [
      'Faça sempre o seu melhor!',
      'Não espere, ponha em prática!',
      'Mesmo que pareça difícil, não pare!',
      'Só trabalhando é possível trilhar o caminho!',
      'Acredite em milagres, mas não dependa deles.',
      'Não é a carga que o derruba, mas a maneira como você a carrega.'
    ]
  },
  {
    id: 2,
    nome: 'Bom dia',
    frases: [
      'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!',
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
    ]
  },
  {
    id: 3,
    nome: "Boa noite",
    frases: [
      'Boa noite durma bem',
      'Teste frase boa noite'
    ]
  }
  ]

  function mudarCategoria(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    // math.random randoniza um numero aleatorio com base em um tamanho
    let numAleatorio = Math.floor(Math.random() * todasFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${todasFrases[categoriaSelecionada].frases[numAleatorio]}"`)
  }

  return (

    <div className='container'>
      <img src={logoDevFrases} alt="Logo do projeto frases" className='logo' />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {todasFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-btn'
            style={{
              borderWidth: item.nome === todasFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: '#1fa4db'
            }}
            onClick={() => mudarCategoria(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className='btn-frase' onClick={gerarFrase}>Gerar Frase</button>

      {textoFrase !== '' && <h3 className='texto-frase'>{textoFrase}</h3>}
    </div>
  )
}

export default App
