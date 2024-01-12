import React from "react";

const Banner = () => {
  return (
    <div className="bg-black/80 py-16 flex items-center flex-col justify-center text-white px-10">
      <h1 className="font-bold text-[55px] text-center">
        Save big with our cheap car rental!
      </h1>
      <p className="text-center font-medium text-[23px] pt-4">
        Tap Airports. Local Suppliers.{" "}
        <span className="text-[#fe4d30]">24/7</span> Support.
      </p>
    </div>
  );
};

export default Banner;
