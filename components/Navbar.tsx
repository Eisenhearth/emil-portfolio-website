'use client';

import React from 'react'
import Image from 'next/image';
import logo from '@/public/assets/logo.png'


const Navbar = () => {
  return (
    <div>
        <nav className='max-w-screen-lg md:max-w-screen-xl h-[64px] flex items-center justify-between mx-auto py-2 px-2 md:px-0'>
          <Image className='object-cover h-12 md:h-14 w-auto ml-1 md:ml-0' src={logo} alt='' />

          <div className='flex md:hidden gap-6 mr-1 md:mr-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-auto">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-auto">
              <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="hidden md:flex">
              <ul className='flex gap-9 mx-auto items-center font-Condensed font-medium uppercase'>
                <li><a href="">Home</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
              </ul>
          </div>

        </nav>
    </div>
  )
}

export default Navbar