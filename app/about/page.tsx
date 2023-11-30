
import ContactSectionPreview from '@/components/sections/ContactSectionPreview'
import IntroductionMyself from '@/components/sections/IntroductionMyself'
import MyselfSection from '@/components/sections/MyselfHeroSection'
import ServiceProvided from '@/components/sections/ServiceProvided'
import SkillSection from '@/components/sections/SkillSection'
import React from 'react'

const aboutPage = () => {
  return (
    <div> 
      <MyselfSection />
      <IntroductionMyself />
      <ServiceProvided />
      <SkillSection />
      <ContactSectionPreview />
    </div>
  )
}

export default aboutPage