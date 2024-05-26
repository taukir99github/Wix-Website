import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 md:justify-between bg-[#072136] px-4 md:px-20 text-[white] py-12">
      <div className="w-full md:w-[50%] flex flex-col gap-8" data-aos="fade-up" >
        <h2 className="text-[30px] font-light">JAMES CONSULTING</h2>
        <p className="w-[40%] text-[16px]">
          500 Terry Francine Street, San Francmdisco, CA 94158 Mail:
          info@mysite.com <br />
          Tel: 123-456-7890
        </p>
      </div>
      <div className="flex w-full md:w-[50%] justify-between">
      <div className=" md:w-[50%] hidden md:flex flex-col gap-8" data-aos="fade-up" >
        <h2 className="text-[30px] font-light">Menu</h2>
        <div className="flex flex-col gap-3">
          <p>About</p>
          <p>Projects</p>
          <p>Services</p>
          <p>Plan & Pricing</p>
          <p>Tools & Tips</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-8" data-aos="fade-up" >
        <h2 className="text-[30px] font-light">Social</h2>
        <div className="flex gap-4 text-[25px]">
          <FaFacebookF />
          <IoLogoTwitter />
        </div>
        <div className="w-[60%]">
          <p> 2035 by JAMES CONSULTING. Powered and secured by Wix</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
