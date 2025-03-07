/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedText from '../../../animations/AnimatedText'


const LinkVariants = {

  initial: {
    opacity: '0',
    y: 100,
    transition: {
      duration: 1.5,
      ease: [0.76, 0,0.24, 1],
    
    }
  },

  enter: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.8 + index * 0.1, // Delay each item based on index
    },
  }),

  exit: (index) => ({
    opacity: 0,
    y: 100,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1 + index * 0.07,
    },
  }),


}

const Texts = ({n, index}) => {
  return (
    <div className='h-full overflow-x-hidden flex items-center justify-center'>

 
    <motion.h1 
    variants={LinkVariants}
    initial={'initial'}
    custom={index}
    animate={'enter'}
    exit={"exit"}
    key={index}
         className=" border-b text-start border-[rgba(255,255,255,.05)] h-20 overflow-hidden w-full z-20 
      relative font-normal text-white uppercase family2"
    >

<h1 className="text-4xl  w-full z-20 font-normal text-white uppercase ">

      <Link
 className="text-black font-bold rakas text-2xl
           hover:border-white hover:border-b-[2px]"
       to={n?.path}>
        <AnimatedText>
        {n?.title}
        </AnimatedText>

      </Link>
        
</h1>

      
      </motion.h1>
      </div>
  )
}


export default Texts;
