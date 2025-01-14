import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePerson3 } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { TbPencilExclamation } from "react-icons/tb";
import { TbLocationShare } from "react-icons/tb";

import "../index.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Footer from '../components/Footer';


const Contact = () => {

    gsap.registerPlugin(useGSAP);

    
    const ball = useRef(null);
    const ball2 = useRef(null);
    window.addEventListener("mousemove",(e)=>
        {
            const { clientX, clientY } = e;
            
            gsap.to(ball.current, {
                x: clientX , // Move to mouse X coordinate
                y: clientY, // Move to mouse Y coordinate
                duration: 0.5, // Smooth transition
                // ease: "power2.out", // Easing for smooth animation
                stagger:1,
              });
           
        })
        window.addEventListener("mousemove",(e)=>
            {
                const { clientX, clientY } = e;
                
                gsap.to(ball2.current, {
                    x: clientX , // Move to mouse X coordinate
                    y: clientY, // Move to mouse Y coordinate
                    duration: 0.5, // Smooth transition
                    // ease: "power2.out", // Easing for smooth animation
                    stagger:1,
                  });
               
            })
    

  return (
    <div>
      <main className='contact relative bg-[#F9FAFF] overflow-x-hidden'>
        <div ref={ball}  className='ball w-2 h-2 bg-black rounded-full absolute top-[-2%] '></div>
        
        <div className='flex items-center justify-center flex-col gap-4 mt-4'>
            <h1 className='text-[3.5rem] text-center font-[quicksand] font-extrabold text-[#080337]'>Contacts</h1>
            <IoIosArrowDown className='text-[1.5rem] text-center'/>
        </div>
        <div className='info w-[68%] mx-auto flex justify-between font-[quicksand] text-[#080337]'>
            <div className='flex flex-col items-center'>
                <img src="image/wall-clock.svg" alt="wall-clock.svg" />
                <h2 className='text-2xl font-bold mt-4 mb-4'>Open Hours</h2>
                <h2 className='text-md text-gray-500'>Mon-Fri: 5 PM – 5 AM</h2>
                <h2 className='text-md text-gray-500'>Saturday: Closed</h2>
                <h2 className='text-md text-gray-500'>Sunday: Closed</h2>
            </div>
            <div className='flex flex-col items-center'>
                <img src="image/map.svg" alt="map" />
                <h2 className='text-2xl font-bold mt-4 mb-4'>Address</h2>
                <h2 className='text-md text-gray-500'>Fortune Tower Shahrah-E-Faisal</h2>
                <h2 className='text-md text-gray-500'>Road Karachi</h2>
                <div className='mt-4 line-box'>
                    <h2 className='text-md text-gray-500'>Check Location</h2>
                    <div className="underline border border-gray-500 mt-2"></div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <img src="image/telephone.svg" alt="telephone" />
                <h2 className='text-2xl font-bold mt-4 mb-4'>Get In Touch</h2>
                <h2 className='text-md text-gray-500'>Email: info@lucidweb.co</h2>
                <div className='mt-4 line-box'>
                    <h2 className='text-md text-gray-500'>Contact Form</h2>
                    <div className="underline border border-gray-500 mt-2"></div>
                </div>
            </div>
        </div>

        <iframe className='w-full h-screen' src="https://satellites.pro/Google_plan/Pakistan_map#" frameborder="0"></iframe>

        <div className='form w-[80%] h-[100vh] mx-auto relative'>
        <div ref={ball2}  className='ball w-2 h-2 bg-black z-50 rounded-full absolute left-[-7vw] top-[-2%] '></div>
            <div className='flex'>
            <div className="w-[50%]">
                <h4 className='text-xl mb-8 font-[quicksand] font-semibold text-[#080337]'>Contact Us</h4>
                <h1 className='text-6xl font-[quicksand] font-extrabold text-[#080337]'>Have <br /> Questions? Get <br /> in Touch!</h1>
                <p className='text-xl text-gray-500 mt-10 mb-4 flex gap-4 items-center'><SlLocationPin className='text-2xl'/>Fortune Tower Shahrah-E-Faisal Road Karachi</p>
                <div className='group mt-4 line-box text-[#080337]'>
                    <div className='text-xl text-gray-500 flex  gap-4 items-center'><AiOutlineMail className='text-2xl'/><p className='group-hover:text-black'>info@lucidweb.co</p></div>
                    <div className="border border-gray-500 mt-2 w-32 ml-10 scale-0 group-hover:scale-100 transition-all duration-500"></div>
                </div>
            </div>
            <div className="right w-[50%] p-4">
                <form className=' flex flex-wrap gap-4 relative '>
                    <div class="input-container w-[48%] h-14 mt-2 relative">
                        <MdOutlinePerson3 className='text-2xl absolute top-4'/>
                        <input className='w-[100%] h-full border-b border-gray-400 p-2 pl-10 bg-transparent' type="text" placeholder="Name" />
                    </div>
                    <div class="input-container w-[48%] h-14 mt-2">
                        <AiOutlineMail className='text-2xl absolute top-4'/>
                        <input className='w-[100%] h-full border-b border-gray-400 p-2 pl-10 bg-transparent' type="text" placeholder="Email" />
                    </div>
                    <div class="input-container w-[48%] h-14 mt-2">
                        <FiPhoneCall className='text-2xl absolute top-4'/>
                        <input className='w-[100%] h-full border-b border-gray-400 p-2 pl-10 bg-transparent' type="text" placeholder="Phone" />
                    </div>
                    <div class="input-container w-[48%] h-14 mt-2">
                        <HiOutlineExclamationCircle className='text-2xl absolute top-4 rotate-180'/>
                        <input className='w-[100%] h-full border-b border-gray-400 p-2 pl-10 bg-transparent' type="text" placeholder="Subject" />
                    </div>
                    <div class="input-container w-[100%] h-28 mt-2">
                    
                        <TbPencilExclamation className='text-2xl absolute top-12'/>
                        <input className='w-[100%] h-full border-b border-gray-400 p-3 pl-10 bg-transparent' type="text" placeholder='How can we help you? Feel free to get in touch!'/>
                    </div>
                    <div className='flex gap-8 items-center mt-8'>
                        
                        <button className='bg-[#E62E54]  rounded-full border-none pl-10 pr-10 pt-4 pb-4 text-white whitespace-nowrap hover:bg-red-500 relative'>
                        <TbLocationShare className='text-2xl absolute left-2 top-4'/>
                            Get In Touch
                            </button>
                        <p className='text-gray-500'>
                            <input type="checkbox" className='mr-2'/>
                            I agree that my data is 
                            <a href="" className='underline hover:text-black'> collected and stored.</a>
                        </p>
                    </div>
                </form>
            </div>
            </div>
            <div className="bottom h-[20vh] flex">
                <img className='w-44 opacity-30 transition-all duration-500 hover:opacity-100' src="image/partner-1-copyright.png" alt="" />
                <img className='w-44 opacity-30 transition-all duration-500 hover:opacity-100' src="image/partner-2-copyright.png" alt="" />
                <img className='w-44 opacity-30 transition-all duration-500 hover:opacity-100' src="image/partner-3-copyright.png" alt="" />
                <img className='w-44 opacity-30 transition-all duration-500 hover:opacity-100' src="image/partner-4-copyright.png" alt="" />
                <img className='w-44 opacity-30 transition-all duration-500 hover:opacity-100' src="image/partner-5-copyright.png" alt="" />
                <img className='w-44 opacity-30 transition-all duration-500 hover:opacity-100' src="image/partner-6-copyright.png" alt="" />
            </div>
        </div>

        <Footer/>
      </main>
    </div>
  )
}

export default Contact
