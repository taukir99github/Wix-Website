import React, { useEffect, useState } from 'react';
import Hero1 from '../assests/hero.jpg';
import Button from '../Custom/Button';

export default function Hero() {
  const [bgSize, setBgSize] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newBgSize = 110 - scrollTop * 0.01;
      setBgSize(newBgSize > 60 ? newBgSize : 60);
    };

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaQueryChange = () => {
      if (mediaQuery.matches) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
        setBgSize(100); 
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url('${Hero1}')`,
    backgroundSize: window.innerWidth <= 768 ? 'cover' :`${bgSize}%`,
    backgroundPosition: 'center',
    maxHeight: '100vh',
    transition: 'background-size 0.3s',
  };

  return (
    <div className="relative h-screen flex justify-center items-end" style={backgroundImageStyle}>
      <div className="absolute bottom-0 w-[80%] md:w-1/2 bg-white flex flex-col text-center items-center gap-4 py-4" data-aos="fade-up">
        <h1 className="text-base md:text-xl">Developing Innovative Strategies</h1>
        <h2 className="text-xl md:text-5xl text-[#072136]">ACHIEVING GROWTH</h2>
        <Button text="Free Consultation" />
      </div>
    </div>
  );
}
