import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import "../../style/home/AboutSec.css";

const AboutSec = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#f4a261] to-[#ffa500] p-4 pb-12 mb-4">
        <h1 className="text-center text-7xl lg:text-9xl font-bold opacity-35 mt-7 text-[#808080] uppercase">
          About Us
        </h1>
        <div className="lg:flex lg:justify-center">
          <div className="bg-black h-[30rem] flex justify-center items-center lg:w-[50%] 2xl:w-[45%] 2xl:-ml-40 2xl:-mt-16 2xl:z-10">
            <div className="bg-[#808080] h-[90%] w-[90%] flex justify-center items-center">
              <img className="p-4 w-[70%]" src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="ml-8 mt-8 sm:text-center 2xl:text-start">
            <h3 className="ab-title relative text-blue-700 font-bold text-2xl mb-6">
              About us
            </h3>
            <p className="mb-6">Creativity is intelligence having fun</p>
            <p className="mb-6">.....(info about Starlet)</p>
            <Link to="/about">
              <button className="ab-btn bg-white p-3 rounded-2xl relative transition-all duration-300 ease-in hover:rounded-none hover:text-white hover:bg-[#808080]">
                More about us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
