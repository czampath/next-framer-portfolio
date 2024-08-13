import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";

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
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "linear-gradient(39deg, rgb(26 26 26) 0%, rgb(15 14 47) 46%, rgb(11 4 127 / 83%) 100%)"
            }}
        >
            <div className={`${id === 6} && 'flex justify-center h-full`}>
                <div className="w-full h-full absolute">
                    {img && (<img src={img} alt={img} className={cn(imgClassName, 'object-cover', 'object-center')}></img>)}
                </div>
                <div className={`${id}-t4t4t absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (<img src={spareImg} alt={spareImg} className={'object-cover object-center w-full h-full'}></img>)}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center justify-center text-white-100 font-bold "></div>
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-7 lg:pt-4'
                )}>
                    <div className="font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10 select-none">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-xl max-w-96 z-10 pt-0 select-none">
                        {title}
                    </div>

                    {id === 2 && <GlobeDemo />}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-2 lg:gap-1">
                                {['React.js', 'Next.js', 'TypeScript', 'HTML/CSS'].map((item) =>
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center bg-[#10132E]">{item}</span>
                                )}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-1">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                                {['JAVA', 'Spring Boot', 'PostgreSQL', 'Node.js'].map((item) =>
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center bg-[#10132E]">{item}</span>
                                )}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
