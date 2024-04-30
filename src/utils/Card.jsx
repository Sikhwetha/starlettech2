import React from "react";

const Card = (props) => {
  return (
    <div
      data-aos="fade-up"
      className="w-[350px] bg-[#ffa500] mb-1 px-3 py-2 md:w-[440px] lg:w-[430px] 2xl:w-[390px]"
    >
      <div className="my-3 flex justify-center flex-col items-center">
        <div className="my-1">
          <img src={props.image} alt="Props Image" width={50} />
        </div>
        <h2 className="my-3 font-semibold uppercase">{props.heading}</h2>
        <p className="text-sm">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
