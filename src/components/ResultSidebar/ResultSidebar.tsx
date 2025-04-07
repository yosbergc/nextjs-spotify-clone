import styles from './resultSidebar.module.css'
function ResultSidebar() {
    return (
    <section className={styles.resultSidebar}>
        <img
        src="/statics/artwork.jpeg"
        alt="Song"
        width={48}
        height={48}
        className={styles.artwork}
        />
        <div>
            <p>Shake The Building</p>
            <small>Single • W&W</small>
        </div>
    </section>
    )
}
export { ResultSidebar }