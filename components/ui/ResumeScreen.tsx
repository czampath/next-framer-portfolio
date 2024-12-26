'use client';
import React, { useState } from 'react'

const ResumeScreen = () => {
  const [toggleZoom, setToggleZoom] = useState(false)
  const [toggleMouseInOut, setToggleMouseInOut] = useState(false)
  
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



  const returnContainerStyles = () => {
    if (toggleZoom === true) {
      return cvContainerZoomed;
    } else if (toggleZoom === false && toggleMouseInOut === false) {
      return cvContainerNormal;
    } else if (toggleZoom === false && toggleMouseInOut === true) {
      return cvContainerHovered
    } else {
      return cvContainerZoomed
    }
  }

  const onCVClick = () => {
    setToggleZoom((val) => !val)
  }
  const onCVMouseEnter = (status: boolean) => {
    setToggleMouseInOut(status)
  }

  return (
    <>
      <div
        onClick={() => onCVClick()}
        className={`absolute duration-500 bg-transparent cursor-pointer md:w-[50rem] w-[25rem] md:h-[52rem] h-[35rem] `} style={returnContainerStyles()}>
        <img src="./cv-redacted-md-min.png" alt="./cv-redacted-md-min.png" className={`absolute ${toggleZoom === false && toggleMouseInOut === false && 'animate-faderMd'} `} />
      </div>
      <div
        onMouseEnter={() => onCVMouseEnter(true)}
        onMouseLeave={() => onCVMouseEnter(false)}
        onClick={() => onCVClick()}
        className={`absolute bg-transparent cursor-pointer md:w-[50rem] w-[25rem]  md:h-[49rem] h-[28rem] text-3xl md:text-7xl font-bold flex items-center justify-center text-white-100 pt-[40%] duration-500 ${!toggleZoom ? 'opacity-100' : 'opacity-0'}`} style={cvOverlayStyles}>Click Me 👆🏻</div>
    </>
  )
}

export default ResumeScreen