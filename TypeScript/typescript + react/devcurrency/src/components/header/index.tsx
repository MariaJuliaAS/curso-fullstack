import logoImg from '../../assets/logo.svg'
import styles from '../../style/header.module.css'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className={styles.container}>
            <Link to='/'>
                <img src={logoImg} alt='Logo DevCurrency' />
            </Link>
        </header>
    )
}