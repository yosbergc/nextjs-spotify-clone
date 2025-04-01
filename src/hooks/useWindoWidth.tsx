'use client'
import { useEffect, useState } from "react"
function useWindoWidth() {
    const [windoWidth, setWindoWidth] = useState(320)

    useEffect(() => {
        const handleWidth = () => {
            setWindoWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
        handleWidth()
        
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])

    return [windoWidth]
}
export { useWindoWidth }