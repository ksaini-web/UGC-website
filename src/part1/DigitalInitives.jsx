import React from 'react'
import Slider from "react-slick";
import Digital1 from '../assets/Digital1.jpg'
import Digital2 from '../assets/Digital2.png'
import Digital3 from '../assets/Digital3.jpg'
import Digital4 from '../assets/Digital4.jpg'
import Digital5 from '../assets/Digital5.jpg'
import Digital6 from '../assets/Digital6.jpg'
import Digital7 from '../assets/Digital7.jpg'
import Digital8 from '../assets/Digital8.jpg'
import Digital9 from '../assets/Digital9.jpg'

function DigitalInitives() {
     const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed:3000,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <div>
            <h1 className='text-center font-bold  text-3xl m-5 text-orange-500'>Digital <span className='text-gray-600'>Initiatives </span></h1>
            </div>
            <div>
                <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='gap-7 m-3 p-3' src={Digital1} alt="" />
        </div>
        <div>
           <img className='gap-7 m-3 p-3' src={Digital2} alt="" />
        </div>
        <div>
           <img className='gap-7 m-3 p-3' src={Digital3} alt="" />
        </div>
        <div>
           <img className='gap-7 m-3 p-3' src={Digital4} alt="" />
        </div>
        <div>
          <img className='gap-7 m-3 p-3' src={Digital5} alt="" />
        </div>
        <div>
           <img className='gap-7 m-3 p-3' src={Digital6} alt="" />
        </div>
        <div>
           <img className='gap-7 m-3 p-3' src={Digital7} alt="" />
        </div>
        <div>
           <img className='gap-7 m-3 p-3' src={Digital8} alt="" />
        </div>
        <div>
          <img className= 'gap-7 m-3 p-3' src={Digital9} alt="" />
        </div>
      </Slider>
    </div> 
    </div>
    </div>
  )
}

export default DigitalInitives