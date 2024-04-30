import React from "react";

// import "../../style/about/Profeciencies.css";
import ProfCard, { profeciencies } from "../../utils/ProfCard";

const Profeciencies = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ffa500] to-[#f4a261] p-4">
        <div className="my-12 relative">
          <h1 className="text-4xl text-center font-black uppercase opacity-40 m-0 md:text-7xl lg:text-8xl 2xl:text-9xl">
            Profeciencies
          </h1>
          <p className="text-center text-white font-[Ubuntu] text-xl lg:absolute top-[30%] lg:text-3xl">
            our skill set includes
          </p>
        </div>
        <div className="grid grid-cols-1 mb-12 gap-2 md:grid-cols-2 2xl:grid-cols-3">
          {profeciencies.map((item, index) => (
            <div className="" key={index}>
              <ProfCard
                image={item.image}
                alt={item.alt}
                title={item.title}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profeciencies;
