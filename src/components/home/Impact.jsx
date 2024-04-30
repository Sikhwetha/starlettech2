import React from "react";

import "../../style/home/Impact.css";

import Carousel from "../../utils/Carousel";

const Impact = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ffa500] to-[#f4a261]">
        <div className="text-center relative">
          <h1 className="font-extrabold opacity-40 uppercase text-5xl lg:text-9xl pt-8">
            social impact
          </h1>
          <h3 className="mid-title font-medium text-3xl lg:absolute lg:top-[53%] lg:left-[41%] lg:text-5xl">
            Some of our
          </h3>
          <h1 className="text-white text-4xl lg:text-5xl mb-8">
            Impact on the community
          </h1>
        </div>
        <p className="text-center text-xl lg:text-4xl font-light mb-9">
          We have worked with a wide-range of companies and sponsors incl.
        </p>
        <div className="text-center pb-9">
          {/* TODO: complete carousel */}
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Impact;
