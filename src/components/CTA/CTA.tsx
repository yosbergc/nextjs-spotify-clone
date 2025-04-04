import styles from './CTA.module.css'
function CTA() {
    return (
        <section className={styles.CTA}>
            <h2>This plan of Spotify Premium includes a Macaflix Subscription for free</h2>
            <button className="primary-btn">Try it free</button>
        </section>
    )
}
export { CTA }