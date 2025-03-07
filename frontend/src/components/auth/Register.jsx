import React, { useState } from 'react'

import eyes from "../../assets/eye.svg"
import hideEyes from "../../assets/eye-slash.svg"

const media_icon = [
  { icon: 'ri-facebook-circle-line'},
  { icon: 'ri-twitter-line'},
  { icon: 'ri-instagram-fill'},
  { icon: 'ri-youtube-fill'},
]


export default function Register  ()  {
const [showPass, setShowPass] = useState(false)

  return (
<section  className='w-full flex '>

  <div className='flex flex-col gap-4 w-full'>

    <h1 className=''>Enter your information to setup a new account.</h1>

    <form className='flex flex-col gap-6 w-full'>

      
    <div className='border-[1px] flex items-center  gap-2 h-[56px]  rounded-lg p-2
       focus:outline focus-within:outline-2  focus-within:outline-[#aeff1c]'>
        <i className="ri-user-line text-white md:text-3xl text-xl"></i>
      <input type='text' placeholder='Username' 
      className='border-0 outline-none w-full'/>
      </div>


      <div className='border-[1px] flex items-center  gap-2 h-[56px]  rounded-lg p-2
       focus:outline focus-within:outline-2  focus-within:outline-[#aeff1c]'>
        <i className="ri-mail-line text-white md:text-3xl text-xl"></i>
      <input type='email' placeholder='Enter your mail' 
      className='border-0 outline-none w-full'/>
      </div>

      <div className='border-[1px] flex items-center  gap-2 h-[56px]  rounded-lg p-2
       focus:outline focus-within:outline-2  focus-within:outline-[#aeff1c]'>
        <i className="ri-lock-line text-white md:text-3xl text-xl"></i>
      <input type={showPass ? "password" : "text"} placeholder='Password' 
      className='border-0 outline-none w-full'/>
      <img  onClick={() => setShowPass(!showPass)}
      src={showPass ? eyes : hideEyes} 
      alt=''
      className='cursor-pointer'  />
      </div>

      <div className='border-[1px] flex items-center  gap-2 h-[56px]  rounded-lg p-2
       focus:outline focus-within:outline-2  focus-within:outline-[#aeff1c]'>
        <i className="ri-lock-line text-white md:text-3xl text-xl"></i>
      <input type={showPass ? "password" : "text"} placeholder='Confirm Password' 
      className='border-0 outline-none w-full'/>
      <img  onClick={() => setShowPass(!showPass)}
      src={showPass ? eyes : hideEyes} 
      alt=''
      className='cursor-pointer'  />
      </div>

      <div className='flex items-center justify-between'>
      <button className='  w-[150px] h-[49px] md:w-full flex items-center rounded-[15px] 
                 bg-[#aeff1c] justify-center py-3 md:px-[30px]  cursor-pointer'>
        <h1 className='text-black rakas font-bold uppercase text-sm md:text-[18px]'>Register</h1>
    </button>

      </div>

<div className='flex items-center justify-center w-full gap-2 md:gap-4'>
<hr style={{ maxWidth: '200px', width:'100%', height: '1px', backgroundColor: 'white', border: 'none' }} />
  <h1 className='font-bold'>Or</h1>
  <hr style={{ maxWidth: '200px', width:'100%', height: '1px', backgroundColor: 'white', border: 'none' }} />
</div>


      <div className='flex items-center justify-center  gap-4'>
              {
                media_icon.map((m,index) => (
                  <div key={index} className='rounded-[50%] w-[50px] h-[50px] border-[1px] border-white flex
                   items-center justify-center hover:bg-[#aeff1c] group'>
                 <i className={` ${m.icon} text-2xl cursor-pointer group-hover:text-black`}></i>
                  </div>
                ))
              }

            </div>

    </form>

  </div>
  
</section>
  )
}
