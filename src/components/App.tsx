
//components
import { CountProvider } from '../context_count'
import { Words } from './body/Words'
import { KeyHooks } from './key hook/KeyHook'
import { Nav } from './nav/Nav'

export function App() {

    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <Nav />
            <main className='flex justify-center items-center flex-grow'>
                <CountProvider>
                    <Words />
                    <KeyHooks />                    
                </CountProvider>
            </main>
        </div>
    )
}
