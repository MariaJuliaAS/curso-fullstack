import styles from '../../style/home.module.css'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState, useEffect } from 'react'

interface CoinProps {
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    vwap24Hr: string;
    changePercent24Hr: string;
    rank: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    explorer: string;
}

interface DataProps {
    data: CoinProps[];
}

export function Home() {
    const [input, setInput] = useState('');
    const [coins, setCoins] = useState<CoinProps[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        fetch('https://api.coincap.io/v2/assets?limit=10&offset=0')
            .then(response => response.json())
            .then((data: DataProps) => {
                const coinsData = data.data;

                const price = Intl.NumberFormat('en-US', { //Intl - biblioteca de internacionalização
                    style: 'currency',
                    currency: 'USD'
                });

                const formatedResult = coinsData.map((item) => {
                    const formated = {
                        ...item,
                        formatedPrice: price.format(Number(item.priceUsd)),
                        
                    }
                    return formated;
                });

                console.log(formatedResult)
            })

    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (input === '') return;

        navigate(`/detail/${input}`)
    }

    function handleGetMore() {
        alert('ok')
    }

    return (
        <main className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Digite o nome da moeda... Ex: Bitcoin'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>
                    <BsSearch size={30} color='#fff' />
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th scope='col'>Moeda</th>
                        <th scope='col'>Valor mercado</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'>Volume</th>
                        <th scope='col'>Mudança 24h</th>
                    </tr>
                </thead>

                <tbody id='tbody'>
                    <tr className={styles.tr}>
                        <td className={styles.tdLabel} data-label='Moeda'>
                            <div className={styles.name}>
                                <Link to={'/detail/bitcoin'}>
                                    <span>Bitcoin</span> | BTC
                                </Link>
                            </div>
                        </td>

                        <td className={styles.tdLabel} data-label='Valor mercado'>
                            1T
                        </td>

                        <td className={styles.tdLabel} data-label='Preço'>
                            8.000
                        </td>

                        <td className={styles.tdLabel} data-label='Volume'>
                            2B
                        </td>

                        <td className={styles.tdLoss} data-label='Mudança 24h'>
                            <span>1.20</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button className={styles.btnMore} onClick={handleGetMore}>Carregar mais...</button>

        </main>
    )
}

