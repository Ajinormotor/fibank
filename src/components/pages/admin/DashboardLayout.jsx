import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function DashboardLayout  ({children})  {

    const [dashboardOpen, setDashboardOpen] = useState(true);

  return (
<section className='flex flex-col w-full relative'>


<div className={`fixed z-1   px-[5px] lg:pr-[60px] flex top-0 w-full items-center justify-between
     bg-white lg:h-[120px] h-[74px] border-1 gap-[10%] border-b-gray-400  ${dashboardOpen ? "md:pl-[25%]" : "md:pl-[10%]"}`}>

<div onClick={()=> setDashboardOpen(true)}  className="flex w-[15%]  md:hidden">
<i className="ri-menu-2-line text-red-500 text-2xl font-bold"></i>
        </div>

        </div>


{/* SIDE BAR */}
{ dashboardOpen ? 
(
    <div className='fixed h-screen z-2 lg:w-[23%] md:w-[40%]  w-[70%] justify-between
     bg-[#04177F] flex flex-col border-1 rounded-r-[25px] p-[15px] gap-[10px] lg:gap-[20px] '>


<div className='flex justify-between items-center '>

<div>
      <img
        alt=""
        src="https://hwp.creativegigstf.com/fibank/assets/img/logo/logo-1.svg"
        className=""
      />
    </div>


<div onClick={()=> setDashboardOpen(false)}  
className="flex w-[15%]  cursor-pointer">
<i className="ri-menu-2-line text-white text-2xl font-bold"></i>
        </div>

        </div>


        <div className='flex flex-col Feature h-[55%] gap-[20px]'>

        <Link to="#" className="flex gap-[12px] w-full items-center">
        <i className="ri-hotel-bed-line text-red-500"></i>

<p className="lg:text-[14px] text-[16px] leading-[24px] lg:leading-[21px] font-[400]
 lg:font-[500] text-white">Dashboard</p>
</Link>

<Link to="#" className="flex gap-[12px] w-full items-center">
        <i className="ri-hotel-bed-line text-red-500"></i>

<p className="lg:text-[14px] text-[16px] leading-[24px] lg:leading-[21px] font-[400]
 lg:font-[500] text-white">Wallet</p>
</Link>

<Link to="#" className="flex gap-[12px] w-full items-center">
        <i className="ri-hotel-bed-line text-red-500"></i>

<p className="lg:text-[14px] text-[16px] leading-[24px] lg:leading-[21px] font-[400]
 lg:font-[500] text-white">Profile</p>
</Link>

<Link to="#" className="flex gap-[12px] w-full items-center">
        <i className="ri-hotel-bed-line text-red-500"></i>

<p className="lg:text-[14px] text-[16px] leading-[24px] lg:leading-[21px] font-[400]
 lg:font-[500] text-white">Dashboard</p>
</Link>

            </div>

        </div>
)
:
(
    <div className='fixed md:flex md:flex-col md:justify-between hidden top-0 h-screen
    z-2 lg:w-[6%] md:w-[7%]
   bg-[#04177F] border-1 rounded-r-[25px] lg:p-[5px] lg:pb-[25px] '>


<div className='flex flex-col gap-5   '>

<div>
      <img
        alt=""
        src="https://hwp.creativegigstf.com/fibank/assets/img/logo/logo-1.svg"
        className=""
      />
    </div>


<div onClick={()=> setDashboardOpen(true)}  
className="flex w-[15%]  cursor-pointer">
<i className="ri-menu-2-line text-white text-2xl font-bold"></i>
        </div>

        </div>


<div className='flex flex-col  items-center
     gap-[30px] h-[50%] Feature overflow-y-scroll pt-[40px]'>

<div className='flex flex-col Feature h-[55%] gap-[20px]'>

<Link to="#" className="flex gap-[12px] w-full items-center">
<i className="ri-hotel-bed-line text-red-500"></i>
</Link>

<Link to="#" className="flex gap-[12px] w-full items-center">
<i className="ri-hotel-bed-line text-red-500"></i>
</Link>

<Link to="#" className="flex gap-[12px] w-full items-center">
<i className="ri-hotel-bed-line text-red-500"></i>
</Link>

<Link to="#" className="flex gap-[12px] w-full items-center">
<i className="ri-hotel-bed-line text-red-500"></i>
</Link>

    </div>

        </div>

</div>)

}


<div className={`flex pt-[100px] px-[20px] 
     ${dashboardOpen ? "md:pl-[27%] md:pt-[200px]" : "md:pl-[10%]  md:pt-[200px]"}`}>
{children}
</div>

</section>
  )
}

