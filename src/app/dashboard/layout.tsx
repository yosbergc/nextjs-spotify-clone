import { DashboardHeader } from "@/components/DashboardHeader/DashboardHeader"
export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <DashboardHeader />
            { children }
        </>
    )
}