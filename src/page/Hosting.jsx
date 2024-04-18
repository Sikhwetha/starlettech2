import React from 'react'
import Learnmore from "../components/services/Learnmore";
import { Link } from 'react-router-dom';
import hostingImage from '../assets/hosting-services.png'
import tech from '../assets/cloud-computing.png'
import securityImage from  '../assets/data-protection.png'
import backupImage from '../assets/backup.png'
import supportImage from '../assets/server.png'
import setting from '../assets/web-settings.png'

const Hosting = () => {
  return (
    <div>
      <Learnmore
        title1="Explore Our"
        title2="Hosting"
        title3="Services"
        title4=""
        explor={hostingImage}
        button="Hosting Services"
        p1="Robust hosting solutions to keep your website online and accessible."
        p2="High-performance servers to ensure fast loading times and smooth user experience."
        p3="Secure infrastructure and regular backups for data protection and peace of mind."

        tech={tech}
        details1="Technical Specifications"
        titlee="Technology:"
        orange="High-Performance Servers"
        description="Description:"
        decription2="Our hosting service is powered by high-performance servers, ensuring lightning-fast loading times and seamless user experience for your website. With state-of-the-art technology, your online presence is in good hands."

        design='Security Features'
        
        designs1={securityImage}
        designs2={backupImage}
        designs3={supportImage}
        designs4={securityImage}

        ui='Secure Infrastructure'
        designn='Regular Backups'
        ux='24/7 Support'
        uxx='SSL Encryption'

        use1='24/7 Monitoring'
        use2='DDoS Protection'
        use3='Firewall Security'
        team={setting}

        uxp='Our team monitors your website 24/7 to ensure maximum uptime and security. With DDoS protection, firewall security, and SSL encryption, your data and customers are protected from online threats.'

        headd='Ready to Host Your Website'
        line11='Robust Hosting Solutions'
        line1='High-Performance Servers'
        line2='Secure Infrastructure'
        line3='24/7 Support'
        line4='Regular Backups'
      />
      <Link to='/digital'>
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

export default Hosting