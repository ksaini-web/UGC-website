import React from 'react'
import Slider from "react-slick";
import genesis1 from '../../assets/genesisimag1.webp';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import ugc_act from "../../assets/ugc_act.gif";
import AboutSidebar from './AboutSidebar';
function UGCACT1956() 
{ const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
     
     
      <div className="w-full relative mb-0">
        <Slider {...settings}>
          <div className="relative">
            <img className="h-44 w-full block" src={genesis1} alt="" />
            <div className="absolute inset-0 flex justify-center items-center flex-col">
              
              <h1 className="text-sm font-extrabold text-black">
                <Link to="/">Home</Link> /
              </h1>

              <h1 className="text-4xl font-extrabold text-white">
              UGC ACT 1956
              </h1>

              <h1 className="text-xl font-extrabold text-white">
            University Grants Commission
              </h1>

            </div>
          </div>
        </Slider>

        {/* Genesis Content Section */}
              <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
                  {/* Left Content */}
                  <div className="lg:col-span-2 bg-white p-4">
                     
                    <h1 className="text-4xl mb-4 text-orange-500">
                   UGC ACT 1956
                    </h1>
        
                       
        
                    <p className="text-start -ml-1 m-2.5 max-w-2xl mx-auto text-xl font-semibold ">
The University Grants Commission Act And Rules & Regulations Under The Act, 1956                   </p>
    
                <p className=''>
                    This publication has been printed under the direction and control of UGC and the Govt. of India shall not be deemed responsible for the material reproduced in this copy of the UGC Act, 1956 and Rules and Regulations under the Act, which is strictly meant for official use and shall not be used for commercial purpose.
                </p>
                   
                   <a href='https://www.ugc.gov.in/oldpdf/ugc_act.pdf?_gl=1*1p2cu5t*_ga*MTIwMTkxNzI1MS4xNzY5NzAwMjg5*_ga_FGHYECNLXB*czE3NzE4MjY4NTkkbzYxJGcxJHQxNzcxODI3MTUzJGo2MCRsMCRoMA..*_ga_Q0MS75D115*czE3NzE4MjY4NTkkbzYxJGcxJHQxNzcxODI3MTUzJGo2MCRsMCRoMA..' className=' font-bold text-xl hover:text-green-300 hover:transition-all hover:cursor-pointer flex items-center gap-2'><AiOutlineFilePdf className=''/> View UGC Act 1956 Details - (Hindi Version)</a>
                    <img className=' mt-3' src={ugc_act} alt="" />

                   

                  </div>
        
                  {/* Right Sidebar */}
                   <AboutSidebar/>
        
                </div>
              </div>
            
      </div>
  )
}





export default UGCACT1956