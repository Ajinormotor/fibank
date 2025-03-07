import React, { useState } from 'react'

import eyes from "../../../assets/eye.svg"
import hideEyes from "../../../assets/eye-slash.svg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import ClipLoader from "react-spinners/ClipLoader";


const media_icon = [
  { icon: 'ri-facebook-circle-line'},
  { icon: 'ri-twitter-line'},
  { icon: 'ri-instagram-fill'},
  { icon: 'ri-youtube-fill'},
]



export default function Register  ()  {

const [showPass, setShowPass] = useState(false)
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)

const navigate = useNavigate()


const [formData, setFormData] = useState({
  name: '',
  email: "",
  password: "",
  password_confirmation: "",
})

const submit = async(e) => {
  e.preventDefault()

setLoading(true)
setError(null)

   try {

    const response = await axios.post(`/api/register`, formData)
    const data = response.data


 console.log('User details:', data)


 toast.success("Registration successful!", { position: "center" });

    setError(false)
    setLoading(false)
    navigate('/auth')
    
   } catch (error) {
    setError(error.response?.data?.meesgae || "Registration failed")
    toast.error('Registration failed', {
      position: 'top-center',
    });
    setLoading(false);
    
   }
}

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};



  return (
<section  className='w-full flex '>
<div className='flex items-start justify-start'>
  <ToastContainer />
  </div>

  <div className='flex flex-col gap-4 w-full'>

    <h1 className=''>Enter your information to setup a new account.</h1>

    { error && <h1 className='text-red-500 font-bold'>{error}!</h1>}

    <form onSubmit={submit} className='flex flex-col gap-6 w-full'>

      
    <div className='border-[1px] flex items-center  gap-2 h-[56px]  rounded-lg p-2
       focus:outline focus-within:outline-2  focus-within:outline-[#aeff1c]'>
        <i className="ri-user-line text-white md:text-3xl text-xl"></i>
      <input type='text' placeholder='Username' 
      name='name'
         value={formData.name}
         onChange={handleChange}
      className='border-0 outline-none w-full'/>
      </div>


      <div className={`border-[1px] flex items-center  gap-2 h-[56px]  rounded-lg p-2
       focus:outline focus-within:outline-2  focus-within:outline-[#aeff1c]
       `}>
        <i className="ri-mail-line text-white md:text-3xl text-xl"></i>
      <input type='email' placeholder='Enter your mail' 
      name='email'
      value={formData.email}
      onChange={handleChange}

      className='border-0 outline-none w-full'/>
      </div>

      <div className='border-[1px] flex items-center  gap-2 h-[56px]  rounded-lg p-2
       focus:outline focus-within:outline-2  focus-within:outline-[#aeff1c]'>
        <i className="ri-lock-line text-white md:text-3xl text-xl"></i>
      <input type={showPass ? "password" : "text"} placeholder='Password' 
            name='password'
            value={formData.password}
            onChange={handleChange}
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
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleChange}
      className='border-0 outline-none w-full'/>
      <img  onClick={() => setShowPass(!showPass)}
      src={showPass ? eyes : hideEyes} 
      alt=''
      className='cursor-pointer'  />
      </div>

      <div className='flex items-center justify-between'>
      <button className='  h-[49px] w-full flex items-center rounded-[15px] 
                 bg-[#aeff1c] justify-center py-3 md:px-[30px]  cursor-pointer'>
        <h1 className='text-black rakas font-bold uppercase text-sm md:text-[18px]'>
          
          {loading ?   <ClipLoader
        color="white"
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : "Register"} </h1>
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
