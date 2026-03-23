import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdList } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaBook } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function DropDown() {
  return (<div className=' w-full bg-orange-700 '>
    <div className='font-semibold py-3 justify-center flex-wrap flex items-center gap-9 bg-orange-500 w-full'>
      

      <ul>
        <li className="group relative inline-block cursor-pointer j">
           <a className=' flex items-center gap-2'> <FaHome className=''/>
            <span className='font-bold'>Home</span></a>
          

          <ul className="invisible group-hover:invisible absolute left-0 mt-2 bg-gray-600 shadow-md p-2">
          
          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
          <div className='flex items-center gap-1' href="">
            <i><AiFillInfoCircle /></i>
            <span  className='font-bold'>
               About Us
            </span>
            <i> <FaAngleDown /></i>
          </div>



          <ul className="    absolute left-0 top-full
    bg-gray-100 shadow-md w-64 z-50
    opacity-0 scale-y-0 origin-top
    transition-all duration-300 ease-in-out
    group-hover:opacity-100 group-hover:scale-y-100">
            <li className='flex items-center gap-2 px-4 py-3 border-b'>
              <FaLongArrowAltRight />
             <Link to='/genesis'> Genesis </Link>
              </li>
            <li className='flex items-center gap-2 px-4 py-3 border-b text-align:left'> <FaLongArrowAltRight /><Link to="/mandate">Mandate</Link></li>
            <li className='flex items-center gap-2 px-4 py-3 border-b'><FaLongArrowAltRight /><Link to="/ugcact1956">UGC Act</Link></li>
            <li className='flex items-center gap-2 px-4 py-3 border-b'><FaLongArrowAltRight /><Link to="/logo">Logo</Link></li>
            <li className='flex items-center gap-2 px-4 py-3 border-b'><FaLongArrowAltRight /><a href="https://www.ugc.gov.in/pdfnews/UGC%20Organisational%20Chart.pdf">UGC Organisational Chart</a></li>
            <li className='flex items-center gap-2 px-4 py-3 border-b'><FaLongArrowAltRight /><Link to="/bureaus">UGC Bureaus</Link></li>
            <li className='flex items-center gap-2 px-4 py-3 border-b'><FaLongArrowAltRight /><Link to="/ugcoffices">UGC Offices</Link></li>
            <li className='flex items-center gap-2 px-4 py-3 border-b'><FaLongArrowAltRight /><Link to="/inter-university-centres">Inter University Centres</Link></li>
            <li className='flex items-center gap-2 px-4 py-3 border-b'><FaLongArrowAltRight />National Facilities</li>
            
            <li className='flex items-center gap-2 px-4 py-3 '><FaLongArrowAltRight />Webite Security Audit Certificate</li>
          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
          <a className='flex items-center gap-1' >
            <i><FaBuilding /></i>
          <span className='font-bold'>Organization</span>
           <i> <FaAngleDown /></i>
           </a>

          <ul className ="invisible group-hover:visible absolute left-0 mt-2 bg-gray-100 shadow-md p-2 transition-all duration-300 ease-in-out justify-items-start w-[1000px] font-normal position:absolute z-10">
            <li className='grid grid-cols-3 gap-12 p-8 text-left'>
              <ul className=''>
              <li className='-left-96 flex items-center gap-2 px-0 py-3 mb-4 ml-0 text-orange-500 font-normal text-xl'>Commission </li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Commission Members</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Commission Decisions</li>
           </ul>
           

            
              <ul>
              <li className='flex items-center gap-2 px-4 py-3  text-orange-500 font-normal text-xl'>Administration</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Chairman</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Vice Chairman</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Secretary</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Financial Advisor</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Additional Secretaries</li>
           </ul>
            

            
              <ul>
             
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Joint Secretaries</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Deputy Secrtaries</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Education Officers</li>
              <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Under Secretaries</li>
              </ul>
   {/* <ul className='border-b'></ul>          */}
<div className='flex justify-start  items-start 
 w-full'>
  <div className='text-left'> Former Chairpersons | Former Vice - Chairpersons | Former Secrataries</div>
</div>

 </li >
          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
         <a className='flex items-center gap-1'>
          <i>
          <RiPencilFill />
          </i>
          <span  className='font-bold'>Key Initiatives</span>
         </a>

          <ul className="invisible group-hover:invisible absolute left-0 mt-2 bg-gray-100 shadow-md p-2 transition-all duration-300 ease-in-out justify-center items-center">
            
          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
         <a className='flex items-center gap-1'>
          <i><AiFillInfoCircle/></i>
          <span  className='font-bold'>Guidelines</span>

         </a>

          <ul className="invisible group-hover:invisible absolute  left-0 mt-2 bg-gray-100 shadow-md p-2">
            
          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
          <a className='flex items-center gap-1'>
          <i><MdList /></i>
          <span  className='font-bold'>Regulations</span>

         </a>

          <ul className="invisible group-hover:invisible absolute left-0 mt-2 bg-gray-100 shadow-md p-2">
            

          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
          <a className='flex items-center gap-1'>
       <i><FaBuilding /></i>
          <span  className='font-bold'>HELs</span>

           <i> <FaAngleDown /></i>

         </a>

          <ul className="invisible group-hover:visible absolute -left-180 mt-5 bg-gray-100 shadow-md p-2 justify-items-start w-[1200px] z-10">
           <li className='grid grid-cols-4 gap-4 text-leftt'>
             
           <ul className=''>
            <li className='flex items-center gap-2 px-4 py-3  text-orange-500 font-normal text-xl'>Universities</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />State Universities</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Deemed to be Universities</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />State private Universities</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Fack Universities</li>
            
            </ul>

             <ul>
              <li  className='flex items-center gap-2 px-4 py-3  text-orange-500 font-normal text-xl'>Collages</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Colleges(12)(B)/2(f))</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Autonomous Colleges</li>
           
            </ul>

          <ul>
              <li  className='flex items-center gap-2 px-4 py-3  text-orange-500 font-normal text-xl'>Institution</li>
            <li  className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Institutions of National</li>
            <li  className='flex items-center gap-2 px-4 py-3'>Importance</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />Institutions of Eminence</li>
           
            </ul>

             <ul>
            <li className='flex items-center gap-2 px-4 py-3  text-orange-500 font-normal text-xl'>HELs Violating Regulations</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />List of Foke Universities</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />List of HELs not Following Ph.D </li>
            <li className='flex items-center gap-2 px-4 py-3'>Regulation</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />List of HEls not appointed</li>
            <li className='flex items-center gap-2 px-4 py-3'>Ombudsperson</li>
            <li className='flex items-center gap-2 px-4 py-3'><FaLongArrowAltRight />List of Defaulter State (Private)</li>
            <li className='flex items-center gap-2 px-4 py-3'>Universities</li>
            </ul>
            </li>
          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
             <a className='flex items-center gap-1'>
       <i><LiaUniversitySolid /></i>
          <span  className='font-bold'>FHEI List</span>
          

         </a>


          <ul className="invisible group-hover: absolute left-0 mt-2 bg-gray-100 shadow-md p-2" z-10>
            <li>HR</li>
            <li>HP</li>
            <li>UK</li>
            <li>BR</li>
            <li>MP</li>
            <li>GJ</li>
            <li>RJ</li>
            <li>UP</li>
            <li>CG</li>
          </ul>
        </li>
      </ul>
       <ul>
        <li className="group relative inline-block cursor-pointer">
          
            <a className='flex items-center gap-1'>
       <i><FaBook /></i>
          <span  className='font-bold'>e-Publiction</span>

           <i> <FaAngleDown /></i>

         </a>

          <ul className="invisible group-hover:visible absolute left-0 mt-2 bg-gray-100 shadow-md p-2 text-left z-10">
            <li className='flex items-center gap-2 px-4 py-3 border-b'>
              <FaLongArrowAltRight />e-Book</li>
            <li className='flex items-center gap-2 px-4 py-3 border-b text-align:left'> <FaLongArrowAltRight />Annual Reports/Annual Accounts</li>
            <li className='flex items-center gap-2 px-4 py-3 '><FaLongArrowAltRight />Press Release</li>
            
          </ul>
        </li>
      </ul>
            
       
      
    </div>
    </div>
  )
}

export default DropDown
