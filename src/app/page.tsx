import styles from './Home.module.css'
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1>Enjoy the music you love everywhere, whenever you want.</h1>
      
      <p>Listen to the best songs of all the genres without ads. Enjoy it with or without internet connection. If you&apos;re fan of the music, this is your website.</p>
      <button className='primary-btn'><FaHeart size={20} color='black'/>Try it free</button>
    </section>
  );
}
