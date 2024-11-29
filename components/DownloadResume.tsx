import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

const handleDownload = () => {
  let resumeName = 'Resume_of_Chathuranga_Sampath-v2024_1.18.pdf'
  const link = document.createElement('a');
  link.href = './'+ resumeName
  link.download = resumeName
  link.id = 'download-link'
  document.body.appendChild(link)
  link.click()
  const linkToRemove = document.getElementById('download-link')
  if (linkToRemove) {
      document.body.removeChild(linkToRemove)
  }
}


const DownloadResume = () => {
  return (
    <div className="flex md:justify-center justify-start  items-center">

      <button onClick={handleDownload} className="inline-flex h-12 md:py-7 py-0 px-6 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Download Resume
        <span className="pl-2">
          <FaFileDownload />
        </span>
      </button>
    </div>
  )
}

export default DownloadResume