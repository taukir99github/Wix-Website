import React from "react";
import Input from "../Custom/Input";
import Textarea from "../Custom/Textarea";
import Button from "../Custom/Button";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#0c3c60] flex items-center gap-10 md:gap-20 py-10 flex-col p-4">
      <h1 className="text-center text-[26px] md:text-[40px] text-white" data-aos="fade-up">CONTACT</h1>
      <div className="flex flex-col gap-10 w-full md:w-[80%]" data-aos="fade-up">
        <div className="flex flex-col md:flex-row justify-center gap-8 px-10 items-center text-[white]">
          <Input label="First Name" />
          <Input label="Last Name" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-10 items-center text-[white]">
          <Input label="Email *" />
          <Input label="Subject *" />
        </div>
        <div className="flex justify-center flex-col md:flex-row gap-8 px-10 items-center text-[white]">
          <Textarea label="Message *" />
          <Button
            text="Submit"
            className="bg-white hover:bg-transparent hover:border-white hover:text-white px-16"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center px-4 md:px-10" data-aos="fade-up">
        <div className="relative w-full md:w-[80%] h-0 pb-[56.25%] md:pb-[20%]">{/* 16:9 aspect ratio */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491009404!2d77.30125737578491!3d12.954459540834819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716722562041!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full "
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
