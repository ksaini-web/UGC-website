import React from 'react'
import { Link , Outlet } from 'react-router-dom';
import { MdComputer } from "react-icons/md";
import { TbHandFinger } from "react-icons/tb";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import Gridsdiv from './Gridsdiv';
import UgcGreen from './UgcGreen';


function Grids() {
  return (
      
   <div>

  <div className='bg-blue-950 py-10'>

        <div className='max-w-6xl mx-auto grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 px-4 justify-center items-center flex overflow-x-hidden '>

           <div className='-left-2 w-full bg-white text-gray-950 rounded-xl shadow-md p-10 text-center'>
   <div >
  <MdComputer className=" text-4xl text-orange-500 ml-5.5" />
</div>




                <h1 className='font-bold'>e-Governance
@UGC</h1>
           
            </div>
                  <Link>
           
              <div className='w-full bg-white text-gray-950 rounded-xl shadow-md p-10 text-center'>
                < TbHandFinger className="text-4xl text-orange-500 ml-5.5 pb-3.5 mr-3 <mb-1></mb-1> size-15" />
                <h1 className='font-bold'>Key
Initiatives</h1>
           
            </div>

              </Link>

              <Link>
              <div className='w-full bg-white text-gray-950 rounded-xl shadow-md p-10 text-center'>
                <RiGraduationCapFill  className="text-4xl text-orange-500 ml-5.5 pb-3.5 mr-3 <mb-1></mb-1> size-15" />


<h1 className='font-bold'>Student
Corner</h1>
            </div >

</Link>
<Link>
              <div className='w-full bg-white text-gray-950 rounded-xl shadow-md p-10 text-center'>
                <PiUsersThreeFill className="text-4xl text-orange-500 ml-5.5 pb-3.5 mr-3 <mb-1></mb-1> size-15" />
<h1 className='font-bold '>Faculty Corner/
Non-Teaching Staff</h1>

            </div>
            </Link>

            <Link>

              <div className='w-full bg-white text-gray-950 rounded-xl shadow-md p-10 text-center'>
<FaUniversity className="text-4xl text-orange-500 ml-5.5 pb-3.5 mr-3 <mb-1></mb-1> size-15"/>
<h1 className='font-bold'>Details of
HEIs</h1>
            </div>

            </Link>

            <Link >
            <div className='w-full bg-white text-gray-950 rounded-xl shadow-md p-10 text-center'>
              <FaEarthAmericas className="text-4xl text-orange-500 ml-5.5 pb-3.5 mr-3 <mb-1></mb-1> size-15"/>
               <h1 className='font-bold'>UGC
Green Initiatives</h1>

                
            </div>
            </Link>

            

        </div>

        <div>
          <UgcGreen/>
        </div>

        {/* <div>
          <Gridsdiv/>
        </div> */}

    </div>
   </div>
  )
}

export default Grids