import Android from "../../assets/104471_android_icon.svg";
import Market from "../../assets/1243706_shop_store_market_icon.svg";
import Web from "../../assets/5355692_code_coding_development_programming_web_icon.svg";
import Graphic from "../../assets/9025778_paint_brush_icon.svg";

import Card from "../../utils/Card";

const Hero = () => {
  const hero = (
    <div className="text-center my-24">
      <h3 data-aos="fade-right" className="font-medium text-xl mb-0">
        Multi-media company
      </h3>
      <h1
        data-aos="zoom-in-up"
        className="font-black text-4xl sm:text-7xl 2xl:text-9xl uppercase bg-gradient-to-r from-[#ffa500] to-[#0000ff] text-transparent bg-clip-text my-2"
      >
        Starlet Tech
      </h1>
      <h4 data-aos="fade-left" className="font-extrabold text-2xl">
        creative design agency
      </h4>
    </div>
  );

  const cardDetails = [
    {
      cardImage: Graphic,
      cardHeading: "Graphic Design",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
    {
      cardImage: Market,
      cardHeading: "digital marketing",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
    {
      cardImage: Android,
      cardHeading: "app development",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
    {
      cardImage: Web,
      cardHeading: "web development",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
  ];

  return (
    <>
      {hero}
      <div
        className="py-3 grid place-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-2 2xl:grid-cols-4"
      >
        {cardDetails.map((detail, index) => (
          <div className="" key={index}>
            <Card
              image={detail.cardImage}
              heading={detail.cardHeading}
              content={detail.cardContent}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
