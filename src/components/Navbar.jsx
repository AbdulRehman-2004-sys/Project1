import React from 'react'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='w-[92%] mx-auto flex justify-between items-center bg-[#F9FAFF]'>
        <div className="mt-4">
          <img className='h-20' src="image/logo.png" alt="" />          
        </div>
        <div className='flex gap-10 items-center mt-4'>
          <div className="flex gap-8 font-semibold items-center text-[#080337]">
            <Link to={"/home"} className='active:underline relative group'>
              <h3 className='relative before:content-[""] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-b-2 before:border-black pb-2 overflow-hidden before:translate-x-[-100%] hover:before:translate-x-0 before:transition-all before:duration-500'>Home</h3>
            </Link>
            <Link to={"/services"}>
              <h3 className='relative before:content-[""] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-b-2 before:border-black pb-2 overflow-hidden before:translate-x-[-100%] hover:before:translate-x-0 before:transition-all before:duration-500'>Our Serivces</h3>
            </Link>

            <Link to={"/blog"}>
              <h3 className='relative before:content-[""] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-b-2 before:border-black pb-2 overflow-hidden before:translate-x-[-100%] hover:before:translate-x-0 before:transition-all before:duration-500'>Blog</h3>
            </Link>
            <Link to={"/contact"}>
              <h3 className='relative before:content-[""] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-b-2 before:border-black pb-2 overflow-hidden before:translate-x-[-100%] hover:before:translate-x-0 before:transition-all before:duration-500'>Contact</h3>
            </Link>
          </div>
          <div className="flex gap-10 items-center">
            <FiSearch className='text-3xl cursor-pointer'/>
            <button className='bg-[#E62E54]  rounded-full border-none pl-10 pr-10 pt-3 pb-3 text-white whitespace-nowrap hover:bg-red-500 text-md font-bold shadow-sm space-y-4 shadow-[#E62E54]'>Let's Talk</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
