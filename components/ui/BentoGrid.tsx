'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import React, { useEffect, useRef, useState } from "react";
import animationData from '@/data/confetti.json'
import searchAnimationData from '@/data/mag-glass.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import Chatbot from "../ChatBot";
import DownloadResume from "../DownloadResume";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[6rem] grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    fnMental
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    fnMental?: (val:any)=>void
}) => {

    const [copied, setCopied] = useState(false);
    const [redirected, setRedirected] = useState(false);
    const [hoverOneActive, setHoverOneActive] = useState(false)
    const [hoverFourActive, setHoverFourActive] = useState(false)
    const cardFourRef = useRef(null)
    const [toggleZoom, setToggleZoom] = useState(false)
    const [toggleMouseInOut, setToggleMouseInOut] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("csampath.work@gmail.com")
        setCopied(true)
                    setTimeout(() => {
                setCopied(false)
            }, 5000) 
    }
    const openCalendlyURL = () => {
        window.open("https://calendly.com/csampath-work/45min", "_blank");
        setRedirected(true)
        setTimeout(() => {
            setRedirected(false)
        }, 5000) 
    }

    useEffect(() => {
        let $img:any = cardFourRef.current
        if ($img) {
            if (hoverFourActive === true) {
                if ($img) {
                    $img.style.opacity = "0.25";
                }
            } else {
                if ($img) {
                    $img.style.opacity = "0";
                }
            }
        }
    }, [hoverFourActive])

    useEffect(() => {
        let $img = document.getElementById('img-1')
        if (hoverOneActive === true) {
            if ($img) {
                $img.style.opacity = "1";
            }
        } else {
            if ($img) {
                $img.style.opacity = "1";
            }
        }
    }, [hoverOneActive])



    let skillRowOne = ['Java,6y', 'Spring Boot,5y',"Play Framework,5y", 'PostgreSQL,5y','MongoDB,1y', 'Optimization,3y']
    let skillRowTwo = ["JavaScript,6y", 'React.js,3y', 'Next.js,1y', 'Node.js,2y', 'TypeScript,3y', 'HTML/CSS,6y', 'Tailwind CSS,1y']
    let skillRowThree = ['THREE.js,1y', "Python,1y"]

    let skillsAll = skillRowOne.concat(skillRowTwo, skillRowThree)

    const cvContainerZoomed = {
        top: "0.00000001%",
        left: "0.00000001%",
        zIndex: "5",
        opacity: 1,
        height: "100%",
        width: "100%",
        overflow: "auto",
        transform: "rotate3d(0.0000001,0.00000001,0.0000001, 0deg) scale(0.9999999)"
    }
    const cvContainerNormal = {
        zIndex: "-1",
        overflow: "hidden",
        top: "calc(50% - 14.5%)",
        left: "calc(50% + 17.5%)",
        transform: "translate(-50%, -50%) rotate3d(4,5.9,4, 45deg) scale(0.295999999)",
    }
    const cvContainerHovered = {
        top: "calc(50% - 13.5%)",
        left: "calc(50% + 17.5%)",
        zIndex: "-1",
        transform: "translate(-50%, -50%) rotate3d(4,5.9,4, 45deg) scale(0.311111111)",
        overflow: "hidden"
    }

    const cvOverlayStyles = {
        zIndex: "2",
        overflow: "hidden",
        top: "calc(50% - 15%)",
        left: "calc(50% + 17%)",
        transform: "translate(-50%, -50%) rotate3d(4,5.9,4, 45deg) scale(0.3)",
    }

    const returnContainerStyles = () =>{
        if(toggleZoom===true){
            return cvContainerZoomed ;
        }else if(toggleZoom===false && toggleMouseInOut ===false){
            return cvContainerNormal;
        }else if(toggleZoom===false && toggleMouseInOut === true){
            return cvContainerHovered
        }else{
            return cvContainerZoomed
        }
    }

    const onCVClick = (id:number) =>{
        if(id!==1) return
        setToggleZoom((val)=>!val)
    }
    const onCVMouseEnter = (id:number, status:boolean) =>{
        if(id!==1) return
        setToggleMouseInOut(status)
    }

    return (
        <div
            className={cn(
                "select-none z-20 row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "linear-gradient(39deg, rgb(26 26 26) 0%, rgb(15 14 47) 46%, rgb(11 4 127 / 83%) 100%)"
            }}
            onMouseEnter={id === 1 ? () => setHoverOneActive(true) : id=== 4 ? () => setHoverFourActive(true) :  undefined}
            onMouseLeave={id === 1 ? () => setHoverOneActive(false) : id=== 4 ? () => setHoverFourActive(false) :   undefined}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (<img src={img} alt={img} id={`img-${id}`} className={cn(imgClassName, 'object-cover', 'object-center')}></img>)}
                    {id=== 1 && (
                            <>
                            <div
                            onClick={() => onCVClick(id ?? -1)} 
                            className={`absolute duration-500 bg-transparent cursor-pointer md:w-[50rem] w-[25rem] md:h-[52rem] h-[35rem] `} style={returnContainerStyles()}>
                                <img src="./cv-redacted-md-min.png" alt="./cv-redacted-md-min.png" className={`absolute ${toggleZoom===false && toggleMouseInOut===false && 'animate-faderMd'} `} />
                            </div>
                            <div
                                onMouseEnter={() => onCVMouseEnter(id ?? -1, true)}  
                                onMouseLeave={() => onCVMouseEnter(id ?? -1, false)}  
                               onClick={() => onCVClick(id ?? -1)} 
                             className={`absolute bg-transparent cursor-pointer md:w-[50rem] w-[25rem]  md:h-[49rem] h-[28rem] text-3xl md:text-7xl font-bold flex items-center justify-center text-white-100 pt-[40%] duration-500 ${!toggleZoom ? 'opacity-100' : 'opacity-0'}`} style={cvOverlayStyles}>Click Me 👆🏻</div>
                            </>
                    )}
                </div>
                <div className={`${id}-t4t4t absolute right-0 -bottom-0 ${id===4 && " animate-fader "} ${id === 5 && 'w-full opacity-80 h-full'}`}>
                    {spareImg && (<img src={spareImg} alt={spareImg} className={'object-cover object-center w-full h-full'}></img>)}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation />

                )}
                <div className={cn(
                    titleClassName, `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex ${id===3 ? "flex-col-reverse": "flex-col" }  p-5 lg:p-7 lg:pt-4`
                )}>
                    {id === 5 ?
                        <>
                            <div className="md:w-[90%] w-[60%] text-left font-sans font-bold text-lg lg:text-xl max-w-96 z-10 pt-0 select-none">
                                {title}
                            </div>
                            <div className="md:w-[90%] w-[60%] text-left font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10 select-none">
                                {description}
                            </div>
                        </> :
                        <div className={`${id === 1 && 'md:flex-row flex-col gap-4'} flex justify-between pr-4`}>
                            <div className="flex flex-col">
                                <div className="text-left font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10 select-none">
                                    {description}
                                </div>
                                <div className="text-left font-sans font-bold text-lg lg:text-xl max-w-96 z-10 pt-0 select-none">
                                    {title}
                                </div>
                            </div>
                            {id === 1 && hoverOneActive &&
                                <DownloadResume/>}
                        </div>
                    }

                    {id === 4 &&
                        <div ref={cardFourRef} className="opacity-0 transition duration-700 absolute lg:left-10 left-0 lg:-bottom-15 md:-bottom-10 -bottom-20 cursor-none">
                            <Lottie
                                speed={0.8}
                                height={270}
                                isClickToPauseDisabled={true}
                                style={{cursor: "none"}}
                                options={
                                    {   
                                        
                                        loop: true,
                                        autoplay: true,
                                        animationData: searchAnimationData,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }
                                    }
                                }
                            />
                        </div>
                    }
                    {id === 5 &&
                        <>
                            <Blocker fnMental={fnMental} />
                            <GlobeDemo />
                        </>
                    }
                    {id === 3 && (
                        <div className="shadow-2xl rounded-lg gap-1 lg:gap-5 h-[90%] w-full mr-3 flex justify-center items-start py-3 -right-3 lg:-right-2">
                            <div className="grid md:grid-cols-3 grid-cols-4 gap-2 lg:gap-1">
                                {skillsAll.map((item, i) =>(
                                    <span key={item.split(',')[0]} className="relative group hover:shadow-[0_0px_8px_3px_rgba(0,0,0,0.4)] text-slate-300 duration-500 hover:bg-slate-800 py-1 lg:px-2 px-1 text-xs lg:text-base opacity-60 lg:opacity-70 rounded-lg text-center bg-[#10132E]">
                                        {item.split(',')[0] } 
                                        <span className="bg-slate-500 text-white h-6 w-6 opacity-0 group-hover:opacity-100 duration-200 absolute -right-2 -top-4 rounded-full px-5 py-0 flex justify-center items-center">
                                            {item.split(',')[1]}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div onClick={handleCopy} className={`absolute lg:-bottom-16 md:-bottom-24 -bottom-12 right-0`}>
                                <Lottie
                                isClickToPauseDisabled={true}
                                 options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>
                            <MagicButton
                                title={copied ? "Email Copied" : "Copy my Email"}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="`bg-[#161831]"
                                handleClick={handleCopy}
                            />
                            <MagicButton
                                
                                title={redirected ? "Calendly URL opened" : "Book a Meeting (Calendly)"}
                                icon={<FaExternalLinkAlt />}

                                position="left"
                                otherClasses="`bg-[#161831] p-0`"
                                handleClick={openCalendlyURL}
                            />
                        </div>
                    )}

                    {id === 7 && (
                        <>
                            <Chatbot/>
                            <div className="w-full h-full absolute flex items-end justify-end p-10 opacity-75">
                                <a href="https://groq.com" className="w-auto h-[15%]" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="h-full w-auto"
                                        src="https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg"
                                        alt="Powered by Groq for fast inference."
                                        width={0}
                                        height={0}
                                    />
                                </a>
                            </div>
                        </>
                        )}
                </div>
            </div>
        </div>
    );
};

const Blocker = ({fnMental}:{fnMental?: (val:any)=> void}) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [globeUnlocked, setGlobeUnlocked] = useState(false);
    const [clickCount, setClickCount] = useState(0)
    const [clear, setClear] = useState(false)
    const [blurred, setBlurred] = useState(false)

    const fnClick = () => {
        setClickCount((count) => {
            if ((count >= 19 && count < 24) ||
                (count >= 29 && count < 34) ||
                (count >= 34 && count < 39) ||
                (count >= 44)) {
                setBlurred(true)
            } else {
                setBlurred(false)
            }
            return count = count + 1
        })

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            if (clickCount >= 29 && clickCount < 41) {
                setGlobeUnlocked(true)
                setClear(true)
            }
        }, 6000)
    }

    const goMental = () =>{
        if(clickCount==45){
            setTimeout(()=>{
                fnMental && fnMental(true)
            }, 3000)
        }
        return true
    }

    return (
        <>
            {globeUnlocked !== true && (
                <div onClick={fnClick} className={`absolute ${blurred === true ? "bg-black-200  backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75" : ""} cursor-grab active:cursor-grabbing transition-all duration-700 lg:-ml-10 md:-mt-5 lg:-mb-7 p-5 -ml-6 md:-ml-8 w-[105%] h-[105%] z-30 flex `}>
                    <div className="lg:pt-0 md:pt-[50%] md:pr-0 z-40 w-full flex flex-col justify-start pr-10">

                        {clickCount >= 3 && clickCount < 7 && (<div className="lg:pt-[30%] md:pt-[50%] md:text-center md:pr-0 text-right pt-20 w-full">Try Harder</div>  )}
                        {clickCount >= 9 && clickCount < 13 && (<div className="lg:pt-[30%] md:pt-[50%] md:text-center md:pr-0 text-right pt-12 text-3xl w-full">Harder!</div>)}
                        {clickCount >= 15 && clickCount < 18 && (<div className="lg:pt-[30%] md:pt-[50%] md:text-center md:pr-0 text-right pt-28 w-full">Looks like nothing's happening right?</div>)}
                        {clickCount >= 20 && clickCount < 25 && (<div className="lg:pt-[30%] md:pt-[15%] md:text-center md:pr-0 text-right pt-1 text-xl font-sans font-extralight">Yes, progress at times go unnoticable, but it doesn't mean you should stop trying</div>)}
                        {clickCount >= 22 && clickCount < 25 && (<div className="md:pt-10 md:text-center md:pr-0 text-right text-lg pt-0  font-sans font-light">Every</div>)}
                        {clickCount >= 23 && clickCount < 25 && (<div className="md:pt-0 md:text-center md:pr-0 text-right text-xl font-sans font-normal">Click</div>)}
                        {clickCount >= 24 && clickCount < 25 && (<div className="md:pt-0 md:text-center md:pr-0 text-right  text-2xl font-sans font-bold">Counts!</div>)}
                        {clickCount >= 30 && clickCount < 40 && (<div className="md:pt-[50%] md:text-start text-right pt-10"> But don't forget to <span className="text-purple"> Take a break </span> here and there! <br></br> Its as crucial as <span className="text-purple"> Trying Hard</span></div>)}
                        {clickCount >= 35 && clickCount < 40 && (<div className=" text-xl font-bold md:text-start text-right">You gonna stop it?</div>)}
                        {clickCount >= 40 && clickCount < 43 && (<div className="lg:pt-[30%] md:pt-[15%] text-xl font-bold md:text-start text-right">Don't say I didn't warn you!</div>)}
                        {clickCount >= 41 && clickCount < 43 && (<div className="text-2xl font-extralight md:text-start text-right">Your browser may even crash</div>)}
                        {clickCount >= 45 && goMental() && (<div className="md:pt-40 lg:pt-20 pt-4  text-2xl font-bold md:text-start text-right md:pl-5 pl-0 flex flex-col"><span>Congratulations! </span> <span className="text-base font-thin">You just disrupted space time continuum</span></div>)}
                        {clickCount >= 42 && (<PiWarningFill className="animate-onOff absolute top-[45%] lg:left-[45%] left-[40%]" color="yellow" size={50}/>)}
                    </div>
                </div>
            )}
            {clear === true && (
                <div className="absolute w-full h-full flex items-center justify-center z-1">
                    <Lottie
                    isClickToPauseDisabled={true}
                     options={{
                        loop: false,
                        autoplay: true,
                        animationData,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }
                    }} />
                </div>
            )}
        </>
    )
}