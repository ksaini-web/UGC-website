import React from 'react'
import footerimg1 from '../assets/footerimg1.png'
import footerimg2 from '../assets/footerimg2.png'
import footerimg3 from '../assets/footerimg3.png'
import footerimg4 from '../assets/footerimg4.png'
import footerimg5 from '../assets/footerimg5.png'
import footerimg6 from '../assets/footerimg6.png'
import footerimg7 from '../assets/footerimg7.png'
import footerimg8 from '../assets/footerimg8.png'
import footerimg9 from '../assets/footerimg9.png'
import footerimg10 from '../assets/footerimg10.png'

function Footer() {
  return (
    <div className='bg-gray-800'>
      <div className='text-white font-light grid grid-cols-1 lg:grid-cols-3'>
        
        <div className='mt-10 ml-10 p-5 grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <ul>
              <li className='font-bold mb-5'>For UGC Officials</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> e-office</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> NIC mail</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> RTI online</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> PG portal</li>
            </ul>
          </div>
          <div className='lg:mt-11'>
            <ul>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> Professional Councils</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> State Higher Education Councils</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> MoE</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> AICTE</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> National Testing Agency (NTA)/</li>
            </ul>
          </div>
        </div>

        <div className='mt-10 ml-10 p-5 grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <ul>
              <li className='font-bold mb-6'>For UGC Officials{'>'}Quick links</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> Web portal for Fellowship/Scholarship Legacy Cases</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> Rashtriya Uchchatar Shiksha Abhiyanl</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> University Activity Monitoring Portal</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> Deemed to be University Portal</li>
            </ul>
          </div>
          <div className='mt-11'>
            <ul>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> DEB</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> UGC NET Online</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> UGC Regulations</li>
              <li><span className='text-orange-600 font-extrabold'>{' > '}</span> UGC Circulars</li>
            </ul>
          </div>
        </div>

        <div className='mt-10 ml-10 p-5'>
          <ul>
            <li className='font-bold mb-6'>Contact Us</li>
            <li>University Grants Commission (UGC)</li>
            <li className='mb-4'>New Delhi - 110002.</li>
            <li>Phone: 011-23604446, 011-23604200</li>
            <li className='mt-4'>Email: contact.ugc@nic.in</li>
            <li className='p-2 gap-0 flex font-black mb-10'>
              <button className='bg-white p-1 rounded-l-xl text-black'>Total Visitors</button>
              <button className='text-black bg-orange-500 p-1 rounded-r-xl border-2 border-white border-b-white border-r-white'>234018363</button>
            </li>
          </ul>
        </div>

        <hr/>

      </div>

      <div className='grid grid-cols-2 lg:grid-cols-5 gap-1.5 m-5 p-7'>
        <div className='bg-white hover:cursor-pointer hover:border-4 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg1} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg2} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg3} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg4} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg5} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg6} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg7} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg8} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg9} alt="" /></div>
        <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-orange-500 flex justify-center z-30 shadow-2xs'><img src={footerimg10} alt="" /></div>
      </div>
    </div>
  )
}

export default Footer