/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const LinkVariants = {

  initial: {
    opacity: '0',
    y: 100,
    transition: {
      duration: 1.5,
      ease: [0.76, 0,0.24, 1],
    
    }
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: (i) => ({
      duration: 1.5,
      ease: [0.76, 0,0.24, 1],
      delay: 0.8 + i * 0.1
    })
  },

  exit: {
    opacity: 0,
    y: 100,
    transition: (i) => ({
      duration: 1.5,
      ease: [0.76, 0,0.24, 1],
      delay: 0.1 + i * 0.07
    })
  },

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
    >

<h1>

      <Link
 className="text-black font-bold rakas text-2xl
           hover:border-[#aeff1c] hover:border-b-[2px]"
       to={n?.path}>
      {n?.title}
      </Link>
        
</h1>

      
      </motion.h1>
      </div>
  )
}


export default Texts;
