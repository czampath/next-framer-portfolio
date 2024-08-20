'use client'

import { workExperience } from '@/data'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/MovingBorder'
import { AuroraBackground } from './ui/Aurora'

const Experience = () => {
    const auroraRef = useRef(null)
    const [firstDraw, setFirstDraw] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setFirstDraw(true)
        }, 1000)
    },[])
    
    return (
        <div className='py-20' id="work">
            <AuroraBackground className={`w-screen h-screen absolute z-10 top-0 transition duration-1000 ${firstDraw===true ? "opacity-50" : 'opacity-0' }`} />
            <h1 className='heading'>
                My
                <span className='text-purple'> Work Experiences</span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button key={card.id}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                        duration={Math.floor(Math.random() * 10000) + 10000}
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 mdd:w-20 w-16' />
                            <div className='lg:ms-5 '>
                                <h1 className='text-start text-lx md:text-2xl font-bold'>{card.title}</h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience