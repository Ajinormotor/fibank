import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const nav_link  = [
    { title: 'Home', path: '#'},
    { title: 'About', path: '#'},
    { title: 'Services', path: '#'},
    { title: 'Contact us', path: '#'},
]




const Header = ({ setMenu }) => {

    const menuRef = useRef(null)
    const [isSticky, setIsSticky] = useState(false);

    useEffect(()=> {

        const handle = () => {
            if(window.scrollY > 80){
                menuRef.current.classList.add('sticky_header')
                setIsSticky(true)
            } else {
                menuRef.current.classList.remove('sticky_header')
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handle)

        return () => {
            window.removeEventListener('scroll', handle)
        }

    })


  return (
<section className="w-full flex items-center justify-center p-5">

  <div ref={menuRef}
    className="w-[100%] flex items-center justify-between shaddow-lg shadow-white p-4 lg:h-[18vh]
     rounded-[15px] border-[0.2px] border-slate-400"
  >
    {/* Logo */}
    <div>
      <img
        alt=""
        src="https://hwp.creativegigstf.com/fibank/assets/img/logo/logo-1.svg"
        className=""
      />
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex items-center justify-center gap-3">
      {nav_link.map((n, index) => (
        <Link
          to={n.path}
          key={index}
          className={`${isSticky ? "text-black" : "text-white"} font-bold rakas text-xl
           hover:border-[#aeff1c] hover:border-b-[2px] `}
        >
          {n.title}
        </Link>
      ))}
    </div>

    {/* Get Started Button */}
    <div className="hidden md:block">
      <button
        className="h-[52px] max-w-[149px] w-full rounded-[40px] flex items-center bg-[#aeff1c]
    justify-center py-3 px-5 cursor-pointer"
      >
        <Link to="/auth" className="text-black rakas font-bold"> Get Started</Link>
      </button>
    </div>

    {/* Mobile Menu Icon */}
    <div onClick={() => setMenu(true)} className="block md:hidden cursor-pointer">
      <i className={`ri-menu-2-line text-2xl font-bold
        ${isSticky ? "text-black" : "text-white"}`}></i>
    </div>
  </div>

</section>


  )
}

export default Header