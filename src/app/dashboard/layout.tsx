import { DashboardHeader } from "@/components/DashboardHeader/DashboardHeader"
import { PhoneBar } from "@/components/PhoneBar/PhoneBar"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { Player } from "@/components/Player/Player"

import styles from './dashboard.module.css'
export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <DashboardHeader />
            <section className={styles.dashboard}>
                <Sidebar />
                { children }
            </section>
            <Player />
            <PhoneBar />
        </>
    )
}   