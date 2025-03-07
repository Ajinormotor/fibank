import React from 'react'
import Maincontent from './main/maincontent'

import Footer from "../../common/Footer"
import Header from '../../common/Header'

export default function HomeIndex({menu, setMenu}){

    return(
<div className='w-full flex flex-col items-center justify-center overflow-x-hidden relative'>

<div className='max-w-[1300px] w-full'>
  <Header   menu={menu} setMenu={setMenu} />
</div>


    <div className='max-w-[1300px] relative flex gap-4'>
    <Maincontent  />
    </div>
 

    <div className='max-w-[1300px] w-full'>
<Footer />
</div>

</div>


    )

}