import React from "react";

import "../../style/about/Staff.css";

import StaffCard from "../../utils/StaffCard";

const Staff = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#f4a261] to-[#ffa500] p-4">
        <div className="text-center relative mb-12 pt-8">
          <h1 className="uppercase font-black opacity-40 text-5xl lg:text-9xl">
            staff
          </h1>
          <p className="stf-p text-xl lg:text-3xl font-medium lg:absolute lg:top-[50%] lg:left-[30%]">
            Get to know our team of amazing people
          </p>
        </div>
        <div data-aos="flip-right" className="flex justify-center items-center">
          <StaffCard />
        </div>
      </div>
    </>
  );
};

export default Staff;
