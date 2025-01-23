import words from '../../../public/words-en.json'

export function Words() {
    let wordCount = 0

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
        </div>
    )
}
