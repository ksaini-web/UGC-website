import React from 'react'
import Slider from "react-slick";
import genesis1 from '../assets/genesisimag1.webp';
import { Link } from 'react-router-dom';
import genimgimg2 from '../assets/genimgimg2.jpg';
import { FaArrowCircleRight } from "react-icons/fa";
import AboutSidebar from './Aboutus/AboutSidebar';
function Genesis() {

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
    <>
      {/* Slider Section */}
      <div className="w-full relative mb-0">
        <Slider {...settings}>
          <div className="relative">
            <img className="h-44 w-full block" src={genesis1} alt="" />
            <div className="absolute inset-0 flex justify-center items-center flex-col">
              
              <h1 className="text-sm font-extrabold text-black">
                <Link to="/">Home</Link> / <Link to="/genesis">Genesis</Link>
              </h1>

              <h1 className="text-4xl font-extrabold text-white">
                Genesis
              </h1>

              <h1 className="text-xl font-extrabold text-white">
                University Grants Commission
              </h1>

            </div>
          </div>
        </Slider>
      </div>

      {/* Genesis Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Content */}
          <div className="lg:col-span-2 bg-white p-4">

            <h1 className="text-4xl mb-4 text-orange-500">
              Genesis
            </h1>

            <p className="leading-relaxed">
           From ancient Bharat to modern India, higher education has always occupied a place of prominence in Indian history. In ancient times, Nalanda, Taxila and Vikramsila universities were renowned seats of higher learning, attracting students not only from all over the country but from far off countries like Korea, China, Burma (now Myanmar), Ceylon (now Sri Lanka), Tibet and Nepal. Today, India manages one of the largest higher education systems in the world*.
            </p>

            <img
              className="my-6 mx-auto"
              src={genimgimg2}
              alt=""
            />

            <p className="text-center max-w-2xl mx-auto text-xl font-semibold">
              The Prime Minister, Pandit Jawaharlal Nehru, addressed the inaugural meet on 28th December, 1953. Photo: PIB
            </p>

            <p className='leading-relaxed mt-2.5'>The present system of higher education dates back to Mountstuart Elphinstone`s minutes of 1823, which stressed on the need for establishing schools for teaching English and the European sciences. Later, Lord Macaulay, in his minutes of 1835, advocated "efforts to make natives of the country thoroughly good English scholars". Sir Charles Wood`s Dispatch of 1854, famously known as the ` Magna Carta o f English Education in India`, recommended creating a properly articulated scheme of education from the primary school to the university. It sought to encourage indigenous education and planned the formulation of a coherent policy of education. Subsequently, the universities of Calcutta, Bombay (now Mumbai) and Madras were set up in 1857, followed by the university of Allahabad in 1887</p>
            <p className='leading-relaxed mt-2.5'>The Inter-University Board (later known as the Association of Indian Universities) was established in 1925 to promote university activities, by sharing information and cooperation in the field of education, culture, sports and allied areas. </p>
            <p className='leading-relaxed mt-2.5' >The first attempt to formulate a national system of education in India came In 1944, with the Report of the Central Advisory Board of Education on Post War Educational Development in India, also known as the Sargeant Report. It recommended the formation of a University Grants Committee, which was formed in 1945 to oversee the work of the three Central Universities of Aligarh, Banarasand Delhi. In 1947, the Committee was entrusted with the responsibility of dealing with all the then existing Universities.</p>
            <p className='leading-relaxed mt-2.5' >Soon after Independence, the University Education Commission was set up in 1948 under the Chairmanship of Dr. S Radhakrishnan "to report on Indian university education and suggest improvements and extensions that might be desirable to suit the present and future needs and aspirations of the country". It recommended that the University Grants Committee be reconstituted on the general model of the University Grants Commission of the United Kingdom with a full-time Chairman and other members to be appointed from amongst educationists of repute.</p>
            <p className='leading-relaxed mt-2.5' >In 1952, the Union Government decided that all cases pertaining to the allocation of grants-in-aid from public funds to the Central Universities and other Universities and Institutions of higher learning might be referred to the University Grants Commission. Consequently, the University Grants Commission (UGC) was formally inaugurated by late Shri Maulana Abul Kalam Azad, the then Minister of Education, Natural Resources and Scientific Research on 28 December 1953.</p>
            <p className='leading-relaxed mt-2.5' >The UGC, however, was formally established only in November 1956 as a statutory body of the Government of India through an Act of Parliament for the coordination, determination, and maintenance of standards of university education in India. The offices of the UGC are located in three locations in Delhi: Bahadur Shah Zafar Marg in New Delhi, 35, Feroze Shah Road, and the South Campus of the University of Delhi.</p>
          </div>

          {/* Right Sidebar */}
        <AboutSidebar/>

        </div>
      </div>
    </>
  )
}

export default Genesis;