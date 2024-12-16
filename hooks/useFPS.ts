import { useEffect, useState } from "react";

function useFPS(): number {
    const [fps, setFps] = useState<number>(60);

    useEffect(() =>{
        let lastFrameTime = performance.now();
        let frameCount = 0;

        const updateFPS = () =>{
            const currentTIme = performance.now();
            frameCount++;

            if(currentTIme - lastFrameTime >= 1000){
                setFps(frameCount);
                frameCount = 0;
                lastFrameTime = currentTIme;
            }

            requestAnimationFrame(updateFPS);
        };

        updateFPS();

        return () =>{
            setFps(60);
        }
    },[])

    return fps;
}

export default useFPS;