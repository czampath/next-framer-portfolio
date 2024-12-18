'use client';
import { useStatContext } from '@/context/StatContext'
import useFPS from '@/hooks/useFPS';
import React, { useEffect, useState } from 'react'


const FpsStat = () => {

    const { isDebug, isMental, setMental } = useStatContext();
    const fps = useFPS();
    const [fpsHistory, setFpsHistory] = useState<number[]>([]);
    const [averageFPS, setAverageFps] = useState<number>(fps);

    useEffect(() => {
        setFpsHistory((prevHistory) => {
            const newHistory = [...prevHistory, fps].slice(-5);
            return newHistory;
        })
    }, [fps])

    useEffect(() => {
        if (fpsHistory.length === 5) {
            const averageFPS = fpsHistory.reduce((acc, val) => acc + val, 0) / fpsHistory.length
            setAverageFps(averageFPS)
        }
    }, [fpsHistory])

    useEffect(() => {
        if (averageFPS < 20) {
            console.log("CHEAAP AS DEVICE YOU HAVE!")
            setMental(false);
        }
    }, [averageFPS, isMental, setMental])

    return (
        <>
            {isDebug ? 
            <div className="fixed top-0 left-0 z-50">
                <span>{"FPS: " + fps + " | AvgFPS: " + averageFPS + " | Aurora-Threashold : 80 | Mental Threashold : 20"}</span>
            </div> : <></>}
        </>
    )
}

export default FpsStat