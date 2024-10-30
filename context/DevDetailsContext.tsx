'use client';
import React from "react"
import { useContext } from "react"

export interface DevData {
    "stage-1": any
    "stage-2": any
}

const DevDetailsContext = React.createContext<DevData|null>(null)

export function useDevDetails(){
    return useContext(DevDetailsContext)
}

interface DevDetailsProviderProps{
    children: React.ReactNode
    data: DevData
}

export function DevDetailsProvider({children, data}: DevDetailsProviderProps){

    return <DevDetailsContext.Provider value={data}>
        {children}
    </DevDetailsContext.Provider>
}