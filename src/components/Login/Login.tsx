'use client'
import { LuMenu } from "react-icons/lu";
import { useWindoWidth } from "@/hooks/useWindoWidth";
import styles from './Login.module.css'
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
                        <button className="primary-btn">Iniciar sesión</button>
                        <button className="secondary-btn">Registrarse</button>
                    </section>
                )
            }
        </section>
    )
}

export { Login }