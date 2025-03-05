/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import Texts from './text';


const nav_link  = [
  { title: 'Home', path: '#'},
  { title: 'About', path: '#'},
  { title: 'Services', path: '#'},
  { title: 'Contact us', path: '#'},
]

const barVariants = {
  open: {
    width: "100vw",
    left: 0,
    height: "100vh",
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.3
    }
  },

  close: {
    width: "0",
    left: "-100%",
    height: "100vh",
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.9
    }

  }
}


const locationvariants = {
  initial: {
    opacity: "0",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] },
  },
  enter: (index) => ({
    opacity: 1,
    transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};




export default function Sidebar ({ menu,setMenu }){
  const sideRef = useRef(null)


  return (

<motion.section
ref={sideRef}
variants={barVariants}
initial={'open'}
animate={ menu ? " open" : "close"}

className={`md:hidden flex flex-col items-center justify-center bg-[#aeff1c] gap-5 h-screen
oveflow-x-hidden fixed z-[100000]
  ${menu? "w-[100%] top-0 left-0 h-[100vh]" : "w-0 left-[-100%]"}`}>
  
<div onClick={() => setMenu(!menu)} 
className="w-full absolute top-[20px] right-0 items-end px-2 md:hidden">
   <i className="ri-close-line text-4xl font-bold text-black"></i>
   </div>

     {/* Navigation Links */}
 {/* Navigation Links */}
<AnimatePresence mode="wait">
  {menu && ( // Ensure links only exist when `menu` is true
    <div className="flex flex-col items-center justify-center gap-3">
      {nav_link.map((n, index) => (
        <Texts n={n} key={index} index={index} menu={menu} setMenu={setMenu} />
      ))}
    </div>
  )}
</AnimatePresence>


        {/* Get Started Button */}
        <AnimatePresence mode='wait'
        
        >
        <motion.div
              initial={"initial"}
              animate={"enter"}
              exit={"exit"}
              variants={locationvariants}
              className="w-full flex items-center justify-center"
        >
      <button
        className="h-[52px] max-w-[149px] w-full rounded-[40px] flex items-center bg-white
    justify-center py-3 px-5 cursor-pointer"
      >
        <h1 className="text-black rakas font-bold">Get Started</h1>
      </button>
    </motion.div>
    </AnimatePresence>
    

</motion.section>
  )
}

