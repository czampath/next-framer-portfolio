'use client';
import React, { useContext, useState } from 'react'

export interface StatContextProps {
    isMental: boolean
    isDebug: boolean
    toggleMental: () => void
    setMental: (val:boolean) => void
    toggleDebug: () => void
    setDebug: (val:boolean) => void
}

const StatContext = React.createContext({} as StatContextProps);

export function useStatContext(){
    return useContext(StatContext);
}

interface StatContextProviderProps {
    children: React.ReactNode
}

export function StatContextProvider({children}: StatContextProviderProps){
    const [isMental, setIsMental] = useState(false);
    const [isDebug, setIsDebug] = useState(false);

    function toggleMental(){
        setIsMental(!isMental)
    }

    function toggleDebug(){
        setIsDebug(!isDebug);
    }

    function setMental(val:boolean){
        setIsMental(val)
    }

    function setDebug(val:boolean){
        setIsDebug(val)
    }

    return <StatContext.Provider value={{isDebug, isMental, toggleDebug, toggleMental, setMental, setDebug}}>
        {children}
    </StatContext.Provider>
}