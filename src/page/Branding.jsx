import React from "react";
import Learnmore from "../components/services/Learnmore";
import { Link } from "react-router-dom";
import brandingImage from "../assets/p-brend.jpg";
import tech from '../assets/branding-tech.png'
import designImage from "../assets/strategy-design.png";
import ux from "../assets/ux-design.png";
import team from "../assets/ui1.png";

const Branding = () => {
  return (
    <div>
      <Learnmore
        title1="Explore Our"
        title2="Branding & Design"
        title3="Services"
        title4=""
        explor={brandingImage}
        button="Branding & Design Services"
        p1="Tailored solutions to elevate your brand's identity and design."
        p2="Advanced technology and expertise to ensure exceptional outcomes."
        p3="Dedicated support team available to assist you at every step."
        
        tech={tech}
        details1="Detailed Information"
        titlee="Title:"
        orange="Advanced Technology"
        description="Description:"
        decription2="Our service utilizes cutting-edge technology to streamline processes and enhance your brand's presence. From AI-driven algorithms to machine learning capabilities, we keep you ahead of the curve. Experience seamless integration and unparalleled performance with our advanced technology solutions."
        
        design='Our Design Services'
        
        designs1={designImage}
        designs2={designImage}
        designs3={designImage}
        designs4={designImage}
        
        ui='UI/UX Design'
        designn='Design'
        ux='Our team of seasoned UI/UX designers combines artistic flair with technical precision to craft visually stunning interfaces that resonate with your target audience. We meticulously analyze user behavior, preferences, and pain points to develop customized solutions that prioritize usability, functionality, and aesthetic appeal.'
        
        use1='User Interface Design'
        use2='User Experience Design'
        use3='Mobile Application Design'
        team={team}
        
        uxx={ux}
        ux1='UI/UX Design'
        ux2='Design'
        uxp='Our team of seasoned UI/UX designers combines artistic flair with technical precision to craft visually stunning interfaces that resonate with your target audience. We meticulously analyze user behavior, preferences, and pain points to develop customized solutions that prioritize usability, functionality, and aesthetic appeal.'
        
        headd='We are Ready to Elevate Your Brand'
        line11='Custom Branding Solutions'
        line1='Strategic Design Services'
        line2='User Experience Optimization'
        line3='Comprehensive Design Strategies'
        line4='Dedicated Support Team'
      />
      <Link to='/hosting'>
      <div className="text-center my-8 font-serif font-bold underline text-[20px] space-y-1">
        <button>Next page...</button>
        <div className="h-1 bg-orange-500 w-[100px] mx-auto"></div>
        <div className="h-1 bg-orange-500 w-[50px] mx-auto"></div>
        <div className="h-1 bg-orange-500 w-[20px] mx-auto"></div>
      </div>
      </Link>
    </div>
  );
};

export default Branding