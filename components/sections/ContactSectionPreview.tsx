'use client'
import React from 'react'
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import Link from 'next/link';
import {motion} from "framer-motion";

const ContactSectionPreview = () => {
  return (
    <motion.div
    initial ={{ opacity: 0.5, scale: 0.5 }}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 0.5, delay: 0.5 }}
    viewport={{once: true }}
    className="max-w-screen-xl mx-auto p-4 mt-20 lg:mt-40">
      <div className="flex flex-col gap-5 text-center">
        <h1 className='text-3xl lg:text-8xl font-bold dark:text-[#fffff4]'>Code with Confidence, Connect with Ease: <br/>
        Your Vision, My Expertise</h1>
        <p className='text-lg lg:text-4xl font-normal dark:text-[#fffff4]'>Let&apos;s Build Something Extraordinary!</p>

        <div className='items-center justify-center mt-2 md:mt-4 overflow-y-hidden'>
          <Link href='/contact'><button className='flex items-center button text-lg md:text-2xl lg:text-3xl'>CONTACT ME<ArrowOutwardSharpIcon className=" text-2xl md:text-4xl lg:text-5xl" /></button></Link>
        </div>

      </div>
    </motion.div>
  )
}

export default ContactSectionPreview
