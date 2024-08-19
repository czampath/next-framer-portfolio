'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import React, { useEffect, useRef, useState } from "react";
import animationData from '@/data/confetti.json'
import searchAnimationData from '@/data/search.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import MagnifyGlass from "../MagnifyGlass";
import { FaDownload, FaFileDownload } from "react-icons/fa";

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
    spareImg
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
}) => {

    const [copied, setCopied] = useState(false);
    const [hoverOneActive, setHoverOneActive] = useState(false)
    const [hoverFourActive, setHoverFourActive] = useState(false)
    const cardFourRef = useRef(null)

    const handleCopy = () => {
        navigator.clipboard.writeText("csampath.work@gmail.com")
        setCopied(true)
    }

    useEffect(() => {
        debugger
        let $img:any = cardFourRef.current
        if ($img) {
            if (hoverFourActive === true) {
                if ($img) {
                    $img.style.opacity = "0.15";
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
                $img.style.opacity = "0.5";
            }
        } else {
            if ($img) {
                $img.style.opacity = "1";
            }
        }
    }, [hoverOneActive])

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './resume_v2024_1.8.pdf'
        link.download = 'example.pdf'
        link.id = 'download-link'
        document.body.appendChild(link)
        link.click()
        const linkToRemove = document.getElementById('download-link')
        if (linkToRemove) {
            document.body.removeChild(linkToRemove)
        }
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
                </div>
                <div className={`${id}-t4t4t absolute right-0 -bottom-0 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (<img src={spareImg} alt={spareImg} className={'object-cover object-center w-full h-full'}></img>)}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation />

                )}
                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-7 lg:pt-4'
                )}>
                    {id === 5 ?
                        <>
                            <div className="md:w-[90%] w-[60%] font-sans font-bold text-lg lg:text-xl max-w-96 z-10 pt-0 select-none">
                                {title}
                            </div>
                            <div className="md:w-[90%] w-[60%] font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10 select-none">
                                {description}
                            </div>
                        </> :
                        <div className={`${id === 1 && 'md:flex-row flex-col gap-4'} flex justify-between pr-4`}>
                            <div className="flex flex-col">
                                <div className="font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10 select-none">
                                    {description}
                                </div>
                                <div className="font-sans font-bold text-lg lg:text-xl max-w-96 z-10 pt-0 select-none">
                                    {title}
                                </div>
                            </div>
                            {id === 1 && hoverOneActive &&
                                <div className="flex justify-center items-center">

                                    <button onClick={handleDownload} className="inline-flex h-12 py-7 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        Download Resume
                                        <span className="pl-2">
                                            <FaFileDownload />
                                        </span>
                                    </button>
                                </div>}
                        </div>}


                    {id === 4 &&
                        <div ref={cardFourRef} className="opacity-0 transition duration-700 absolute right-6 -bottom-20 cursor-none">
                            <Lottie
                                height={270}
                                isClickToPauseDisabled={true}
                                style={{cursor: "default"}}
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
                            <Blocker />
                            <GlobeDemo />
                        </>
                    }
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-2 lg:gap-1">
                                {['JAVA', 'Spring Boot', 'PostgreSQL', 'Node.js'].map((item) =>
                                    <span key={item} className="py-1  lg:px-2 px-1 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center bg-[#10132E]">{item}</span>
                                )}

                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-1">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                                {['React.js', 'Next.js', 'TypeScript', 'HTML/CSS'].map((item) =>
                                    <span key={item} className="py-1  lg:px-2 px-1 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center bg-[#10132E]">{item}</span>
                                )}

                            </div>
                            <div className="flex flex-col gap-2 lg:gap-1">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                                {['Angular', 'HIbernate', 'SVG', 'UI/UX'].map((item) =>
                                    <span key={item} className="py-1  lg:px-2 px-1 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center bg-[#10132E]">{item}</span>
                                )}

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
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Blocker = () => {
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
            if (clickCount >= 29) {
                setGlobeUnlocked(true)
                setClear(true)
            }
        }, 5000)
    }

    return (
        <>
            {globeUnlocked !== true && (
                <div onClick={fnClick} className={`absolute ${blurred === true ? "bg-black-200  backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75" : ""} transition-all duration-700 lg:-ml-10 md:-mt-5 lg:-mb-7 p-5 -ml-6 md:-ml-8 w-[105%] h-[105%] z-30 flex `}>
                    <div className="lg:pt-0 md:pt-[50%] md:pr-0 z-40 w-full flex flex-col justify-start pr-10">

                        {clickCount > 3 && clickCount < 7 && (<div className="lg:pt-[30%] md:pt-[50%] md:text-center md:pr-0 text-right pt-20 w-full">Try Harder</div>)}
                        {clickCount >= 9 && clickCount < 13 && (<div className="lg:pt-[30%] md:pt-[50%] md:text-center md:pr-0 text-right pt-12 text-3xl w-full">Harder!</div>)}
                        {clickCount >= 15 && clickCount < 18 && (<div className="lg:pt-[30%] md:pt-[50%] md:text-center md:pr-0 text-right pt-28 w-full">Looks like nothing's happening right?</div>)}
                        {clickCount >= 20 && clickCount < 25 && (<div className="lg:pt-[30%] md:pt-[15%] md:text-center md:pr-0 text-right pt-1 text-xl font-sans font-extralight">Yes, progress at times go unnoticable, but it doesn't mean you should stop trying</div>)}
                        {clickCount >= 22 && clickCount < 25 && (<div className="md:pt-10 md:text-center md:pr-0 text-right text-lg pt-0  font-sans font-light">Every</div>)}
                        {clickCount >= 23 && clickCount < 25 && (<div className="md:pt-0 md:text-center md:pr-0 text-right text-xl font-sans font-normal">Click</div>)}
                        {clickCount >= 24 && clickCount < 25 && (<div className="md:pt-0 md:text-center md:pr-0 text-right  text-2xl font-sans font-bold">Counts!</div>)}
                        {clickCount >= 30 && clickCount < 40 && (<div className="md:pt-[50%] md:text-start text-right pt-10"> But don't forget to <span className="text-purple"> Take a break </span> here and there! <br></br> Its as crucial as <span className="text-purple"> Trying Hard</span></div>)}
                        {clickCount >= 35 && clickCount < 40 && (<div className=" text-xl font-bold md:text-start text-right">Yeah you may stop now</div>)}
                        {clickCount >= 45 && (<div className="md:pt-[30%] text-2xl font-bold md:text-start text-right ">For christ's sake, CUT IT OUT!</div>)}
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