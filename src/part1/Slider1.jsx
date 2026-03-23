import React from 'react'
import Slider from "react-slick";
import Digital from '../assets/modi.jpeg';
function Slider1() {
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
    <div className="w-full slider-container position:relative ">
      <Slider {...settings}>
        <div>
          <img className='w-full block'src="https://www.ugc.gov.in/Content/images/slider/main-slider3.png" alt="" />
        </div>
        <div>
       <img src="https://www.ugc.gov.in/Content/images/slider/main-slider2.png" alt="" />
        </div>
        <div>
         <video src="https://www.ugc.gov.in/Content/images/slider/video_slider.mp4"></video>
        </div>
        
      </Slider>
    </div>
  );
}

export default Slider1
