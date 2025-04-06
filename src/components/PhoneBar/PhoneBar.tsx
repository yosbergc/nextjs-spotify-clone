import styles from './PhoneBar.module.css'
import Link from 'next/link'
import { LuHouse } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { LuLibrary } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";

function PhoneBar() {

    return (
        <section className={styles.phoneBar}>
            <Link href="#">
                <LuHouse size={25} />
                Home
            </Link>
            <Link href="#">
                <IoIosSearch size={25} />
                Search
            </Link>
            <Link href="#">
                <LuLibrary size={25} />
                Library
            </Link>
            <Link href="#">
                <IoDiamondOutline size={25} />
                Premium
            </Link>
        </section>
    )
}
export { PhoneBar }