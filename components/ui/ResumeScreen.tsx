'use client';
import React, { useState } from 'react'
import Image from 'next/image';

const ResumeScreen = () => {
  const [toggleZoom, setToggleZoom] = useState(false)
  const [toggleMouseInOut, setToggleMouseInOut] = useState(false)

  const cvContainerZoomed = {
    top: "0.00000001%",
    left: "0.00000001%",
    zIndex: "20",
    opacity: 1,
    height: "100%",
    width: "100%",
    overflow: "hidden auto",
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
        <Image
          layout="responsive"
          width={792}
          height={2048}
          src="https://d1k2af8sw8x9is.cloudfront.net/resume-pdf-img/output.png"
          alt="Fetched from S3"
          className={`${toggleZoom === false && toggleMouseInOut === false && 'animate-faderMd'} `} />
        <div className='absolute over right-0 top-0 w-fit opacity-80 bg-amber-800 flex flex-row items-center shadow-md
          pt-[0.0rem] pl-[1rem] pr-[.0rem] pb-[.0rem]
          rounded-tl-[0px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[10px]
          '>Auto-Updated via
          <Image
            width={50}
            height={50}
            className='w-12 h-10 ml-2 bg-slate-200 rounded-sm pr-1 pl-1 duration-100 hover:scale-[1.02] hover:-translate-x-[.05rem] hover:translate-y-[.05rem]'
            alt='aws-logo'
            src='/aws2.png'></Image>
        </div>
        <div className='relative bottom-0 flex flex-col items-center bg-slate-700 p-2 -mt-6'>
          <span className='text-stone-300'>This Image is automatically updated using:</span>
          <span className='justify-center text-amber-100'>GitHub Webhooks + AWS API Gateway + S3 + AWS Lambda + EventBridge + CloudFront</span>
        </div>
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