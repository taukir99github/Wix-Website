import React from "react";
import Button from "../Custom/Button";

const Section = ({ heading, para, text }) => {
  return (
    <div className="w-full max-h-max py-4 flex flex-col gap-4 md:gap-10 justify-center items-center">
      <h1 className="text-[24px] md:text-4xl" data-aos="fade-up">
        {heading}
      </h1>
      <p
        className="text-center w-[90%] md:w-[70%] leading-6 text-[16px] mb-2 md:mb-0 font-light"
        data-aos="fade-up"
      >
        {para}
      </p>
      <div data-aos="fade-up" >
        {" "}
        <Button text={text} />
      </div>
    </div>
  );
};

export default Section;
