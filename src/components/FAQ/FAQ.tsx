import styles from './FAQ.module.css'

function FAQ() {
    return (
        <section className={styles.FAQ}>
            <section className={styles.innerFAQ}>
                <h2>The answers to your questions.</h2>
                <details>
                    <summary>Can I download music for offline listening?</summary>
                    <p>Yes! With a Premium subscription, you can download your favorite songs, albums, or playlists by tapping the download icon. Listen anytime, anywhere—no internet needed!</p>
                </details>
                <details>
                    <summary>How do I manage my devices?</summary>
                    <p>Go to your account settings and select &quot;Devices.&quot; Here, you can manage all the devices connected to your Spotify account.</p>
                </details>
                <details>
                    <summary>How can I share music with friends?</summary>
                    <p>Share songs, playlists, or podcasts directly through the &quot;Share&quot; option. You can send links via social media, messages, or even generate QR codes for easy sharing.</p>
                </details>
                <details>
                    <summary>How do I change my profile details?</summary>
                    <p>In the app, tap on your profile picture and select &quot;Edit Profile.&quot; Here, you can change your name, photo, and bio to showcase your vibe.</p>
                </details>
                <details>
                    <summary>Can I use this on multiple devices?</summary>
                    <p>Absolutely! You can access your account on your phone, tablet, computer, and other devices seamlessly.</p>
                </details>
                <details>
                    <summary>Is my account data secure?</summary>
                    <p>Yes, your data is protected with industry-standard security measures. Privacy is our top priority.</p>
                </details>
                <details>
                    <summary>Can I customize my experience?</summary>
                    <p>Yes! From personalized playlists to adjusting app settings, you can tailor your experience to fit your preferences.</p>
                </details>
            </section>
        </section>
    )
}
export { FAQ }