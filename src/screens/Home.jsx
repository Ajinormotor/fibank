import React, { useState } from 'react'
import Meta from '../components/common/Meta'
import SmoothScroll from '../constants/utils/SmoothScroll'
import HomeIndex from '../components/pages/home'
import { AnimatePresence } from 'framer-motion'
import Sidebar from '../components/common/sidebar'
// import Preloader from '../components/loader/Preloader'

const Home = () => {
const [ menu, setMenu] = useState(false)

  return (

    <div className=''>

   <SmoothScroll>

    <AnimatePresence mode='wait'>
       <Sidebar  menu={menu} setMenu={setMenu} /> 
    </AnimatePresence>
    <Meta />

    {/* <Preloader  /> */}
    <HomeIndex   menu={menu} setMenu={setMenu}/>
   </SmoothScroll>
   </div>
  )
}

export default Home