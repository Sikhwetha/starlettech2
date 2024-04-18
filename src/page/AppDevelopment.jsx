import React from 'react'
import Learnmore from "../components/services/Learnmore";
import { Link } from 'react-router-dom';
import appDevelopmentImage  from '../assets/app-dev.png'
import tech  from '../assets/configuration.png'
import designImage  from '../assets/quality-control.png'
import testingImage  from '../assets/help.png'
import supportImage  from '../assets/configuration.png'
import bug  from '../assets/bugs.png'

const AppDevelopment = () => {
  return (
    <div>
      {/* App Development Section */}
      <Learnmore
        title1="Transform Your  "
        title2="Ideas into "
        title3="Reality "
        title4=""
        explor={appDevelopmentImage}
        button="App Development Services"
        p1="Custom app development solutions to bring your ideas to life and reach your target audience on mobile platforms."
        p2="User-centric design and development approach for intuitive and engaging user experiences."
        p3="Comprehensive testing and quality assurance to ensure your app performs flawlessly across devices and platforms."

        tech={tech}
        details1="Technical Expertise"
        titlee="Technology Stack:"
        orange="Cutting-Edge Solutions"
        description="Description:"
        decription2="Our app development process leverages cutting-edge technology solutions to deliver high-performance and scalable applications. From frontend frameworks to backend databases, we use the latest tools and technologies to meet your app requirements."

        design='User-Centric Design'
        
        designs1={designImage}
        designs2={testingImage}
        designs3={supportImage}
        designs4={designImage}

        ui='UI/UX Design'
        designn='Quality Assurance'
        ux='24/7 Support'
        uxx='Performance Optimization'

        use1='Wireframing & Prototyping'
        use2='Functional Testing'
        use3='Cross-Platform Development'
        team={bug}

        uxp='Our team follows a user-centric design approach to ensure your app is not only visually appealing but also intuitive and easy to use. With quality assurance and performance optimization, we ensure your app meets the highest standards of quality.'

        headd='Ready to Develop Your App'
        line11='Custom App Development'
        line1='Cutting-Edge Technology'
        line2='User-Centric Design'
        line3='Quality Assurance'
        line4='24/7 Support'
      />

      {/* Next Page Button */}
      <Link to='/webDesign'>
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
// 

export default AppDevelopment