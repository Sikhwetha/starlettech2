import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import Staff1 from "../assets/s1.webp";
import Staff2 from "../assets/s2.webp";
import Staff3 from "../assets/s3.jpg";

export const staffMembers = [
  {
    staffImg: Staff1,
    staffName: "name",
    staffRole: "role",
    staffTime: "duration",
  },
  {
    staffImg: Staff2,
    staffName: "name",
    staffRole: "role",
    staffTime: "duration",
  },
  {
    staffImg: Staff3,
    staffName: "name",
    staffRole: "role",
    staffTime: "duration",
  },
];

const StaffCard = (props) => {
  return (
    <>
      <div className="bg-[#333] p-4 w-[700px] rounded-2xl mb-12">
        <div className="flex flex-col lg:flex-row items-center mb-6">
          <div className="stfcard-img w-full h-[300px] lg:w-[60%] bg-white rounded-xl flex justify-center items-center relative mb-4">
            <img src={props.image} alt="Staff Member" />
          </div>
          <div className="text-white ml-8 capitalize">
            <h1 className="stf-role-1">name: {props.name}</h1>
            <h1 className="mb-4">role: {props.role}</h1>
            <div className="w-full h-1 bg-[#808080] mb-4 rounded-lg"></div>
            <div className="stf-resume">
              <button className="bg-[#808080] p-2 hover:bg-[#0000ff] transition-all duration-500 ease-in">
                view my resume
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mb-6">
          <button className="text-8xl text-white mr-20 hover:text-[#ffa500] transition-all duration-500 ease-in-out">
            ↼
          </button>
          <button className="text-8xl text-white hover:text-[#ffa500] transition-all duration-500 ease-in-out">
            ⇁
          </button>
        </div>
      </div>
    </>
  );
};

export default StaffCard;
