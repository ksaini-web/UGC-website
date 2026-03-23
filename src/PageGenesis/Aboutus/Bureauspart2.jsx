import React from 'react'
import Bureauspart2img1 from '../../assets/Bureauspart2img1.jpg' 
import Bureauspart2img2 from '../../assets/Bureauspart2img2.jpg' 
import Bureauspart2img3 from '../../assets/Bureauspart2img3.jpg' 
import Bureauspart2img4 from '../../assets/Bureauspart2img4.jpg' 
import Bureauspart2img5 from '../../assets/Bureauspart2img5.jpg' 
import Bureauspart2img6 from '../../assets/Bureauspart2img6.jpg' 
import Bureauspart2img7 from '../../assets/Bureauspart2img7.jpg' 
import Bureauspart2img8 from '../../assets/Bureauspart2img8.jpg' 
import Bureauspart2img9 from '../../assets/Bureauspart2img9.jpg' 
import Bureauspart2img10 from '../../assets/Bureauspart2img10.jpg' 

import { FaArrowCircleRight } from "react-icons/fa";



function Bureauspart2() {

    const BureauspartData = [


        {name:"Ms. Monika",
            image:Bureauspart2img1 ,

            roles:[

                " Deemed to be University (DU) view",
                "Deemed to be University Funded view",
                 "Industry Connect view",
                 "Innovative view",
                "Public Grievances view",
                "Research and Development Cell view",
                "RTI (Right To Information Act) view",

            ]
        },

        {
            name:"Dr. Shalini",
            image:Bureauspart2img2,
            roles:[
                " Chairs view",
                 " Equivalence Cell view"
            ]
        },

        {
            name:"Mr. Vinod Singh Yadav",
            image:Bureauspart2img3,

            roles:[
                
                
              "Computer and Networking Cell view",
                "E-Governance view",
                "Human Rights Value Education (HRVE) view",
                "ICT view",
                "Institutions of Eminence view",
                 "PARAMARSH view",
                "Pradhan Mantri Uchchatar Shiksha Abhiyan (PM-USHA) view",
                "UGC Website view",


            ]
        },

         {
            name:"Mr. Jitendra",
            image:Bureauspart2img4,

            roles:[
                
                
              
            "CARE Journals view",
            "Finance view",
            "Integrated Finance Division view",


            ]
        },

        {
            name:"Mrs. Megha Kaushik",
            image:Bureauspart2img5,

            roles:[
                
                
              
                   "Basic Science Research (BSR) view",
                  "Selection and Awards-I (SA-I ) view",
                      "Selection and Awards-II (SA-II) view",
                   "Selection and Awards-III (SA-III) view",
                    "Selection and Awards-IV (SA-IV) view",
                   "STRIDE view",

            ]
        },

        
        {
            name:"Dr. Smita Bidani",
            image:Bureauspart2img6,

            roles:[
                
                
              
                "Coordination Policy and Planning (CPP-II) view",
                "e-Samadhaan view",
                 "National Eligibility Test (NET) view",

            ]
        },

           {
            name:"Dr. Mriganka Sekhar Sarma",
            image:Bureauspart2img7,

            roles:[
                
                
              
                 " Central University (CU) view"

            ]
        },

        
           {
            name:"Ms. Neethu S. Thulaseedharan",
            image:Bureauspart2img8,

            roles:[
                
                
              
              

            ]
        },
        
           {
            name:"Dr. Nikhil Kumar",
            image:Bureauspart2img9,

            roles:[
                "Educational Multimedia Research Center (EMMRCs) view",
                      "Inter University Center (IUC) view",
                "Joint Cadre Review Cell (JCRC) view",
               "National Facilities Center (NFCs) view",
               "Parliament view",
               "Pay Scale view",
                
                
              
              

            ]
        },



    ]

  return (




    <div>

        <div>
          {/* Heading */}
      <div className="text-5xl text-orange-500 text-start font-bold p-5">
        <h1 className='ml-12'>Deputy Secretary</h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 p-10 m-10 gap-10" >

    
        {BureauspartData.map((person,index) => (
           <div key={index}
            className="flex flex-col h-[345px] overflow-auto pt-3 rounded-2xl shadow-lg bg-white">


                 <h1 className="p-3 text-xl font-serif bg-orange-500 text-white h-12 w-full"> {person.name}</h1>

                 <div className="p-4">
              <img
                className="h-35 rounded-xl mt-2 mb-2"
                src={person.image}
                alt={person.name}
              />

              <h4 className="text-xl underline decoration-orange-500 underline-offset-6 font-bold "
              >
               Deputy Secretary
              </h4>

              <ul>
                {person.roles.map((role,i)=>
                (
                    <li key={i} className="p-1 flex items-center gap-2">
                                        <FaArrowCircleRight className="text-orange-600" />
                                        {role} view
                                      </li>

                ))}
              </ul>

            </div>
            </div>))}
            </div>

        

      </div>


        </div>

   
  );
}

export default Bureauspart2