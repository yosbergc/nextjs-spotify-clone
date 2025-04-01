import styles from './Header.module.css'
import { Login } from '../Login/Login'
import Image from 'next/image'
function Header() {
    return (
    <header className={styles.appHeader}>
        <Image src="/logo.png" alt="Logo" width={30} height={30}/>
        <Login />
    </header>
    )
}

export { Header }