import words from '../../../public/words-en.json'
import { keyContext } from '../../key_context'
import { useContext, useState, useEffect } from 'react'

export function Words() {
    const { setKey } = useContext(keyContext)
    const [randomWords, setRandomWords] = useState<string>('')

    useEffect(() => {
        let wordsLine = ''
        let wordCount = 0

        while (wordCount < 10) {
            const randomWord = words[Math.floor(Math.random() * words.length)]
            wordsLine += `${randomWord} `
            wordCount++
        }
        setRandomWords(wordsLine)
        setKey(wordsLine)
    }, [setKey])

    return <div className='flex gap-2'>{randomWords}</div>
}
