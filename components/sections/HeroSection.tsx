'use client';
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import React from 'react'
import BubbleText from '../BubbleText';
import Link from 'next/link';

const HeroSection = () => {

  return (
    <div className='max-w-screen-xl mx-auto z-10 py-10 md:py-0 my-10 md:my-0 md:mb-20'>
        <div className="grid grid-cols-5 gap-4  md:gap-0">
            <div className="col-span-5 md:col-span-3 px-4 md:px-0 order-1">
              <h1 className='font-Oswald font-black text-[110px] md:text-[250px] lg:text-[370px] leading-[0.78] md:tracking-[.85]'>EMIL</h1>
            </div>

            <div className="col-span-5 md:col-span-2 flex flex-col gap-5 justify-center order-3 md:order-2 md:order-0 px-4 md:px-0">
             <BubbleText />

              <div className="flex gap-6 text-xl lg:text-2xl font-black font-Condensed">
                <Link href='/about'><button className='flex items-center button'>KNOW ME MORE <ArrowOutwardSharpIcon /></button></Link>
                <button className='flex items-center button'>GET MY CV <ArrowOutwardSharpIcon /></button>
              </div>
            </div>

            <div className='col-span-5 order-2 md:order-3 px-4 md:px-0'>
              <h1 className='font-Oswald font-black text-[110px] md:text-[250px] lg:text-[370px] leading-[0.90] md:tracking-[-19.05px]'>MANDIA*</h1>
            </div>
        </div>
{/* 
        <div className="flex flex-col md:hidden p-4">
          <div className="mb-[33px]">
            <p className="text-8xl font-Oswald font-black  leading-none tracking-tight">EMIL</p>
            <p className="text-8xl font-Oswald font-black tracking-tight">MANDIA*</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-Condensed text-base font-normal uppercase tracking-wider leading-5">I'm a Web Developer<br/>
              and a Graphics Designer<br/>
              based in Philippines
            </p>
		
            <p className="font-Condensed text-base font-normal uppercase tracking-wider leading-5">
            focusing on creating <br/>
            good  quality but <br/>
            purposeful design* <br />
            </p>

            <div className="flex gap-8 text-lg font-black font-Condensed">
              <button className='flex items-center button'>KNOW ME MORE <ArrowOutwardSharpIcon /></button>
              <button className='flex items-center button'>GET MY CV <ArrowOutwardSharpIcon /></button>
            </div>
          </div>
        </div> */}
      </div>
  )
}

export default HeroSection