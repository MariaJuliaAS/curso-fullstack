import { FormEvent, useState, useRef } from 'react'
import './App.css'

interface ResultadoProps {
  nome: string;
  idade: number;
}

function App() {
  const [nome, setNome] = useState('')
  const [ano, setAno] = useState('')
  const [resultado, setResultado] = useState<ResultadoProps>()

  const inputRef = useRef<HTMLInputElement>(null)

  function descobrirIdade(e: FormEvent) {
    e.preventDefault()

    const anoAtual = new Date().getFullYear();
    setResultado({
      nome: nome,
      idade: anoAtual - Number(ano)
    })


  }


  return (
    <main className='container'>
      <h1 className='title'>Descubra sua idade</h1>

      <form className='input-area' onSubmit={descobrirIdade}>
        <input
          placeholder='Digite seu nome'
          className='input'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          ref={inputRef}
        />

        <input
          placeholder='Digite o ano do seu nascimento'
          className='input'
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          ref={inputRef}
        />
        <button className='btn-area' type='submit'>Descobrir idade</button>
      </form>

      {resultado && <h3 className='title'>{resultado.nome} você tem: {resultado.idade} anos</h3>}

    </main>
  )
}

export default App
