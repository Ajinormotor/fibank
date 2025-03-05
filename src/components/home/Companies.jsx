/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";

const images = [
  { img: 'https://hwp.creativegigstf.com/fibank/assets/img/brand/brand-6.svg' },
  { img: 'https://hwp.creativegigstf.com/fibank/assets/img/brand/brand-7.svg' },
  { img: 'https://hwp.creativegigstf.com/fibank/assets/img/brand/brand-8.svg' },
  { img: 'https://hwp.creativegigstf.com/fibank/assets/img/brand/brand-9.svg' },
  { img: 'https://hwp.creativegigstf.com/fibank/assets/img/brand/brand-10.svg' },
];

const imageDouble = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images];

const Companies = () => {
  return (
    <section className="my-10  gap-5 min-h-[200px] bg-[#66c801] rotate-2 flex flex-col items-center justify-center w-full overflow-hidden">
      
      {/* Heading */}
      <div className="flex flex-col gap-1 items-center justify-center text-center px-4">
        <div className="flex items-center gap-2">
          <i className="ri-rocket-line text-[#aeff1c] text-xl font-bold rotate-30"></i>
          <h1 className="text-base font-bold text-white uppercase">Some of our partners</h1>
        </div>
        <h1 className="md:text-[48px] text-[24px] sm:text-[30px] leading-tight text-white">
          Our verified agencies are trusted by top brands
        </h1>
      </div>

      {/* Moving logos */}
      <div className="flex items-center justify-center overflow-hidden w-full pt-5">
        <motion.div
          className="flex items-center min-w-[150%] sm:min-w-[200%] gap-5"
          animate={{ x: ["0%", "-100%"] }} // Moves the logos from right to left
          transition={{ repeat: Infinity, ease: "linear", duration: 150 }} // Adjust speed for better smoothness
        >
          {imageDouble.map((m, index) => (
            <img 
              key={index} 
              src={m.img} 
              alt="Company Logo" 
              className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-auto"
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Companies;
