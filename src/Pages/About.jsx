import React from "react";
import Footer from "../Components/Footer";
import BannerContact from "../Components/BannerContact";
import Trip from "../Components/Trip";
import HeroPages from "../Components/HeroPages";
import MainImg from "/src/images/about/about-main.jpg" 
import Icon1 from "/src/images/about/icon1.png"
import Icon2 from "/src/images/about/icon2.png"
import Icon3 from "/src/images/about/icon3.png"



const About = () => {
  return (
    <div>
      <HeroPages title="About" />
      <div className="flex pt-24 flex-col justify-center lg:grid lg:grid-cols-2 gap-x-12 max-w-[520px] lg:max-w-[1000px] mx-auto p-8">
        <div>
          <img src={MainImg} alt="" />
        </div>
        <div className="lg:-mt-28 py-16 text-center lg:text-left">
          <h2 className="font-semibold text-2xl line-1">About Company</h2>
          <h1 className="font-extrabold text-[37px]">
            You start the engine and your adventure begins
          </h1>
          <p className="py-4 text-base text-neutral-600">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>

          <div className="flex sm:flex-row flex-col sm:justify-between pt-10">
            <div>
              <img
                className="mx-auto sm:mx-0"
                src={Icon1}
                alt=""
              />

              <div className="flex items-center sm:flex-row flex-col sm:justify-between">
                <p className="font-extrabold text-[45px]">20</p>
                <p className="sm:pt-6 text-wrap pb-12 p-2">Car Types</p>
              </div>
            </div>

            <div>
              <img
                className="mx-auto sm:mx-0"
                src={Icon2}
                alt=""
              />

              <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                <p className="font-extrabold text-[45px]">85</p>
                <p className="pt-6 text-wrap pb-12 pl-2">Rental Outlets</p>
              </div>
            </div>
            <div>
              <img
                className="mx-auto sm:mx-0"
                src={Icon3}
                alt=""
              />

              <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                <p className="font-extrabold text-[45px]">75</p>
                <p className="pt-6 text-wrap  pb-12 pl-2">Repair Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trip />
      <BannerContact />
      <Footer />
    </div>
  );
};

export default About;
