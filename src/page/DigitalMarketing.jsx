import React from 'react'
import Learnmore from "../components/services/Learnmore";
import { Link } from 'react-router-dom';
import data from '../assets/data-visualization.png'
import strategyImage from '../assets/marketing-strategy.png'
import analyticsImage from '../assets/analytics.png'
import campaignImage from '../assets/social-medi.png'
import supportImage from '../assets/customer-service.png'
import tech from '../assets/analytics.png'


const DigitalMarketing = () => {
  return (
    <div>
      {/* Digital Marketing Section */}
      <Learnmore
        title1="Boost Your Business with"
        title2="Digital Marketing"
        title3="Services"
        title4=""
        explor={data}
        button="Digital Marketing Services"
        p1="Comprehensive digital marketing solutions to increase your online presence and drive business growth."
        p2="Strategic marketing campaigns tailored to your target audience and business objectives."
        p3="Data-driven insights and analytics to optimize marketing efforts and maximize ROI."

        tech={strategyImage}
        details1="Strategic Planning"
        titlee="Marketing Strategy:"
        orange="Targeted Campaigns"
        description="Description:"
        decription2="Our digital marketing strategy focuses on targeted campaigns to reach your specific audience segments. Whether it's social media, email, or search engine marketing, we ensure your message resonates with the right people."

        design='Analytics & Insights'
        
        designs1={analyticsImage}
        designs2={campaignImage}
        designs3={supportImage}
        designs4={analyticsImage}

        ui='Data Analytics'
        designn='Campaign Optimization'
        ux='24/7 Support'
        uxx='Performance Tracking'

        use1='Audience Segmentation'
        use2='SEO Optimization'
        use3='Content Marketing'
        team={analyticsImage}

        uxp='Our team monitors your digital marketing campaigns round-the-clock, providing support and optimizations whenever needed. With performance tracking and data analytics, we ensure your marketing efforts are delivering results.'

        headd='Ready to Market Your Brand'
        line11='Comprehensive Marketing Solutions'
        line1='Targeted Campaigns'
        line2='Data Analytics'
        line3='Campaign Optimization'
        line4='24/7 Support'
      />

      {/* Next Page Button */}
      <Link to='/appdevelopment'>
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

export default DigitalMarketing