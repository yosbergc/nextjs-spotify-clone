import styles from './Register.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function RegisterPage() {
    return (
        <section className={styles.Login}>
            <form>
                <Image src="/logo.png" width={50} height={50} alt='Spotify Logo'></Image>
                <h1>Register in Spotify</h1>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='John Smith' />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='your-email@email.com'/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Your password'/>
                <button className='primary-btn'>Sign Up</button>
                <button className='secondary-btn github'>
                    <Image src="/statics/github.svg" alt="GitHub Logo" width={20} height={20}/>
                    Sign Up with GitHub
                </button>
                <button className="secondary-btn facebook">
                    <Image src="/statics/facebook.svg" alt='Facebook Logo' width={20} height={20}/>
                    Sign Up with Facebook
                </button>
                <button className="secondary-btn google">
                    <Image src="/statics/gmail.svg" alt='Gmail Logo' width={20} height={20} />
                    Sign Up with Google
                </button>
                <Link href="/login">Log In</Link>
            </form>
        </section>
    )
}