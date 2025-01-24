//components
import { Words } from './body/Words'
import { KeyProvider } from '../key_context'

import { KeyHooks } from './key hook/KeyHook'
import { Nav } from './nav/Nav'

export function App() {
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <Nav />
            <main className='flex justify-center items-center flex-grow'>
                <KeyProvider>
                    <Words />
                    <KeyHooks />
                </KeyProvider>
            </main>
        </div>
    )
}
