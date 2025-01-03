import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

const handleDownload = () => {
  const s3Url = 'https://d1k2af8sw8x9is.cloudfront.net/resume-pdf-img/Resume_of_Chathuranga_Sampath.pdf';
  const link = document.createElement('a');
  link.href = s3Url;
  link.download = 'Resume_of_Chathuranga_Sampath.pdf';
  link.id = 'download-link';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


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