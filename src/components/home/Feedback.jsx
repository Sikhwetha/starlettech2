import React from "react";

import "../../style/home/Feedback.css";

import TestCard from "../../utils/TestCard";

const Feedback = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#f4a261] to-[#ffa500] p-4 -mt-4">
        <div>
          <h1 className="text-center text-6xl lg:text-9xl uppercase font-black opacity-40 mb-12 pt-4">
            feedback
          </h1>
          <div className="flex flex-col lg:justify-center lg:flex-row lg:items-center relative">
            <div className="flex justify-start lg:items-start flex-col mt-8 items-center lg:-mr-[16rem] z-10">
              <h3 className="mon-title text-[#0000ff] capitalize lg:-mt-16 font-bold mb-8 relative">
                testimonials
              </h3>
              <div className="text-white text-3xl leading-8 mb-9 font-medium">
                <h2>
                  Feedback from <br /> past clients
                </h2>
              </div>
              <div className="flex justify-between absolute bottom-0 lg:relative">
                <div className="mon-left">
                  <button className="mr-12 text-8xl transition-all duration-300 ease-in hover:text-[#808080]">
                    ↼
                  </button>
                </div>
                <div className="mon-right">
                  <button className="right-btn text-8xl transition-all duration-300 ease-in hover:text-[#808080] lg:hover:text-[#ffa500]">
                    ⇁
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[60%] lg:ml-32">
              <TestCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
