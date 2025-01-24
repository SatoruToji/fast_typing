import { useContext, useEffect } from 'react'
import { keyContext } from '../../key_context'

export function KeyHooks() {
    const { setKey } = useContext(keyContext)
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            console.log(e.key)
            setKey(e.key)
        }
        window.addEventListener('keydown', handleKey)

        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    }, [setKey])
    return <div></div>
}
