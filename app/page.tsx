import ContactSection from "@/components/sections/ContactSection";
import ContactSectionPreview from "@/components/sections/ContactSectionPreview";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import { ProjectSectionPreview } from "@/components/sections/ProjectSectionPreview";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProjectSectionPreview />
      <MarqueeSection />
      <ContactSectionPreview />
    </div>
      
  )
}
