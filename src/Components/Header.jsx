import { useEffect, useState } from "react";
import { IoPersonCircleSharp, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };



  return (
    <>
      <div className="sticky w-full z-10 top-0  flex justify-between px-10 md:px-20 py-6 bg-[#0c3c60] text-white">
        <div className="text-xl cursor-pointer">JAMES CONSULTING</div>
        <div className="flex md:hidden">
          <IoMenu className="text-2xl" onClick={toggleMobileMenu} />
        </div>
        <div className="hidden md:flex gap-12">
          <ul className="list-none flex gap-6 text-base cursor-pointer">
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Plans & Pricing</li>
            <li>Tools & Tips</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-4 items-center justify-center text-base">
            <IoPersonCircleSharp className="text-2xl text-white" /> Login
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-8 absolute top-0 right-0 bg-[#0c3c60]  z-10 w-full shadow-md px-10 py-8">
            <div className="flex justify-between ">
              <div className="flex gap-4 items-center justify-center text-base">
                <IoPersonCircleSharp className="text-2xl text-white" /> Login
              </div>
              <RxCross2
                className="text-2xl text-white"
                onClick={toggleMobileMenu}
              />
            </div>
            <ul className="flex flex-col gap-6 list-none text-white items-center">
              <li onClick={toggleMobileMenu}>About</li>
              <li onClick={toggleMobileMenu}>Projects</li>
              <li onClick={toggleMobileMenu}>Services</li>
              <li onClick={toggleMobileMenu}>Plans & Pricing</li>
              <li onClick={toggleMobileMenu}>Tools & Tips</li>
              <li onClick={toggleMobileMenu}>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
