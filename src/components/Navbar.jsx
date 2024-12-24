import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <nav className='w-[90%] mx-auto relative z-[100] text-white flex justify-between pt-5'>
        <div className="z-[100] relative">
          <img className='z-[100] h-20' src="image/logo-light.png" alt="" />
        </div>
        <div className="z-[100] relative flex gap-8 items-center text-[1rem]">
          <a href="">Home</a>
          <a href="">Our Services</a>
          <a href="">Blog</a>
          <a href="">Contacts</a>
          <div className="z-[100] relative flex gap-8">
            <IoSearchOutline className='text-3xl font-bold'/>
            <button className='bg-red-500  rounded-full border-none pl-10 pr-10 pt-2 pb-2'>Let's Talk</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
