import React from 'react'
import { IconInfoCircleFilled, IconX } from "@tabler/icons-react"
import { IconMapPinFilled } from "@tabler/icons-react"





const CarModel = ({ pickdate, dropdate, car, pick, drop, carUrl, handleModel, hanldeFormModel }) => {

  
  return (
    <div className="fixed overflow-hidden w-[100%] h-[100%] bg-[#00000037] top-0 right-0 z-[99999999999]">
      <div className="overflow-y-scroll h-[100vh] max-w-[800px]  bg-neutral-200 md:translate-y-8   mx-auto top-0 z-[99999999999999] pb-32">
        <h2 className="p-4 bg-[#fe4d30] flex justify-between font-extrabold text-[22px] text-white">
          COMPLETE RESERVATION <IconX onClick={hanldeFormModel} />{" "}
        </h2>

        <div className="bg-[#fe4b302e] p-8">
          <h2 className="flex font-semibold md:text-xl text-lg text-[#fe4d30]">
            <IconInfoCircleFilled className="mr-4" />
            Upon completing this reservation enquiry, you will receive:
          </h2>
          <p className="md:text-[19px] text-neutral-500 font-semibold pt-4">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        <div className="bg-white grid sm:grid-cols-2 grid-cols-1 text-center sm:text-left">
          <div className="p-8">
            <h1 className="text-[#fe4d30] font-bold text-[18px] ">
              Location & Date
            </h1>

            <div className="flex flex-col sm:items-start items-center">
              <p className="pt-6 flex text-[17px] font-semibold ">
                <IconMapPinFilled className="mr-2" />
                Pick-up Date & Time
              </p>
              <p className="text-[18px] text-gray-400 font-medium pt-2 ml-8">
                {pickdate} /{" "}
                <input
                  className="outline-none border border-black w-[80px] h-[24px] text-[13px]"
                  type="time"
                  name=""
                  id=""
                />
              </p>
            </div>

            <div className="flex flex-col sm:items-start items-center">
              <p className="pt-8 flex text-[17px] font-semibold ">
                <IconMapPinFilled className="mr-2" />
                Drop-off Date & Time
              </p>
              <p className="text-[18px] text-gray-400 font-medium pt-2 ml-8">
                {dropdate} /{" "}
                <input
                  className="outline-none border border-black w-[80px] h-[24px] text-[13px]"
                  type="time"
                  name=""
                  id=""
                />
              </p>
            </div>
            <div className="flex flex-col sm:items-start items-center">
              <p className="pt-8 flex text-[17px] font-semibold ">
                <IconMapPinFilled className="mr-2" />
                Pick-up Location
              </p>
              <p className="text-[18px] text-gray-400 font-medium pt-2 ml-8">
                {pick}
              </p>
            </div>

            <div className="flex flex-col sm:items-start items-center">
              <p className="pt-8 flex text-[17px] font-semibold ">
                <IconMapPinFilled className="mr-2" />
                Drop-off Location
              </p>
              <p className="text-[18px] text-gray-400 font-medium pt-2 ml-8">
                {drop}
              </p>
            </div>
          </div>

          <div className="py-8 font-bold text-[20px] px-8 sm:items-start items-center">
            <p>
              Car - <span className="text-[#fe4d30]">{car}</span>
            </p>
            <img className="pt-8" src={carUrl} alt={car} />
          </div>
        </div>

        <hr className="bg-black" />

        <div className="bg-white px-8 py-8">
          <p className="font-extrabold text-[#fe4d30] text-[18px]">
            PERSONAL INFORMATION
          </p>
          <form
            className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-10"
            action=""
          >
            <div className="flex flex-col w-[100%]  ">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                First Name <span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                Last Name <span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="text"
                placeholder="Enter your last name"
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                Phone Number <span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                Age <span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="number"
                placeholder="18"
              />
            </div>

            <div className="flex flex-col w-[100%] sm:col-span-2">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                Email <span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="email"
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex flex-col w-[100%] sm:col-span-2">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                Address <span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="text"
                placeholder="Enter your address"
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                City<span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="text"
                placeholder="Enter your city"
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <label className="pt-6 font-medium text-neutral-600" htmlFor="">
                Zip Code <span className="text-[#fe4d30] text-2xl">*</span>
              </label>
              <input
                className="outline-none border p-3 bg-neutral-200 text-neutral-400"
                type="text"
                placeholder="Enter your zip code"
              />
            </div>

            <div className="py-8 text-[18px] col-span-2 w-[100%] ">
              <input className="mr-2 outline-none" type="checkbox" />
              <span>Please send me latest news and updates</span>
            </div>
          </form>
        </div>
        <div className=" text-center sm:text-end pr-8 mt-8">
          <button
            onClick={handleModel}
            className=" px-12 text-[25px] font-semibold py-3 text-white bg-[#fe4d30] hover:text-[#fe4d30] transition duration-[0.5s] hover:bg-white hover:border hover:border-[#fe4d30] rounded-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarModel
