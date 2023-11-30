'use client'
import React, {useState } from 'react'
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';


const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to your Next.js API route
      const response = await fetch('/api/SendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        // Optionally, you can handle success or show a success message to the user
        console.log('Email sent successfully!');
      } else {
        // Handle errors, you can show an error message to the user
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <div className='grid max-w-screen-xl mx-auto grid-cols-1 md:grid-cols-2 py-10 px-4 md:py-12 gap-10 md:gap-0'>
            <div className='font-Oswald text-3xl md:text-6xl lg:text-[76px] leading-none uppercase col-span-1 dark:text-[#fffff4]'>
                <p className='hidden md:block'>Got <span className='font-extrabold'>Ideas</span> or <br/> <span className='font-extrabold'>Projects</span> on <br/>your mind? <br/>
                <span className='font-extrabold'>fill up the</span> <br/><span className='font-extrabold'>form</span> and <br/>I’ll get to you<br/> quickly. <br/><span className='font-extrabold'>ASAP</span>.</p>
                <p className='block md:hidden'>Got <span className='font-extrabold'>Ideas</span> or <span className='font-extrabold'>Projects</span> on <br/>your mind?
                <span className='font-extrabold'> Fill up the</span> <span className='font-extrabold'>form</span> and <br/> I’ll get to you quickly.<span className='font-extrabold'> ASAP</span>.</p>
            </div>
            <form className='col-span-1' onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label htmlFor="fullName" className="block mb-2 text-xl font-medium text-black dark:text-[#fffff4] leading-6 font-Condense uppercase tracking-6">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className='block w-full  bg-[#fffff4] dark:dark:bg-[#282828] border-solid border-2 h-[50px] border-black dark:border-[#fffff4] dark:text-[#fffff4] text-black p-2 rounded-none' />
                </div>
                <div className='mb-5'>
                    <label htmlFor="Email" className="block mb-2 text-xl font-medium text-black dark:text-[#fffff4]  leading-6 font-Condense uppercase tracking-6">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className='block w-full bg-[#fffff4] dark:dark:bg-[#282828] border-solid border-2 h-[50px] border-black dark:border-[#fffff4] dark:text-[#fffff4] text-black p-2 rounded-none' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="message" className="block mb-2 text-xl font-medium text-black dark:text-[#fffff4]  leading-6 font-Condense uppercase tracking-6">tELL ME ABOUT YOU AND YOUR PROJECT!</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='block w-full bg-[#fffff4] dark:dark:bg-[#282828] border-solid border-2 border-black dark:border-[#fffff4]  h-44 md:h-64 dark:text-[#fffff4] text-black p-2 rounded-none' />
                </div>

                <div className='flex justify-center'>
                    <button type='submit' className='flex items-center button text-2xl'>SEND<ArrowOutwardSharpIcon className='text-2xl' /></button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default ContactSection
