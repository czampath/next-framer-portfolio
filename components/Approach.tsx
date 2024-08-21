"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
    return (
        <section className="w-full py-20 select-none">
            <h1 className="heading">My <span className="text-purple">appoach</span></h1>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card
                    title="Insightful Analysis"
                    icon={<AceternityIcon order="Phase 1" />}
                    desc="Assess the problem space, identifying key requirements and potential challenges to ensure informed and effective solution crafting"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card
                    title="Estimation and Strategy"
                    icon={<AceternityIcon order="Phase 2" />}
                    desc="Deliver precise resource and time estimates, coupled with a clear, strategic roadmap to effectively guide all development phases"
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName='bg-red-900'
                        dotSize={2}
                    />
                </Card>
                <Card
                    title="Agile Execution"
                    icon={<AceternityIcon order="Phase 3" />}
                    desc="Implement solutions through iterative Agile sprints, allowing for continuous feedback, ensuring flexibility, quality, and timely delivery."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-800"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
    title,
    icon,
    children,
    desc
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    desc?: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-md w-full mx-auto p-4 relative h-60 lg:h-[35rem] rounder-3xl"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center ">
                    {icon}
                </div>
                <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
                    {title}
                </h2>
                <h2 className="dark:text-white lg:text-base text-base opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ 'color': "#e4ecff" }}>
                    {desc}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order?: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2  text-white backdrop-blur-3xl text-2xl font-normal">
                    {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};


export default Approach;