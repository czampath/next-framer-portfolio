import React, { useEffect, useRef, useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className="pd-20 pt-36 select-none">
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='-top-10 left-full md:-left-32 h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div>
                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>
                <div className='flex justify-center relative mb-20 z-20'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 w-full'>A glimpse of Dynamic WEB MAGIC via NEXT.JS + Aceternity UI</h2>
                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl select-none"
                            words='Crafting Innovation into Impactful Digital Experiences' />
                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl select-none'>A full-stack developer working remotely from <span className='text-purple'>Sri Lanka</span> engineering robust solutions with a strong foundation in back-end development, paired with cutting-edge front-end design</p>
                        <a href='#about'>
                            <MagicButton
                                title="About me "
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero