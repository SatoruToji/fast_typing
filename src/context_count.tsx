import { ReactNode, useState, createContext} from 'react'

export const CountContext = createContext(null)

export function CountProvider({children}: {children: ReactNode}) {
    const [count, setCount] = useState<number>(0)
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}
