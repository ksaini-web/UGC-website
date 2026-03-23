import React from 'react'
import modi from '../assets/modi.jpeg';
function Modiji() {
  return ( <div className='h-auto bg-white'>
    <div className='bg-blue-50 justify-center items-center flex'>
        <img className=' m-4 h-[140px]'src={modi} alt="" />
    </div>
    <div className=' bg-white rounded-xl shadow p-4 sm:p-6 '>
        <h3 className='text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3' >
            <span>About</span> University Grants Commision
        </h3>
        <p className='font-semibold text-sm text-gray-800 leading-relaxed'>The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory Organization of the Government of India by an Act of Parliament in 1956, for the coordination,determination and maintenance of standards of teaching, examination and research in university education.</p>
        <button className='bg-amber-500 p-3 pl-4  pr-4 rounded-2xl mt-14 mb-9'>Read More</button>
    </div>
    </div>
  )
}

export default Modiji