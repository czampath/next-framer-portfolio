"use client";

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'


const Footer = () => {

    const handleIconClick = (url: any) =>{
        if(url) window.location.href = url;
    }
    
    return (
        <footer className='w-full pt-10 pb-10' id="contact">
            <div className='w-full absolute left-0 '>
                <img src='/footer-grid.svg' alt='grid' className='w-full h-[75vh] opacity-75 lg:-mt-32 -mt-16' />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='heading md:max-w-[45vw]'>Ready to Take <span className='text-purple'> your</span>  digital presence to the next level</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
                <a href='mailto:csampath.work@gmail.com'>
                    <MagicButton title='Let&apos;s get in touch' icon={<FaLocationArrow />} position='right' />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Chathuranga Sampath</p>
                <div className='flex items-center md:gap-3 gap-6 sm:mt-36 mt-5 md:mt-0'>
                    {socialMedia.map((profile) => (
                        <div onClick={() => handleIconClick(profile.url)} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' key={profile.id}>
                            <img src={profile.img} alt={profile.img} width={20} height={20} />
                        </div>
                    ))}</div>
            </div>
        </footer>
    )
}

export default Footer