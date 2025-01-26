import { Words } from './body/Words'
import { KeyProvider } from '../key_context'
import { KeyHooks } from './key hook/KeyHook'
import { Nav } from './nav/Nav'
import { useState } from 'react'

export function App() {
    const [restard, setRestard] = useState<number>(0)

    const handleRestard = () => {
        setRestard((prev) => 1 + prev)
    }

    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <Nav />
            <KeyProvider>
                <main className='relative flex justify-center items-center flex-grow' key={restard} >
                    <div className='absolute'>
                        <Words/>
                        <div className='huy'>
                            <KeyHooks isRestard={handleRestard} />
                        </div>
                    </div>
                </main>
            </KeyProvider>
        </div>
    )
}
