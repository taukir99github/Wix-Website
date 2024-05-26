import React from "react";

const Button = ({ text, className }) => {
  return (
    <div>
      <button data-aos="fade-up" 
        className={`border border-[#0c3c60] px-10 py-4 font-semibold text-[#0c3c60] text-[14px] md:text-[16px] hover:bg-[#0c3c60] hover:text-white ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
