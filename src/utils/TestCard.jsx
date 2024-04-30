import React from "react";

import Logo from "../assets/logo.png";

import "../style/testcard.css";

// TODO: complete

const TestCard = () => {
  return (
    <>
      <div className="bg-[#333] w-full h-[400px] pl-4 mb-24 lg:pl-40">
        <div className="w-full h-full pt-4 pr-4">
          <div className="bg-white w-full h-[60%] py-4 flex justify-center items-center">
            msg goes here
          </div>
          <div className="w-full h-[31%] mt-6 bg-white flex justify-start items-center px-4">
            <div className="details-img w-[80px] h-[80px] relative flex justify-center items-center rounded-[50%] bg-[#808080] mx-8">
              <img className="w-[60px]" src={Logo} alt="logo" width={80} />
            </div>
            <div className="w-[400px] ml-2 text-start capitalize font-bold">
              <h4 className="client-det">client details</h4>
              <h4 className="client-rol">client role</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCard;
