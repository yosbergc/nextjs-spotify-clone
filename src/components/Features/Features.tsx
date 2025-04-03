import styles from './Features.module.css'
import { CiMobile3 } from "react-icons/ci";
import { IoIosTabletLandscape } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { FiTv } from "react-icons/fi";

function Features() {
    return (
        <section className={styles.features}>
            <h2>Enjoy Spotify in your favorite devices.</h2>
            <section className={styles.featuresGrid}>
                <div className={styles.featureSingle}>
                    <CiMobile3 color='white' size={50}/>
                    <h3>Mobile</h3>
                    <p>Stream your favorite music on the go with the Spotify mobile app—anytime, anywhere.</p>
                </div>
                <div className={styles.featureSingle}>
                    <IoIosTabletLandscape size={50} color='white'/>
                    <h3>Tablet</h3>
                    <p>Enjoy a seamless listening experience on a larger screen, perfect for multitasking.</p>
                </div>
                <div className={styles.featureSingle}>
                    <IoIosLaptop size={50} color='white'/>
                    <h3>Laptop or PC</h3>
                    <p>Dive into your playlists with powerful sound and full control at your fingertips.</p>
                </div>
                <div className={styles.featureSingle}>
                    <FiTv size={50} color='white'/>
                    <h3>TV</h3>
                    <p>Turn your living room into a concert hall with Spotify on your TV—music, larger than life.</p>
                </div>
            </section>
        </section>
    )
}
export { Features }