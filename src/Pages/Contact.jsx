import React from "react";
import Footer from "../Components/Footer";
import BannerContact from "../Components/BannerContact";
import HeroPages from "../Components/HeroPages";
import { IconPhone, IconMail, IconLocation, IconMailOpened } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <HeroPages title="Contact" />
      <div className="sm:grid lg:grid-cols-2 px-4 lg:max-w-[1310px] sm:mx-auto lg:px-8 py-32 lg:gap-x-8">
        <div className="text-center sm:mx-auto lg:mx-0 lg:text-left lg:max-w-[400px]">
          <h1 className="text-4xl font-extrabold">
            Need additional information?
          </h1>
          <p className="py-6 pt-10 text-neutral-500">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <p className="hover:text-[#fe4d30] transition duration-[0.3s] pt-4 text-[17px]">
            <Link className="flex lg:justify-start justify-center" to="/">
              <IconPhone className="mr-2" />
              (123) 456-7869
            </Link>
          </p>
          <p className="hover:text-[#fe4d30] transition duration-[0.3s] pt-4 text-[17px]">
            <Link className="flex lg:justify-start justify-center" to="/">
              <IconMail className="mr-2" />
              carrental@carmail.com
            </Link>
          </p>
          <p className="hover:text-[#fe4d30] transition duration-[0.3s] pt-4 text-[17px]">
            <Link className="flex lg:justify-start justify-center" to="/">
              <IconLocation className="mr-2" />
              Belgrade, Serbia
            </Link>
          </p>
        </div>

        <div className="mt-20 lg:mt-0">
          <form className="flex flex-col" action="">
            <label
              className="pb-2 text-center lg:text-left font-semibold"
              htmlFor=""
            >
              Full Name <span className="text-[#fe4d30]">*</span>
            </label>
            <input
              className="py-4  px-8 outline-none bg-neutral-200"
              type="text"
              placeholder='E.g: "John Doe"'
            />

            <label
              className="pt-6 pb-2 font-semibold text-center lg:text-left"
              htmlFor=""
            >
              Email <span className="text-[#fe4d30]">*</span>
            </label>
            <input
              className="py-4 px-8 outline-none bg-neutral-200"
              type="email"
              placeholder="youremail@example.com"
            />

            <label
              className="pt-6 pb-2 font-semibold text-center lg:text-left"
              htmlFor=""
            >
              Tell us about it <span className="text-[#fe4d30]">*</span>
            </label>
            <textarea
              className="py-4 px-8 outline-none bg-neutral-200"
              cols="30"
              placeholder="Write Here..."
              rows="8"
            ></textarea>

            <div className="w-[100%]  text-center">
              <button className="w-[100%] my-8 transition duration-[0.5s] text-center text-[25px] font-semibold py-3 text-white hover:text-[#f34d30] hover:bg-transparent flex justify-center items-center hover:border-[#fe4d30] hover:border bg-[#fe4d30] rounded-sm">
                <IconMailOpened className="mr-3" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <BannerContact />
      <Footer />
    </div>
  );
};

export default Contact;
