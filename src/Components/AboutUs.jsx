import React from "react";
import Button from "../Custom/Button";
import image1 from "../Images/Section-Background.jpg";

const AboutUs = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('${image1}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", 
  };

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply pointer-events-none bg-blend-multiply"
        style={backgroundImageStyle}
      />
      <div className="absolute inset-0 bg-[#d8e8f2] opacity-90 blur-xs " />
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-8 text-center">
        <h1 className="text-[24px] md:text-[36px]" data-aos="fade-up" >About Us</h1>
        <div className="w-full px-4 md:w-[40%] flex flex-col gap-6 md:text-[16px] font-light">
          <p data-aos="fade-up" >
            I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and
            make changes to the font. Feel free to drag and drop me anywhere you
            like on your page. I’m a great place for you to tell a story and let
            your users know a little more about you. 
          </p>
          <p data-aos="fade-up" >
            This is a great space to
            write a long text about your company and your services. You can use this
            space to go into a little more detail about your company. Talk about
            your team and what services you provide. Tell your visitors the story of
            how you came up with the idea for your business and what makes you
            different from your competitors. Make your company stand out and show
            your visitors who you are.
          </p>
        </div>
        <Button text="Learn More"/>
      </div>
    </div>
  );
};

export default AboutUs;
