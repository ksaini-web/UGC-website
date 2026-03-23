import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

import genesis1 from "../../assets/genesisimag1.webp";

import Bureausimg1 from "../../assets/Bureausimg1.jpg";
import Bureausimg2 from "../../assets/Bureausimg2.jpg";
import Bureausimg3 from "../../assets/Bureausimg3.jpg";
import Bureausimg4 from "../../assets/Bureausimg4.jpg";
import Bureausimg5 from "../../assets/Bureausimg5.jpg";
import Bureausimg6 from "../../assets/Bureausimg6.jpg";
import Bureausimg7 from "../../assets/Bureausimg7.jpg";
import Bureausimg8 from "../../assets/Bureausimg8.jpg";
import Bureausimg9 from "../../assets/Bureausimg9.jpg";
import Bureausimg10 from "../../assets/Bureausimg10jpg.jpg"; // rename if possible
import Bureausimg11 from "../../assets/Bureausimg11.jpg";
import Bureausimg13 from "../../assets/Bureausimg13.jpg";
import Bureausimg14 from "../../assets/Bureausimg14.jpg";
import Bureausimg15 from "../../assets/Bureausimg15.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Bureauspart2 from "./Bureauspart2.jsx"

function Bureaus() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  // Dynamic Data
  const bureausData = [
    {
      name: "Dr.(Mrs.) Archana Thakur",
      image: Bureausimg1,
      roles: [
        "Joint Secretary",
        "Institutional Development Plan (IDP)",
        "International Cooperation (IC)",
        "Promotion of Indian Languages",
        "Science and Research",
        "Yoga"
      ]
    },
    {
      name: "Dr. G.S. Chauhan",
      image: Bureausimg2,
      roles: [
        "ASIHSS (Assistance for Strengthening of the Infrastructure of the Humanities and Social Sciences)",
        " ASSIST (Assistance for Strengthening of Infrastructure for Science and Technology) view",
        " Career Oriented Courses (COC) view",
        " Coaching Classes for Entry into services for SC,ST,OBC (NCL) and Minority community Students view",
        " Computer and Technology view",
        "Higher Education for Persons with Special Needs (HEPSN) view",
        "Innovative view",
        " NFE (Non Formal Education) view",

      ]
    },
    {
      name: "Dr. G.S. Chauhan",
      image: Bureausimg3,
      roles: [
 "ASIHSS (Assistance for Strengthening of the Infrastructure of the Humanities and Social Sciences) view",
 "ASSIST (Assistance for Strengthening of Infrastructure for Science and Technology) view",
 "Career Oriented Courses (COC) view",
 "Coaching Classes for Entry into services for SC,ST,OBC (NCL) and Minority community Students view",
 "Computer and Technology view",
 "Higher Education for Persons with Special Needs (HEPSN) view",
 "Innovative view",
 "NFE (Non Formal Education) view",
 "Raj Bhasha view",
 "Receipt and Issue (UGC Office at 35 F.S.Road ) view",
 "Remedial Coaching for SC, ST, OBC (non-creamy layer) and Minority Community Students view",
 "SC/ST/OBC, Minorities, PWD along with their Commission and Parliamentary Standing Committee Matters view",
 "TEPSE view",
      ]
    },
    {
      name: "Dr. Sunita Siwach",
      image: Bureausimg4,
      roles: [
           
"Anti Ragging Cell view",
 "Common University Entrance Test (CUET) view",
 "Fee Nivaran (Refund of Fee and Non-Retention of Academic Certificates) view",
 "Internal Complaint Committee (ICC) view",
 "Sports view",
 "State University view",
      ]
    },
    {
      name: "Dr. Sunita Siwach",
      image: Bureausimg5,
      roles: [
        "Joint Secretary",
        "Digital Education",
        "E-Governance"
      ]
    },
    {
      name: "Dr. R.Manoj Kumar",
      image: Bureausimg6,
      roles: [
        " Autonomous College view"
      ]
    },
    {
      name: "Mr. Deepak Vats",
      image: Bureausimg7,
      roles: [
 "Basic Science Research (BSR) view",
"Deemed to be University (DU) view",
 "National Eligibility Test (NET) view",
 "UGC Scholarship Fellowship Research Grants for Teachers at a Glance view"
      ]
    },
    {
      name: "Dr. Madhukar Maruti Waware",
      image: Bureausimg8,
      roles: [
       
 "Computer and Networking Cell view",
 "Distance Education Bureau (ODL and Online) view",
 "E-Governance view",
 "Human Rights Value Education (HRVE) view",
 "ICT view",
 "UGC Website view",
      ]
    },
    {
      name: "Colonel Vipin Kaushal, SM",
      image: Bureausimg9,
      roles: [
 "Administration-I/A-B view",
 "Administration-I/C view",
 "Colleges With Potential for Excellence (CPE) view",
 "General Admin view",
 "Meeting Cell view",
 "MRP (Major Research Projects) (SR) view",
 "MRP (Major Research Projects)(HRP) view",
 "Private University view",
 "Receipt and Issue (UGC Main Office) view",
 "Research and Development Cell view",
 "SAP (Special Assistance Program) view",
 "TG (Travel Grant) view",
 "UGC Travel Desk view",
 "Universities With Potential for Excellence (UPE) view",
      ]
    },
    {
      name: "Dr. Mantha Srinivasu",
      image: Bureausimg10,
      roles: [
 "Annual Report view",
 "Indian Knowledge System view",
 "Publication view",
 "Quality Improvement Programme view",
      ]
    },
    {
      name: "Dr. Ashima Mangla",
      image: Bureausimg11,
      roles: [
 "Centre for Data Analytics and Research view",
 "Establishment of Centre for Study of Social Inclusion in Universities (CSSIU) view",
 "I and S (Information and Statistics) view",
 "Task Force (Gender Sensitization) view",
 "Women’s Studies view",
      ]
    },
    {
      name: "Dr. Diksha Rajput",
      image: Bureausimg13,
      roles: [
        "Capacity Building Cell (CBC) view",
 "E-Content view",
 "Environment Education view",
 "Life Skills view",
 "MOOCs view",
 "SWAYAM view",
 "Unnat Bharat Abhiyan view",
      ]
    },
    {
      name: "Dr. Amol M. Andhare",
      image: Bureausimg14,
      roles: [
        "College Development Bureau (CDB) view",
        " Internship view",
        
      ]
    },
    {
      name: "Dr. Gopi Chand Merugu",
      image: Bureausimg15,
      roles: [
         "Delhi Colleges (DC) view",
 "Funded Colleges (DC) (Delhi, BHU etc.) view",
 "Inclusion of Colleges under Section 2(f) and 12B view",
 "Inclusion of Universities under Section 2(f) and 12B view",
      ]
    }
  ];

  return (
    <div className="w-full relative mb-0">

      {/* Banner */}
      <Slider {...settings}>
        <div className="relative">
          <img className="h-44 w-full block" src={genesis1} alt="banner" />
          <div className="absolute inset-0 flex justify-center items-center flex-col">
            <h1 className="text-sm font-extrabold text-black">
              <Link to="/">Home</Link> / 
              <Link to="/Bureaus"> About Us </Link> / 
              <Link to="/Bureaus"> UGC Bureaus</Link>
            </h1>
            <h1 className="text-4xl font-extrabold text-white">
              Bureaus
            </h1>
          </div>
        </div>
      </Slider>

      {/* Heading */}
      <div className="text-5xl text-orange-500 text-start font-bold p-5">
        <h1 className='ml-6'>Joint Secretaries</h1>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 grid-cols-1 p-10 m-10 gap-10">

        {bureausData.map((person, index) => (
          <div
            key={index}
            className="flex flex-col h-[345px] overflow-auto pt-3 rounded-2xl shadow-lg bg-white"
          >
            <h1 className="p-3 text-xl font-serif bg-orange-500 text-white h-12 w-full">
              {person.name}
            </h1>

            <div className="p-4">
              <img
                className="h-35 rounded-xl mt-2 mb-2"
                src={person.image}
                alt={person.name}
              />

              <h4 className="text-xl underline decoration-orange-500 underline-offset-6 font-bold "
              >
                Joint Secretary
              </h4>

              <ul>
                {person.roles.map((role, i) => (
                  <li key={i} className="p-1 flex items-center gap-2">
                    <FaArrowCircleRight className="text-orange-600" />
                    {role} view
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>

      <Bureauspart2/>
    </div>
  );
}

export default Bureaus;