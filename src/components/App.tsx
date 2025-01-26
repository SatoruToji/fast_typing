import { Words } from './body/Words'
import { KeyProvider } from '../key_context'
import { KeyHooks } from './key hook/KeyHook'
import { Nav } from './nav/Nav'

export function App() {
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <Nav />
            <KeyProvider>
                <main className='relative flex justify-center items-center flex-grow'>
                    <div className='absolute'>
                        <Words />
                        <div className='huy'>
                            <KeyHooks />
                        </div>
                    </div>
                </main>
            </KeyProvider>
        </div>
    )
}
