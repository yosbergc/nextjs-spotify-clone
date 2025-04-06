import { DashboardHeader } from "@/components/DashboardHeader/DashboardHeader"
import { PhoneBar } from "@/components/PhoneBar/PhoneBar"
export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <DashboardHeader />
            { children }
            <PhoneBar />
        </>
    )
}   