import React, { createContext, useState } from 'react';


export type User = {
    name: string
}

export type LoginContextType = {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}

type LoginContextProviderProps = {
    children: React.ReactNode
}

export const LoginContext = createContext({} as LoginContextType);

export const LoginContextProvider = ({ children }: LoginContextProviderProps) => {

    const [user, setUser] = useState<User>({name: 'Guest'})
    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}
