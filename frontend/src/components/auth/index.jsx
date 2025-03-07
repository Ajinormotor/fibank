import React, { useState } from 'react'
import user from '../../assets/login_logo.png'
import Login from './Login'
import Register from './Register'

export default function AuthIndex  () {

const [ show, setShow] = useState('Login')

  return (
<section className='flex items-center justify-center w-full'>
  <div className='flex items-center justify-center  md:gap-10 min-h-screen w-full '>

    <div className='hidden md:block  '>
      <img 
      src={user}  alt=''
      className={`lg:max-w-[600px] 
      ${show === 'Register' ? 'lg:h-[700px]' : 'h-screen'} `}  />
    </div>

    <div className='lg:max-w-[700px]   justify-center w-full flex flex-col gap-7 p-5'>

    <div>
      <img
        alt=""
        src="https://hwp.creativegigstf.com/fibank/assets/img/logo/logo-1.svg"
        className=""
      />
    </div>

    <div className='flex gap-3'>



    <button  onClick={() =>setShow('Login')}
    className={`cursor-pointer p-2 ${show === 'Login' ? 'border-[#aeff1c] border-b-[2px] rounded-sm ' : 'border-0'}`} >
        Login
      </button>

      <button
       onClick={() =>setShow('Register')}
       className={`cursor-pointer p-2 
       ${show === 'Register' ? 'border-[#aeff1c] border-b-[2px] rounded-sm ' : 'border-0'}`} >
       
     
      Register
      </button>


    </div>

    <div className=''>

{show === 'Login' && <div className=''> <Login /></div>}

{show === 'Register' && <div className=''> <Register /></div>}


    </div>


    </div>

  </div>
</section>
  )
}

