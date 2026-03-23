import React from 'react'
import { FaArrowAltCircleRight, FaCarrot } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function AboutSidebar() {

    const aboutItems=[
    
        {title:"Geneise",path:"/genesis"},
        {title:"Mandate",path:"/mandate"},
        {title:"UGC ACT 1956" , path:"/ugcact1956"},
        {title:"Logo" ,path:"/Logo"},
        {title:"Bureaus",path:"/Bureaus"},
        {title:"UGC Offices", path:"/UGCOffices"}
    ];

    const location = useLocation();

  return (
    <div className="bg-gray-100 p-6 h-fit shadow-sm size-80">
        <h2 className='text-lg font-bold border-b-4  border-orange-500 pb-2 mb-4'>About</h2>

        <ul className='divide-y divide-gray-200 text-gray-700'>
        {
          aboutItems.map((item,index)=>(
            <li key={index}>
                <Link to={item.path}
                className={`flex items-center gap-2 py-2 hover:text-orange-600  cursor-pointer ${location.pathname === item.path ? "text-orange-600 font-semibold":""}`}
                >
                    <FaArrowAltCircleRight className='text-orange-600'/>
                    {item.title}
                    </Link> 
            </li>
            
          )) 
           
        }</ul>

    </div>
  )
}

export default AboutSidebar