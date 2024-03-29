import React from 'react'
import "../index.css"




const Hero = () => {
  return (
    <>
  

      <div className="flex lg:bg-car bg-no-repeat bg-auto bg-right lg:justify-between justify-center items-center text-center lg:text-left sm:h-[80vh] mx-auto max-w-[1340px] px-5 sm:-py-8 py-10">
        <div className="flex max-w-[600px] lg:w-[40%] gap-4 pr-5 flex-col">
          <h4 className="font-bold text-2xl">Plan your trip now</h4>
          <h2 className="text-6xl font-bold">Save <span className="text-[#fe4d30]">big</span> with our car rental</h2>
          <p className="text-[17px] text-gray-500">Rent the car of your dreams, Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <div>
          <button className="bg-[#fe4d30] h-[60px] font-bold text-white text-lg w-[170px] rounded-[3px] hover:text-[#fe4d30] transition duration-[0.5s] hover:bg-white hover:border hover:border-[#fe4d30] ">Book Ride</button>
          <button className="h-[60px] font-bold text-white bg-black  text-lg w-[170px] rounded-[3px] sm:ml-4 mr-2 ml-2 mt-5 text-center hover:bg-white hover:text-black hover:border-black hover:border transition duration-[0.5s]">Learn More</button>
          </div>
        </div>

      </div>



  
    </>
  )
}

export default Hero
