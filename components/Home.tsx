'use client';

import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import MyFloatingDiv from "@/components/FloatingDiv";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import snitchJson from "@/data/snitch2.json"
import confusedEmojiData from "@/data/confused-em.json"
import octData from "@/data/oct.json"
import animationData from '@/data/confetti.json'
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-starts";
import FpsStat from "@/components/FpsStat";
import { useStatContext } from "@/context/StatContext";


export default function Home() {

    const [mental, setMental] = useState(false)
    const [sanity, setSanity] = useState(false)
    const [staging, setStaging] = useState(0)
    const prevStage = useRef(0)
    const stagingClass = useRef("")
    const [currentStyle,setCurrentStyle] = useState(stagingClass.current)
    const {setDebug} = useStatContext();
  
    let styles = [" brightness-[10]"," contrast-[2]", " invert", ""]
  
    const animateTransition = () =>{
  
      if(prevStage.current >= staging){
        return 
      }
      switch(staging){
        case 1:{
          stagingClass.current = styles[0] 
          break
        }
        case 2:{
          stagingClass.current = styles[0] + styles[1] 
          break
        }      
        case 3:{
          stagingClass.current = styles[0] + styles[1] + styles[2] 
          break
        }
        case 4:{
          stagingClass.current = ""
          setStaging(0)
          return
        }
      }
      if(staging>0 && staging<4){
        setTimeout(()=>{
          setStaging((val)=> {
            let newVal = staging + 1;
            prevStage.current = val
            return newVal
          } )
        },1000)
      }
      setCurrentStyle(stagingClass.current)
    }
  
    const fnMent = (val:any) => {
      window?.localStorage.setItem("mental", JSON.stringify(val))
  
      if(val===true){
        setStaging(1)
        setSanity(false)
      }else{
        setSanity(true)
      }
      prevStage.current = 0
      if(val===false){
          stagingClass.current = styles[2]
          setCurrentStyle(stagingClass.current)
          setTimeout(()=>{
            setMental(val)
            stagingClass.current = ""
            setCurrentStyle(stagingClass.current)
          },1000)
      }else{
        setTimeout(()=>{
          setMental(val)
          stagingClass.current = ""
          setCurrentStyle(stagingClass.current)
        },4000)
      }
    }
  
    useEffect(()=>{
     animateTransition()
    },[staging])
  
    const fnBackToSanity = () =>{
      setSanity(true)
      setTimeout(()=>{
        fnMent(false)
      },500)
    }
  
    useEffect(()=>{
      let mentalVal:boolean | null
      let debugVal:boolean | null
      if(window===undefined){
        mentalVal = JSON.parse(localStorage.getItem("mental") ?? "false")
        debugVal = JSON.parse(localStorage.getItem("debug") ?? "false")
        console.log("no window")
      }else{
        mentalVal = JSON.parse(window.localStorage.getItem("mental") ?? "false")
        debugVal = JSON.parse(window.localStorage.getItem("debug") ?? "false")
        console.log("with window")
      }
      console.log("mental: " + mentalVal)
      console.log("debug: " + debugVal)
      setMental(mentalVal ?? false);
      setDebug(debugVal ?? false);
    },[])
  
  
    return (
      <main className={`relative duration-1000 ${currentStyle} bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5`}>
        <FpsStat/>
        <div className={`max-w-7xl w-full ${mental===true ? "h-screen pt-[10%]" : "h-full"}`}>
            <>
              {mental===true && (
                <div className="overflow-hidden">
                  <ShootingStars/>
                  <StarsBackground className="animate-starShift overflow-hidden"/>
                </div>
              )}
              <MyFloatingDiv isMental={mental}>
                <FloatingNav navItems={navItems} />
              </MyFloatingDiv>
              
              <MyFloatingDiv isMental={mental}>
                <Hero/>
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
                      <div className="w-full h-full flex justify-center items-center mt-[50vh]"><span className="text-7xl text-center">The only way to stop this is if you catch the snitch!</span></div>
                  </MyFloatingDiv>
  
                  <MyFloatingDiv isMental={mental}>
                      <div className="w-full h-full flex justify-center items-center mt-[20vh] ml-[30vw]"><span className="text-7xl text-center text-red-500">Catch the snitch!</span></div>
                  </MyFloatingDiv>
  
                  <MyFloatingDiv isMental={mental}>
                      <div className="w-full h-full flex justify-center items-center mt-[70vh] ml-[30vw]"><span className="text-7xl text-center text-amber-500 top-[40vh]">That flying Snitch is the key!</span></div>
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