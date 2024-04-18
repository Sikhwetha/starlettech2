import React from "react";

import ServSecCard, { services } from "../../utils/ServSecCard";

import { Link } from "react-router-dom";

// import "../../style/home/ServiceSec.css";

const ServiceSec = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl font-medium text-[#0000ff] text-center">
          Services
        </h1>
        <div className="relative">
          <h1 className="text-center uppercase text-6xl lg:text-9xl font-black text-[#808080] opacity-30">
            Services
          </h1>
          <p className="text-center text-xs lg:text-xl w-full capitalize font-bold absolute top-[40%]">
            we offer a wide-range of services that are tailor made for your
            every desire and wish
          </p>
        </div>
        <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <div className="servcard-con" key={index}>
              <ServSecCard
                image={service.image}
                title={service.title}
                content={service.content}
              />
            </div>
          ))}
        </div>
        <Link to="/services">
          <div className="text-end text-black">
            <button className="bg-[#808080] p-2 hover:bg-[#0000ff] hover:text-white hover:rounded-xl transition-all duration-300 ease-in">
              Brows all our services
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceSec;
