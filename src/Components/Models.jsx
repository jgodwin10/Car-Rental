import React, { useState, useCallback } from 'react'
import { CAR_DATA } from '../CarData'
import Model from './Model';
import Benz from "../images/cars-big/benz.jpg";



const Models = () => {
  
  const [newCar, setNewCar] = useState([{
    name: "Mercedes-Benz GLK",
    price: "50",
    img: Benz,
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  }])
  

  const handleCarModel = useCallback((model) => {
    const Cars = CAR_DATA.filter((car) => car.model === model)
    setNewCar(Cars)
    
  }, [newCar])
  


  

 
  


  return (
  <div className='bg-white'>
    <div className=" max-w-[1340px] mx-auto sm:px-12 px-8 py-16"> 
      <div className="text-center md:w-[500px] mx-auto">
        <h2 className="text-[23px] font-semibold">Vehicle Models</h2>
        <h1 className="text-[43px] font-bold">Our rental fleet</h1>
        <p className="text-gray-400 font-medium">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
      </div>

       <div className="flex  justify-between lg:flex-row flex-col py-12">
        <ul className="lg:w-[22%] w-[100%] flex justify-between flex-col mb-10 lg:mb-0">
          <li  onClick={() => {
            handleCarModel("Audi")
          }} className="list1 bg-gray-300 pl-6 py-4 mb-3 font-semibold text-[20px] hover:bg-[#fe4d30] hover:text-white cursor-pointer transition duration-[0.3s]">Audi A1 S - Line</li>
          <li onClick={() => {
            handleCarModel("Golf 6")
          }} className="list2 pl-6 py-4 bg-gray-300 mb-3 font-semibold text-[20px] hover:bg-[#fe4d30] hover:text-white cursor-pointer transition duration-[0.3s]">VW Golf 6</li>
          <li onClick={() => {
            handleCarModel("Camry")
          }} className="list3 bg-gray-300 pl-6 py-4 mb-3 font-semibold text-[20px] hover:bg-[#fe4d30] hover:text-white cursor-pointer transition duration-[0.3s]">Toyota Camry</li>
          <li onClick={() => {
            handleCarModel("320")
          }} className="list4 bg-gray-300 pl-6 py-4 mb-3 font-semibold text-[20px] hover:bg-[#fe4d30] hover:text-white cursor-pointer transition duration-[0.3s]">BMW 320 ModernLine</li>
          <li onClick={() => {
            handleCarModel("Passat CC")
          }} className="list5 bg-gray-300 pl-6 py-4 font-semibold text-[20px] hover:bg-[#fe4d30] hover:text-white cursor-pointer transition duration-[0.3s]">VW Passat CC</li>
        </ul>

        {newCar.map(car => {
         return  <Model key={car.price} {...car} handleCarModel={handleCarModel}  />

        })
        } 

       </div>
     </div>
    </div>
  )
}

export default Models
