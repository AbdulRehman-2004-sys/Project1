import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Footer = () => {

    const ball = useRef(null);
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

  return (
    <div>
      <div className="w-full h-screen bg-[#0C0833] text-gray-300 flex flex-col relative">
      <div ref={ball}  className='ball w-2 h-2 bg-white z-50 rounded-full absolute top-[-2%] '></div>
<img className='absolute top-[-5%]' src="image/wave.svg" alt="" />

    <div className='mt-44 w-[80%] mx-auto flex gap-16'>
        <div className='w-[30%]'>
            <h2 className='text-xl text-white font-bold'>office</h2>
            <p className='mt-6 mb-8 w-20'>Canada —
            45 Overlea Blvd.
            Toronto, ON
            M4H 1C3</p>
            <p>
                Pakistan —
                Fortune Tower Shahrah-E-Faisal Road Karachi
            </p>
            <div className='group mt-4 footer-line-box overflow-hidden'>
                <h2 className='text-gray-300 group-hover:text-white'>info@lucidweb.co</h2>
                <div className="underline w-32 border border-gray-300 mt-2 group-hover:translate-x-[-100%]"></div>
            </div>
        </div>
        <div className='w-[30%]'>
            <h2 className='text-xl text-white font-bold mb-6'>Links</h2>
            <h2>Home</h2>
            <h2 className='mt-4 mb-4'>About Us</h2>
            <h2>Contacts</h2>
        </div>
        <div className='w-[30%]'>
            <h2 className='text-xl text-white font-bold'>Socials</h2>
        </div>
        <div className='w-[30%]'>
            <h2 className='text-xl text-white font-bold mb-6'>Newsletter</h2>

            <div className='flex items-center relative'>
                <AiOutlineMail className='text-md absolute left-2'/>
                <input className='w-[80%] h-12 pl-8 border-none outline-none bg-[#221F46] rounded-full' type="Email" placeholder="Enter Your Email..." />
                <button className='w-12 h-12 rounded-full bg-[#E62E54] text-white flex items-center justify-center'>
                    <FaArrowRightLong className='text-2xl'/>
                </button>
            </div>
            <div className='mt-2'>
                <input type='checkbox'/> I agree to the <a href="" className='underline hover:text-white'>Privacy Policy</a>
            </div>
        </div>
    </div>

    <div className='w-[80%] mx-auto mt-6 flex items-center pt-8 border-t border-gray-300'>
        <h1>Lucid Web © 2025. All Rights Reserved.</h1>
    </div>

</div>
    </div>
  )
}

export default Footer
