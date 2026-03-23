import React from 'react'
import Photo1div from '../assets/Photo1div.jpg'
import Photo2div from '../assets/Photo2div.jpg'
import Photo3div from '../assets/Photo3div.jpg'
import Photo4div from '../assets/Photo4div.jpg'

function Photodiv() {
  return (<div className='bg-violet-50 mb-0'>
    <div className='text-center'>
        <h1 className='font-extrabold text-3xl pt-3 text-orange-600'>Star Performer <span className='text-gray-800'> of the Month</span></h1>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 place-items-center mb-5'>

        <div >
           <img className='  cursor-pointer h-40 w-40 object-cover rounded-lg ' src={Photo1div} alt="" />
        </div>
           <div>
           <img className=' cursor-pointer h-40 w-40 object-cover rounded-lg ' src={Photo2div} alt="" />
        </div>

   <div className=''>
            <img className=' cursor-pointer h-40 w-40 object-cover rounded-lg  'src={Photo3div} alt="" />
        </div>

  <div className=''>
            <img className=' cursor-pointer h-40 w-40 object-cover rounded-lg  'src={Photo4div} alt="" />
        </div>

    </div>
    <div className='items-center justify-center flex mb-16 pb-7'>:
        <button className='bg-gray-800 rounded-4xl p-3  text-white hover:bg-amber-50 hover:text-black transition duration-300 cursor-pointer'>View All</button>
    </div>
    </div>
  )
}

export default Photodiv