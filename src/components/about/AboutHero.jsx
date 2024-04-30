import React from "react";

import "../../style/about/AboutHero.css";

const AboutHero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ffa500] to-[#f4a261] h-auto w-full p-4">
        <div
          data-aos="fade-up"
          className="flex justify-center items-center flex-col mt-12 my-20"
        >
          <h4
            className="abt-brief text-3xl text-white relative"
            data-aos="fade-right"
          >
            A bit more
          </h4>
          <h1 data-aos="fade-left" className="text-7xl capitalize m-0 mb-12">
            about us
          </h1>
        </div>
        <p data-aos="fade-down" className="text-center font-semibold mb-8">
          An overview of how we got here, our skill set, and some of the clients
          that put their trust in us.
        </p>
      </div>
    </>
  );
};

export default AboutHero;
