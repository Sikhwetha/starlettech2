import React from "react";

import "../../style/home/Portfolio.css";

import PortCard, { portfolios } from "../../utils/PortCard";

const Portfolio = () => {
  return (
    <>
      <div className="mt-8 bg-gradient-to-r from-[#f4a261] to-[#ffa500]">
        <div className="relative text-center">
          <h1 className="uppercase pt-4 font-black opacity-60 text-5xl lg:text-9xl">
            portfolio
          </h1>
          <p className="p-text hidden lg:block lg:absolute lg:top-[40%] lg:left-[45%] capitalize text-white text-2xl">
            portfolio
          </p>
        </div>
        <h3 className="text-center mb-12 text-xl lg:text-3xl capitalize">
          our latest and most current projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((item, index) => (
            <div className="lg:mb-8" key={index}>
              <PortCard
                date={item.date}
                month={item.month}
                image={item.image}
                title={item.title}
                heading={item.heading}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
