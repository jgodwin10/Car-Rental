import React from "react";

const Trip = () => {
  return (
    <div className="max-w-[1340px] pt-[80px] mx-auto pb-16">
      <div className="text-center ">
        <h2 className="font-bold text-[23px]">Plan your trip now</h2>
        <h1 className="text-[45px] font-bold px-8">Quick & easy car rental</h1>
      </div>

      <div className="grid grid-cols-1 w-[75%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-32">
        <div className="flex flex-col items-center my-8">
          <img src="src/images/plan/icon1.png" alt="" />
          <h2 className="font-bold text-[28px] text-center">Select Car</h2>
          <p className="text-center text-gray-400 font-medium">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>

        <div className="flex flex-col items-center my-8">
          <img src="src/images/plan/icon2.png" alt="" />
          <h2 className=" text-center font-bold text-[28px]">
            Contact Operator
          </h2>
          <p className="text-center text-gray-400 font-medium">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col items-center lg:my-[55px] my-8">
          <img src="src/images/plan/icon3.png" alt="" />
          <h2 className="text-center font-bold text-[28px]">Let's Drive</h2>
          <p className="text-center text-gray-400 font-medium">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trip;
