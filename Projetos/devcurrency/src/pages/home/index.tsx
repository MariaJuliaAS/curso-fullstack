import styles from '../../style/home.module.css'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState, useEffect } from 'react'

<<<<<<< HEAD
export interface CoinProps {
=======
interface CoinProps {
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
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
<<<<<<< HEAD
    formatedPrice?: string;
    formatedMarket?: string;
    formatedVolume?: string
=======
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
}

interface DataProps {
    data: CoinProps[];
}

export function Home() {
    const [input, setInput] = useState('');
    const [coins, setCoins] = useState<CoinProps[]>([])
<<<<<<< HEAD
    const [offset, setOffset] = useState(0)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData();
    }, [offset])

    async function getData() {
        fetch(`https://api.coincap.io/v2/assets?limit=10&offset=${offset}`)
=======
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        fetch('https://api.coincap.io/v2/assets?limit=10&offset=0')
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
            .then(response => response.json())
            .then((data: DataProps) => {
                const coinsData = data.data;

                const price = Intl.NumberFormat('en-US', { //Intl - biblioteca de internacionalização
                    style: 'currency',
                    currency: 'USD'
                });

<<<<<<< HEAD
                const priceCompact = Intl.NumberFormat('en-US', { //Intl - biblioteca de internacionalização
                    style: 'currency',
                    currency: 'USD',
                    notation: 'compact'
                });

=======
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
                const formatedResult = coinsData.map((item) => {
                    const formated = {
                        ...item,
                        formatedPrice: price.format(Number(item.priceUsd)),
<<<<<<< HEAD
                        formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
                        formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr))
=======
                        
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
                    }
                    return formated;
                });

<<<<<<< HEAD
                const listCoins = [...coins, ...formatedResult]
                setCoins(listCoins)
                setLoading(false)

=======
                console.log(formatedResult)
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
            })

    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (input === '') return;

        navigate(`/detail/${input}`)
    }

    function handleGetMore() {
<<<<<<< HEAD
        if (offset === 0) {
            setOffset(10)
            return
        }

        setOffset(offset + 10)
    }

    if (loading) {
        return (
            <div className={styles.containerLoading}>
                <h1>Carregando...</h1>
            </div>
        )
=======
        alert('ok')
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
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
<<<<<<< HEAD
                    {coins.length > 0 && coins.map((item) => (
                        <tr className={styles.tr} key={item.id}>
                            <td className={styles.tdLabel} data-label='Moeda'>
                                <div className={styles.name}>
                                    <img
                                        className={styles.logo}
                                        alt='Logo cript'
                                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}2@2x.png`}
                                    />
                                    <Link to={`/detail/${item.id}`}>
                                        <span>{item.name}</span> | {item.symbol}
                                    </Link>
                                </div>
                            </td>

                            <td className={styles.tdLabel} data-label='Valor mercado'>
                                {item.formatedMarket}
                            </td>

                            <td className={styles.tdLabel} data-label='Preço'>
                                {item.formatedPrice}
                            </td>

                            <td className={styles.tdLabel} data-label='Volume'>
                                {item.formatedVolume}
                            </td>

                            <td className={Number(item.changePercent24Hr) > 0 ? styles.tdProfit : styles.tdLoss} data-label='Mudança 24h'>
                                <span>
                                    {Number(item.changePercent24Hr).toFixed(3)}
                                </span>
                            </td>
                        </tr>
                    ))}
=======
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
>>>>>>> 687945b1610ef0450a5dcfa5b3d1206f1dcded95
                </tbody>
            </table>

            <button className={styles.btnMore} onClick={handleGetMore}>Carregar mais...</button>

        </main>
    )
}

