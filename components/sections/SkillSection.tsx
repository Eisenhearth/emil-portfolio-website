import React from 'react'
import { SkillsDetails } from '@/app/constant/SkillsDetails'


const SkillSection = () => {
  return (
    <div>
      <div
      
      className='max-w-screen-xl mx-auto px-4 my-36'>
        <div className="flex flex-col">
            <h1 className="font-Oswald text-7xl md:text-5xl uppercase font-bold dark:text-[#fffff4]">My Digital Toolbox</h1>
            <div className="flex mt-10 gap-2 flex-wrap justify-normal">
                {SkillsDetails.map((skills) => (
                    <p key={skills.id} className='font-Condensed font-normal dark:text-[#fffff4] text-xl md:text-2xl border-2 rounded-full py-3 md:py-4 px-6 md:px-8 border-black dark:border-[#fffff4] hover:dark:bg-[#fffff4] hover:bg-black hover:text-white hover:dark:text-[#121212] transition duration-700'>{skills.skills}</p>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
