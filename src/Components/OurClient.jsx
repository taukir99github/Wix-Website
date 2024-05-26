import React from 'react'
import Brand1 from "../Images/Brand1.svg"
import Brand2 from "../Images/Brand2.svg"
import Brand3 from "../Images/Brand3.svg"

const OurClient = () => {
  return (
    <div className='w-full min-h-[80vh] flex flex-col text-center items-center gap-6 justify-around py-8'>
      <h2 className='text-[24px] md:text-[40px] tracking-wider' data-aos="fade-up" >OUR CLIENTS</h2>
      <div className='flex flex-col gap-8 justify-around items-center w-[80%] md:flex-row' data-aos="fade-up" >
        <img className='w-[4rem] md:w-[6rem]' src={Brand1} alt="" />
        <img className='w-[4rem] md:w-[6rem]'src={Brand2} alt="" />
        <img className='w-[4rem] md:w-[6rem]'src={Brand3} alt="" />
        <img className='w-[4rem] md:w-[6rem]'src={Brand1} alt="" />
      </div>
      
    </div>
  )
}

export default OurClient
