import React, { useState, useCallback } from 'react'
import { IconCar, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import CarModel from './CarModel';
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";






const Car = () => {
   const [car, setCar] = useState("");
   const [pick, setPick] = useState("");
   const [drop, setDrop] = useState("");
   const [pickdate, setPickdate] = useState("");
   const [dropdate, setDropdate] = useState("");
   const [carImg, setCarImg] = useState(" ");
   const [carModel, setCarModel] = useState(false);








  const handleCar = useCallback((e) => {
    setCar(e.target.value);
    setCarImg(e.target.value);
  }, [car])
  
  
  
 

  const handlePick = (e) => {
    setPick(e.target.value)
  }

  const handleDrop = (e) => {
    setDrop(e.target.value)
  }

  const handlePickDate = e => {
    setPickdate(e.target.value)
  }

  const handleDropdate = e => {
    setDropdate(e.target.value)
  }
  
  let carUrl = "";

  switch (carImg) {
    case "Audi A1 S-Line": 
      carUrl = CarAudi;
      break;
    case "VW Golf 6":
      carUrl = CarGolf;
      break;
    case "Toyota Camry":
      carUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      carUrl = CarBmw;
       break;
    case "Mercedes-Benz GLK":
      carUrl = CarMercedes;
      break;
    case "VW Passat CC":
      carUrl = CarPassat;
      break
  }


  
  const handleForm = () => {
    
    const Error = document.querySelector('.danger');
    const Sucess = document.querySelector(".success");


    if (
      car === "" ||
      pick === "" ||
      drop === "" ||
      pickdate === "" ||
      dropdate === ""
      ) {
        Error.style.display = 'flex';
        Sucess.style.display = "none"
      } else  {
        setCarModel(!carModel);
        Error.style.display = "none";
      }
    }

    const handleModel = () => {
      setCarModel(!carModel);
      const success = document.querySelector(".success");
    success.style.display = "flex"
  }

  const hanldeFormModel = () => {
    setCarModel(!carModel)
  }
    







  return (
    <div className="mx-auto max-w-[1340px] pb-20">
      <div className="bg-white bg-book shadow-2xl rounded-[5px] mx-[25px] py-16 px-12">
        <h1 className="font-extrabold text-[25px]">Book a car</h1>

        <p className="danger w-[99%] justify-between bg-red-200 py-3 rounded-lg px-4 mt-4 hidden">
          All fields required <IconX />
        </p>

        <p className="success w-[99%] justify-between bg-green-200 py-3 rounded-lg px-4 mt-4 hidden">
          Check your email to confirm an order.
          <IconX />
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 mr-4">
          <div className="pt-8">
            <label
              className="flex items-center pb-2 font-semibold text-[16px]"
              htmlFor="car"
            >
              <IconCar className="mr-2" /> Select Your Car Type
              <span className="text-[#fe4d30] "> *</span>
            </label>

            <select
              className="border rounded-md py-3 w-[100%]  outline-none px-4 text-gray-400 font-medium"
              name="car"
              id="car"
              value={car}
              onChange={handleCar}
            >
              <option value="">Select Your Car Type </option>
              <option>Audi A1 S-Line</option>
              <option>VW Golf 6</option>
              <option>Toyota Camry</option>
              <option>BMW 320 ModernLine</option>
              <option>Mercedes-Benz GLK</option>
              <option>VW Passat CC</option>
            </select>
          </div>

          <div className="pt-8">
            <label
              className="flex items-center pb-2 font-semibold text-[16px]"
              htmlFor="pick-up"
            >
              <IconMapPinFilled className="mr-2" />
              Pick-up <span className="text-[#fe4d30] ">*</span>
            </label>

            <select
              className="border rounded-md py-3 w-[100%] outline-none px-4 text-gray-400 font-medium"
              name="pick-up"
              id="pick-up"
              value={pick}
              onChange={handlePick}
            >
              <option value="Select pick up location">
                Select pick up location
              </option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Benin">Benin</option>
              <option value="Abeokuta">Abeokuta</option>
              <option value="Port-Hacourt">Port-Hacourt</option>
            </select>
          </div>

          <div className="pt-8">
            <label
              className="flex items-center pb-2 font-semibold text-[16px]"
              htmlFor="pick-up"
            >
              <IconMapPinFilled className="mr-2" />
              Drop-Off <span className="text-[#fe4d30] ">*</span>
            </label>

            <select
              className="border rounded-md py-3 w-[100%] px-4 outline-none text-gray-400 font-medium"
              name="drop-off"
              id="drop-off"
              value={drop}
              onChange={handleDrop}
            >
              <option value="Select pick up location">
                Select drop off location
              </option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Benin">Benin</option>
              <option value="Abeokuta">Abeokuta</option>
              <option value="Port-Hacourt">Port-Hacourt</option>
            </select>
          </div>

          <div className="pt-8">
            <label
              className="flex items-center pb-2 font-semibold text-[16px]"
              htmlFor="pick-up-date"
            >
              <IconCalendarEvent className="mr-2" /> Pick-up Date{" "}
              <span className="text-[#fe4d30] ">*</span>
            </label>
            <input
              className="border rounded-md py-3 w-[100%] px-4 outline-none text-gray-400 font-medium"
              type="date"
              name="date"
              id="date"
              value={pickdate}
              onChange={handlePickDate}
            />
          </div>

          <div className="pt-8">
            <label
              className="flex items-center pb-2 font-semibold text-[16px]"
              htmlFor="pick-up-date"
            >
              <IconCalendarEvent className="mr-2" /> Drop-off Date{" "}
              <span className="text-[#fe4d30] ">*</span>
            </label>
            <input
              className="flex justify-between border rounded-md py-3 w-[100%] px-4 outline-none text-gray-400 font-medium cursor-pointer"
              type="date"
              name="date"
              id="date"
              value={dropdate}
              onChange={handleDropdate}
            />
          </div>

          <div className="pt-16">
            <button
              onClick={handleForm}
              className="w-[100%] text-[18px] font-semibold py-3 text-white hover:text-[#fe4d30] transition duration-[0.5s] hover:bg-white hover:border hover:border-[#fe4d30] bg-[#fe4d30] rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {carModel && (
        <CarModel
          pickdate={pickdate}
          dropdate={dropdate}
          drop={drop}
          pick={pick}
          car={car}
          carUrl={carUrl}
          handleModel={handleModel}
          hanldeFormModel={hanldeFormModel}
        />
      )}
    </div>
  );
}

export default Car
