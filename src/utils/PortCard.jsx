import React from "react";

import Ai from "../assets/ai.png";
import Design from "../assets/poster.png";
import Freelancer from "../assets/freelancer.png";

// import "../style/portcard.css";

export const portfolios = [
  {
    date: "16",
    month: "december",
    title: "tips & tricks",
    image: Ai,
    heading: "HOW TO USE AI IN GRAPHIC DESIGN",
  },
  {
    date: "18",
    month: "january",
    title: "design principles",
    image: Design,
    heading: "PRINCIPLES OF EFFECTIVE DESIGN",
  },
  {
    date: "21",
    month: "march",
    title: "tips & tricks",
    image: Freelancer,
    heading: "BECOMING A FREELANCE DESIGNER IN SOUTH AFRICA",
  },
];

const PortCard = (props) => {
  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <div className="w-[300px] h-[380px] bg-black flex justify-center items-center">
          <div className="bg-[#808080] w-[93%] h-[350px] my-4 p-4 relative z-20">
            <div className="-mt-8 py-8 font-bold">
              <h3 className="text-[#0000ff]">{props.date}</h3>
              <h3 className="capitalize text-white">{props.month}</h3>
            </div>
            <img
              className="absolute w-full h-full top-0 left-0 -z-10 opacity-20"
              src={props.image}
              alt="..."
            />
            <p className="mt-36 capitalize text-[#ffa500] mb-4">
              {props.title}
            </p>
            <h1 className="uppercase text-white leading-5">{props.heading}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortCard;
