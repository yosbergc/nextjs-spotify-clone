'use client'
import { useWindoWidth } from "@/hooks/useWindoWidth"
import { BiSearch } from "react-icons/bi"
import styles from './Search.module.css'
function Search() {
    const [width] = useWindoWidth()
    return (
        <section className={styles.searchContainer}>
            {
                width < 768 && (
                    <BiSearch color="white" size={25}/>
            )
            }
            {
                width >= 768 && (
                    <input type="text" placeholder="Twenty One Pilots... " className={styles.searchInput}/>
                )
            }
        </section>
    )
}
export { Search }