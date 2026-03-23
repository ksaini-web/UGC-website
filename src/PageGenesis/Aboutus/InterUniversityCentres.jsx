

import React from 'react'
import { Link } from 'react-router-dom'
import Abouthead from './Abouthead';
import InterUniversity1 from "../../assets/InterUniversity1.jpg"
import InterUniversity2 from "../../assets/InterUniversity2.jpg"
import InterUniversity3 from "../../assets/InterUniversity3.jpg"
import InterUniversity4 from "../../assets/InterUniversity4.jpg"
import InterUniversity5 from "../../assets/InterUniversity5.jpg"
import InterUniversity6 from "../../assets/InterUniversity6.jpg"
import InterUniversity7 from "../../assets/InterUniversity7.jpg"
import InterUniversity8 from "../../assets/InterUniversity8.png"
import AboutSidebar from './AboutSidebar';


function InterUniversityCentres() {

    const Inter = [
        {
            Institution:[
                "The Inter University Accelerator Centre (IUAC)",
                "Inter University Centre For Astronomy and Astrophysics (IUCAA)",
                "UGC-DAE Consortium for Scientific Research",
                "Consortium for Educational Communication (CEC)",
                "Information and Library Network Centre (INFLIBNET)",
                "National Assessment and Accreditation Council (NAAC)",
                "Inter University Centre for Teacher Education (IUCTE)",
                "Inter University Centre for Yogic Sciences (IUC-YS)"

            ],

            image:[

                InterUniversity1,
                InterUniversity2,
                InterUniversity3,
                InterUniversity4,
                InterUniversity5,
                InterUniversity6,
                InterUniversity7,
                InterUniversity8,

            ],

             	Address :[
                    "Post Box No. 10502, Aruna Asaf Ali Marg, New Delhi-110 067",
                    "Post Bag 4, Ganeshkhind, Pune - 411007",
                    "University Campus, Khandwa Road, Indore - 452017 (M.P.)",
                    "Aruna Asaf Ali Marg, New Delhi - 110067",
                    "Infocity, Gandhinagar, Gujarat - 382007",
                    "P.O. Box No. 1075, Nagarbhavi, Bengaluru - 560072",
                    "Banaras Hindu University, Varanasi",
                    "Camp Office at Inter-University Accelerator Centre, Aruna Asaf Ali Marg, New Delhi-110067",
                ]
        }
    ]
  return (
    <div>

        <div>    <Abouthead
        title="Inter University Centres"
        subtitle="Inter University Centres"
      /></div>

      <div className='lg:flex justify-center '>
      
     

      <div className='lg:grid grid-cols-3  gap-6 m-3.5'>

        {
          Inter[0].image.map((img,i)=>(

            <div key={i} className='shadow-lg rounded-xl p-3 text-center flex flex-col items-center' >

              <img className =' h-50'src={img}
              alt='img'/>

              <h1>{Inter[0].Institution[i]}</h1>

              <p>
                {Inter[0].Address[i]}
              </p>

            </div>
            
          ))

        }

      </div>
       <div>
         <AboutSidebar/>
      </div>
      </div>
    
      
       
     
    </div>
  )
}

export default InterUniversityCentres