import styles from './Dashboard.module.css'
import { Login } from '../Login/Login'
import { Search } from '../Search/Search'
import Image from 'next/image'
function DashboardHeader() {
    return (
        <header className={styles.appHeader}>
            <Image src="/logo.png" alt="Logo" width={30} height={30}/>
            
            <section className={styles.secondPart}>
                <Search />
                <Login />
            </section>
        </header>
    )
}
export { DashboardHeader }