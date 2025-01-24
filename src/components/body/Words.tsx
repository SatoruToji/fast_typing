import words from '../../../public/words-en.json'
import { useContext } from 'react'
import { keyContext } from '../../key_context'

export function Words() {
    let wordCount = 0
    const { key } = useContext(keyContext)

    const randomWord = () => {
        let wordsLine: string = ''
        while (wordCount < 10) {
            const randomWord = words[Math.floor(Math.random() * words.length)]
            wordsLine += `${randomWord} `
            wordCount++

            if (wordCount === 10) return wordsLine
        }
    }

    return (
        <div className='flex gap-2'>
            <span>{randomWord()}</span>
            <p>{key}</p>
        </div>
    )
}
