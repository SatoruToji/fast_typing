import { ReactNode, useState, createContext } from 'react'

interface keysInterface {
    key: string
    setKey: React.Dispatch<React.SetStateAction<string>>
}

export const keyContext = createContext<keysInterface | undefined>(undefined)

export function KeyProvider({ children }: { children: ReactNode }) {
    const [key, setKey] = useState<string>('')
    return (
        <keyContext.Provider value={{ key, setKey }}>
            {children}
        </keyContext.Provider>
    )
}
