import React from 'react'
import "../index.css"
import { FaArrowRight } from "react-icons/fa6";
import { DiAngularSimple } from "react-icons/di";
const Card = () => {
  return (
    <div>
        <main id='card' className='w-[80%] h-[60vh] mx-auto rounded-xl flex justify-center bg-white pt-2 pb-2'>
            <div className='w-[33%] h-full bg-white flex flex-col items-center justify-center'>
                <DiAngularSimple className='text-7xl'/>
                <h1 className='text-3xl text-center'>Web Design & Development</h1>
                <p className='text-1xl text-center w-[80%] mt-4 mb-4'>Lucid Web is a client-driven, customer-oriented service that excels in developing website solutions that yield measurable outcome.</p>
                <button id='card_btn' className='relative'><h2>Read More</h2> <FaArrowRight className='absolute right-0'/></button>
            </div>
            <div className='w-[33%] h-full bg-white flex flex-col items-center justify-center border-l border-r border-gray-300'>
            <DiAngularSimple className='text-7xl'/>
                <h1 className='text-3xl text-center'>Web Design & Development</h1>
                <p className='text-1xl text-center w-[80%] mt-4 mb-4'>Lucid Web is a client-driven, customer-oriented service that excels in developing website solutions that yield measurable outcome.</p>
                <button id='card_btn' className='relative'><h2>Read More</h2> <FaArrowRight className='absolute right-0'/></button>
            </div>
            <div className='w-[33%] h-full bg-white flex flex-col items-center justify-center'>
            <DiAngularSimple className='text-7xl'/>
                <h1 className='text-3xl text-center'>Web Design & Development</h1>
                <p className='text-1xl text-center w-[80%] mt-4 mb-4'>Lucid Web is a client-driven, customer-oriented service that excels in developing website solutions that yield measurable outcome.</p>
                <button id='card_btn' className='relative'><h2>Read More</h2> <FaArrowRight className='absolute right-0'/></button>
            </div>
        </main>
    </div>
  )
}

export default Card
