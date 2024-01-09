import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
  <div className='bg-white'>
    <div className='grid grid-cols-1 text-center sm:text-left lg:grid-cols-4 max-w-[1340px] mx-auto pb-40 px-8 sm:grid-cols-2'>
      <div className='mt-24 sm:pr-8 '> 
        <h1 className='text-[22px] pb-4'><span className='font-bold'>CAR</span> Rental</h1>
        <p className='text-[18px] font-medium text-gray-400'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>

      </div>

      <div className='mt-24 sm:ml-12'>
        <h1 className='text-[25px] font-bold pb-4'>COMPANY</h1>
        <ul>
          <li className='pb-2 text-[17px]'><Link to="#home">New York</Link></li>
          <li className='pb-2 text-[17px]'><Link to="#home">Careers</Link></li>
          <li className='pb-2 text-[17px]'><Link to="#home" >Mobile</Link></li>
          <li className='pb-2 text-[17px]'><Link to="#home">Blog</Link></li>
          <li className='text-[17px]'><Link to="#home"></Link></li>
          <li className='text-[17px]'><Link to="#home">How we work</Link></li>
          
        </ul>
      </div>

      <div className='mt-24 lg:ml-12'>
        <h1 className='text-[25px] font-bold pb-4'>WORKING HOURS</h1>
        <p className='text-[17px] pb-2'>Mon - Fri: 9:00AM - 9:00PM</p>
        <p className='text-[17px] pb-2'>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>

      <div className='mt-24 sm:ml-12'>
        <h1  className='text-[25px] font-bold pb-4'>SUBSCRIPTION</h1>
        <p className='text-[17px]'>Subscribe your Email address for latest news & updates.</p>
        <form className='mt-4 flex flex-col' action="">
          <input className='outline-none bg-gray-200 px-12 text-[13px] py-[12px]' type="email" placeholder='Enter Email Address'/>
          <button className='px-12 py-[12px] text-white text-[15px] font-bold bg-[#fe4d30] mt-2'>Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Footer
