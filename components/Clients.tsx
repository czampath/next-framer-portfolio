import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading'>Testimonials from {' '}
                <span className='text-purple'> satisfied clients</span>
            </h1>
            <div className='flex flex-col items-center max-lg:mt-10 lg:mt-14'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed='slow'
                />
                <div className='flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-14 max-lg:mt-10'>
                    {companies.map(({id, img, name, nameImg}) =>(
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                            { img && (<img src={img} alt={name} className='md:w-10 w-8'/>)}
                            <img src={nameImg} alt={name} className='md:w-24 w-20'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients