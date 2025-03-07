import React from 'react'
import Newsletter from './Newsletter'
import { Link } from 'react-router-dom'

const nav_link  = [
  { title: 'Home', path: '#'},
  { title: 'About', path: '#'},
  { title: 'Services', path: '#'},
  { title: 'Contact us', path: '#'},
]


const media_icon = [
  { icon: 'ri-facebook-circle-line'},
  { icon: 'ri-twitter-line'},
  { icon: 'ri-instagram-fill'},
  { icon: 'ri-youtube-fill'},
]
export default function Footer() {
  return (
 <section className='flex flex-col w-full relative mt-20'>

 <div className='w-full  absolute -top-[70px]'>
  <Newsletter  />
 </div>

 <div className='bg-[#104042] w-full min-h-[300px] pb-5 md:py-15 mt-[30px] gap-6
 flex flex-col items-center justify-center'>

<div className=' flex flex-col lg:flex-row items-center justify-between gap-10 mt-[200px]
 w-[90%] border-b-[1px] border-white py-10'>


    <div className='flex flex-col gap-7'>

    <div className=''>
<img 
alt=''
src='https://hwp.creativegigstf.com/fibank/assets/img/logo/logo-2.svg'
className='' />
</div>


      <p className='max-w-[350px] w-full'>Choose us for reliable, detail-oriented cleaning 
        that meets all your cleanliness needs.</p>

        <div className='flex items-center  gap-3 md:gap-6'>

{
    nav_link.map((n,index)=>(
        <Link 
        to={n.path} 
        key={index}
className='text-white font-bold rakas md:text-xl  text-base
hover:border-[#aeff1c] hover:border-b-[2px] '
        
        >
            {n.title}

        </Link>
    ))
}

</div>

    </div>

    <div className='flex flex-col gap-5'>

      <h1 className='md:text-[26px] text-xl font-bold text-white'>Newsletter</h1>

      
    <div className=" flex items-center max-w-  w-full gap-3  ">
                <input type="text" placeholder="Enter Your Mail"
                className="bg-white placeholder:text-black rounded-[15px] md:w-[400px] w-full md:h-[70px] outline-none h-[50px] px-3"  />
                <button className=' md:max-w-[172px] w-[150px] md:h-[70px] h-[50px] md:w-full flex items-center rounded-[15px] 
                 bg-[#aeff1c] justify-center py-3 md:px-[30px]  cursor-pointer'>
        <h1 className='text-black rakas font-bold uppercase text-sm md:text-[18px]'>Try Now</h1>
    </button>
            </div>

            <div className='flex items-center justify-start md:justify-end gap-4'>
              {
                media_icon.map((m,index) => (
                  <div key={index} className='rounded-[50%] w-[50px] h-[50px] border-[1px] border-white flex
                   items-center justify-center hover:bg-[#aeff1c] group'>
                 <i className={` ${m.icon} text-2xl cursor-pointer group-hover:text-black`}></i>
                  </div>
                ))
              }

            </div>


    </div>


    </div>

    {/* bottom */}
    <div className='w-[90%] flex flex-col md:flex-row justify-between items-center gap-2'>
      <h1>@ Powered By Fibank</h1>
<p className='flex gap-3'>
  <span className='hpver:text-[]'>Terms & Conditions</span>
  <span>Privacy Policy</span>
</p>

    </div>

 </div>

 </section>
  )
}

