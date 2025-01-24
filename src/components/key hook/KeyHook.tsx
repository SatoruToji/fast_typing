import { useContext, useEffect } from 'react'
import { keyContext } from '../../key_context'

export function KeyHooks() {
    const { key } = useContext(keyContext)

    useEffect(() => {
        let i = 0
        console.log(key)

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === key[i]) {
                console.log('successful')
                i++
                if (i === key.length) {
                    console.log('u won')
                    window.removeEventListener('keydown', handleKey)
                }
            } else {
                console.log('неправильно')
            }
        }
        window.addEventListener('keydown', handleKey)

        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    }, [key])
    return <div></div>
}
