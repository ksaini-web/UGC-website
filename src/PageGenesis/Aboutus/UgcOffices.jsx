import React from 'react'
import AboutSidebar from './AboutSidebar';
import Abouthead from './Abouthead';
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function UgcOffices() {

  const offices = [

    {
      title:"University Grants Commission (UGC) - Head Office",

      adders:[
        "University Grants Commission (UGC)",
        "Bahadur Shah Zafar Marg",
        "New Delhi - 110002"
      ],

      phone:"011-23604127, 011-23604200"
    },

    {
      title:"University Grants Commission (UGC)",

      adders:[
        "University Grants Commission",
        "35- Ferozeshah Road",
        "New Delhi - 110001"
      ],

      phone:"011-23604650"
    },

    {
      title:"University Grants Commission (UGC) - NET Bureau",

      adders:[
        "University Grants Commission (UGC)",
        "NET Bureau",
        "South Campus of Delhi University",
        "Benito Juarez Marg",
        "New Delhi - 110021",
        "Near Dhola Kuan"
      ],

      phone:"011-24115426, 011-24112276"
    }

  ]


  return (

    <div>

      <Abouthead
        title="UGC-Offices"
        subtitle="UGC Offices"
      />

      <h1 className="font-bold text-3xl text-orange-600 mb-6">
        UGC Offices
      </h1>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {/* OFFICE GRID */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 m-5">

            {offices.map((office , index) => (

              <div
                key={index}
                className={`border p-6 bg-gray-50 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >

                <h1 className="font-semibold text-lg mb-3 pl-2 bg-gray-200 w-full">
                  {office.title}
                </h1>

                <ul className="space-y-1">

                  {office.adders.map((line,i)=>(
                    <li key={i} className="flex gap-2">
                      {i===0 && (
                        <FaLocationDot className="text-orange-500 mt-1"/>
                      )}
                      {line}
                    </li>
                  ))}

                  <li className="flex gap-2 pt-2">
                    <FaPhone className="text-orange-500"/>
                    {office.phone}
                  </li>

                </ul>

              </div>

            ))}

          </div>

        </div>

        {/* SIDEBAR */}
        <div>
          <AboutSidebar/>
        </div>

      </div>

    </div>

  )
}

export default UgcOffices