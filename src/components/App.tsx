import { Words } from './body/Words'
import { KeyHooks } from './key hook/KeyHook'
import { Nav } from './nav/Nav'

export function App() {
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <Nav />
            <div className='flex justify-center items-center flex-grow'>
                <Words />
                <KeyHooks />
            </div>
        </div>
    )
}
