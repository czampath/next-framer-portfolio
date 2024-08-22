'use client'

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import MyFloatingDiv from "@/components/FloatingDiv";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import snitchJson from "@/data/snitch2.json"
import confusedEmojiData from "@/data/confused-em.json"
import octData from "@/data/oct.json"
import animationData from '@/data/confetti.json'
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-starts";

export default function Home() {

  const [mental, setMental] = useState(false)
  const [sanity, setSanity] = useState(false)

  const fnMent = (val:any) => {
    window?.localStorage.setItem("mental", JSON.stringify(val))
    setMental(val)
  }

  const fnBackToSanity = () =>{
    setSanity(true)
    setTimeout(()=>{
      fnMent(false)
    },1000)
  }

  useEffect(()=>{
    let val:boolean | null
    if(window===undefined){
      val = JSON.parse(localStorage.getItem("mental") ?? "false")
      console.log("no window")
    }else{
      val = JSON.parse(window.localStorage.getItem("mental") ?? "false")
      console.log("with window")
    }
    console.log(val)
    setMental(val ?? false);
  },[])

  let snitchCount = 5

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className={`max-w-7xl w-full ${mental===true ? "h-screen pt-[10%]" : "h-full"}`}>
        
          <>
            {mental===true && (
              <>
                <ShootingStars/>
                <StarsBackground/>
              </>
            )}
            <MyFloatingDiv isMental={mental}>
              <FloatingNav navItems={navItems} />
            </MyFloatingDiv>
            
            <MyFloatingDiv isMental={mental}>
              <Hero />
            </MyFloatingDiv>

            <MyFloatingDiv isMental={mental}>
              <Grid fnMental={fnMent}/>
            </MyFloatingDiv>

            <MyFloatingDiv isMental={mental}>
              <RecentProjects />
            </MyFloatingDiv>

            <MyFloatingDiv isMental={mental}>
              <Clients />
            </MyFloatingDiv>

            <MyFloatingDiv isMental={mental}>
              <Experience />
            </MyFloatingDiv>

            <MyFloatingDiv isMental={mental}>
              <Approach />
            </MyFloatingDiv>

            <MyFloatingDiv isMental={mental}>
              <Footer />
            </MyFloatingDiv>

            {mental===true && (
              <>
                <MyFloatingDiv isMental={mental}>
                    <div className="w-full h-full flex justify-center items-center"><span className="text-7xl text-center">This is all on you!</span></div>
                </MyFloatingDiv>

                <MyFloatingDiv isMental={mental}>
                    <div className="w-full h-full flex justify-center items-center"><span className="text-7xl text-center">WHAT DID YOU YOU!</span></div>
                </MyFloatingDiv>

                <MyFloatingDiv isMental={mental}>
                    <div className="w-full h-full flex justify-center items-center"><span className="text-7xl text-center">The only way to stop this is if you catch the snitch!</span></div>
                </MyFloatingDiv>

                <MyFloatingDiv isMental={mental}>
                    <div className="w-full h-full flex justify-center items-center"><span className="text-7xl text-center text-red-500">Catch the snitch!</span></div>
                </MyFloatingDiv>

                <MyFloatingDiv  isMental={mental} isSnitch={true} flatFlying={true}>
                  <div className="cursor-pointer" onClick={()=>fnBackToSanity()}>
                    {sanity===false && mental=== true && (
                      <Lottie
                      height={270}
                      isClickToPauseDisabled={true}
                      style={{cursor: "default"}}
                      options={
                          {
                              loop: true,
                              autoplay: true,
                              animationData: snitchJson,
                              rendererSettings: {
                                  preserveAspectRatio: 'xMidYMid slice'
                              }
                          }
                      }
                      />
                    )} 
                    <div className={`w-96 h-60 absolute top-0`}>
                        {sanity===true && (
                          <Lottie
                          isClickToPauseDisabled={true}
                            options={{
                              loop: true,
                              autoplay: false,
                              animationData,
                              rendererSettings: {
                                  preserveAspectRatio: 'xMidYMid slice'
                              }
                          }} />
                        )} 
                    </div>
                  </div>
                </MyFloatingDiv>
                <MyFloatingDiv  isMental={mental} dimmingFX={true} flatFlying={true}>
                  <Lottie
                    height={270}
                    isClickToPauseDisabled={true}
                    style={{cursor: "default"}}
                    options={
                        {
                            loop: true,
                            autoplay: true,
                            animationData: confusedEmojiData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }
                    }
                    />
                </MyFloatingDiv>
                <div className="animate-up absolute md:left-[10%] -left-10 bottom-0 z-[100]" style={{transform:"translateY(20vh)"}}>
                  <Lottie
                    height={270}
                    isClickToPauseDisabled={true}
                    style={{cursor: "default"}}
                    options={
                        {
                            loop: true,
                            autoplay: true,
                            animationData: octData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }
                    }
                  />
                </div>
              </>
            )}
          </>
      </div>
    </main>
  );
}
