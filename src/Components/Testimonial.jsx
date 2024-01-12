import React from 'react'
import { motion } from "framer-motion"
import Icon1 from "/src/images/testimonials/pfp1.jpg";
import Icon2 from "/src/images/testimonials/pfp2.jpg";

const Testimonial = () => {
  return (
    <div className="text-center max-w-[1100px] mx-auto  py-28">
    
    <div className="w-[80%] mx-auto ">
      <h2 className="text-[23px] font-bold">Reviewed by People</h2>
      <h1 className="font-bold text-[40px]">Client's Testimonials</h1>
      <p className="text-gray-400 font-medium">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experience with you.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 mt-16 w-[100%] md:w-[80%] px-8 mx-auto lg:w-auto">

      <div className="bg-[rgb(255,255,255)] shadow-lg rounded-md col-span-1">
        <p className="pt-12 px-10 text-[23px] text-left font-semibold">"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
        <div className="flex justify-start items-center p-8 pb-12">
          <img width={70} className="rounded-full" src={Icon1} alt="" />
          <div className="text-left pl-4">
          <h3 className="font-bold text-[20px]">Parry Hotter</h3>
          <p className="font-medium">Belgrade</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md ">
        <p className="pt-12 px-10 text-[25px] text-left font-semibold">"The car was in great condition and made our trip even better. Highly recommend for this car rental website"</p>
        <div className="flex justify-start items-center p-8 pb-12">
          <img width={60} className="rounded-full" src={Icon2} alt="" />
          <div className="text-left pl-4">
          <h3 className="font-bold text-[20px]">Ron Rizzly</h3>
          <p>Novi Sad</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial
