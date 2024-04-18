import React, { useEffect } from "react";
import explor from "../../assets/web-exploring.png";
import tech from "../../assets/image 7.png";
import design from "../../assets/45 (2).jpg";
import team from "../../assets/developer-team.png";
import ux from "../../assets/image 8.png";



const Learnmore = (props) => {


  return (
    <>
      <div  className="w-full  p-2 bg-gradient-to-r from-orange-300 to-blue-200">
        <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center items-center  max-w-7xl mx-auto">
          <div
            className=" p-2 " 
            data-aos="fade-down" 
          >
            <h1 className=" text-4xl md:text-4xl sm:text-3xl  lg:text-5xl font-bold  mb-1 md:mb-3">
              {props.title1}
            </h1>
            <h1 className="text-4xl md:text-4xl sm:text-3xl lg:text-5xl font-bold mb-1 md:mb-3">
              {props.title2}
            </h1>
            <h1 className="text-4xl md:text-4xl sm:text-3xl lg:text-5xl font-bold mb-1 md:mb-3">
              {props.title3}
            </h1>
            <h1 className="text-4xl md:text-4xl sm:text-3xl lg:text-5xl font-bold mb-1 md:mb-3">
              {props.title4}
            </h1>
          </div>
          <div  data-aos="fade-up" data-aos-anchor-placement>
            <img src={props.explor} alt="web-exploring" />
          </div>
        </div>
        <div data-aos="fade-down" className="  bg-white mx-auto w-[300px] h-10 items-center justify-center flex rounded-full">
          <h3 className="text-[20px] font-bold text-[orange] ">
            {props.button}
          </h3>
        </div>
      </div>
      <div data-aos='slide-right' className="md:w-[600px] mx-auto text-center my-9 p-2 ">
        <p>{props.p1}</p>
        <p> {props.p2}</p>
        <p> {props.p3}.</p>
      </div>

      <div data-aos='fade-down' className="max-w-7xl my-14 mx-auto border border-black ">
        <div className="grid grid-flow-row-dense md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 ">
          <div data-aos='fade-left' className="col-span-1 sm p-4 lg:m-auto sm:m-auto ">
            <img src={props.tech} alt="tech" />
          </div>
          <div  className=" col-span-2 p-5 text-white bg-[#2B2929] ">
            <h2  data-aos="fade-up"className="font-bold text-[20px] text-[orange] mb-6 px-4 text-center">
              {props.details1}
            </h2>

            <div  data-aos="fade-down" className="p-4 ">
              <p>
                <span className="font-bold">{props.titlee}</span>
                {props.orange}
              </p>
              <p >
                <span data-aos='fade-down' className="font-bold"> {props.description}</span>{" "}
                {props.decription2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-down' className="max-w-6xl m-auto my-10 flex flex-col items-center justify-cente pb-8">
        <p data-aos='fade-left' className="text-center font-bold text-[20px] my-5">
          {props.design}{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 m-auto max-w-5xl  ">
          <img  src={props.designs1} alt="" className="w-[219px] h-[219px]" />
          <img data-aos='fade-down' src={props.designs2} alt="" className="w-[219px] h-[219px]" />
          <img data-aos='fade-down' src={props.designs3} alt="" className="w-[219px] h-[219px]" />
          <img data-aos='fade-down'src={props.designs4} alt="" className="w-[219px] h-[219px]" />
        </div>
      </div>

      <div data-aos='fade-up' className="p-5 bg-[#2B2929] max-w-6xl mx-auto my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
          <div className="py-5 space-y-5 px-3">
            <div data-aos='fade-left' className="max-w-[480px]">
              <h1 className="text-[36px] font-bold text-white">
                {props.ui}{" "}
                <span className="text-[orange]">{props.designn}</span>
              </h1>
              <p className="font-serif mb-5">{props.ux}</p>
              <h3 className="font-bold text-[20px]">{props.use1}</h3>
              <h3 className="font-bold text-[20px]"> {props.use2}</h3>
              <h3 className="font-bold text-[20px]"> {props.use3}</h3>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={props.team} alt="" />
          </div>
        </div>
        <div data-aos='fade-right' className="grid grid-cols-1 md:grid-cols-2 text-white">
          <div className=" ">
            <img src={props.uxx} alt="" />
          </div>
          <div className="py-5 space-y-5 px-3">
            <div className="max-w-[480px]">
              <h1 className="text-[36px] font-bold text-white">
                {props.ux1}
                <span className="text-[orange]">{props.ux2}</span>
              </h1>
              <p className="font-serif mb-5">{props.uxp}</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos='fade-down-left' className="w-fit mx-auto my-10 bg-[#2B2929] p-5 px-9 text-white rounded-[50px]">
        <h1 className="font-bold md:text-[30px] text-[13px] ">
          {" "}
          {props.headd}
        </h1>
        <li className="font-sans"> {props.line11}</li>
        <li className="font-sans">{props.line1}</li>
        <li className="font-sans">{props.line2}</li>
        <li className="font-sans"> {props.line3}</li>
        <li className="font-sans">{props.line4}</li>
      </div>
    </>
  );
};

export default Learnmore;
