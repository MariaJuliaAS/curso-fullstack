import { useState, FormEvent } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

interface ResultProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [result, setResult] = useState<ResultProps>()

  function calcular(event: FormEvent) {
    event.preventDefault(); //Previnindo o comportamento de ao submitar o formulario ele atualizar a pagina

    let calculo = (alcoolInput / gasolinaInput)

    if (calculo <= 0.7) {
      setResult({
        title: 'Compensa usar álcool!',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    } else {
      setResult({
        title: 'Compensa usar gasolina!',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    }

  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString('pt-br',
      {
        style: 'currency',
        currency: 'BRL'
      })

    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>
        <img
          className='logo'
          src={logoImg}
          alt='Logo da calculadora de gasolina ou álcool'
        />
        <h1 className='title'>Qual melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Ácool (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='4,90'
            min='1'
            step='0.01'
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='4,90'
            min='1'
            step='0.01'
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input
            className='button'
            type='submit'
            value='Calcular'
          />
        </form>

        {/* Fazendo verificacao se tem algo dentro do objeto ou nao (se o result nao for undefined e tiver algo dentro do result ele vai retornar)*/}
        {result && Object.keys(result).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{result.title}</h2>
            <span>Ácool: {result.alcool}</span>
            <span>Gasolina: {result.gasolina}</span>
          </section>
        )}

      </main>
    </div>
  )
}

export default App
