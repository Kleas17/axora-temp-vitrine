import { Suspense } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import SaaSSection from '@/components/sections/SaaSSection'
import RealisationsSection from '@/components/sections/RealisationsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense>
        <SocialProofSection />
        <ExpertiseSection />
        <SaaSSection />
        <RealisationsSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </Suspense>
    </>
  )
}
