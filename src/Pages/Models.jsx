import React from "react";
import Footer from "../Components/Footer";
import BannerContact from "../Components/BannerContact";
import ModelPages from "../Components/ModelPages";
import { CAR_DATA } from "../CarData";
import HeroPages from "../Components/HeroPages";

const Models = () => {
  return (
    <div>
      <HeroPages title="Vehicle Models" />
      <div className=" py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1140px] p-8 mx-auto gap-x-8 gap-y-[3rem]">
          {CAR_DATA.map((car) => (
            <ModelPages key={car.price} {...car} />
          ))}
        </div>
      </div>
      <BannerContact />
      <Footer />
    </div>
  );
};

export default Models;
