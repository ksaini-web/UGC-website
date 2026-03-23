import React from 'react'

function Marquee() {
  return (
    <div className='marquee font-medium text-xl text- text-orange-500' style={{whiteSpace:'nowrap', overflow:'', animation:"move 20s linear infinite"}}> Alert: Students/Parents can verify the authenticity of Higher Educational Institutions (HEIs) before taking admission (Please check under Main Menu Tab (HEIs))  | Invitation of applications from eligible colleges for conferment/extension of Autonomous status, colleges may apply on the portal at https://aucollege.ugc.ac.in </div>
  )
}

export default Marquee