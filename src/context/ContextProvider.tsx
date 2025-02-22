import React, { createContext, useContext, ReactNode } from 'react'

const Context = createContext<string | undefined>(undefined)

interface ContextProps {
    children: ReactNode
}

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const endpoint = 'http://localhost:5237/api'

    return (
        <Context.Provider value={endpoint}>
            {children}
        </Context.Provider>
    )
}

export const getContext = (): string => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
