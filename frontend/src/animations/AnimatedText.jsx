
// import React, { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function AnimatedText ({children}) {

  const  word =  children.split(" ,")
 


  
  return (
    <motion.span
  initial="intial"
  whileHover={"hover"}
    >
      <div className='flex items-center relative'>

   
      {
        word.map((data,index) => (
       
            <motion.span
            key={index}
            variants={{
              initial: { y: "100%"},
              hover: { y: "0"},  
            }}
              transition={{
                delay: index * 0.025,
                duration: 0.25,
                ease: "easeInOut",
              }}
            >
              { data === " " ? "\u00A0" : data}
            </motion.span>

         
        ))
      }
         </div>

    </motion.span>
  )
}

