import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function TopHead() {
  return (
    <div className=''>
     <div className='text-sm text-red-50 bg-zinc-900 fixed top-0 left-0 w-full z-50 p-2.5
'>

  <ul className=' flex flex-wrap justify-center item gap-3 overflow-x-hidden '>
     <li>  <a> <FaHome className=''/></a></li>
     
       <li><a className='px-3 py-3'>| Skip to main content |</a></li>
      <li> <a className='px-3 py-3'>| Skip to Navigation |</a></li>
      <li> <a className='px-3 py-3'> | Screen Reader |</a></li>
      <li> <a className='px-3 py-3'>|  Text Size: A-  A  A+ </a></li>
      <li> <a className='px-3 py-3'> Hindi |</a></li>
    <li>  <a className='px-3 py-3'>| Contact Us |</a></li>
     <li>  <a className='px-3 py-3'>| FAQs |</a></li>
       
     <li> <a className='px-3 py-3'>| e-Prcurement |</a></li>
     <li> <a className='px-3 py-3'>| Tenders |</a></li>
     <li> <a className='px-3 py-3'>| Jobs |</a></li>
      
    <li> <a> <FaSearch /></a></li>
    </ul>
      </div>


     <div className='sm:mt-18 lg:mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10  lg:gap-20 py-4'>

        <div>
          <img className=''   src="https://www.ugc.gov.in/Content/images/Header/ugc_logo.png" alt="" />
        </div>
        <div className=''>
          <img  src="https://www.ugc.gov.in/Content/images/Header/G20_India_Logo.png" alt="" />
        </div>
        <div>
          <img src="https://www.ugc.gov.in/Content/images/Header/MHRD_logo.png" alt="" />
        </div>
      </div>
     {/* dropdown */}
      
      
    </div>
    
  )
}

export default TopHead

