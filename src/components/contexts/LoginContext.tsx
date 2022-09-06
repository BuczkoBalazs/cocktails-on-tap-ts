import React, { createContext, useState } from 'react';


export type User = {
    name: string
}

export type Login = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

type LoginContextProviderProps = {
    children: React.ReactNode
}

export const LoginContext = createContext<Login | null>(null);

export const LoginContextProvider = ({ children }: LoginContextProviderProps) => {

    const [user, setUser] = useState<User | null>(null)
    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}
