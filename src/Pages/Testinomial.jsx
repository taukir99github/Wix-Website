import React from "react";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Testinomial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlArrowRight />,
    prevArrow: <SlArrowLeft />,
  };

  const data = [
    {
      manager: "Project Manager",
      name: "Dora Bridges",
    },
    {
      manager: "Operations Manager",
      name: "Sima Patel",
    },
    {
      manager: "Marketing Director",
      name: "Brad Stevens",
    },
  ];

  return (
    <div className="flex  flex-col  md:gap-20 justify-start items-center py-20 px-8 bg-[#F7F7F7]">
      <h2 className="text-[#072136] text-[23px] md:text-4xl" data-aos="fade-up" >TESTIMONIALS</h2>
      <div className="slider-container p-4 w-full md:w-[70%]" data-aos="fade-up" >
        <Slider {...settings}>
          {data.map((testimonial, index) => (
            <div key={index}>
              <div className="flex flex-col  gap-8 justify-center items-center text-center py-18 my-8">
                <h3 className="w-[80%] text-base md:text-xl font-light text-[#072136] md:w-[50%] ">
                  “I'm a testimonial. Click to edit me and add text that says
                  something nice about you and your services.”
                </h3>
                <div className="flex flex-col text-xs md:text-base">
                  <p className="text-[#0C36C0] font-bold">
                    {testimonial.manager}
                  </p>
                  <p className="font-light text-[#072136]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
