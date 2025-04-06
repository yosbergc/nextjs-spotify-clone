'use client'
import { useWindoWidth } from "@/hooks/useWindoWidth"
import { BiSearch } from "react-icons/bi"
import styles from './Search.module.css'
function Search() {
    const [width] = useWindoWidth()
    return (
        <section className={styles.searchContainer}>
            {
                width >= 768 && (
                    <section className={styles.searchContainerDesktop}>
                        <BiSearch color="white" size={20}/>
                        <input type="text" placeholder="What do you want to listen?" className={styles.searchInput}/>
                    </section>
                )
            }
        </section>
    )
}
export { Search }