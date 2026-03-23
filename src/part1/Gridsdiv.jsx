import React from 'react'
import Griddivimg1 from '../assets/Griddivimg1.jpg'
import Griddivimg2 from '../assets/Griddivimg2.jpg'
import Griddivimg3 from '../assets/Griddivimg3.jpg'
import Griddivimg4 from '../assets/Griddivimg4.jpg'
function Gridsdiv() {
  return (
    <>
    <div className='mt-10 max-w-7xl h-96 mx-auto bg-white rounded-3xl px-10 py-12 justify-center items-center '>
        <div >
            <h1 className='text-blue-950 font-bold text-3xl text-center mb-11'><span className='text-orange-600'>e-Governance </span> @UGC</h1>
        </div>

        <div className='grid grid-cols-4 text-center gap-3 p-3.5 rounded-3xl  place-items-center '>
         <div  className='h-56 w-56 sm:gap-2.5 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-72 xl:w-72 ' >
            <img className=' rounded-2xl' src={Griddivimg1} alt="" />
            <h3>UGC Equivalence Portal</h3>
        </div>

         <div  className='h-56 w-56 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-72 xl:w-72 ' >
            <img src={Griddivimg2} alt="" />
            <h3>UGC Ph.D Excellence Citation Portal</h3>
        </div>

         <div  className='h-56 w-56 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-72 xl:w-72 ' >
            <img className=' rounded-2xl'src={Griddivimg3} alt="" />
            <h1>UGC FHEI</h1>
        </div>

         <div  className='h-56 w-56 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-72 xl:w-72 ' >
            <img className=' rounded-2xl'src={Griddivimg4} alt="" />
            <h1>Malviya Mission</h1>
                <div className='flex justify-center mt-12'><button className='  px-8 py-2 rounded-full text-white bg-black border-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition '>View All</button></div>  
        </div>
             

        </div>


    </div>
    </>
  )
}

export default Gridsdiv