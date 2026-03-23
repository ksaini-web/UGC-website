import React from 'react'
import Slider from "react-slick";
import genesis1 from '../../assets/genesisimag1.webp';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import ugc from "../../assets/ugc.jpg"
import AboutSidebar from './AboutSidebar';
import Abouthead from './Abouthead';
function Logo() {
    const settings = {
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
        <Abouthead title="Logo"
         subtitle="University Grants Commission"

        />
       

        {/* Genesis Content Section */}
              <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
                  {/* Left Content */}
                  <div className="lg:col-span-2 bg-white p-4">
                     
                    <h1 className="text-4xl mb-4 text-orange-500">
                   Logo
                    </h1>

                    <div className=' flex  gap-6 items-start flex-row'>
                 <img className="w-48 h-auto object-contain shrink-0" src={ugc}/>
                    <p className='text-justify '> It was something that Prime Minister, Shri Atal Bihari Vajpayee, said during his speech on the occasion of the initiation of the University Grants Commission (UGC) Golden Jubilee Year on 28 December, 2002 that sparked off the idea of revisiting the old UGC logo. In his speech, Shri Vajpayee spoke of the need to take a fresh look at the UGC Act, 1956 in the light of the new challenges for the education sector emerging in the twenty-first century. He also suggested that the Commission could consider changing its name to the `University Education Development Commission”. This name truly captures the changed role of the UGC in recent years.

Traditionally, UGC was entrusted with the task of co-ordination, formulation and maintenance of the standards of university education. To this end, it engaged itself in, among other things, framing regulations on minimum standards of education, determining standards of teaching, examination and research in universities, monitoring developments in the field of collegiate and university education, disbursing grants to universities and colleges and setting up common facilities, services and programmes for a group of universities in the form of Inter-University Centres.

View logo Report </p>
        </div>
                       
        
             
                   
                   <a href='https://www.ugc.gov.in/oldpdf/LogoReport.pdf' className=' font-bold text-xl hover:text-green-300 hover:transition-all hover:cursor-pointer flex items-center gap-2'>View logo Report <AiOutlineFilePdf className=''/>  </a>
                  

                   

                  </div>
        
                  {/* Right Sidebar */}
                  <AboutSidebar/>
        
                </div>
              </div>
            
      </div>
 
  )
}

export default Logo