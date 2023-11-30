import React from 'react'
import myPhoto from '@/public/images/mypic.png'
import Image from 'next/image'

const IntroductionMyself = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 my-32 md:my-36">
            <div className='grid grid-cols-4 gap-7 justify-items-center md:justify-normal'>
                <div className='col-span-4 md:col-span-1'>
                    <Image src={myPhoto} alt="my-picture" className="justify-center w-72 md:w-96"/>
                </div>
                <div className='col-span-4 md:col-span-3 py-2 lg:py-5 md:ml-10'>
                    <p className='font-Oswald uppercase md:text-6xl hover:text-zinc-600 transition duration-700 hidden md:block'>
                       Booh! I'm <span className='font-bold'>Emil John Mandia</span>,<br/> 
                        You can call me <span className='font-bold'>EJ</span>, FR FR! <br/>
                        I'm A <span className="font-bold">FRONTEND DEVELOPER</span> <br/> 
                        AND A <span className="font-bold">GRAPHICS DESIGNER</span>. <br/> 
                        I HAVE LOVE & HATE RELATIONSHIP WITH <span className="font-bold">DESIGNS</span>
                      </p>

                    <p className='font-Oswald uppercase text-4xl hover:text-zinc-600 transition duration-700 block md:hidden text-center'>
                       Booh! I'm <span className='font-bold'>Emil John Mandia</span>,
                        You can call me <span className='font-bold'>EJ</span>, FR FR! 
                        I'm A <span className="font-bold">FRONTEND DEVELOPER</span>  
                        AND A <span className="font-bold">GRAPHICS DESIGNER</span>.  
                        I HAVE LOVE & HATE RELATIONSHIP WITH <span className="font-bold">DESIGNS</span>
                    </p>
                    
                </div>
            </div>
      </div>
    </div>
  )
}

export default IntroductionMyself
