import { useEffect } from 'react'

export function KeyHooks() {
    useEffect(() => {
        const handleKey = (e: any) => {
            console.log(e.key)
        }
        window.addEventListener('keydown', handleKey)

        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    }, [])
    return <div></div>
}
