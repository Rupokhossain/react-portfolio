import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GiMailbox, GiPhone } from "react-icons/gi";

const Slidebar = () => {
  return (
    <div>
      <div className="backdrop-brightness-105 text-white 
        xl:w-72 lg:w-64 w-full 
        flex flex-col md:flex-row md:justify-between lg:flex-col 
        justify-center items-center 
        md:items-start lg:items-center
        px-4 py-8 rounded-2xl shadow-xl gap-10 md:gap-8">

        {/* ------------ IMAGE + NAME ------------ */}
        <div className="flex flex-col md:flex-row lg:flex-col md:w-1/2 lg:w-full
          justify-center items-center md:items-start lg:items-center 
          gap-6">

          <img
            src="/src/assets/images/siam.png"
            alt=""
            className="w-32 rounded-2xl shrink-0 md:min-w-32"
          />

          <div className="text-center md:text-left lg:text-center flex flex-col justify-center items-center my-auto">
            <h2 className="text-base font-medium tracking-wide">
              Rupok Hossain Siam
            </h2>
            <p className="bg-[#2b2b2c] mt-4 mx-4 md:mx-0 rounded-lg 
              text-xs font-light inline-block px-4 py-2">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* ------------ CONTACT SECTION ------------ */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="bg-gray-600 h-0.5 w-full md:hidden lg:block block"></div>

          {/* Each item row */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 text-lg rounded-xl shadow-2xl 
              cursor-pointer hover:scale-105 duration-300 
              text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
              <a href="mailto:rh.siam999@gmail.com">
                <GiMailbox />
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Gmail</p>
              <a
                href="mailto:rh.siam999@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light overflow-hidden"
              >
                rh.siam999@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 text-lg rounded-xl shadow-2xl 
              cursor-pointer hover:scale-105 duration-300 
              text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
              <a href="tel:+8801636755280">
                <GiPhone />
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Phone</p>
              <a
                href="tel:+8801636755280"
                className="text-sm font-light"
              >
                01636755280
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 text-lg rounded-xl shadow-2xl 
              cursor-pointer hover:scale-105 duration-300 
              text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
              <a
                href="https://github.com/Rupokhossain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Github</p>
              <a
                href="https://github.com/Rupokhossain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light"
              >
                github.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 text-lg rounded-xl shadow-2xl 
              cursor-pointer hover:scale-105 duration-300 
              text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
              <FiMapPin />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Location</p>
              <address className="text-sm font-light">
                Merul Badda, <br /> Dhaka-1212
              </address>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slidebar;
