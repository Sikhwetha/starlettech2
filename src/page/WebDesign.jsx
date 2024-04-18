import React from "react";
import Learnmore from "../components/services/Learnmore";
import explor from "../assets/web-exploring.png";
import tech from "../assets/image 7.png";
import design from '../assets/45 (2).jpg'
import team from '../assets/developer-team.png'
import uxx from '../assets/image 8.png'
import { Link } from "react-router-dom";

const WebDesign = () => {
  return (
    <div>
      <Learnmore
        title1="we provide"
        title2="Website Design "
        title3=" for your "
        title4="Business"
        explor={explor}
        button="Web Design Services"
        p1="Personalized service offerings designed for your specific requirements"
        p2="Advanced technology and expertise to ensure top-notch results."
        p3="Dedicated support team available around the clock to assist you"
        
        
        tech={tech}
        details1="  Detailed Information"
        titlee="Title:"
        orange=" Advanced Technology "
        description="Description:"
        decription2=" Our service
      utilizes the latest technology to streamline processes and
      enhance From AI-driven algorithms to machine learning
      capabilities, we ensure that you stay ahead of the curve.
      Callout: Experience seamless integration and unparalleled
      performance with our advanced technology solutions."
      
      design='Our Design'
      
      designs1={design}
      designs2={design}
      designs3={design}
      designs4={design}

      ui='UI/UX '
      designn='Design '
      ux=' Our team of seasoned UI/UX designers combines artistic flair
      with technical precision to craft visually stunning interfaces
      that resonate with your target audience. We meticulously analyze
      user behavior, preferences, and pain points to develop
      customized solutions that prioritize usability, functionality,
      and aesthetic appeal.'

      use1='User interface Design '
      use2='User Experience Design'
      use3='Mobile Application Design'
      team={team}

      uxx={uxx}
      ux1='UI/UX '
      ux2='Design '
      uxp=' Our team of seasoned UI/UX designers combines artistic flair
      with technical precision to craft visually stunning interfaces
      that resonate with your target audience. We meticulously analyze
      user behavior, preferences, and pain points to develop
      customized solutions that prioritize usability, functionality,
      and aesthetic appeal. '

      headd='We are Ready Develop your site'
      line11='Custom Website Design'
      line1='Responsive Layouts '
      line2='User Experience Optimization '
      line3='E-commerce Integration'
      line4='SEO Implementation '
      />
         <Link to='/branding'>
      <div className="text-center my-8 font-serif font-bold underline text-[20px] space-y-1">
        <button>Next Page...</button>
        <div className="h-1 bg-orange-500 w-[100px] mx-auto"></div>
        <div className="h-1 bg-orange-500 w-[50px] mx-auto"></div>
        <div className="h-1 bg-orange-500 w-[20px] mx-auto"></div>
      </div>
      </Link>
    </div>
    
  );
};

export default WebDesign;
