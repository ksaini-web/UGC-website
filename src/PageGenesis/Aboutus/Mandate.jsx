import React from 'react'
import Slider from "react-slick";
import genesis1 from '../../assets/genesisimag1.webp';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import AboutSidebar from './AboutSidebar';
function Mandate() 
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
               Mandate
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
                   Mandate
                    </h1>
        
                    <p className="leading-relaxed">
The UGC has the unique distinction of being the only grant-giving agency in the country which has been vested with two responsibilities: that of providing funds and that of coordination, determination and maintenance of standards in institutions of higher education.                    </p>
        
        
                    <p className="text-start m-2.5 max-w-2xl mx-auto text-xl font-semibold">
The UGC`s mandate includes:                    </p>
        


                   <li className='flex items-center gap-2'><FaArrowCircleRight  className= "text-orange-600" />Promoting and coordinating university education. </li>
                                      <li className='flex items-center gap-2'><FaArrowCircleRight  className= "text-orange-600" />Determining and maintaining standards of teaching, examination and research in universities.
 </li>

                   <li className='flex items-center gap-2'><FaArrowCircleRight  className= "text-orange-600" />Framing regulations on minimum standards of education. </li>

                   <li className='flex items-center gap-2'><FaArrowCircleRight  className= "text-orange-600" />Monitoring developments in the field of collegiate and university education; disbursing grants to the universities and colleges. </li>

                   <li className='flex items-center gap-2'><FaArrowCircleRight  className= "text-orange-600" />Serving as a vital link between the Union and state governments and institutions of higher learning. </li>

                   <li className='flex items-center gap-2'><FaArrowCircleRight  className= "text-orange-600" />Advising the Central and State governments on the measures necessary for improvement of university education. </li>

                  </div>
        
                  {/* Right Sidebar */}
                 <AboutSidebar/>
        
                </div>
              </div>
            
      </div>
  )
}

export default Mandate