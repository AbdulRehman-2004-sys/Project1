import React, { useRef } from 'react'
import "../index.css";

const Hero = () => {
  const ball = useRef(null);
  const handleMouse=(e)=>
  {
    ball.current.style.left = e.clientX + "px";
    ball.current.style.top = e.clientY + "px";
    ball.current.style.opacity = 1;
  }
  const handleMouseLeave=()=>
    {
      ball.current.style.opacity = 0;
    }
  return (
    <div>
      <main className='w-full h-[125vh] absolute top-0 left-0 flex flex-col justify-center items-center overflow-hidden' onMouseMove={(e)=>handleMouse(e)} onMouseLeave={(e)=>handleMouseLeave(e)}>
      <div id='ball' ref={ball} className="w-4 h-4 rounded-full z-[150] bg-white opacity-0"></div>

        <video loop autoPlay muted src="https://lucidweb.co/wp-content/uploads/2021/12/video-bg.mp4" className='absolute top-0 left-0'></video>
        <div className='w-full h-full bg-[rgba(0,0,0,0.4)] z-[50] text-white flex flex-col justify-center items-center relative'>
            <h1 className='text-7xl font-[QuickSand]'>At Lucid Web, You Can</h1>
            <h1 className='text-7xl font-[QuickSand]'>Expect Perfection</h1>
            <p className='text-1xl w-[30%] text-justify font-[QuickSand] mt-8 mb-2'>Our Team provides high-quality service to scale yourbusiness at every platform. We provide customized solution for diverse web products.</p>
            <button className='bg-[#936CFD]  rounded-full border-none pl-10 pr-10 pt-4 pb-4'>Discover Now</button>
        </div>
      </main>
    </div>
  )
}

export default Hero
