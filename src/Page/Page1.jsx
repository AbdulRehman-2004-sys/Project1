import React, { useRef } from 'react'
import Card_main from '../components/Card_main'
import "../index.css"

const Page1 = () => {
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
      <main className='w-full h-[100vh] absolute top-[100%] z-[100] 'onMouseMove={(e)=>handleMouse(e)} onMouseLeave={(e)=>handleMouseLeave(e)}>
      <div id='ball' ref={ball} className="w-4 h-4 rounded-full z-[150] bg-black opacity-0"></div>
        <Card_main/>
      </main>
    </div>
  )
}

export default Page1
