import React from "react";
import { IconStar, IconCar } from "@tabler/icons-react";

const ModelPages = ({
  mark,
  model,
  doors,
  transmission,
  fuel,
  images,
  price,
}) => {
  return (
    <>
        <div className="border rounded-md border-gray-400 max-w-[350px] mx-auto">
          <div className="h-[15rem]">
          <img className="rounded-t-md h-[100%] w-[100%]" src={images} alt="" />

          </div>

          <div className="flex justify-between p-8">
            <div>
              <h2 className="text-2xl font-extrabold pb-2">{model}</h2>
              <p className="flex size-20 justify-between h-auto pb-4">
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
              </p>
              <p className="flex text-lg text-neutral-600 pb-3">
                <IconCar className="mr-4" />
                {mark}
              </p>
              <p className="flex text-lg text-neutral-600 pb-3">
                <IconCar className="mr-4" />
                {transmission}
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-extrabold pb-2">${price}</h2>
              <p className="pb-4">Per Day</p>
              <p className="flex text-lg text-neutral-600 justify-end pb-3">
                4/5 <IconCar className="ml-4" />
              </p>
              <p className="flex text-lg justify-end text-neutral-600 pb-3">
                {fuel} <IconCar className="ml-4" />
              </p>
            </div>
          </div>
          <hr className="border border-gray-300 mx-8" />
          <div className="w-[100%] text-center">
            <button className="my-8 px-24 text-[25px] mx-auto text-right font-semibold py-3 text-white hover:text-[#f34d30] hover:bg-transparent transition duration-[0.5s] hover:border-[#fe4d30] hover:border bg-[#fe4d30] rounded-sm">
              Submit
            </button>
          </div>
        </div>
    </>
  );
};

export default ModelPages;
