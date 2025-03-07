import React from 'react'

export default function Newsletter ()  {
  return (
<section className='w-full flex items-center justify-center min-h-[200px]'>

    <div className=' w-[90%] flex items-center justify-center py-11 relative bg-[#aeff1c] rounded-[50px]'>
<div className='flex items-center justify-between w-full  rounded-[40px] py-[45px] px-[20px]'>
    <h1 className='text-[#212529] md:text-[55px] md:leading-[55px] text-[35px] leading-[35px] '>Book a Meeting</h1>

    <button className='h-[52px] md:w-[199px] w-[130px] 
    rounded-[40px] flex items-center bg-[#104042]  
    
    justify-center py-3 px-5  cursor-pointer'>
        <h1 className='text-white text-base md:text-xl proza  font-semibold'>Book a meeting</h1>
    </button>

</div>

<img src='https://hwp.creativegigstf.com/fibank/assets/img/shape/shape-11.png'
alt='' className='w-[40px] h-[40px]  absolute md:bottom-[14px] bottom-[16px]
 right-[20px] md:right-[200px]' />

<img src='https://hwp.creativegigstf.com/fibank/assets/img/shape/shape-11.png'
alt='' className='w-[40px] h-[40px] 
 absolute md:top-[14px]  md:left-[200px] left-[20px] top-[16px]' />

    </div>

</section>
  )
}

