"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    function shiftCharacters(text:string, shift = 4) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const upperAlphabet = alphabet.toUpperCase();
        const shiftedText = text.split('').map(char => {
            if (char === ' ') return ' '; // Preserve spaces

            const isUpper = char === char.toUpperCase();
            const charSet = isUpper ? upperAlphabet : alphabet;
            const charIndex = charSet.indexOf(char);

            if (charIndex === -1) return char; // Non-alphabetic characters remain unchanged

            const newIndex = (charIndex + shift) % charSet.length;
            return charSet[newIndex];
        }).join('');

        return shiftedText;
    }

    function processQuote(quote: string) {
        const parts = quote.split(/(\[.*?\])/); // Split by text within square brackets
        return parts.map((part, index) =>
            part.startsWith('[') && part.endsWith(']')
                ? <span key={index} className="filter blur-sm">{shiftCharacters(part.slice(1, -1))}</span>
                : part
        );
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[90vwpx] lg:max-w-lg max-w-[80vw] relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
                        style={{
                            background: 'rgb(4,7,29)',
                            backgroundColor:
                                "linear-gradient(39deg, rgb(26 26 26) 0%, rgb(15 14 47) 46%, rgb(11 4 127 / 83%) 100%)",
                        }}
                        key={idx}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            {item.quote.includes("[") && (
                                <div className="absolute w-[80%] h-[50%] bg-transparent flex justify-center items-center">
                                    <span className="select-none text-lg bg-black text-white-100 p-5 font-bold rounded-lg">Confidential</span>
                                </div>
                            )}
                            {processQuote(item.quote)}
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <div className="flex flex-col gap-1">
                                        <span className=" text-xl leading-[1.6] text-white font-bold">
                                            {item.name}
                                        </span>
                                        <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                                            {item.title}
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
