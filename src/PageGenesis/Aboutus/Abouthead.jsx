import React from 'react'
import ugc from "../../assets/ugc.jpg"
import genesis1 from '../../assets/genesisimag1.webp';
import Slider from "react-slick";
import { Link } from "react-router-dom";


function Abouthead({title,subtitle}) {
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

  const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");
  return (
    
     <div className="w-full relative mb-0">
        <Slider {...settings}>
          <div className="relative">
            <img className="h-44 w-full block" src={genesis1} alt="" />
            <div className="absolute inset-0 flex justify-center items-center flex-col">
              
              <h1 className="text-sm font-extrabold text-black">
                <Link to="/">Home</Link> / <Link to={`/${slug}`}>{title}</Link>
              </h1>

              <h1 className="text-4xl font-extrabold text-white">
                {subtitle}
              </h1>

              <h1 className="text-xl font-extrabold text-white">
                University Grants Commission
              </h1>

            </div>
          </div>
        </Slider>
      </div>
  )
}

export default Abouthead