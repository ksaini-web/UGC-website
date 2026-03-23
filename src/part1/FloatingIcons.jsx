import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function FloatingIcons() {
  return (
    <div className='fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-0 z-50 '>
        {/* //Twitter */}
        <div className=''>

        </div>

        <a href='https://x.com/ugc_india?ref_src=twsrc%5Etfw'
        className='bg-blue-50 p-3 shadow-lg '>
     <FaXTwitter className='text-3xl font-light'/>
        </a>

        {/* //facebook */}

         <a href='https://www.facebook.com/UniversityGrantsCommission'
        className='bg-blue-50 p-3 shadow-lg '>
     <FaFacebook className='text-3xl text-blue-500 font-light'/>
        </a>
      {/* // Linkedin */}
         <a href='https://www.linkedin.com/company/ugc-india/'
        className='bg-blue-50 p-3 shadow-lg '>
     <FaLinkedin className='text-3xl text-blue-500 font-light'/>
        </a>
        
    {/* // Instagram */}
         <a href='https://www.instagram.com/ugcindia/'
        className='bg-blue-50 p-3 shadow-lg '>
     <FaSquareInstagram  className='text-3xl text-pink-400 font-light'/>
        </a>

        {/* // Youtude */}
         <a href='https://www.youtube.com/@UGC_India'
        className='bg-blue-50 p-3 shadow-lg '>
     <FaYoutube   className='text-3xl text-red-600 font-light'/>
        </a>

        {/* // Whatsapp */}
         <a href='https://www.whatsapp.com/channel/0029VaCh6c50gcfMkcXzgq1w'
        className='bg-blue-50 p-3 p-3 shadow-lg '>
     <IoLogoWhatsapp    className='text-3xl text-green-600 font-light'/>
        </a>


    </div>
  )
}

export default FloatingIcons