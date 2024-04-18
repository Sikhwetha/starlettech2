import React from "react";

import Design from "../assets/design.png";
import Host from "../assets/database.png";
import Dev from "../assets/dev.png";

// import "../style/servseccard.css";

export const services = [
  {
    image: Design,
    title: "Design",
    content:
      "Design can be a relatively broad profession. As a Multi-media Designer our skill set spans quite far. This allows for much more than once-off projects. Establishing brands across multiple media channels these include both graphic and website design.",
  },
  {
    image: Host,
    title: "Hosting",
    content:
      "Design can be a relatively broad profession. As a Multi-media Designer our skill set spans quite far. This allows for much more than once-off projects. Establishing brands across multiple media channels these include both graphic and website design.",
  },
  {
    image: Dev,
    title: "Development",
    content:
      "Design can be a relatively broad profession. As a Multi-media Designer our skill set spans quite far. This allows for much more than once-off projects. Establishing brands across multiple media channels these include both graphic and website design.",
  },
];

const ServSecCard = (props) => {
  return (
    <>
      <div className="h-auto">
        <div className="bg-black text-white mb-2 flex flex-col justify-center items-center rounded-xl">
          <img className="my-4" src={props.image} alt="..." width={30} />
          <h3 className="capitalize text-2xl my-2 text-[#f4a261]">
            {props.title}
          </h3>
          <p className="text-start py-4 px-2 text-sm">{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default ServSecCard;
