'use client'
import { LuMenu } from "react-icons/lu";
import { useWindoWidth } from "@/hooks/useWindoWidth";
import styles from './Login.module.css'
import Link from 'next/link'
function Login() {
    const [width] = useWindoWidth()
    return (
        <section>
            {
                width < 768 && <LuMenu color="white" size={30}/>
            }
            {
                width >= 768 && (
                    <section className={styles.innerlogin}>
                        <Link className="primary-btn" href="/login">Log In</Link>
                        <button className="secondary-btn">Sign Up</button>
                    </section>
                )
            }
        </section>
    )
}

export { Login }