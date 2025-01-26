import { useContext, useEffect, useState } from 'react'
import { keyContext } from '../../key_context'

export function KeyHooks() {
    const { key } = useContext(keyContext)
    const [line, setLine] = useState<string>('')

    useEffect(() => {
        let i = 0

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === key[i]) {
                setLine((prevLine) => prevLine + e.key)
                i++

                if (i === key.length) {
                    window.removeEventListener('keydown', handleKey)
                    console.log('u won')
                }
            }
        }
        window.addEventListener('keydown', handleKey)

        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    }, [key])
    return <div> {line} </div>
}
