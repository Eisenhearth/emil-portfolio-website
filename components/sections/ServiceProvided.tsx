import { motion } from 'framer-motion'
import React from 'react'

const ServiceProvided = () => {
  return (
    <div>
      <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', y: { duration: 6} }}
      viewport={{ once: true }} 
      
      className='max-w-screen-xl mx-auto px-4 my-28'>
        <div className='flex gap-7 flex-col md:flex-row text-start'>
            <div className='container flex flex-col gap-2'>
                <h1 className='font-Oswald text-7xl md:text-8xl uppercase font-bold dark:text-[#fffff4]'>My Expertise</h1>
                <p className='font-Condensed text-base md:text-lg font-medium uppercase dark:text-[#fffff4]'>I specialize in design and web services, aiming to create <br/> a powerful and uplifting digital experience for everyone.</p>
            </div>
            <div className='container flex flex-col gap-2 md:gap-4 dark:text-[#fffff4]'>
                <p className='font-Oswald uppercase font-bold text-5xl md:text-6xl lg:text-8xl'>Web Development*</p>
                <p className='font-Oswald uppercase font-bold text-5xl md:text-6xl lg:text-8xl'>Graphics Design*</p>
                <p className='font-Oswald uppercase font-bold text-5xl md:text-6xl lg:text-8xl'>UI/UX Design*</p>
                <p className='font-Oswald uppercase font-bold text-5xl md:text-6xl lg:text-8xl'>Branding*</p>
                <p className='font-Oswald uppercase font-bold text-5xl md:text-6xl lg:text-8xl'>Advertising*</p>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceProvided
