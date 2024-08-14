import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>A Small Selection of {' '}
            <span className='text-purple'> recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-24 lg:gap-y-24 lg:gap-x-32 mt-10'>
            {projects.map(({id,title,des,img,iconLists,link})=>(
                <div key={id} className='sm:h-[32rem] h-[32rem] flex items-center justify-center sm:w-[32rem] w-[80vw] lg:mb-0 mb-5 transition duration-1000 ease-in-out md:hover:scale-[1.5] lg:hover:scale-[1.3]'>
                    <PinContainer title={link} href={link}>
                    <div className="relative flex items-center justify-center sm:w-[32rem] w-[80vw] overflow-hidden h-[30vh] sm:h-[25vh] lg:h-[22vh] mb-10 transition duration-500 ease-in-out hover:opacity-40">
                        <div className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl bg-[#13162d]">
                            <img src='./bg.png' alt='./bg.png'/>
                        </div>
                        <img src={img} alt={title} className='z-10 absolute bottom-0'/>
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className="flex items-center">
                            {iconLists.map((icon, index) => (
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                style={{transform: `translateX(-${3 * index * 4}px)`}}
                                >
                                    <img src={icon} alt={icon} className='p-2'></img>
                                </div>
                            ))}
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live SIte</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects