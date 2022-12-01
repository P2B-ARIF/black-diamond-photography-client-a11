import React from 'react';
import { Carousel } from 'flowbite-react'
import slide1 from './../../../../Images/slide1.jpg'
import slide2 from './../../../../Images/slide2.jpg'
import slide3 from './../../../../Images/slide3.jpg'

const Hero = () => {
  return (
   <div className=''>
     <div className="h-[80vh] container mx-auto mt-10 ">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 ">
          <img className='h-full w-full object-cover' src={slide1} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 ">
          <img  className='h-full w-full object-cover' src={slide2} alt="" />

        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 ">
          <img className='h-full w-full object-cover' src={slide3} alt="" />

        </div>
      </Carousel>
    </div>
   </div>
  );
};

export default Hero;