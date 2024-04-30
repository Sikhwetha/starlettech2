import React from "react";
import photo from "../assets/Frame 7.png";
import instagram from "../assets/image 4.png";
import facebook from "../assets/image 5.png";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const OfferCard = (props) => {
  return (
    <div className=" mt-9">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 justify-center p-5">
        <div data-aos='fade-down' className="offers">
          <h1 data-aos='fade-right' className="font-bold md:text-2xl sm:text-xl">
            {props.firstTitle}{" "}
            <span className="text-[orange]">{props.secondTitle}</span>
          </h1>
          <ul data-aos='fade-down'>
            <li className="text-sm">{props.list1}</li>
            <li className="text-sm">{props.list2}</li>
            <li className="text-sm">{props.list3}</li>
            <li className="text-sm">{props.list4}</li>
            <li className="text-sm">{props.list5}</li>
          </ul>
        </div>
        <div data-aos='fade-down' className="choose">
          <h1 data-aos='fade-left' className="font-bold md:text-2xl sm:text-xl">
            {props.secTitle}{" "}
            <span className="text-[orange]">{props.secTitle2}</span>
          </h1>
          <ul>
            <li className="text-sm">{props.slist1}</li>
            <li className="text-sm">{props.slist2}</li>
            <li className="text-sm">{props.slist3}</li>
            <li className="text-sm">{props.slist4}</li>
            <li className="text-sm">{props.slist5}</li>
          </ul>
        </div>
      </div>
      <div data-aos='zoom-out-down' className="contact-card">
        <p className="text-center mt-4 mb-4 text-[16px]">
          <ReactTyped
            strings={[
              "  Contact us today to elevate your brand's online presence!",
            ]}
            typeSpeed={140}
            backSpeed={12}
            loop
          />
        </p>

        <div className="flex ">
          <img src={photo} alt="phoneicon" />
          <div className="ml-3 text-[13px] mt-7">
            <h4>Contact: **************</h4>
            <h4>Email: **************</h4>
            <div className="flex">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" className="ml-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
