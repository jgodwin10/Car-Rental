import React from 'react'
import Icon1 from "/src/images/download/googleapp.svg";
import Icon2 from "/src/images/download/appstore.svg";

const ContactUs = () => {
  return (
  <div className="bg-contact bg-no-repeat bg-auto max-w-[1450px] lg:ml-auto px-8 py-24">
      
    <div className="max-w-[600px] text-center lg:text-left lg:mx-0 mx-auto">

        <h2 className="text-[44px] font-bold pb-8">Download our app to get most out of it</h2>
        <p className="text-gray-400 font-medium pb-8">Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
        <div className="max-w-[430px] flex justify-between mx-auto lg:mx-0 flex-col items-center h-[140px] sm:h-auto md:items-start sm:flex-row">

        <img className="cursor-pointer" src={Icon1} width={200} alt="" />
        <img className="cursor-pointer" src={Icon2} width={200}  alt="" />
        </div>
     </div>
  </div>
  
  )
}

export default ContactUs
