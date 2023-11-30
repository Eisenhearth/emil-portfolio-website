'use client'
import React from 'react'

const MyselfHeroSection = () => {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-28 md:my-0'>
        <div className='grid grid-col-2 grid-rows-2 mt-3'>
            <div className='col-span-2 px-3 md:px-0'>
                <p className='text-[150px] md:text-[280px] lg:text-[350px] font-Oswald font-black leading-[0.78] tracking-[.85] dark:text-[#fffff4]'>HELLO*</p>
            </div>
            <div className='col-span-2 lg:pl-60 px-3 md:px-0'>
                <p className='text-[150px] md:text-[280px] lg:text-[370px] font-Oswald font-black leading-[0.85] tracking-[.85] dark:text-[#fffff4]'>AGAIN.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyselfHeroSection
