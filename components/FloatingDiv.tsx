'use client'

import React, { useState } from 'react'



const MyFloatingDiv = ({ children, flatFlying = false, dimmingFX = false, blur = true, isSnitch = false, isMental }: { isMental: boolean, isSnitch?: boolean, children?: React.ReactNode, flatFlying?: boolean, dimmingFX?: boolean, blur?: boolean }) => {
    const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomDouble = () => Math.random() + .2;

    const [update, setUpdate] = useState(false)

    if (isMental === true) {
        const randomStyles = {
            animationDuration: ` ${isSnitch === true ? 20 : getRandomInt(5, 20)}s`, // Random duration between 8-12s
            transform: `translate(${getRandomInt(-100, 100)}%, ${getRandomInt(-400, 200)}%) rotateZ(${dimmingFX === true ? getRandomInt(0, 45) : getRandomInt(0, 350)}deg) rotateX(${dimmingFX === true ? 0 : getRandomInt(0, 350)}deg)`,
            zIndex: isSnitch === true ? 150 : dimmingFX === true ? 50 : getRandomInt(0, 50),
            opacity: dimmingFX === true ? getRandomDouble() : 1,
            filter: `blur(${dimmingFX === true ? getRandomInt(0, 10) : flatFlying === true ? 0 : 4}px)`
        };

        setTimeout(() => {
            setUpdate((val) => {
                return val = !val
            })
        }, 20000)

        return (
            <>
                <div className={`h-auto absolute ${isSnitch === true ? `animate-snitchFloat bottom-[${getRandomInt(0, 100)}%]` : dimmingFX === true ? "animate-faceFloat" : "animate-float"} disabled select-none "`} style={randomStyles}>
                    {children}
                </div>
            </>
        );
    }else{
        return (
            <>     
                {children}
            </>
        );
    }
};

export default MyFloatingDiv;