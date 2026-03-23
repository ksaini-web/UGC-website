import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";


function SocialMedia() {
  return (
    <div>
        <div className=''>
            <div className=' m-11 justify-center items-center flex'>
            <h1 className='font-extrabold text-3xl text-orange-500'><span className='text-gray-700'>Social Media</span> Engagements</h1>
      {/* //grid */}
      </div>

      <div className=' m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>

              <div className="border-4 border-blue-800 rounded-lg  shadow-lg m-3.5 ">
           <div className="flex justify-center">
  <div className="w-30 h-15 bg-blue-800 rounded-t-full
                  flex items-center justify-center-safe 
                  text-white text-2xl 
                  -mb-14 relative z-10 shadow-lg -mt-15">
    <FaFacebookF />
  </div>
</div>
            <iframe
            title="UGC Facebook"
src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/UniversityGrantsCommission&tabs=timeline&width=400&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"

            width="100%"
            height="300"
            style={{border:"none",overflow:"hidden"}}
            scrolling="yes"
            frameborder="0"
            allowFullScreen={true}>
             
            </iframe>
        </div>

        
      <div className=" border-4 border-red-600 m-3.5 ">
                  <div className="flex justify-center">
  <div className="w-30 h-15 bg-red-600 rounded-t-full
                  flex items-center justify-center-safe 
                  text-white text-2xl 
                  -mb-14 relative z-10 shadow-lg -mt-15">
    <TiSocialYoutubeCircular className='text-5xl' />
  </div>
</div>
          <iframe
            title="UGC Facebook"
           src="https://www.youtube.com/embed/cCdiRBfu4Xk"

            width="100%"
            height="400"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>

        </div>
    </div>
  )
}

export default SocialMedia